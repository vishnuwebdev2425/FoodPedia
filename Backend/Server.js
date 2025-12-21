const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors = require("cors");

app.use(cors());
console.log('Working')
app.use(express.json());
const authrouter=require("./routes/authrouter")
const adminRouter = require('./routes/adminlogin');

const InitalizeDB=async()=>{
    try{
        console.log("Reached Here   ")
        await mongoose.connect(
          "mongodb+srv://VishnuDev:srxR3fYnjuS0h23e@vishnudev.7g1lbox.mongodb.net/FoodPedia"
        );
        app.listen(5000, () => {
          console.log("app is Listening in a Server 5000");
        });


    }catch(err){
        console.log(err.message)
    }

}
InitalizeDB()

app.use("/",authrouter)
app.use("/",adminRouter)