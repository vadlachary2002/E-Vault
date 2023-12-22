const config = require("../config/config");
const moment = require("moment");
const { userService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const register = catchAsync (async (req,res)=>{
  const userBody =  JSON.parse(req.body.body);
  console.log("came",req.file);
  userBody.profileImage = (req.file?'./uploads/'+req.file.filename:"xyz.jpg");
  const { code, info } = await userService.register(userBody);
  console.log(code,info);
  res.status(code).json(info);
})
const login = catchAsync (async(req,res)=>{
  const { code, info } = await userService.login(req.body);
  const options = {
    expires: new Date(moment (Date.now()).add(config.tokenExpiryDays,'days')),
    httpOnly: false,
    secure: false,
  }
  const { email, token } =  info;
  res
    .cookie('email',email,{httpOnly:true})
    .cookie('jwtoken',token,{httpOnly:false});
  res.status(code).json(info);
})

const logout = catchAsync(async(req,res)=>{
  const { jwtoken, email } = req.cookies;
  const { code, info} =  await userService.logout(email);
  email && res.clearCookie('email',{path:'/'});
  jwtoken && res.clearCookie('jwtoken',{path:'/'});
  res.status(code).json(info);
})

const updatePassword = catchAsync(async(req,res)=>{
  const { code, info } =  await userService.updatePassword(req.body);
  res.status(code).json(info);
})

module.exports = { register, login, updatePassword, logout }