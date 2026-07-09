"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Droplets, Wind, Flame, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Droplets,
    label: "Raw Biogas",
    desc: "Produced through anaerobic decomposition of organic waste — agricultural residue, animal droppings, food waste, etc.",
  },
  {
    icon: Wind,
    label: "Purification",
    desc: "H₂S, CO₂, and water vapour are removed through advanced scrubbing and adsorption systems.",
  },
  {
    icon: Flame,
    label: "Compressed Biogas",
    desc: "Purified biomethane (≥95% CH₄) compressed to 200–250 bar — equivalent to CNG and ready for use.",
  },
];

export default function WhatIsCBG() {
  return (
    <section className="py-24 bg-forest-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

      <Container className="relative z-10">
        <SectionHeading
          badge="Understanding CBG"
          title="What is Compressed Biogas?"
          description="A renewable green fuel produced from organic waste — identical in composition to CNG, but 100% sustainable."
          centered
          light
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={i} variants={fadeInUp} className="relative">
                <div className="bg-forest-800/50 backdrop-blur-sm p-8 rounded-2xl border border-forest-700 text-center h-full">
                  <div className="w-16 h-16 mx-auto bg-forest-700/50 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
                    Step {i + 1}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{step.label}</h3>
                  <p className="text-forest-200 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-amber-400" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto bg-forest-800/30 backdrop-blur-sm p-6 rounded-xl border border-forest-700 text-center"
        >
          <p className="text-forest-200 leading-relaxed">
            Biogas naturally contains methane, carbon dioxide, and traces of water vapour, oxygen, and hydrogen sulphide. 
            These impurities make raw biogas unsuitable as fuel. Through our advanced purification and compression systems, 
            we convert it into <strong className="text-white">high-purity CBG</strong> — a clean, renewable, drop-in replacement for fossil fuels.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
