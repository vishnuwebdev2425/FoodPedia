const mongoose=require('mongoose')
const { ref } = require('process')
const RoomSchema = new mongoose.Schema({
  number: {
    type: Number,
    unique: true,
    required: true,
  },
  Admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Adminmodel",
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ac: {
    type: Boolean,
    required: true,
  },
  features: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    default:"Available",
    validate(value) {
      const allowed = ["Available", "Not Available"];
      if (!allowed.includes(value)) {
        throw new Error("Status is not valid");
      }
    },
    
  },
});

const RoomModel=new mongoose.model("RoomModel",RoomSchema)
module.exports=RoomModel