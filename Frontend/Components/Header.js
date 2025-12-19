import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const data = useContext(UserContext);
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            className="h-16"
            src="https://res.cloudinary.com/djcslopvv/image/upload/v1765733691/foos-removebg-preview_aadmoj.png"
            alt="FoodPedia"
          />
          <h1 className="text-2xl font-extrabold text-orange-600">
            Food<span className="text-black">Pedia</span>
          </h1>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 font-medium text-gray-700">
          {["Home", "Contact Us", "About Us"].map((item, index) => (
            <motion.span
              key={index}
              whileHover={{ y: -3 }}
              className="cursor-pointer hover:text-orange-600 transition-colors duration-300"
            >
              {item}
            </motion.span>
          ))}
        </nav>

        {/* Auth Button */}
        <motion.div whileHover={{ scale: 1.05 }}>
          {data.loggedInUser ? (
            <button
              className="px-6 py-2 rounded-xl bg-orange-600 text-white font-semibold
              shadow-lg hover:bg-orange-700 transition-all duration-300 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <div>
              <Link to="/home/register">
                <button
                  className="px-6 py-2 rounded-xl border border-orange-500 text-orange-600 font-semibold
              hover:bg-orange-600 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Register
                </button>
              </Link>
              <Link to="/home/login">
                <button
                  className="px-6 py-2 rounded-xl border ml-2.5 border-orange-500 text-orange-600 font-semibold
              hover:bg-orange-600 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Login
                </button>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
