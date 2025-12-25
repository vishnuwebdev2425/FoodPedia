const mongoose=require('mongoose')
const MenuSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
   

})

const Menumodel=new mongoose.model("Menumodel",MenuSchema)
module.exports=Menumodel