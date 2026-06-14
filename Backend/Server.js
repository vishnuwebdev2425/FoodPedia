const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors = require("cors");
require("dotenv").config();
app.use(cors());
console.log('Working')
app.use(express.json());
const authrouter=require("./routes/authrouter")
const adminRouter = require('./routes/adminlogin');
const roomrouter=require("./routes/roomrouter");
app.use("/", authrouter);
app.use("/", adminRouter);
app.use("/", roomrouter);


const PORT=process.env.PORT || 5000;
const InitalizeDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(PORT, () => {
          console.log("app is Listening in a Server 5000");
        });


    }catch(err){
        console.log(err.message)
    }

}



InitalizeDB()
