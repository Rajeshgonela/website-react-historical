import { motion } from "framer-motion";

const timelines = [
  {
    id: "place1",
    name: "Place One",
    events: [
      { year: "Prehistoric", text: "Early human presence and activity." },
      { year: "Ancient Era", text: "Cultural and social significance emerged." },
      { year: "Modern Times", text: "Recognized and preserved as heritage." },
    ],
  },
  {
    id: "place2",
    name: "Place Two",
    events: [
      { year: "Early Settlements", text: "Inhabited by early communities." },
      { year: "Medieval Period", text: "Developed regional importance." },
      { year: "Present Day", text: "Maintained as a historical landmark." },
    ],
  },
  {
    id: "place3",
    name: "Place Three",
    events: [
      { year: "Ancient Roots", text: "Origins traced back centuries." },
      { year: "Cultural Peak", text: "Played a key cultural role." },
      { year: "Today", text: "Studied and admired for its legacy." },
    ],
  },
];

function TimelinesIntro() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif tracking-wider">
            Through the Ages
          </h2>
          <p className="mt-4 text-gray-400">
            A brief timeline of each place
          </p>
        </div>

        {/* Timelines Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {timelines.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="mb-6 text-xl font-serif tracking-wide">
                {place.name}
              </h3>

              <div className="space-y-6 border-l border-white/20 pl-6">
                {place.events.map((event, i) => (
                  <div key={i}>
                    <h4 className="text-sm font-semibold tracking-widest text-white">
                      {event.year}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-gray-300">
                      {event.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TimelinesIntro;
