import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  from-orange-50 via-white to-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full"
      >
        {/* Admin Login Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.05, translateY: -6 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl text-center border border-orange-100"
        >
          <motion.img
            src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-File.png"
            alt="admin"
            className="w-32 mx-auto mb-6"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
          <h1 className="text-2xl font-bold mb-3 text-gray-800">Admin Login</h1>
          <p className="text-gray-500 text-sm mb-6">
            Manage hotel operations, menu, rooms and orders.
          </p>

          <Link to="/app/adminlogin">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="px-8 py-3 cursor-pointer bg-orange-600 text-white rounded-xl font-semibold shadow-lg hover:bg-orange-700 transition"
            >
              Login
            </motion.button>
          </Link>
        </motion.div>

        {/* Room Login Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.05, translateY: -6 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl text-center border border-orange-100"
        >
          <motion.img
            src="https://stl.tech/wp-content/uploads/2023/02/Network-services-scaled.webp"
            alt="rooms"
            className="w-40 mx-auto mb-6 rounded-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
          <h1 className="text-2xl font-bold mb-3 text-gray-800">
            Select Rooms
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Choose your room to place orders directly.
          </p>

          <Link to="/app/hotelroomlogin">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="px-8 cursor-pointer py-3 bg-orange-600 text-white rounded-xl font-semibold shadow-lg hover:bg-orange-700 transition"
            >
              Room Login
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Category;
