const express=require('express')
const roomrouter=express.Router()
const UserAuth=require('../utils/UserAuth')
const Adminmodel = require('../models/Adminmodel')
const RoomModel=require('../models/RoomSchema')



roomrouter.post("/addroom",UserAuth,async(req,res)=>{
    try{
        const data=req.body
        const{number,password,price,ac,features}=data
        

        const allowedData = [
          "number",
          "password",
          "price",
          "ac",
          "features",
        
        ];

        const checking_updates = Object.keys(data).every((key) =>
          allowedData.includes(key)
        );

        if (!checking_updates) {
          return res.status(400).json({
            message: "Invalid fields in request — remove extra fields",
          });
        }
        const {_id}=req.user
        const checkingAdmin=await Adminmodel.findOne({_id})
        if(!checkingAdmin){
            return res.status(500).json({message:"Admin details Not Verified"})
        }
        const newobj={
            number:number,
            Admin:_id,
            password:password,
            price:price,
            ac:ac,
            features:features

        }
        const newHotelroom=await new RoomModel(newobj)
        await newHotelroom.save()
        return res.status(200).json({message:"Everything went  Good"})
    }catch(err){
        return res.status(500).json({message:err.message})
    }
})


roomrouter.get("/getallrooms",UserAuth,async(req,res)=>{
  try{
    const {_id}=req.user
  
    const data = await RoomModel.find({Admin:_id});
    return res.status(200).send(data)
  }catch(err){
    return res.status(200).json({message:err.message})
  }
})

roomrouter.get("/viewallrooms",UserAuth,async(req,res)=>{
  try{
    const { _id } = req.user;

    const data = await RoomModel.find({ Admin: _id });
    return res.status(200).send(data);


  }catch(err){
    return res.status(400).json({message:err.message})
  }
})
roomrouter.get("/bookroom/:roomNumber", async (req, res) => {
  try {
    const id = req.params.roomNumber;
    return res.status(200).send(id);
  } catch (err) {
    return res.status(400).json({ message: "Something Went Wrong" });
  }
});
module.exports=roomrouter