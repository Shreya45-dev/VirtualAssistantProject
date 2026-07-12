const userModel = require("../models/user.model")

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken')

//const storageService=require('../services/storage.service')





// ====================== USER REGISTER ======================
async function registerUser(req, res) {
    const { author_name, email, password } = req.body
    console.log(author_name)
    const isUserAlreadyExist = await userModel.findOne({ email })

    if (isUserAlreadyExist) {
        return res.status(400).json({
            message: "User already exists"
        })
    }
    if(!author_name || !email ||  !password ){
        return res.status(400).json({
            message:"All fields are required"
        })
    }
    
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
        author_name,
        email,
        password: hashedPassword,
        
    })

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET
    )

    res.cookie("token", token{
    httpOnly: true,
        secure: true,
        sameSite: "None"
    })

    return res.status(201).json({
        message: "User registered successfully",
        user: {
            _id: user._id,
            email: user.email,
            author_name: user.author_name,
            
        }
    })
}
async function addphoto(req,res){
    const {assistantphoto}=req.body
    const user=await userModel.findById(req.user._id)
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }
    user.assistantphoto=assistantphoto
    await user.save()
    return res.status(200).json({
        message:"Photo added successfully",
        user
    })
}
async function addAssistantName(req,res){
    const {assistantName}=req.body
    const user=await userModel.findById(req.user._id)
    user.assistantname=assistantName
    await user.save();
    return res.status(200).json({
        message:"assistant name added successfully",
        user
    })
    
}





async function loginUser(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET
    )

    res.cookie("token", token{
        httpOnly: true,
        secure: true,
        sameSite: "None"
   })

    return res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: user._id,
            email: user.email,
            author_name: user.author_name,
            assistantname: user.assistantname,
            assistantphoto:user.assistantphoto
        },
        token
    })
}




function logoutUser(req, res) {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "None"
    });

    return res.status(200).json({
        message: "User logged out successfully"
    })
}


module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    addphoto,
    addAssistantName,
   
}


