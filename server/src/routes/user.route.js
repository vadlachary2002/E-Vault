const express = require('express');
const { userController, adminController } = require('../controllers');
const authenticate = require('../middlewares/authenticate');
const { User } = require('../models');
const { upload } = require('../controllers/image.controller');

const router = express.Router();

router
  .route('/') 
  .get(async (req,res)=>{
    const users =  await User.find();
    res.status(200).json(users);
  })

router
  .route('/register')
  .post(upload.single('image'),userController.register);

router
  .route('/login')
  .post(userController.login);  


router
  .route('/logout')
  .post(userController.logout);

router
  .route('/activate')
  .post(authenticate,adminController.resumeAccount);                       // ok     private     admin
router
  .route('/reset')
  .post(authenticate,adminController.resetStaffPassword);                  // ok     private     admin

router
  .route('/updatepassword')
  .post(authenticate, userController.updatePassword);                     // ok    private     staff

module.exports = router ;