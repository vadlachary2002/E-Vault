const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
    online:{
      type:Boolean,
      default:false
    },
    userType:{
      type:String,
      required:true,
      enum:['Lawyer','Judge','Others'],
    },
    role:{
      type:String,
      default:"user",
    },
    gender:{
      type:String,
      enum:['Male','Female','Others']
    },
    mobile:{
      type:Number,
      required:true,
    },
    adhar:{
      type:Number,
      required:true,
    },
    profileImage:{
      type:String,
      default:"./uploads/default-profile.jpg"
    },
    privateKey:{
      type:String,
    }
  },
  {
    timestamps: true,
  }
);


userSchema.statics.isEmailTaken = async function (email) {
  const user = await this.findOne({email});
  return !!user;
};

userSchema.statics.getUser =  async function(email){
  const user = await this.findOne({email});
  return user;
}

userSchema.statics.isAdmin =  async function(email){
  const status = await this.findOne({'email':email,'role':'Admin'});
  return !!status;  
}

const User = mongoose.model('User', userSchema);

module.exports = User;
