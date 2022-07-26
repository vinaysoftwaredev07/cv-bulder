const mongoose= require('mongoose')
const  templateSchema=new mongoose.Schema(
    {
        template_name:
        {
            type: String,
            required: true,
            trim: true
        },
        template_type:
        {
            type: String,
            required: false,
            trim: true,
        },
    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model('Template',templateSchema)