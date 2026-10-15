const express=require('express')
const router=express.Router()
const userController=require('../Controllers/userController')
const {validateUser}=require('../middlewares/userMiddleware')
router.get('/profile',userController.getProfile)
router.post('/register',userController.registerUser)




module.exports=router