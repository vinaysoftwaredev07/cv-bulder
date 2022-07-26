const jwt =require('jsonwebtoken')

const auth = (req,res,next) =>{
    try{
        const token= req.header("Authorization")
        if(!token) return res.status(400).json({message: "Invalid Authentication"})

        jwt.verify(token, process.env.ACCESS_TOKEN, (err, user)=>{
            if(err) return res.status(400).json({message: "Invalid Authentication"});
            console.log(">>>>>>>>", token);
            console.log(">>>>>>>>", user);
            req.user = user;
            next();
        })
    }catch(err){
        return  res.status(500).json({message: err.message})
    }
}

module.exports = auth