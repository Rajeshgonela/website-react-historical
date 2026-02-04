import { motion } from "framer-motion";

function About() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl"
          >
            <img
                loading="lazy"  decoding="async"
              src="https://lanternstay.com/wp-content/uploads/2023/02/Edakkal-Caves-wayanad.jpg"
              alt="Historical place in Wayanad"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif tracking-wider">
              About the Place
            </h2>

            <div className="mt-6 h-px w-24 bg-white/40" />

            <p className="mt-8 text-lg leading-relaxed text-gray-300">
              Hidden within the mist-covered hills of Wayanad, this ancient
              site stands as a quiet witness to centuries of human presence.
              Shaped by time, nature, and culture, it reflects the enduring
              relationship between people and the land they once called home.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Long before modern paths reached these forests, the place held
              significance as a center of activity, belief, and expression.
              Its surroundings, untouched and serene, continue to preserve
              the stories etched into stone and memory.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
