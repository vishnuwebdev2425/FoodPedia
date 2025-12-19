import { useState } from "react";
import { motion } from "framer-motion";

const Admin = () => {
  const [data, setdata] = useState({
    Mobile: "",
    Room: "",
    Password: "",
  });

  const changeroom = (e) =>
    setdata((prev) => ({ ...prev, Room: e.target.value }));
  const changenumber = (e) =>
    setdata((prev) => ({ ...prev, Mobile: e.target.value }));
  const chnagepassword = (e) =>
    setdata((prev) => ({ ...prev, Password: e.target.value }));

  const finalfunction = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen  from-gray-100 to-amber-200 p-4">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-3xl flex flex-col md:flex-row gap-6"
      >
        {/* IMAGE */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          src="https://thumbs.dreamstime.com/b/login-landing-page-concept-man-typing-login-password-hand-use-mobile-smartphone-log-to-enter-login-password-sign-270497824.jpg"
          alt="login-img"
          className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
        />

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1 }}
          className="flex flex-col justify-center w-full md:w-1/2"
        >
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center md:text-left">
            Admin Login
          </h1>

          <form onSubmit={finalfunction} className="flex flex-col gap-4">
            {/* Mobile Number */}
            <div className="flex flex-col">
              <label
                htmlFor="mobile"
                className="text-gray-700 font-medium mb-1"
              >
                Mobile Number
              </label>
              <input
                id="mobile"
                type="number"
                value={data.Mobile}
                onChange={changenumber}
                placeholder="Enter your mobile number"
                className="p-2 rounded-xl border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Room ID */}
            <div className="flex flex-col">
              <label htmlFor="room" className="text-gray-700 font-medium mb-1">
                Hotel ID
              </label>
              <input
                id="room"
                type="text"
                value={data.Room}
                onChange={changeroom}
                placeholder="Enter your Hotel ID"
                className="p-2 rounded-xl border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label htmlFor="pass" className="text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                id="pass"
                type="password"
                value={data.Password}
                onChange={chnagepassword}
                placeholder="Enter your password"
                className="p-2 rounded-xl border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 bg-amber-600 text-white font-semibold py-2 rounded-xl shadow-lg hover:bg-amber-700 transition"
            >
              Login
            </motion.button>
          </form>
          <a href="/app/admin/help">
            <p className="text-red-500 p-3 hover:text-black">
              If Your Facing any Problem Click Here ?
            </p>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Admin;
