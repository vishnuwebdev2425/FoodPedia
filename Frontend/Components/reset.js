import { useState } from "react";
import { motion } from "framer-motion";
import { replace, useNavigate } from "react-router-dom";

const Reset = () => {
  const [data, setdata] = useState({
    Number: "",
    HotelID: "",
    Password: "",
  });
 
  const handleChange = (e) => {
    const { id, value } = e.target;
    setdata((prev) => ({ ...prev, [id]: value }));
  };
  const navigate=useNavigate()
 const finalgettingfunction=async()=>{
  alert("Password Changed Successfully");
  navigate("/home/login", {replace:true})


 }
  const finalfunction =async (e) => {
    e.preventDefault();
    console.log(data)
    const Resetdata=data
    const url="http://localhost:5000/resetpassword"
    const options={
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(Resetdata)
      
    }
    const response =await fetch(url,options)
    const getting_data=await response.json()
    if(response.ok===true){
      finalgettingfunction()
    }else{
      alert("Please Check Login Crendentials And Try Again")
    }



    
  };

  return (
    <div className="min-h-screen flex items-center justify-center from-orange-50 to-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl w-full grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Reset Form */}
        <motion.form
          onSubmit={finalfunction}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-10 space-y-6"
        >
          <h1 className="text-3xl font-bold text-orange-600">
            Reset Password 🔐
          </h1>
          <p className="text-gray-500 text-sm">
            Verify your details to reset your password
          </p>

          {/* Mobile Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Mobile Number
            </label>
            <input
              id="Number"
              type="number"
              onChange={handleChange}
              placeholder="Enter registered number"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </motion.div>

          {/* Hotel ID */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Hotel ID
            </label>
            <input
              id="HotelID"
              type="text"
              onChange={handleChange}
              placeholder="Enter your hotel ID"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </motion.div>

          {/* New Password */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-gray-600 mb-1">
              New Password
            </label>
            <input
              id="Password"
              type="password"
              onChange={handleChange}
              placeholder="Enter new password"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </motion.div>

          {/* Info Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs"
          >
            <span className=" text-red-500 font-bold">Note:</span> If mobile number and
            Hotel ID match, password will be reset automatically.
          </motion.p>

          {/* Reset Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 cursor-pointer bg-orange-600 text-white rounded-xl font-semibold shadow-lg hover:bg-orange-700 transition"
          >
            Reset Password
          </motion.button>
        </motion.form>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex items-center justify-center bg-orange-50"
        >
          <motion.img
            src="https://res.cloudinary.com/djcslopvv/image/upload/v1765827410/OIP-removebg-preview_qqxwci.png"
            alt="Reset illustration"
            className="max-w-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Reset;
