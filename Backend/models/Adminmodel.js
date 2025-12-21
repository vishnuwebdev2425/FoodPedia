const mongoose=require('mongoose')


const AdminSchema = new mongoose.Schema({
  Hotelname: {
    type: String,
    required: true,
    maxLength: 50,
    minLength: 4,
  },
  Hotelid: {
    type: String,
    required: true,
    unique: true,
    maxLength: 20,
    minLength: 4,
  },
  MobileNumber: {
    type: Number,
    required: [true, "Mobile number is required"],
    validate: {
      validator: function (value) {
        return /^[0-9]{10}$/.test(value);
      },
      message: "Mobile number must be 10 digits",
    },
  },
  Hoteladdress: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
    maxLength: 50,
    minLength: 4,
  },
  District: {
    type: String,
    required: true,
    maxLength: 50,
    minLength: 4,
  },
  State: {
    type: String,
    required: true,
    maxLength: 50,
    minLength: 4,
  },
  password: {
    type: String,
    required: true,
    
  },
});

const Adminmodel=new mongoose.model("Adminmodel",AdminSchema)
module.exports=Adminmodel