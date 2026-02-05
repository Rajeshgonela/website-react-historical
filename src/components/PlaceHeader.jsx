import { motion } from "framer-motion";

function PlaceHeader({ title, subtitle }) {
  return (
    <section className="bg-black pt-20 pb-12 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-serif tracking-wider"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-400"
          >
            {subtitle}
          </motion.p>
        )}

        {/* subtle divider */}
        <div className="mx-auto mt-12 h-px w-32 bg-white/20" />
      </div>
    </section>
  );
}

export default PlaceHeader;
