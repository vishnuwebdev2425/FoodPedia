import { useState } from "react";
import { motion } from "framer-motion";

const Hotel = () => {
  const [data, setdata] = useState({
    RoomID: "",
    Password: "",
  });

  const changeRoomID = (e) =>
    setdata((prev) => ({ ...prev, RoomID: e.target.value }));
  const changePassword = (e) =>
    setdata((prev) => ({ ...prev, Password: e.target.value }));

  const handleLogin = (event) => {
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
        {/* IMAGE SECTION */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          src="https://cache.marriott.com/marriottassets/marriott/LASJW/lasjw-suite-0084-hor-clsc.jpg?interpolation=progressive-bilinear&"
          alt="hotel-room"
          className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
        />

        {/* FORM SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1 }}
          className="flex flex-col justify-center w-full md:w-1/2"
        >
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center md:text-left">
            Hotel Login
          </h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {/* Room ID */}
            <div className="flex flex-col">
              <label htmlFor="room" className="text-gray-700 font-medium mb-1">
                Room ID
              </label>
              <input
                id="room"
                type="text"
                value={data.RoomID}
                onChange={changeRoomID}
                placeholder="Enter your Room ID"
                className="p-2 rounded-xl border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-gray-700 font-medium mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={data.Password}
                onChange={changePassword}
                placeholder="Enter your Password"
                className="p-2 rounded-xl border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-amber-600 text-white font-semibold py-2 rounded-xl shadow-lg hover:bg-amber-700 transition"
            >
              Login
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hotel;
