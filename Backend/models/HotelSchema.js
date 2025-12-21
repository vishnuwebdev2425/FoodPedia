const mongoose=require('mongoose');

const HotelSchema = new mongoose.Schema({
  RoomId: {
    type: String,
    required: true,
  },
  Hotelid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])([^\s]){10,}$/.test(
          value
        );
      },
      message:
        "Password must be 10+ chars, no spaces, include letters, number & special char",
    },
  },
});

const Hotelmodel=new mongoose.model("Hotelmodel",HotelSchema)
module.exports=Hotelmodel;
