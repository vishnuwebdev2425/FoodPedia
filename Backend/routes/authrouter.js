const express = require("express");
const requestRouter = express.Router();
const Adminmodel=require("../models/Adminmodel")
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

requestRouter.post("/adminregister", async (req, res) => {
  try {
    const newdata = req.body;
    const {
      Hotelname,
      HotelId,
      Number,
      Address,
      City,
      District,
      State,
      Password,
    } = newdata;

    const allowedthings = [
      "Hotelname",
      "HotelId",
      "Number",
      "Address",
      "City",
      "District",
      "State",
      "Password",
    ];

    const result = Object.keys(newdata).every((k) =>
      allowedthings.includes(k)
    );

    if (!result) {
      return res.status(400).json({ message: "Invalid input fields" });
    }
    const checking_result=await Adminmodel.find({HotelId})
    if (checking_result.length!==0) {
      return res.status(400).json({ message: "Hotel Already Registered" });
    }
   const checking_number = await Adminmodel.find({ MobileNumber: Number });

   if (checking_number.length !== 0) {
     return res.status(400).json({ message: "Number Already Registered" });
   }
    const HashedPassoword=await bcrypt.hash(Password,10)
    const addingdata = {
      Hotelname: Hotelname,
      Hotelid: HotelId,
      MobileNumber: Number,
      Hoteladdress: Address,
      City: City,
      District: District,
      State: State,
      password: HashedPassoword,
    };

    const data = new Adminmodel(addingdata);
    await data.save();

    return res
      .status(200)
      .json({ ok: true, message: "Registered Successfully" });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error", error: err });
  }
})


requestRouter.post("/signin", async (req, res) => {
  const { Number, Password } = req.body;

  try {
    const admin = await Adminmodel.findOne({ MobileNumber: Number });

    if (!admin) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(Password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const payload = {
      Number: admin.MobileNumber,
    };

    const token = jwt.sign(payload, "jwttoken", {
      expiresIn: "1d",
    });

    return res.status(200).json({
      message: "Login Successful",
      token,
      HotelId: admin.Hotelid,
      Hotelname: admin.Hotelname,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});
requestRouter.post("/resetpassword", async (req, res) => {
  try {
    const{Number,HotelID,Password}=req.body
    const CheckingNumber = await Adminmodel.findOne({ MobileNumber:Number});
    if(!CheckingNumber){
      return res.status(500).json({message:"Invalid Crendentails"})
    }
    const CheckingHotelID = await Adminmodel.findOne({ Hotelid :HotelID});
    if(!CheckingHotelID){
      return res.status(500).json({message:"Invalid Crendentails"})
    }
    const hashedPassword=await bcrypt.hash(Password,10)
   const UpdatedPassword = await Adminmodel.findOneAndUpdate(
     { MobileNumber: Number, Hotelid: HotelID }, 
     { password: hashedPassword }, 
     { new: true } 
   );
   return res.status(200).json({message:"Password Changed Successfully"})


  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports=requestRouter;