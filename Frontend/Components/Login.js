import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [data, setdata] = useState({
    Number: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setdata((prev) => ({ ...prev, [id]: value }));
  };

  const finalfunction = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  from-orange-50 to-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl w-full grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Login Form */}
        <motion.form
          onSubmit={finalfunction}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-10 space-y-6"
        >
          <h1 className="text-3xl font-bold text-orange-600 mb-2">
            Welcome Back 👋
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Login to manage your hotel dashboard
          </p>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Mobile Number
            </label>
            <input
              id="Number"
              type="number"
              value={data.Number}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              id="Password"
              type="password"
              value={data.Password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <Link
              to="/home/reset"
              className="text-sm text-orange-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-orange-600 text-white rounded-xl font-semibold shadow-lg hover:bg-orange-700 transition"
          >
            Login
          </motion.button>

          {/* Register link */}
          <p className="text-sm text-gray-500 text-center">
            Don’t have an account?{" "}
            <Link
              to="/home/register"
              className="text-orange-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </motion.form>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex items-center justify-center bg-orange-50"
        >
          <motion.img
            src="https://image.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
            alt="Login illustration"
            className="max-w-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
