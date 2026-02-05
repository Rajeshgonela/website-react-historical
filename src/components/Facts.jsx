import { motion } from "framer-motion";

const facts = [
  "The region of Wayanad is believed to have been inhabited by early human communities thousands of years ago.",
  "Natural rock formations in this area have preserved markings and traces that offer clues to prehistoric life.",
  "The surrounding forests helped protect this site from large-scale changes for centuries.",
  "The cool climate and misty hills contributed to the preservation of stone and carvings.",
];

function Facts({ facts = [] }) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8">
      <h1 className="mb-6 text-center text-2xl font-serif tracking-wide text-white">
        Did You Know?
      </h1>

      <ol className="space-y-6">
        {facts.map((fact, index) => (
          <li key={index} className="flex gap-4">
            {/* Number */}
            <span className="text-lg font-semibold text-white/70">
              {index + 1}.
            </span>

            {/* Fact text */}
            <p className="text-base leading-relaxed text-gray-300">
              {fact}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Facts;


