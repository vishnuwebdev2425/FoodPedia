import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Room = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white shadow-lg rounded-xl p-6"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight max-w-xl">
          Every room you create becomes a space where comfort meets elegance and
          every guest experience begins.
        </h1>

        <img
          src="https://iremote.net.au/wp-content/uploads/2018/12/solution3.jpg"
          alt="Room Management"
          className="rounded-lg shadow-md w-[300] md:w-[350]"
        />
      </motion.div>

      {/* ROOM CREATION SECTION */}
      <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-4 rounded-lg shadow-lg"
        >
          <img
            src="https://img.freepik.com/premium-photo/smart-hotel-room-connected-amenities-iot-hospitality_1168612-370439.jpg?w=996"
            alt="Smart Room"
            className="rounded-lg shadow-md w-[350]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <h1 className="text-2xl font-bold text-gray-800">
            Build exceptional rooms that define comfort.
          </h1>
          <p className="text-gray-600 mt-4">
            Every room created adds value to your hotel. From automation to
            dining integration, expand your capabilities and offer guests a
            premium stay.
          </p>
          <Link to="/app/admin/createroom">
            <button className="mt-6 cursor-pointer px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all shadow-md">
              Create Room
            </button>
          </Link>
        </motion.div>
      </div>

      {/* VIEW ALL ROOMS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mt-16 text-center bg-white p-8 rounded-lg shadow-lg mx-auto w-[90%] md:w-[60%]"
      >
        <h1 className="text-2xl font-bold text-gray-800">
          Each room holds a story waiting to unfold.
        </h1>
        <p className="text-gray-600 mt-3">
          View existing rooms, update availability, and explore guest dining
          preferences across your hotel.
        </p>

        <button className="mt-6 px-8 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-900 transition-all shadow-md">
          View All Rooms
        </button>
      </motion.div>
    </div>
  );
};

export default Room;
