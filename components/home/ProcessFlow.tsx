"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const processSteps = [
  { title: "Feedstock Collection", image: "/images/process/feedstock.png" },
  { title: "Pre-treatment", image: "/images/process/pretreatment.png" },
  { title: "Anaerobic Digestion", image: "/images/process/digestion.png" },
  { title: "Gas Purification", image: "/images/process/purification.png" },
  { title: "Compression & Bottling", image: "/images/process/compression.png" },
  { title: "Bio-Fertilizer", image: "/images/process/fertilizer.png" },
];

export default function ProcessFlow() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          badge="How It Works"
          title="Typical CBG Project Flow"
          description="From organic waste to clean energy and bio-fertilizer."
          centered
          className="mb-16"
        />

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-steel-100 -translate-y-1/2 z-0" />
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 h-1 bg-forest-500 -translate-y-1/2 z-0 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10"
          >
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-card mb-4 relative bg-steel-100 shrink-0">
                  <ImagePlaceholder
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    isPlaceholder={true}
                  />
                  <div className="absolute inset-0 bg-forest-900/20 mix-blend-multiply" />
                </div>
                <h4 className="font-heading text-sm font-bold text-steel-900 text-center">{step.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
