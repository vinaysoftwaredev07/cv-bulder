const mongoose= require('mongoose');
const  paymentSchema=new mongoose.Schema(
    {
        amount:
        {
            type: String,
            required: true,
            trim: true
        },
        purpose:
        {
            type: String,
            required: false,
            trim: true,
        },
        status:
        {
            type: String,
            required: true,
        },
        userId:
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User',
            required: true
        },
        cvId:
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'UserResumeData',
            required: true
        }
    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model('Payment',paymentSchema)