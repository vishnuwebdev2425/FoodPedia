const express=require('express')
const roomrouter=express.Router()
const UserAuth=require('../utils/UserAuth')
const Adminmodel = require('../models/Adminmodel')
const RoomModel=require('../models/RoomSchema')
const Menumodel = require('../models/MenuModel')
const BookModel=require("../models/bookSchema");
const mongoose=require('mongoose');


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
roomrouter.post("/bookroomfromuser", async (req, res) => {
  try {
    const{
      roomId,
        roomNumber,
        Name,
        dist,
        email,
        number,
        state    
    }=req.body;
    const response=await RoomModel.findOne({Admin:roomId});
    if(!response){
      return res.status(200).json({message:"Room Address Is Not Available"})
    } 
    const anotherresponse=await RoomModel.findOne({number:roomNumber})
    if(!anotherresponse){
      return res.status(200).json({message:"Room Id Is Not Available"});
    }
    const newobj=await new BookModel({
      roomId:roomId,
      roomnumber:roomNumber,
      name:Name,
      mail:email,
      phone:number,
      state:state,
      district:dist
    });
    await newobj.save();
    const final_result = await RoomModel.findOneAndUpdate(
      {
        Admin: roomId,
        number: roomNumber,
      },
      {
        status: "Waitlisted",
      },{
        new:true
      }
    );

    return res.status(200).json({message:"Request Form SuccessFully"});

    
   
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});
roomrouter.get("/getallroompublicview",async(req,res)=>{
  try{
    const data = await RoomModel.find().populate("Admin");
    return res.status(200).send(data)

  }catch(err){
    return res.status(400).json({message:err.message})
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


roomrouter.post("/addmenuitem",async(req,res)=>{
  try{
    const {image}=req.body
    const newobj={image}
    const result=await new Menumodel(newobj)
    await result.save()
    return res.status(200).send({message:"Everything Went Good"})


  }catch(err){
    return res.status(400).json({message:err.message})
  }
})

roomrouter.get("/getallmenuitems",UserAuth,async(req,res)=>{
  try{
    const {_id}=req.user;
    if(!_id){
      return res.status(500).json({message:"Something Went Wrong"})

    }
    const result=await Menumodel.find({})
    res.status(200).send(result)

  }catch(err){
    return res.status(400).json({message:err.message})
  }
})
roomrouter.get("/bookroom/:number",UserAuth,async(req,res)=>{
  try{
    const {_id}=req.user;
    if(!_id){
      return res.status(500).json({message:"Token Is Not Verified"})
    }
    const Roomnumber=req.params.number
    const checking_room=await RoomModel.findOne({number:Roomnumber,Admin:_id})
    if(!checking_room){
      return res.status(400).send("Something Went Wrong")
    }
    const checking_status= checking_room.status
    
    if (checking_status!== "Available") {
      return res.status(500).json({ message: "Room is Occupied" });
    }
    if (checking_status !== "Booked") {
      return res.status(500).json({ message: "Room is Occupied" });
    }
    const final_result = await RoomModel.findOneAndUpdate(
      { number: Roomnumber, Admin: _id },
      { status: "Waitlisted" },
      { new: true }
    );
    return res.status(200).json({message:"Room Booked Successfully"})


  }catch(err){
    return res.status(500).json({message:err.message})
  }
  
});

roomrouter.get("/getsingleroom/:roomNumber",async(req,res)=>{
  try{
    const roomNumber=req.params.roomNumber;
    const room = await RoomModel.findOne({ number: roomNumber }).populate(
      "Admin"
    );
    return res.status(200).send(room)

    

  }catch(err){
    return res.status(400).json({message:err.message})
  }
});

roomrouter.get("/changingroomstatus/:adminid/:roomNumber",async(req,res)=>{
  try{
    const adminid=req.params.adminid
    const roomNumber=req.params.roomNumber
    const Finding_room = await RoomModel.findOne({ number: roomNumber, Admin :adminid});
    if (!Finding_room) {
      return res.status(500).json("Something Went Wrong");
    }
    if(Finding_room.status!=="Available"){
      return res.status(400).json("Room Is Not Available")
    }
    const updatedresult = await RoomModel.findOneAndUpdate(
      { number: roomNumber, Admin: adminid },
      { status: "Waitlisted" },
      { new: true }
    );
    
    res.status(200).send("Everything Work Fine")

  }catch(err){
    return res.status(200).json({message:err.message})
  }
})


module.exports=roomrouter