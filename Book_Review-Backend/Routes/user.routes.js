const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const user = require('../Models/userModel')



router.post('/register',async(req,res)=>{
    // console.log(req.body)
    const{firstName, lastName,email,password} =req.body
    try {
        const existedUser = await user.findOne({email})
        if(existedUser){
            return res.status(409).json({message: 'user alreay existed, please try with new mail id'})
        }

        const hashPass = await bcrypt.hash(password, 10)

        const newUser = new user({firstName,lastName,email,password:hashPass})
        await newUser.save()

        return res.status(201).json({status: "success" ,message: 'user registered successfully'})


    } catch (error) {
        return res.status(500).json({register_error: error.message})
    }
})



router.post('/login', async(req,res)=>{
    console.log(req.body)
    const {email, password} = req.body
    try {
        const userExist = await user.findOne({email})
        if(!userExist){
            return res.status(404).json({message:'Invalid Email id and password'})
        }

        const pass = await bcrypt.compare(password, userExist.password)

        if(!pass){
            return res.status(401).json({message:'Invalid Credential'})
        }

        const token = await jwt.sign({userId:userExist._id, role:userExist.role}, process.env.SECRET_KEY, {expiresIn:'1h'})

        return res.status(200).json({message: "login Successfully", token})

    } catch (error) {
        return res.status(500).json({Login_error : error})
    }
})



router.get('/info', async(req,res)=>{
    const {_id} = req.query
    try{
        const userinfo = await user.findOne({_id})
        if(!userinfo){
            return res.status(404).json({message:"User Not Found"})
        }

        return res.status(200).json(userinfo)
    }
    catch(error){
        return res.status(500).json({userInfo : error.message})
    }
})



module.exports = router