import { motion } from "framer-motion";

const images = [
  "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1687342710_edakkal_caves.jpg.webp",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  "https://keralablogexpress.com/wp-content/uploads/2014/04/15438897085_8fddc68c35_o.jpg",
  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
];


function Gallery() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif tracking-wider">
            Visual Gallery
          </h2>
          <p className="mt-4 text-gray-400">
            Moments captured through time
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden rounded-2xl"
            >
                <img
                    src={src}
                    alt="Gallery view"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    width="400"
                    height="320"
                    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />


              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;
