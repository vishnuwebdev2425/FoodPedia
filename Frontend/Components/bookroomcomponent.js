import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCity,
  FaHotel,
} from "react-icons/fa";

const BookRoomComponent = () => {
  const { roomId, roomNumber } = useParams();
  const [book, setbook] = useState({
    roomId: roomId,
    roomNumber: roomNumber,
    Name: "",
    email: "",
    number: "",
    state: "",
    dist: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const submitrequest = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const url = `${process.env.API_URL}/bookroomfromuser`;
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      };
      const result = await fetch(url, options);
      const data = await result.json();
      alert("Request Sent Successfully!");
    } catch (error) {
      console.error("Booking Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to update state (Simplified logic)
  const updateField = (field, value) => {
    setbook((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-5xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 overflow-hidden grid md:grid-cols-2"
      >
        {/* LEFT SIDE: THE FORM */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-8 md:p-14"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-2 text-indigo-600 font-bold mb-2">
              <FaHotel /> <span>ROOM RESERVATION</span>
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              Complete Your <span className="text-indigo-600">Stay.</span>
            </h1>
            <p className="text-slate-400 mt-2 font-medium">
              Confirming details for Room{" "}
              <span className="text-slate-900">#{roomNumber}</span>
            </p>
          </motion.div>

          <form onSubmit={submitrequest} className="space-y-5">
            <div className="grid grid-cols-1 gap-5">
              <InputField
                icon={<FaUser />}
                label="Full Name"
                placeholder="John Doe"
                value={book.Name}
                onChange={(e) => updateField("Name", e.target.value)}
              />

              <InputField
                icon={<FaEnvelope />}
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                value={book.email}
                onChange={(e) => updateField("email", e.target.value)}
              />

              <InputField
                icon={<FaPhone />}
                label="Mobile Number"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={book.number}
                onChange={(e) => updateField("number", e.target.value)}
              />

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  icon={<FaMapMarkerAlt />}
                  label="State"
                  placeholder="Karnataka"
                  value={book.state}
                  onChange={(e) => updateField("state", e.target.value)}
                />
                <InputField
                  icon={<FaCity />}
                  label="District"
                  placeholder="Bengaluru"
                  value={book.dist}
                  onChange={(e) => updateField("dist", e.target.value)}
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#4338ca" }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full cursor-pointer bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-100 transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Processing..." : "Confirm Room Request"}
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT SIDE: IMAGE & VISUALS */}
        <div className="hidden md:block relative bg-slate-900">
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="h-full w-full object-cover opacity-80"
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Luxury Hotel Room"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-2xl font-bold">Luxury Redefined.</h3>
            <p className="text-slate-300">Your comfort is our top priority.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Reusable Input Sub-component for clean code
const InputField = ({
  icon,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
    className="flex flex-col gap-1.5"
  >
    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
      {icon} {label}
    </label>
    <input
      required
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder:text-slate-300 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium"
    />
  </motion.div>
);

export default BookRoomComponent;
