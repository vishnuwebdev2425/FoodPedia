import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { motion } from "framer-motion";
import ShimmerCardsGrid from "./Shimmer";

const Viewall=()=>{
  const [data, newdata] = useState([]);
  useEffect(() => {
    callfunction();
  }, []);
  const images = [
    "https://tse3.mm.bing.net/th/id/OIP.gkbu_3onf3vpOHdH-kGZswHaEo?rs=1&pid=ImgDetMain",
    "https://tse2.mm.bing.net/th/id/OIP.uReSoQJcBd8-N1KwcfXdOQHaE8?rs=1&pid=ImgDetMain",
    "https://tse2.mm.bing.net/th/id/OIP.7mluPgLsr36Y3qbtxOBd0gHaE8?rs=1&pid=ImgDetMain",
  ];
  const jwt = Cookies.get("jwttoken");
  const callfunction = async () => {
    const url = "http://localhost:5000/viewallrooms";
    console.log(jwt)
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data)
    newdata(data);
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
  const BookingFuntion=async(roomNumber)=>{

    const url=`http://localhost:5000/bookroom/${roomNumber}`
    const options={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${jwt}`
        }
    }
    const response=await fetch(url,options)
    console.log(response)
    const data=await response.json()
   
    if(response.ok===true){
        alert("Room Booked Succesfully Wait For The Call From Hotel")
    }else{
      alert("Room Already Occupied Please Try Another Room")
    }


  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        <div className="flex justify-between items-center mb-10">
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-4xl font-extrabold text-gray-800"
          ></motion.h2>
        </div>

        {/* ROOM GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.length === 0 && <ShimmerCardsGrid />}

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
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
                        room.status === "Available"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          room.status === "Available"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></span>
                      {room.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-indigo-600">
                      ₹{room.price}
                    </span>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                      Per Night
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Amenities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {/* AC Badge */}
                    {room.ac && (
                      <span className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg border border-blue-100">
                        ❄️ AC
                      </span>
                    )}

                    {/* Dynamic Features from Array */}
                    {room.features &&
                      room.features.map((feature, index) => (
                        <span
                          key={index}
                          className="flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-lg border border-gray-200"
                        >
                          {feature === "WiFi"
                            ? "📶"
                            : feature === "Balcony"
                            ? "🌅"
                            : "✨"}{" "}
                          {feature}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => BookingFuntion(room.number)}
                    className="flex-1 cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition"
                  >
                    Book
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
}

export default Viewall