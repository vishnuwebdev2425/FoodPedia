import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShimmerCardsGrid from "./Shimmer";
import { motion } from "framer-motion";
import {
  FaWifi,
  FaTv,
  FaWind,
  FaBed,
  FaUtensils,
  FaMapMarkerAlt,
  FaHotel,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";
import { MdBalcony, MdOutlineBathroom, MdCoffeeMaker } from "react-icons/md";

const SingleRoom = () => {
  const { roomNumber } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const featureIcons = {
    WiFi: <FaWifi />,
    Balcony: <MdBalcony />,
    "Attached Washroom": <MdOutlineBathroom />,
    TV: <FaTv />,
    "Room Service": <FaUtensils />,
    "Double Bed": <FaBed />,
    "Coffee Maker": <MdCoffeeMaker />,
    AC: <FaWind />,
  };

  useEffect(() => {
    gettingroomdetails();
  }, [roomNumber]);

  const gettingroomdetails = async () => {
    try {
      const url = `${process.env.API_URL}/getsingleroom/${roomNumber}`;
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const result = await fetch(url, options);
      const fetchedData = await result.json();
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching room details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !data || Object.keys(data).length === 0) {
    return <ShimmerCardsGrid />;
  }
  
  const bookingroomnumber = async (a, b) => {
    console.log("Working Fine");
    console.log(a);
    console.log(b);
    navigate(`/home/getrooms/publicview/${b._id}/${a}`);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans pb-20">
      {/* HERO SECTION */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover"
          alt="Luxury Room"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-10 left-10 text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-400 font-bold tracking-[0.3em] uppercase text-sm mb-2"
          >
            Premium Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-medium"
          >
            Suite {data.number}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        {/* LEFT COLUMN: ROOM SPECS & FEATURES */}
        <div className="lg:col-span-2 space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-between border-b pb-8 gap-6"
          >
            <div className="space-y-1">
              <h2 className="text-3xl font-serif">Room Overview</h2>
              <div className="flex items-center gap-4">
                <span
                  className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                    data.status === "Available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  ● {data.status}
                </span>
                {data.ac && (
                  <span className="flex items-center gap-1 text-blue-600 text-sm font-bold">
                    <FaWind /> Fully Air Conditioned
                  </span>
                )}
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
                Rate Per Night
              </p>
              <p className="text-4xl font-serif text-indigo-900">
                ₹{data.price}
              </p>
            </div>
          </motion.div>

          {/* AMENITIES GRID */}
          <section>
            <h3 className="text-xl font-serif mb-6">World-Class Amenities</h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {data.features && data.features.length > 0 ? (
                data.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -5, backgroundColor: "#fff" }}
                    className="flex items-center gap-4 p-4 bg-white/50 rounded-xl shadow-sm border border-gray-100 transition-colors hover:shadow-md"
                  >
                    <span className="text-2xl text-orange-500">
                      {featureIcons[feature] || <FaStar />}
                    </span>
                    <span className="font-medium text-gray-700">{feature}</span>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-400 italic">
                  Standard amenities included.
                </p>
              )}
            </motion.div>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="sticky top-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl text-2xl">
                <FaHotel />
              </div>
              <div>
                <h4 className="font-bold text-lg leading-none">
                  {data.Admin?.Hotelname || "Hotel Name"}
                </h4>
                <p className="text-xs text-gray-400 font-bold mt-1 uppercase tracking-tighter">
                  ID: {data.Admin?.Hotelid}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-gray-400 mt-1 flex-shrink-" />
                <div>
                  <p className="text-sm font-bold">Location</p>
                  <p className="text-sm text-gray-500">
                    {data.Admin?.Hoteladdress}, {data.Admin?.City}
                    <br />
                    {data.Admin?.State}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-gray-400 mt-1 flex-shrink-" />
                <div>
                  <p className="text-sm font-bold">Direct Line</p>
                  <p className="text-sm text-gray-500">
                    +91 {data.Admin?.MobileNumber}
                  </p>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <motion.button
                  onClick={() => bookingroomnumber(data.number, data.Admin)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold shadow-lg shadow-slate-200 transition-all cursor-pointer"
                >
                  Book Room
                </motion.button>
              </div>
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  );
};

export default SingleRoom;
