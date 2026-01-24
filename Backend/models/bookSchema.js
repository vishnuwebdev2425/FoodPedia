const mongoose=require('mongoose')
const BookingRoomSchema=new mongoose.Schema({
    roomId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RoomModel"
    },
    roomnumber:{
        type:Number,
        required:true,

    },
    name:{
        type:String,
        required:true,
        maxLength:10,
        minLength:3
    },
    mail:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        maxLength:12,
        minLength:9,
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },

})

const BookModel=new mongoose.model("BookModel",BookingRoomSchema);
module.exports=BookModel;
