import { motion } from "framer-motion";

const events = [
  {
    year: "Prehistoric Era",
    text:
      "Evidence suggests early human presence in this region, with markings and traces that reflect one of the earliest forms of expression and communication.",
  },
  {
    year: "Early Settlements",
    text:
      "Over centuries, the surrounding landscape supported small communities who adapted to the terrain, forests, and climate of Wayanad.",
  },
  {
    year: "Cultural Significance",
    text:
      "The site gradually gained importance as a place of cultural, spiritual, or social relevance, shaping traditions passed through generations.",
  },
  {
    year: "Modern Recognition",
    text:
      "In recent times, the historical value of this place has been recognized, leading to efforts to preserve and study its legacy.",
  },
];

function Timeline() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-serif tracking-wider">
            Historical Background
          </h2>
          <p className="mt-4 text-gray-400">
            A journey through time
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/20 pl-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-16"
            >
              {/* Dot */}
              <span className="absolute -left-[6px] mt-2 h-3 w-3 rounded-full bg-white" />

              <h3 className="text-xl font-serif tracking-wide">
                {event.year}
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                {event.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Timeline;
