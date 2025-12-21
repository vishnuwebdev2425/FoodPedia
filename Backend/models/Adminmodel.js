const mongoose=require('mongoose')


const AdminSchema = new mongoose.Schema({
  Hotelname: {
    type: String,
    required: true,
    maxLength: 10,
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
    maxLength: 10,
    minLength: 4,
  },
  District: {
    type: String,
    required: true,
    maxLength: 10,
    minLength: 4,
  },
  State: {
    type: String,
    required: true,
    maxLength: 10,
    minLength: 4,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        );
      },
      message:
        "Password must contain 8 characters, including uppercase, lowercase, number, and special character",
    },
  },
});

const Adminmodel=new mongoose.model("Adminmodel",AdminSchema)
module.exports=Adminmodel