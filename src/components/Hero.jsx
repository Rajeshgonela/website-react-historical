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
            "url('https://lanternstay.com/wp-content/uploads/2023/02/Edakkal-Caves-wayanad.jpg')",
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
          Echoes of Time
        </motion.h1>

        <motion.div
          className="mt-4 h-px w-24 bg-white/40"
          variants={itemVariants}
        />

        <motion.p
          className="mt-6 max-w-2xl text-base md:text-xl text-gray-200 leading-relaxed"
          variants={itemVariants}
        >
          Discover the stories carved in stone across centuries
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Hero;

