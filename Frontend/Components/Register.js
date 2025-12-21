import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [data, setdata] = useState({
    Hotelname: "",
    HotelId: "",
    Number: "",
    Address: "",
    City: "",
    District: "",
    State: "",
    Password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setdata((prev) => ({ ...prev, [id]: value }));
  };
  const lastFunction=()=>{
    alert("Hotel Registered Successfuly Please Remember Hotel Id")
    navigate("/home/login", { replace: true });
  }

  const finalfunction = async(e) => {
    e.preventDefault();
    const admindetails=data
    const url="http://localhost:5000/adminregister"
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admindetails),
    };

    const output=await fetch(url,options)
    const result=await output.json()
   if(output.ok===true){
    lastFunction()
   }
  };

  return (
    <div className="min-h-screen flex items-center justify-center m-3 from-orange-50 to-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-2xl p-10"
      >
        {/* Form */}
        <motion.form
          onSubmit={finalfunction}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">
            Register Your Hotel
          </h1>

          {[
            ["Hotelname", "Hotel Name"],
            ["HotelId", "Hotel ID"],
            ["Number", "Mobile Number"],
            ["Address", "Hotel Address"],
            ["City", "City"],
            ["District", "District"],
            ["State", "State"],
            ["Password", "Password"],
          ].map(([id, label], index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <label className="block text-sm font-medium text-gray-600 mb-1">
                {label}
              </label>
              <input
                id={id}
                type={id === "Password" ? "password" : "text"}
                value={data[id]}
                onChange={handleChange}
                placeholder={`Enter ${label}`}
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-orange-600 text-white rounded-xl font-semibold shadow-lg hover:bg-orange-700 transition"
          >
            Submit
          </motion.button>
        </motion.form>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex items-center justify-center"
        >
          <motion.img
            src="https://res.cloudinary.com/djcslopvv/image/upload/v1765825972/Business_people_writing_agreement__shaking_hands-removebg-preview_lvterk.png"
            alt="Registration"
            className="max-w-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
