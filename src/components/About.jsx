import { motion } from "framer-motion";

function About({ title, description, image }) {
  return (
    <section className="bg-black py-16 text-white">
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
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
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
              About {title}
            </h2>

            <div className="mt-6 h-px w-24 bg-white/40" />

            <p className="mt-8 text-lg leading-relaxed text-gray-300">
              {description}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
