import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AdminArea = () => {
  const navigate = useNavigate();

  // Animation Variants for the Container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  // Variants for individual cards
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const finalfunction = () => {
    navigate("admin/rooms", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Decorative Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />

      {/* Hero Section */}
      <div className="relative z-10 p-8 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto pt-16">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
            Growth begins here <span className="text-gray-500">—</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Master your Dashboard.
            </span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg max-w-lg">
            Effortlessly manage orders, monitor real-time revenue, and optimize
            your hotel performance with our advanced tracking suite.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="https://img.freepik.com/premium-photo/photography-professional-logistics-manager_1288657-23311.jpg?w=2000"
              alt="Admin Growth"
              className="relative rounded-2xl shadow-2xl w-full object-cover border border-white/10"
            />
          </div>
        </motion.div>
      </div>

      {/* Section Title */}
      <div className="text-center mt-24 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tighter"
        >
          Hotel Management Core
        </motion.h2>
        <div className="h-1 w-20 bg-yellow-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto pb-10"
      >
        <AdminCard
          img="https://tse1.mm.bing.net/th/id/OIP.w1yPPFpoDRf1eCOf1C58xQHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
          title="Track Orders"
          btnColor="bg-yellow-500"
          variants={itemVariants}
        />
        <AdminCard
          img="https://img.freepik.com/premium-vector/increase-revenue-income-investment-profit-growing-income-wealth-growth-chart-diagram-savings-investment-return-concept-businessman-carry-money-coin-stack-walk-up-growth-graph-diagram_466036-1276.jpg?w=2000"
          title="Total Revenue"
          btnColor="bg-green-500"
          variants={itemVariants}
        />
        <AdminCard
          img="https://tse1.mm.bing.net/th/id/OIP.1oUBVrczPzKv0ncc14Gd1gHaE7?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
          title="Team Details"
          btnColor="bg-blue-500"
          variants={itemVariants}
        />
        <AdminCard
          img="https://tse2.mm.bing.net/th/id/OIP.Y2zd3VxtVAO3_zZ9wPDMLgHaEu?cb=ucfimg2&ucfimg=1&w=870&h=555&rs=1&pid=ImgDetMain&o=7&rm=3"
          title="Hotel Profile"
          btnColor="bg-purple-500"
          variants={itemVariants}
        />
      </motion.div>

      {/* Featured Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-8 pb-20 mt-10"
      >
        <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col items-center">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.eUmRjpZOz3-yqS_-wEwRPQHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="rooms"
            className="rounded-2xl w-full h-[350px] object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="mt-8 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Inventory & Room Status</h3>
            <motion.button
              onClick={finalfunction}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(239, 68, 68, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-xl"
            >
              Explore Rooms
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Reusable Card Component to keep code clean
const AdminCard = ({ img, title, btnColor, variants }) => (
  <motion.div
    variants={variants}
    whileHover={{ y: -10 }}
    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex flex-col gap-4 group transition-all hover:bg-white/10"
  >
    <div className="overflow-hidden rounded-xl h-48">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />
    </div>
    <motion.button
      whileHover={{ scale: 1.02 }}
      className={`${btnColor} text-black py-3 rounded-xl font-bold tracking-tight hover:brightness-110 transition`}
    >
      {title}
    </motion.button>
  </motion.div>
);

export default AdminArea;
