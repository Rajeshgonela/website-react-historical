import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between rounded-b-xl bg-black/50 backdrop-blur-lg px-6 py-3 shadow-lg shadow-black/20">
          
          {/* Logo */}
          <span className="font-serif text-lg tracking-widest text-white">
            ECHOES OF TIME
          </span>

          {/* Links */}
          <ul className="flex gap-10 text-sm tracking-wider text-gray-300">
            <li className="cursor-pointer transition hover:text-white">
              Home
            </li>
            <li className="cursor-pointer transition hover:text-white">
              Explore
            </li>
            <li className="cursor-pointer transition hover:text-white">
              About
            </li>
          </ul>

        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
