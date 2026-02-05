import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1
          onClick={() => scrollTo("hero")}
          className="cursor-pointer font-serif text-lg tracking-wider text-white"
        >
          Echoes of Time
        </h1>

        {/* Menu */}
<ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
  <li className="cursor-pointer hover:text-white" onClick={() => scrollTo("hero")}>
    Home
  </li>
  <li className="cursor-pointer hover:text-white" onClick={() => scrollTo("places")}>
    Places
  </li>
  <li className="cursor-pointer hover:text-white" onClick={() => scrollTo("timelines")}>
    Timelines
  </li>
  {/* <li className="cursor-pointer hover:text-white" onClick={() => scrollTo("gallery")}>
    Gallery
  </li> */}
  <li className="cursor-pointer hover:text-white" onClick={() => scrollTo("footer")}>
    Contact
  </li>
</ul>


      </div>
    </nav>
  );
}

export default Navbar;
