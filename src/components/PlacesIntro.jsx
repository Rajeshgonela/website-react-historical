import { motion } from "framer-motion";

const places = [
  {
    id: "place1",
    name: "Edakkal Caves",
    subtitle:"Prehistoric stories carved into stone",
    image:
      "https://keralablogexpress.com/wp-content/uploads/2014/04/15438897085_8fddc68c35_o.jpg",
  },
  {
    id: "place2",
    name: "Thirunelli Temple ",
    subtitle:"A sacred sanctuary nestled in the hills",
    image:
      "https://thewoodsresorts.com/uploads/media/interesting-facts-about-thirulli-temple63eb3151d364c.jpg",
  },
  {
    id: "place3",
    name: "Wayanad Heritage Museum",
    subtitle:"Preserving the legacy of Wayanad’s early civilizations",
    image:
      "https://aftertherains.in/blog/wp-content/uploads/2024/02/A-Journey-Through-Wayanad-Heritage-Museum.jpg",
  },
];

function PlacesIntro() {
  const scrollToPlace = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif tracking-wider">
            The Places
          </h2>
          <p className="mt-4 text-gray-400">
            Three locations, three stories
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {places.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              onClick={() => scrollToPlace(place.id)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={place.image}
                alt={place.name}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                width="400"
                height="520"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/50" />

              {/* Text */}
              <div className="absolute bottom-8 left-8">
                <h3 className="text-xl font-serif tracking-wide">
                  {place.name}
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  Explore →
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PlacesIntro;
