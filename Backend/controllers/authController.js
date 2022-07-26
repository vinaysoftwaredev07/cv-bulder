const User= require('../models/userModel')
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken')

const userController ={
    register: async (req,res) =>{
        try{
            const {username, email, phone, password} = req.body;

            const user = await User.findOne({ $or: [{email}, {username: email} ] });

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
        newUser.password = undefined;
        const accesstoken=  createAccessToken(newUser)
        const refreshtoken=  createRefreshToken(newUser)

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
            
            user.password = undefined;
            user._doc = user;
            if(err) return  res.status(400).json({msg: "Please login or register"})
         
            const accesstoken= createAccessToken(user)  
         
            res.json({accesstoken}) 
        })
        
        }catch(err){
            return  res.status(500).json({message: err.message})
        }
    },
    login: async (req,res)=>{
        try{
            const {email, username, password} = req.body

            const user = await User.findOne({ $or: [{email}, {username: email} ] });
            
            if(!user) return res.status(400).json({msg: "User doesnot exit"})

            const isMatch = await bcrypt.compare(password,user.password)

            if(!isMatch) return res.status(400).json({msg: "Incorrect Password"})
            
            // const accesstoken=  createAccessToken({id: user._id})
            user.password = undefined;
            const accesstoken=  createAccessToken(user)
            // const refreshtoken=  createRefreshToken({id: user._id})
            const refreshtoken=  createRefreshToken(user)
    
            res.cookie('refreshtoken', refreshtoken,{
                httpOnly: true,
                path: '/user/refresh_token'
            })
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
            if(!user) return res.status(400).json({message: "User doesnot exit"})
            res.json(user)
        }catch(err){
            return  res.status(500).json({message: err.message})
        }
    },
    checkLoginStatus: (req, res) => {
        try{
            req.user.password = undefined;
            // authenticating user login status
            const accesstoken=  createAccessToken({user: req.user});
            const refreshtoken=  createRefreshToken({user: req.user});
    
            res.cookie('refreshtoken', refreshtoken,{
                httpOnly: true,
                path: '/user/refresh_token'
            })

            res.json({token: accesstoken, user: req.user})
        }catch(err){
            return  res.status(500).json({message: err.message});
        }
    },
    socialRegister: async(req, res) => {
        try{

            const { email } = req.body;
            const password = makePassword(8);
            const username = email.split('@')[0]+password;

            const user = await User.findOne({ $or: [{email}, {username: email} ] });

            console.log(user);

            if(user) return res.status(400).json({message: "This Email ID already exists"})

            if(password.length < 6) 
            return res.status(400).json({message: "Password Should be atleast 6 Characters"})

            //password encryption
            const phone = "";
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new User({
                username,
                email,
                phone,
                password:passwordHash
            }) 

            await newUser.save()

            //jsonwebtoken to authenicate
            newUser.password = undefined;
            const accesstoken=  createAccessToken(newUser)
            const refreshtoken=  createRefreshToken(newUser)

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
    }

}

const createAccessToken=(user)=>{
        return jwt.sign({...user._doc},process.env.ACCESS_TOKEN, {expiresIn: '1d'})
}

const createRefreshToken=(user)=>{
    return jwt.sign({...user._doc},process.env.REFRESH_TOKEN, {expiresIn: '7d'})
}

function makePassword(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
}


module.exports = userController