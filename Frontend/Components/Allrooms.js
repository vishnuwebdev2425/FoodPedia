import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import {  useNavigate } from "react-router-dom";
import ShimmerCardsGrid from "./Shimmer";

const Allrooms = () => {
  const images = [
    "https://tse3.mm.bing.net/th/id/OIP.gkbu_3onf3vpOHdH-kGZswHaEo?rs=1&pid=ImgDetMain",
    "https://tse2.mm.bing.net/th/id/OIP.uReSoQJcBd8-N1KwcfXdOQHaE8?rs=1&pid=ImgDetMain",
    "https://tse2.mm.bing.net/th/id/OIP.7mluPgLsr36Y3qbtxOBd0gHaE8?rs=1&pid=ImgDetMain",
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    finalfunction();
  }, []);
  const navigate=useNavigate()
 const finalnavigation=()=>{
  alert("Navigating into Add room Portion")
  navigate("/app/admin/createroom", { replace: true });

 }
  const finalfunction = async () => {
    const url = "http://localhost:5000/getallrooms";
    const jwt = Cookies.get("jwttoken");

    const option = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    };

    const response = await fetch(url, option);
    const finaldata = await response.json();
    setData(finaldata);
  };

  // ANIMATION VARIANTS
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* HERO SECTION */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-64 flex items-center justify-center bg-indigo-900 text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[0]})` }}
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Grow your hotel, one room at a time.
          </motion.h1>
          <p className="text-xl text-indigo-200">
            Start building your success today
          </p>
        </div>
      </motion.header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        <div className="flex justify-between items-center mb-10">
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-4xl font-extrabold text-gray-800"
          >
            View All Rooms
          </motion.h2>

          <div className="flex space-x-2">
            
              <button onClick={finalnavigation} className="bg-indigo-600 cursor-pointer  text-white px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition">
                + Add New Room
              </button>
        
          </div>
        </div>

        {/* ROOM GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.length === 0 && (
            <ShimmerCardsGrid/>
          )}

          {data.map((room, index) => (
            <motion.div
              key={room._id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="relative h-48">
                <img
                  src={images[index % images.length]}
                  alt="Room Image"
                  className="w-full h-full object-cover"
                />

                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    room.status === "Available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {room.status}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Room No: {room.number}
                    </h3>
                    <p className="text-gray-500">Admin: {room.Admin}</p>
                  </div>
                  <span className="text-2xl font-bold text-indigo-600">
                    ₹{room.price}
                  </span>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition">
                    Edit Details
                  </button>
                  <button className="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 py-2 rounded-lg font-medium transition">
                    Quick View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Allrooms;
