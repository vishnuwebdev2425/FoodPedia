import { motion, useCycle } from "framer-motion";
import { useEffect } from "react";

const images = [
  "https://tse3.mm.bing.net/th/id/OIP.T03aJagv5g4JwoG0Di4gFwHaEb?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse1.mm.bing.net/th/id/OIP.mrBfWqZYr48StmfUSvM3IgHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://digbza2f4g9qo.cloudfront.net/-/media/IndyCar/News/Standard/2015/07/07-19-Favorite-Ice-Cream-Std.jpg?h=366&iar=0&w=610&vs=1&d=20150718T183422Z",
];
const features = [
  {
    title: "Faster Ordering",
    desc: "Guests order directly from room or table screens — no waiting, no errors.",
    icon: "⚡",
  },
  {
    title: "Smart Admin Dashboard",
    desc: "Track orders, rooms, menu items, and revenue from one simple dashboard.",
    icon: "📊",
  },
  {
    title: "Room & Table Based System",
    desc: "Designed specially for hotels with multiple rooms and dining areas.",
    icon: "🏨",
  },
  {
    title: "Auto Order Updates",
    desc: "Orders refresh automatically every few seconds — nothing gets missed.",
    icon: "🔄",
  },
  {
    title: "Reduce Staff Load",
    desc: "Less manual order taking means staff can focus on service quality.",
    icon: "👨‍🍳",
  },
  {
    title: "Secure & Reliable",
    desc: "Protected admin access ensures hotel data and orders stay safe.",
    icon: "🔒",
  },
];

const Home = () => {
  const [currentImage, cycleImage] = useCycle(0, 1, 2);

  useEffect(() => {
    const interval = setInterval(() => {
      cycleImage(); 
    }, 2000); 
    return () => clearInterval(interval);
  }, [cycleImage]);

  return (
    <div>
      <section className="min-h-screen flex items-center px-12 relative  from-orange-50 via-white to-white overflow-hidden">
        {/* Left Side - Hero Text */}
        <motion.div
          className="w-8/12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight italic text-gray-900">
            Turn every room into a smart dining experience
          </h1>
          <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-lg">
            Streamline orders, enhance guest experience, and manage everything
            from one smart dashboard.
          </p>
        </motion.div>

        {/* Right Side - Image Cards */}
        <div className="w-4/12 flex justify-center relative h-80 md:h-96">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`food ${index + 1}`}
              className="absolute w-64 h-80 md:w-72 md:h-96 object-cover rounded-3xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: currentImage === index ? 1 : 0,
                scale: currentImage === index ? 1 : 0.9,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Optional CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-12 left-12"
        >
          <button className="px-8 py-4 cursor-pointer bg-orange-600 text-white rounded-2xl font-semibold shadow-lg shadow-orange-300 hover:bg-orange-700 hover:shadow-xl transition-all">
            Get Started
          </button>
        </motion.div>
      </section>
      <div>
        <div>
          <section className="relative w-full  from-orange-50 via-white to-white py-24 px-6 overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute -top-40 -left-40  bg-orange-400/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-40 -right-40  bg-yellow-400/20 blur-3xl rounded-full" />

            <div className="relative max-w-6xl mx-auto text-center">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold mb-5"
              >
                Why Choose <span className="text-orange-600">Foodpedia</span>?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-600 max-w-2xl mx-auto mb-16"
              >
                A smarter, faster, and more efficient way to manage hotel dining
                operations.
              </motion.p>

              {/* Feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-orange-100 hover:shadow-2xl hover:shadow-orange-200 transition-all duration-300"
                  >
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <button className="px-8 py-4 cursor-pointer bg-orange-600 text-white rounded-2xl font-semibold shadow-lg shadow-orange-300 hover:bg-orange-700 hover:shadow-xl transition">
                  Register Your Hotel
                </button>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
