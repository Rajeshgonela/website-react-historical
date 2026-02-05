import { motion } from "framer-motion";

function LocationMap({ title, mapSrc }) {
  if (!mapSrc) return null;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/40 p-8">
      
      {/* Header */}
      <div className="mb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-2 flex items-center justify-center gap-2 text-gray-300"
        >
          <motion.span
            initial={{ scale: 0.9 }}
            whileInView={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            aria-hidden
          >
            📍
          </motion.span>
          <span className="text-sm tracking-widest uppercase">
            Location
          </span>
        </motion.div>

        <h3 className="text-2xl font-serif tracking-wide text-white">
          {title}
        </h3>
      </div>

      {/* Map grows to fill height */}
      <div className="relative mt-auto overflow-hidden rounded-xl border border-white/10">
        <iframe
          src={mapSrc}
          className="h-full min-h-[280px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default LocationMap;
