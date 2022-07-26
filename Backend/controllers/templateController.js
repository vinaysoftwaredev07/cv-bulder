const { cvDataValidation } = require('../helpers/validationhelper');
const Template= require('../models/templateModel');
const UserResumeSchema = require('../models/userResumeSchema');

const templateController ={
    getTemplate: async (req,res) =>{
        try{
            
            const template = await Template.find({ isDeleted: false });
            res.json({template});

        }catch(err){
            console.log(err);
           return  res.status(500).json({message: err.message})
        }
        
    },
    saveCVData: async (req, res) => {
        try{
            console.log(req.user);
            // validation
            const cvCreateData = {
                personalDetails : req.body?.personalDetails,
                educationalCount: req.body?.educationalCount,
                educationalDetails: req.body?.educationalDetails,
                educationTemplate: req.body?.educationTemplate,
                projectCount: req.body?.projectCount,
                projectDetails: req.body?.projectDetails,
                projectTemplate: req.body?.projectTemplate,
                employementCount: req.body?.employementCount,
                employementDetails: req.body?.employementDetails,
                employementTemplate: req.body?.employementTemplate,
                cvType: req.body?.cvType,
                userId: req?.user?._id
            }
            console.log(cvCreateData);
            const validate = cvDataValidation(cvCreateData);
            if(!validate.isValid){
                throw new Error(validate.message);
            }
            const cvData = await UserResumeSchema.create(cvCreateData);
            res.json({ status: 200, cvId: cvData._id });
        }catch(err){
            console.log(err);
            return  res.json({ status: 500, message: err.message})
        }
    },
    editCVData: async (req, res) => {
        try{
            const bodyParam = req.body;
            // validation
            const cvUpdateData = {
                personalDetails : bodyParam.data,
                educationalCount: bodyParam.eduCount,
                educationalDetails: bodyParam.education,
                projectCount: bodyParam.projectCount,
                projectDetails: bodyParam.project,
                employementCount: bodyParam.empCount,
                employementDetails: bodyParam.employment,
                cvType: req.body?.cvType,
                userId: req.user._id
            }
            const validate = cvDataValidation(cvUpdateData);
            if(!validate.isValid){
                throw new Error(validate.message);
            }
            const cvData = await UserResumeSchema.findOneAndUpdate(
                { _id: req.params.cv_id },
                cvUpdateData,
                {new: true, upsert:true}
            );
            res.json({ status: 200, cvId: cvData._id });
        }catch(err){
            console.log(err);
            return  res.json({ status: 500, message: err.message});
        }
    },
    getCVData: async (req, res) => {
        try{
            const cvData = await UserResumeSchema.find(
                {
                    userId: req.user._id, 
                    isDeleted: false 
                }
            ).sort({_id: -1});
            res.json({ status: 200, cvData });
        }catch(err){
            console.log(err);
            return  res.json({ status: 500, message: err.message});
        }
    },
    getCVDataById: async (req, res) => {
        try{
            const cvData = await UserResumeSchema.findOne(
                {
                    _id: req.params.cv_id,
                    userId: req.user._id, 
                    isDeleted: false 
                }
            );
            res.json({ status: 200, cvData });
        }catch(err){
            console.log(err);
            return  res.json({ status: 500, message: err.message});
        }
    },
    deleteCVData: async (req, res) => {
        try{
            const cvData = await UserResumeSchema.findOneAndUpdate(
                {
                    _id: req.params.cv_id,
                    userId: req.user._id, 
                    isDeleted: false 
                },
                {
                    isDeleted: true
                },
                { new: true }
            );
            res.json({ cvData });
        }catch(err){
            console.log(err);
            return  res.status(500).json({ message: err.message});
        }
    }

}



module.exports = templateController;