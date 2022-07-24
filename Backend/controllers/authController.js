const User= require('../models/userModel')
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken')

const userController ={
    register: async (req,res) =>{
        try{
            const {username, email, phone, password} = req.body;

            let user;
            if(email){
                user = await User.findOne({email});
            }else if(username){
                user = await User.findOne({username});
            }

            if(user) return res.status(400).json({message: "This Email ID already exists"})

            if(password.length < 6) 
            return res.status(400).json({message: "Password Should be atleast 6 Characters"})

            //password encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new User({
                username,
                email,
                phone,
                password:passwordHash
            }) 

            await newUser.save()

        //jsonwebtoken to authenicate

        const accesstoken=  createAccessToken({id: newUser._id})
        const refreshtoken=  createRefreshToken({id: newUser._id})

        res.cookie('refreshtoken', refreshtoken,{
            httpOnly: true,
            path: '/user/refresh_token'
        })
        //res.json({message: "Registered  Successfully"})
        // res.json({password, passwordHash})
        res.json({accesstoken})

        }catch(err){
            console.log(err);
           return  res.status(500).json({message: err.message})
        }
        
    },
    refreshToken: (req,res)=>{
        try{
         
           const rf_token = req.cookies.refreshtoken;
        
        if(!rf_token) return res.status(400).json({msg: "Please login or register"})
        
        jwt.verify(rf_token, process.env.REFRESH_TOKEN, (err, user)=>{
         
            if(err) return  res.status(400).json({msg: "Please login or register"})
         
            const accesstoken= createAccessToken({id: user.id})  
         
            res.json({accesstoken}) 
        })
        
        }catch(err){
            return  res.status(500).json({message: err.message})
        }
    },
    login: async (req,res)=>{
        try{
            const {email, username, password} = req.body

            let user;
            let select = {
                email: 1, 
                username: 1,
                phone: 1,
                password: 1
            }
            if(email){
                user = await User.findOne({email}. select);
            }else if(username){
                user = await User.findOne({username}, select);
            }

            if(!user) return res.status(400).json({msg: "User doesnot exit"})

            const isMatch = await bcrypt.compare(password,user.password)

            if(!isMatch) return res.status(400).json({msg: "Incorrect Password"})
            
            const accesstoken=  createAccessToken({id: user._id})
            const refreshtoken=  createRefreshToken({id: user._id})
    
            res.cookie('refreshtoken', refreshtoken,{
                httpOnly: true,
                path: '/user/refresh_token'
            })
            user.password = undefined;
            res.json({token: accesstoken, user})

        }catch(err){
            return  res.status(500).json({message: err.message})
        }
    },

    logout: async(req,res)=>{
        try{
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({message: "Logged Out"})
        }catch(err){
            return  res.status(500).json({message: err.message})
        }
    },
    getUser: async(req,res)=>{
        try{
            const user= await User.findById(req.user.id) //user Id to find the concerned person
            if(!user) return res.status(400).json({msg: "User doesnot exit"})
            res.json(user)
        }catch(err){
            return  res.status(500).json({message: err.message})
        }
    },
    socialLogin: async(req, res) => {
        try{
            
        }catch(err){
            console.log(err);
        }
    }

}

const createAccessToken=(user)=>{
        return jwt.sign(user,process.env.ACCESS_TOKEN, {expiresIn: '1d'})
}

const createRefreshToken=(user)=>{
    return jwt.sign(user,process.env.REFRESH_TOKEN, {expiresIn: '7d'})
}


module.exports = userController