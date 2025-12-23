const mongoose=require('mongoose')
const HotelSchema=new mongoose.Schema({
    number:{
        type:Number,
        unique:true,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    ac:{
        type:Boolean,
        required:true
    },
    features:{
        type:[String],
        default:[]
    }
    
})

const HotelModel=new mongoose.model("HotelModel",HotelSchema)
module.exports=HotelModel