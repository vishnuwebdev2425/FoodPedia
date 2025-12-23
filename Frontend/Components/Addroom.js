import { useState } from "react";
import { motion } from "framer-motion";

const AddRoom = () => {
  const [data, setData] = useState({
    number: "",
    price: "",
    password:"",
    ac: false,
    features: [],
  });

  const images = [
    "https://images.rosewoodhotels.com/is/image/rwhg/premier-room-2-2",
    "https://tse4.mm.bing.net/th/id/OIP.8mIZ957XVxl6aFsqQLlMdwHaE8?cb=ucfimg2&ucfimg=1&w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3",
  ];

  const featuresList = [
    "WiFi",
    "TV",
    "Balcony",
    "Room Service",
    "Attached Washroom",
    "Double Bed",
  ];

  const handleFeatureChange = (value) => {
    setData((prev) => ({
      ...prev,
      features: prev.features.includes(value)
        ? prev.features.filter((item) => item !== value)
        : [...prev.features, value],
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("ROOM SAVED:", data);
    const Roomdata=data
    setData({
      number: "",
      password:"",
      price: "",
      ac: false,
      features: [],
    });
    console.log(data)
    console.log(Roomdata)
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto mt-10 bg-white/30 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white"
    >
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        🏨 Add New Room
      </h1>

      {/* IMAGE PREVIEW */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {images.map((img, index) => (
          <motion.img
            key={index}
            whileHover={{ scale: 1.05 }}
            src={img}
            alt="room"
            className="rounded-xl shadow-md h-48 w-full object-cover border"
          />
        ))}
      </div>

      {/* FORM */}
      <form onSubmit={submit} className="space-y-6">
        <div className="flex gap-6">
          {/* ROOM NUMBER */}
          <div className="w-1/2">
            <label className="font-semibold text-gray-600">Room Number</label>
            <input
              required
              type="text"
              placeholder="Ex: 202"
              value={data.number}
              onChange={(e) => setData({ ...data, number: e.target.value })}
              className="border rounded-lg p-3 w-full text-gray-700 bg-white/70"
            />
          </div>

          {/* PRICE */}
          <div className="w-1/2">
            <label className="font-semibold text-gray-600">Price</label>
            <input
              required
              type="number"
              placeholder="Ex: 1500"
              value={data.price}
              onChange={(e) => setData({ ...data, price: e.target.value })}
              className="border rounded-lg p-3 w-full text-gray-700 bg-white/70"
            />
          </div>
          <div className="w-1/1">
            <label className="font-semibold text-gray-600">Set-Password</label>
            <input
              required
              type="password"
              placeholder="Ex: @123"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="border rounded-lg p-3 w-full text-gray-700 bg-white/70"
            />
          </div>
        </div>

        {/* AC / NON-AC SWITCH */}
        <div className="flex items-center gap-4">
          <label className="font-semibold text-gray-600">AC Room?</label>
          <button
            type="button"
            onClick={() => setData({ ...data, ac: !data.ac })}
            className={`px-6 py-2 rounded-full text-white font-semibold 
              ${data.ac ? "bg-blue-600" : "bg-gray-400"}`}
          >
            {data.ac ? "AC" : "NON-AC"}
          </button>
        </div>

        {/* FEATURES CHECKLIST */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Room Features
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {featuresList.map((feature, index) => (
              <label
                key={index}
                className="flex items-center gap-3 bg-white/70 rounded-lg p-3 border"
              >
                <input
                  type="checkbox"
                  checked={data.features.includes(feature)}
                  onChange={() => handleFeatureChange(feature)}
                />
                <span className="text-gray-700 font-medium">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="w-full bg-orange-600 text-white p-3 rounded-lg font-bold text-lg shadow-md"
        >
          Save Room
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddRoom;
