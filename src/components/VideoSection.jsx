import { motion } from "framer-motion";

function VideoSection() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-5xl px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif tracking-wider">
            Documentary
          </h2>
          <p className="mt-4 text-gray-400">
            Experience the place through motion and sound
          </p>
        </div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-lg shadow-black/40"
        >
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/cXI3g1TjuoM"
              title="Historical Documentary"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Optional caption */}
        <p className="mt-8 text-center text-sm text-gray-500">
          A visual exploration of history and landscape
        </p>

      </div>
    </section>
  );
}

export default VideoSection;
