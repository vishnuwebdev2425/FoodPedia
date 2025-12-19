import { motion } from "framer-motion";

const Footer=() =>{
  const links = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
    { name: "About", href: "#" },
  ];

  const socials = [
    { icon: "🐦", href: "https://twitter.com" },
    { icon: "📘", href: "https://facebook.com" },
    { icon: "📸", href: "https://instagram.com" },
    { icon: "💼", href: "https://linkedin.com" },
  ];

  return (
    <footer className="relative bg-gray-50 py-16 px-6">
      {/* Background glow effect */}
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2  bg-orange-400/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-orange-600"
        >
          Foodpedia
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-8 text-gray-600 font-medium"
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-orange-600 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-4 text-2xl"
        >
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center text-gray-400 text-sm"
      >
        &copy; {new Date().getFullYear()} Foodpedia. All rights reserved.
      </motion.div>
    </footer>
  );
}

export default Footer