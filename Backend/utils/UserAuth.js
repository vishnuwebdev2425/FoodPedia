const jwt=require('jsonwebtoken')
const Adminmodel =require("../models/Adminmodel")

const UserAuth=async(req,res,next)=>{
    try{
        const token=req.headers.authorization 
        if(!token){
            return res.status(500).json({message:"Invalid Crendetials"})
        }
        const authtoken=token.split(" ")[1]
   
        
        const cookietoken= jwt.verify(authtoken,"jwttoken");
        const { Number } = cookietoken;
        const userdata = await Adminmodel.findOne({ MobileNumber: Number });
        req.user=userdata

        next()

    }catch(err){
        return res.status(500).json({message:err.message})
    }

}

module.exports=UserAuth;