const express=require('express')
const app=express()
const mongoose=require('mongoose')
console.log('Working')
const authrouter=require("./routes/authrouter")

const InitalizeDB=async()=>{
    try{
        await mongoose.connect(
          "mongodb+srv://VishnuDev:srxR3fYnjuS0h23e@vishnudev.7g1lbox.mongodb.net/"
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