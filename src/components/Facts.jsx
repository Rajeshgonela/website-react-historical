import { motion } from "framer-motion";

const facts = [
  "The region of Wayanad is believed to have been inhabited by early human communities thousands of years ago.",
  "Natural rock formations in this area have preserved markings and traces that offer clues to prehistoric life.",
  "The surrounding forests helped protect this site from large-scale changes for centuries.",
  "The cool climate and misty hills contributed to the preservation of stone and carvings.",
];

function Facts({facts = [] }) {
  return (
    <section className="bg-black pt-28 pb-20 text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif tracking-wider">
            Did You Know?
          </h2>
          <p className="mt-4 text-gray-400">
            Small facts that reveal a deeper story
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <p className="text-lg leading-relaxed text-gray-300">
                {fact}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Facts;
