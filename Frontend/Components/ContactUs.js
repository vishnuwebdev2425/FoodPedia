import { motion } from "framer-motion";

const ContactAdmin = () => {
  // Animation Variants for Form Fields
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const fieldVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-6 py-16 relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative group hidden lg:block"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.H2xnF0RyREsv6vPAhDfjnQHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Contact Admin"
            className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover border border-white/10"
          />
          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 -right-6 bg-purple-600 p-6 rounded-2xl shadow-xl hidden xl:block"
          >
            <p className="text-sm font-medium">Average Response Time</p>
            <p className="text-2xl font-bold font-mono">{"< 2 Hours"}</p>
          </motion.div>
        </motion.div>

        {/* FORM SECTION */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <h1 className="text-5xl font-black tracking-tighter mb-4">
              Get in <span className="text-purple-500">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Have a technical hurdle or a billing query? Our support team is
              here to keep your hotel running smoothly.
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/[0.03] backdrop-blur-2xl shadow-2xl rounded-3xl p-8 border border-white/10 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormInput
                variants={fieldVariants}
                type="text"
                placeholder="Admin Name"
              />
              <FormInput
                variants={fieldVariants}
                type="text"
                placeholder="Hotel ID"
              />
            </div>

            <FormInput
              variants={fieldVariants}
              type="email"
              placeholder="Email Address"
            />

            <motion.div variants={fieldVariants} className="relative group">
              <select className="w-full p-4 rounded-xl bg-white/5 text-gray-300 border border-white/10 focus:border-purple-500 focus:bg-white/10 outline-none cursor-pointer transition-all appearance-none">
                <option className="bg-gray-900">Select Issue Category</option>
                <option className="bg-gray-900">Order Tracking</option>
                <option className="bg-gray-900">Payment / Billing</option>
                <option className="bg-gray-900">Technical Issue</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                ▼
              </div>
            </motion.div>

            <motion.div variants={fieldVariants}>
              <textarea
                rows="4"
                placeholder="Describe your issue clearly..."
                className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 focus:border-purple-500 focus:bg-white/10 outline-none transition-all resize-none"
              ></textarea>
            </motion.div>

            <FormInput
              variants={fieldVariants}
              type="text"
              placeholder="Hotel Location"
            />

            {/* Button */}
            <motion.button
              variants={fieldVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full cursor-pointer py-4 rounded-xl bg-purple-600 hover:bg-purple-500 font-bold text-lg transition-all shadow-lg"
            >
              Send Priority Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

// Reusable Input Component
const FormInput = ({ type, placeholder, variants }) => (
  <motion.div variants={variants} className="w-full">
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 focus:border-purple-500 focus:bg-white/10 outline-none transition-all"
    />
  </motion.div>
);

export default ContactAdmin;
