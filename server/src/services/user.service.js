const config = require("../config/config");
const { User, Account } = require("../models")
const bcryptjs = require('bcryptjs');
const jwt  = require("jsonwebtoken");
const { createAccount } = require("./account.service");

const register = async (userBody)=>{
  const { email, password } =  userBody;
  const isEmailExist = await User.isEmailTaken(email);
  if(isEmailExist){
    return {
      code:401,
      info:{
        message:"Email already exist",
      },
    }
  }
  const hashedPassword = await bcryptjs.hash(password,10);
  userBody.password =  hashedPassword;
  const user = await User.create(userBody);
  if(!user){
    return {
      code:400,
      info:{
        message:"Something went wrong",
      }
    }
  }
  console.log("created",user);
  return {
    code:200,
    info:{
      message:"User Node Created Succesfully",
    }
  }

}
const logout =  async (email)=>{
  const exsistingUser = await User.findOne({email});
  if(!exsistingUser){
    return {
      code:401,
      info:{
        message:"User does not exist",
      }
    }
  }
  exsistingUser.online = false;
  await exsistingUser.save();
  return {
    code:200,
    info:{
      message:"User logged out"
    }
  }
}
const login =  async (userBody)=>{
  const { email, password } = userBody;
  const exsistingUser = await User.findOne({email});
  console.log(userBody,exsistingUser);
  if(!exsistingUser){
    return {
      code:401,
      info:{
        message:"User does not exist",
      }
    }
  }
  console.log()
  const validatePassword = await bcryptjs.compare( password, exsistingUser.password);
  console.log(validatePassword);
  if(!validatePassword){
    return {
      code:400,
      info:{
        message:"Incorrect password"
      }
     };
  }
  const isAdmin =  await User.isAdmin(exsistingUser.email);
  const token = jwt.sign({email : exsistingUser.email },config.jwtkey);
  exsistingUser.online =  true;
  await exsistingUser.save();
  return {
    code:200,
    info:{
      message:"Successfully Logged In",
      isAdmin,
      email:exsistingUser.email,
      token
    }
  }
}

const signup = async (userBody)=>{
  const { name, email , designation} = userBody;
  const isEmailExist = await User.isEmailTaken(email);
  if(isEmailExist){
    return {
      code:401,
      info:{
        message:"Email already exist",
      },
    }
  }
  console.log(config.defaultPassword);

  const hashedPassword = await bcryptjs.hash(config.defaultPassword,10);
  let lastUser;
  let nid;
  try{
    lastUser =  await User.find().sort({staffId:-1}).limit(1);
    console.log(lastUser);
    nid=lastUser[0].staffId+1;
  }catch(e){
    nid=10;
  }
  console.log(nid);
  const newStaffId =  "RGUCSE-"+nid;
  const updatedUserBody = {
    name:name,
    email:email,
    staffId:nid,
    password:hashedPassword,
    designation:designation,
  }
  const user = await User.create(updatedUserBody);
  const account =  await createAccount({
    email:email,
    name:name,
    designation:designation
  })
  if(!user || !account){
    return {
      code:400,
      info:{
        message:"Something went wrong",
      }
    }
  }
  return {
    code:200,
    info:{
      message:"Staff Created Succesfully",
    }
  }
}


const updatePassword = async(userBody)=>{
  const { email, oldPassword, newPassword } =  userBody;
  const exsistingUser = await User.getUser(email);
  if(!exsistingUser){
    return {
      code:401,
      info:{
        message:"User Does Not Exist",
      }
    }
  }
  const matchPassword = await bcryptjs.compare(oldPassword,exsistingUser.password);
  if(!matchPassword){
    return {
      code:400,
      info:{
        message:"Incorrect password"
      }
     };
  }
  const hashedPassword = await bcryptjs.hash(newPassword,10);
  const updatedUser = await User.updateOne({email},{$set:{password:hashedPassword}});
  if(!updatedUser){
    return {
      code:400,
      info:{
        message:"Something went wrong",
      }
    }
  }
  return {
    code:200,
    info:{
      message:"Updated password succesfully",
    }
  }


}
const getUsers =  async ()=>{
  const users = await User.find();
  return {code:200,info:{users}};
}

const removeUser = async(email)=>{
  await User.deleteOne({email});
  await Account.deleteOne({email});
  return {
    code:200,
    info:{
      message:"Removed Staff "+email+" successfully"
    }
  }
}
const pauseAccount =  async(email)=>{
  const pausedAccount =  await User.updateOne({email},{$set:{active:false}});
  if(!pausedAccount){
    return {
      code:400,
      info:{
        message:"Something went wrong"
      }
    }
  }
  return {
    code:200,
    info:{
      message:"Account paused successfully"
    }
  }
}

const resumeAccount =  async(email)=>{
  const resumedAccount =  await User.updateOne({email},{$set:{active:true}});
  if(!resumedAccount){
    return {
      code:400,
      info:{
        message:"Something went wrong"
      }
    }
  }
  return {
    code:200,
    info:{
      message:"Account activated successfully"
    }
  }
}

const resetStaffPassword =  async(email)=>{
  const hashedPassword = await bcryptjs.hash(config.defaultPassword,10);
  const updatedUser = await User.updateOne({email},{$set:{password:hashedPassword}});
  if(!updatedUser){
    return {
      code:400,
      info:{
        message:"Something went wrong"
      }
    }
  }
  return {
    code:200,
    info:{
      message:"Password reseted successfully"
    }
  }
}

module.exports = { register, logout,signup ,login, getUsers, updatePassword, removeUser, pauseAccount, resumeAccount, resetStaffPassword}