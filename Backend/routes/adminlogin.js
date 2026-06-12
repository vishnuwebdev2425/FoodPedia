const express=require('express')
const adminRouter = express.Router();
const bcrypt=require('bcrypt')
const Adminmodel=require('../models/Adminmodel')


adminRouter.post("/adminlogin", async(req, res) => {
  try {
    console.log("Admin Login Route Activated")
    const{Number,HotelID,Password}=req.body
    const CheckingNumber = await Adminmodel.find({MobileNumber :  Number});
    
    if(CheckingNumber.length===0){
      return res.status(500).json({message:"Invalid Crendentailss"})
    }
    
    const isMatch = await bcrypt.compare(Password, CheckingNumber[0].password);


    if(!isMatch){
        return res.status(500).json({message:"Incorrect Password"})
    }
    return res.status(200).json({message:"Everything Went Fine"})
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports=adminRouter