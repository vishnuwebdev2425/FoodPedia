import { motion } from "framer-motion";

const AdminArea = () => {
  const cardAnimate = {
    initial: { opacity: 0, scale: 0.8, y: 40 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  return (
    <div className="min-h-screen bg-gradient-to from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 container mx-auto">
        {/* Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-[500]"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Growth begins here —
            <br />
            <span className="text-yellow-400">manage orders</span>, track
            <span className="text-green-400"> revenue</span>, and unlock
            <span className="text-blue-400"> performance.</span>
          </h1>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <img
            src="https://img.freepik.com/premium-photo/photography-professional-logistics-manager_1288657-23311.jpg?w=2000"
            alt="Admin Growth"
            className="rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] w-[350] md:w-[450]"
          />
        </motion.div>
      </div>

      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-4xl font-extrabold py-6"
      >
        Explore Your Hotel Dashboard
      </motion.h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 pb-10 container mx-auto">
        {/* CARD 1 */}
        <motion.div
          {...cardAnimate}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col items-center gap-4 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition"
        >
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.w1yPPFpoDRf1eCOf1C58xQHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="orders"
            className="rounded-md w-full h-[230] object-cover"
          />
          <button className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black px-5 py-2 rounded-full font-bold">
            Track Your Orders
          </button>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          {...cardAnimate}
          transition={{ delay: 0.15, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col items-center gap-4 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition"
        >
          <img
            src="https://img.freepik.com/premium-vector/increase-revenue-income-investment-profit-growing-income-wealth-growth-chart-diagram-savings-investment-return-concept-businessman-carry-money-coin-stack-walk-up-growth-graph-diagram_466036-1276.jpg?w=2000"
            alt="revenue"
            className="rounded-md w-full h-[230] object-cover"
          />
          <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-black px-5 py-2 rounded-full font-bold">
            Check Total Revenue
          </button>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          {...cardAnimate}
          transition={{ delay: 0.3, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col items-center gap-4 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition"
        >
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.1oUBVrczPzKv0ncc14Gd1gHaE7?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="employees"
            className="rounded-md w-full h-[230] object-cover"
          />
          <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-black px-5 py-2 rounded-full font-bold">
            Check Employee Details
          </button>
        </motion.div>

        {/* CARD 4 */}
        <motion.div
          {...cardAnimate}
          transition={{ delay: 0.45, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col items-center gap-4 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition"
        >
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.Y2zd3VxtVAO3_zZ9wPDMLgHaEu?cb=ucfimg2&ucfimg=1&w=870&h=555&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="hotel"
            className="rounded-md w-full h-[230] object-cover"
          />
          <button className="bg-purple-500 cursor-pointer hover:bg-purple-600 text-black px-5 py-2 rounded-full font-bold">
            Get Hotel Profile
          </button>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        {...cardAnimate}
        whileHover={{ scale: 1.05 }}
        className="max-w-[900] mx-auto bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col items-center gap-4 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition mb-10"
      >
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.eUmRjpZOz3-yqS_-wEwRPQHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="rooms"
          className="rounded-md w-full h-[260] object-cover"
        />
        <button className="bg-red-500 cursor-pointer hover:bg-red-600 text-black px-6 py-3 rounded-full font-bold text-lg">
          Explore Rooms
        </button>
      </motion.div>
    </div>
  );
};

export default AdminArea;
