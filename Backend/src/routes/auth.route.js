const express=require('express')


const authController=require("../controllers/auth.controller")
const userController=require("../controllers/user.controller")
const middleware=require("../middlewares/auth.middleware")
const router=express.Router();
router.post('/user/register',authController.registerUser)


router.post('/user/login',authController.loginUser)
router.post('/user/ask',middleware.authUserMiddleware,userController.askToAssistant)
router.get('/user/logout',middleware.authUserMiddleware,authController.logoutUser)
router.post('/user/addphoto',middleware.authUserMiddleware,authController.addphoto)
router.get('/allMessages',middleware.authUserMiddleware,userController.allMessages)
router.post('/assistantMessage',middleware.authUserMiddleware,userController.assistantMessage)
router.post('/assistantname',middleware.authUserMiddleware,authController.addAssistantName)
module.exports=router
