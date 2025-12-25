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

  const lastFunction = () => {
    alert("Hotel Registered Successfully! Please Remember your Hotel ID.");
    navigate("/home/login", { replace: true });
  };

  const finalfunction = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/adminregister";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const output = await fetch(url, options);
      if (output.ok) {
        lastFunction();
      }
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-0 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden"
      >
        {/* LEFT: FORM SECTION */}
        <div className="p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-black text-gray-900 mb-2">
              Partner with <span className="text-orange-600">Us.</span>
            </h1>
            <p className="text-gray-500 mb-8">
              Set up your hotel dashboard in minutes.
            </p>
          </motion.div>

          <form onSubmit={finalfunction} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                id="Hotelname"
                label="Hotel Name"
                value={data.Hotelname}
                onChange={handleChange}
              />
              <InputField
                id="HotelId"
                label="Hotel ID"
                value={data.HotelId}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                id="Number"
                label="Mobile Number"
                value={data.Number}
                onChange={handleChange}
              />
              <InputField
                id="Password"
                label="Password"
                type="password"
                value={data.Password}
                onChange={handleChange}
              />
            </div>

            <InputField
              id="Address"
              label="Full Address"
              value={data.Address}
              onChange={handleChange}
            />

            <div className="grid grid-cols-3 gap-3">
              <InputField
                id="City"
                label="City"
                value={data.City}
                onChange={handleChange}
              />
              <InputField
                id="District"
                label="District"
                value={data.District}
                onChange={handleChange}
              />
              <InputField
                id="State"
                label="State"
                value={data.State}
                onChange={handleChange}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#ea580c" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 mt-6 bg-orange-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-orange-200 transition-all cursor-pointer"
            >
              Complete Registration
            </motion.button>
          </form>
        </div>

        {/* RIGHT: ILLUSTRATION SECTION */}
        <div className="hidden md:flex bg-orange-600 items-center justify-center p-12 relative">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full -mr-20 -mt-20 opacity-50" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-700 rounded-full -ml-10 -mb-10 opacity-50" />

          <div className="relative z-10 text-center">
            <motion.img
              src="https://res.cloudinary.com/djcslopvv/image/upload/v1765825972/Business_people_writing_agreement__shaking_hands-removebg-preview_lvterk.png"
              alt="Registration"
              className="w-full max-w-sm drop-shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-white"
            >
              <h2 className="text-2xl font-bold">Secure Partnership</h2>
              <p className="text-orange-100 mt-2 text-sm opacity-80">
                Join 500+ hotels managing their <br /> daily operations with our
                tech.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Reusable Input Component for cleaner code
const InputField = ({ id, label, value, onChange, type = "text" }) => (
  <div className="flex flex-col">
    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 ml-1">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required
      placeholder={label}
      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none text-gray-800 placeholder:text-gray-300"
    />
  </div>
);

export default Register;
