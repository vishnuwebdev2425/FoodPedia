import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to- from-orange-500 to-red-600 text-white py-16 text-center shadow-lg"
      >
        <h1 className="text-5xl text-orange-600 font-extrabold tracking-wide">
          🍽️ About Foodpedia
        </h1>
        <p className="mt-4 text-xl font-light max-w-2xl mx-auto">
          Smart hotel dining management — fast, digital, and effortless.
        </p>
      </motion.div>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center text-gray-700"
        >
          🌟 Who We Are
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600 mt-6 leading-relaxed text-center max-w-4xl mx-auto"
        >
          Foodpedia is a modern hotel management and food ordering platform
          designed to simplify hotel operations. We help hotels manage room
          dining, menu items, orders, billing, and performance analytics — all
          through a seamless web-based system.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-gray-700">🎯 Our Mission</h3>
            <p className="mt-3 text-lg text-gray-600 leading-relaxed">
              To empower hotels with smart digital tools that improve service
              speed, increase revenue, and elevate customer experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-gray-700">👁️ Our Vision</h3>
            <p className="mt-3 text-lg text-gray-600 leading-relaxed">
              To become the most reliable and scalable hotel management solution
              for hotels, restaurants, and resorts across the world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* What We Do */}
      <section className="py-16 max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-700">💡 What We Do</h3>
        <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Foodpedia offers a complete digital ecosystem for hotels, including:
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Room-wise food ordering",
            "Real-time order tracking",
            "Revenue management",
          
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white shadow-md rounded-xl border border-gray-100 text-lg font-medium text-gray-700 hover:shadow-xl hover:bg-orange-50 transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Goal */}
      <section className="bg-gray-100 py-16 text-center px-6">
        <h3 className="text-3xl font-bold text-gray-700">🚀 Our Goal</h3>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          To help hotels save time, reduce errors, and provide a premium dining
          experience for every guest.
        </p>
      </section>

      {/* Founder Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-700">
          👨‍💻 Meet Our Founder
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col md:flex-row items-center gap-10"
        >
          <img
            src="https://res.cloudinary.com/djcslopvv/image/upload/v1760286760/ChatGPT_Image_Oct_12_2025_09_55_03_PM_dglj3v.png"
            alt="founder"
            className="w-56 h-56 rounded-full shadow-lg object-cover"
          />

          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-gray-800">
              Vishnu Teja Akkupalli
            </h4>
            <p className="text-gray-600 mt-3 text-lg max-w-xl">
              Passionate developer and entrepreneur building intelligent
              solutions for the hospitality industry.
            </p>

            <div className="flex gap-6 text-3xl mt-6 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/vishnu-akkupalli-03297b2a7" target="_blank">
                <FaLinkedin className="text-blue-700 hover:scale-110 transition" />
              </a>
              <a href="https://github.com" target="_blank">
                <FaGithub className="hover:scale-110 transition" />
              </a>
              <a href="https://instagram.com" target="_blank">
                <FaInstagram className="text-pink-500 hover:scale-110 transition" />
              </a>
              <a href="mailto:vishnuteja@gmail.com">
                <FaEnvelope className="text-red-500 hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-orange-600 text-white p-10 text-center"
      >
        <h3 className="text-3xl font-bold">Ready To Explore Foodpedia?</h3>
        <p className="mt-3 text-lg font-light">
          Smart, fast, and modern hotel management — built for the future.
        </p>

        <Link to="/home/contactus">
          <button className="mt-6 px-10 py-4 bg-white text-orange-600 font-bold rounded-full shadow hover:bg-black hover:text-white transition">
            Contact Us
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUs;
