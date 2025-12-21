import { motion } from "framer-motion";

const ContactAdmin = () => {
  return (
    <div className="min-h-screen bg-purple-200 via-black to-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.H2xnF0RyREsv6vPAhDfjnQHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Contact Admin"
            className="rounded-xl shadow-2xl border-2 border-gray-700 w-full h-[450] object-cover"
          />
        </motion.div>

        {/* FORM SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold mb-8 text-center"
          >
            ✉️ Contact Us
          </motion.h1>

          {/* Form Container */}
          <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-gray-700 space-y-6">
            <input
              type="text"
              placeholder="Admin / Manager Name"
              className="w-full p-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:border-purple-500 outline-none"
            />

            <input
              type="text"
              placeholder="Hotel ID"
              className="w-full p-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:border-purple-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:border-purple-500 outline-none"
            />

            {/* Dropdown */}
            <select className="w-full p-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:border-purple-500 outline-none cursor-pointer">
              <option className="bg-gray-900">Select Issue Category</option>
              <option className="bg-gray-900">Order Tracking</option>
              <option className="bg-gray-900">Payment / Billing</option>
              <option className="bg-gray-900">Employee Issue</option>
              <option className="bg-gray-900">Technical Issue</option>
              <option className="bg-gray-900">Other</option>
            </select>

            <textarea
              rows="4"
              placeholder="Describe your issue clearly..."
              className="w-full p-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:border-purple-500 outline-none"
            ></textarea>

            <input
              type="text"
              placeholder="Hotel Location"
              className="w-full p-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:border-purple-500 outline-none"
            />

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="w-full cursor-pointer p-3 mt-4 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold text-lg shadow-lg"
            >
              Submit Request
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactAdmin;
