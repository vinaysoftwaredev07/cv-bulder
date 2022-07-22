require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserResumeData = require("./models/userResumeSchema.js");
const cookieParser= require("cookie-parser")
const path=require('path')
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors());


//connect to Mongo_Db
const URI=process.env.MONGODB_URL
mongoose.connect(URI,err=>
 {
        if(err)
        throw err;
        console.log("connect to mongodb")
    })

//Routers
app.use('/user',require("./routes/userRouter"))

// set the data to DB
app.post("/api", async (req, res) => {
  const data = await UserResumeData.create(req.body);
  res.send({ success: true, resumeData: data });
});

app.get("/api/:id", async (req, res) => {
  const data = await UserResumeData.findById(req.params.id);
  res.send({ success: true, resumeData: data });
});

const PORT = process.env.PORT || 5000

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('cilent/build'))
  const path=require('path')
  app.get("*",(req,res) =>{
      res.sendFile(path.join(__dirname,'cilent','build','index.html'))
  })
}


app.listen(PORT,()=>
    {
        console.log("Server  Listening")
    })