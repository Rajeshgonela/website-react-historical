import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/6/67/DR0069DSC_9221.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/65" />

      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6 gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-serif tracking-wider leading-tight"
          variants={itemVariants}
        >
          Heritage of Wayanad
        </motion.h1>

        <motion.div
          className="mt-4 h-px w-24 bg-white/40"
          variants={itemVariants}
        />

        <motion.p
          className="mt-6 max-w-2xl text-base md:text-xl text-gray-200 leading-relaxed"
          variants={itemVariants}
        >
          Three places, centuries of history, one journey through time
        </motion.p>
      </motion.div>
      {/* Scroll indicator */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
  <span className="mb-3 text-xs tracking-widest text-gray-300 animate-scroll-text">
    SCROLL
  </span>

  <div className="h-10 w-px bg-white/40" />
</div>


    </section>
  );
}

export default Hero;

