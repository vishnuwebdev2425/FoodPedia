import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Room = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Elements appear one after another
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingTransition = {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gray-100 min-h-screen py-10 px-6 overflow-hidden"
    >
      {/* HEADER SECTION */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white shadow-xl rounded-2xl p-8 border border-gray-50"
      >
        <div className="max-w-xl">
          <motion.h1
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight"
          >
            Every room you create becomes a space where{" "}
            <span className="text-orange-500">comfort meets elegance</span>.
          </motion.h1>
        </div>

        <motion.img
          animate={{ y: [0, -15, 0] }} // Floating effect
          transition={floatingTransition}
          whileHover={{ scale: 1.05, rotate: 1 }}
          src="https://iremote.net.au/wp-content/uploads/2018/12/solution3.jpg"
          alt="Room Management"
          className="rounded-xl shadow-2xl w-full md:w-[400] cursor-pointer"
        />
      </motion.div>

      {/* ROOM CREATION SECTION */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-16">
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -10 }}
          className="relative group"
        >
          {/* Decorative background element */}
          <div className="absolute -inset-1 bg-gradient-to from-orange-400 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

          <div className="relative bg-white p-2 rounded-lg shadow-lg">
            <img
              src="https://img.freepik.com/premium-photo/smart-hotel-room-connected-amenities-iot-hospitality_1168612-370439.jpg?w=996"
              alt="Smart Room"
              className="rounded-lg w-full md:w-[450]"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800">
            Build exceptional rooms that define comfort.
          </h2>
          <p className="text-gray-600 mt-5 text-lg">
            Every room created adds value to your hotel. From automation to
            dining integration, expand your capabilities and offer guests a
            premium stay.
          </p>

          <Link to="/app/admin/createroom">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(249, 115, 22, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 cursor-pointer px-10 py-4 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-lg flex items-center gap-2"
            >
              Create Room
              <span>→</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* VIEW ALL ROOMS SECTION (SCROLL TRIGGERED) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="mt-24 text-center bg-zinc-900 p-12 rounded-3xl shadow-2xl mx-auto w-full md:w-[70%] text-white"
      >
        <h2 className="text-3xl font-bold">
          Each room holds a story waiting to unfold.
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          View existing rooms, update availability, and explore guest dining
          preferences across your hotel with our real-time management engine.
        </p>

        <Link to="/app/admin/viewallrooms">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 cursor-pointer px-12 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-all shadow-xl"
          >
            View All Rooms
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Room;
