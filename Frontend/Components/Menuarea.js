import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import ShimmerCardsGrid from "./Shimmer";

const Menuarea = () => {
  const [data, usedata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    finalfunction();
  }, []);

  const finalfunction = async () => {
    try {
      const url = "http://localhost:5000/getallmenuitems";
      const jwt = Cookies.get("jwttoken");
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      };
      const result = await fetch(url, options);
      const fetchedData = await result.json();
      usedata(fetchedData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const finalcallingfunction=()=>{
    alert("Please Visit Hotel To Order")
  }
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* HEADER HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-b border-gray-100 py-10 px-6 mb-10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Cravings don’t wait… <br />
              <span className="text-orange-500 underline decoration-orange-200">
                why should you?
              </span>
            </h1>
            <p className="mt-4 text-gray-500 text-lg">
              Delicious meals delivered to your table in minutes.
            </p>
          </div>
          <motion.img
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            src="https://res.cloudinary.com/djcslopvv/image/upload/v1766670149/menu-removebg-preview_mgscur.png"
            className="w-64 md:w-80 object-contain"
            alt="Menu Promo"
          />
        </div>
      </motion.div>

      <h1 className="text-3xl font-bold text-center mb-12 text-orange-400 uppercase tracking-widest">
        Explore Menu
      </h1>

      <div className="max-w-7xl mx-auto px-4">
        {loading || data.length === 0 ? (
          <ShimmerCardsGrid />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4" /* 4 Items per row on desktop */
          >
            {data.map((each, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 0.98 }} /* Subtle press effect */
                className="relative group cursor-pointer overflow-hidden rounded-xl"
              >
                {/* Fixed Square Aspect Ratio Image */}
                <img
                  src={each.image}
                  alt={each.name}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-white font-bold text-lg md:text-xl truncate"
                  >
                    {each.name || "Menu Item"}
                  </motion.p>
                  <p
                    className="text-orange-400 font-semibold text-sm"
                    onClick={finalcallingfunction}
                  >
                    View Details
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Menuarea;