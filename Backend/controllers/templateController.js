const Template= require('../models/templateModel');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken')

const userController ={
    getTemplate: async (req,res) =>{
        try{
            
            const template = await Template.find({ isDeleted: false });
            res.json({template});

        }catch(err){
            console.log(err);
           return  res.status(500).json({message: err.message})
        }
        
    },

}



module.exports = userController