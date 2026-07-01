"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import {
  Compass, Wheat, FlaskConical, Filter, Gauge, Sprout,
} from "lucide-react";

const expertise = [
  {
    icon: Compass,
    title: "Plant Design",
    description: "Complete engineering from P&ID to civil design, optimized for your feedstock and capacity.",
    color: "from-forest-600 to-forest-500",
    bgLight: "bg-forest-50",
  },
  {
    icon: Wheat,
    title: "Feedstock Systems",
    description: "Engineered pre-treatment for agricultural, dairy, food waste, and MSW feedstocks.",
    color: "from-amber-500 to-amber-400",
    bgLight: "bg-amber-50",
  },
  {
    icon: FlaskConical,
    title: "Anaerobic Digestion",
    description: "CSTR digesters in RCC or GFS tanks, designed for maximum methane yield.",
    color: "from-forest-600 to-forest-500",
    bgLight: "bg-forest-50",
  },
  {
    icon: Filter,
    title: "Gas Purification",
    description: "VPSA and membrane purification systems producing >96% pure biomethane.",
    color: "from-sky-500 to-sky-400",
    bgLight: "bg-sky-50",
  },
  {
    icon: Gauge,
    title: "Compression & Bottling",
    description: "High-pressure compression up to 250 bar with cascade filling and tube trailers.",
    color: "from-steel-600 to-steel-500",
    bgLight: "bg-steel-50",
  },
  {
    icon: Sprout,
    title: "Bio-Fertilizer",
    description: "Solid-liquid separation and digestate processing for marketable organic fertilizer.",
    color: "from-emerald-500 to-emerald-400",
    bgLight: "bg-emerald-50",
  },
];

export default function CoreExpertise() {
  return (
    <section className="py-section bg-steel-50/50" aria-label="Core expertise">
      <Container>
        <SectionHeading
          badge="Core Expertise"
          title="Full-Spectrum CBG Plant "
          highlight="Technology"
          subtitle="Every system, every component — engineered, procured, installed, and commissioned by one team under one contract."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertise.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-[var(--radius-card)] p-6 lg:p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-transparent hover:border-forest-100"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} shadow-md mb-5`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-h4 font-bold text-steel-900 mb-3">
                {item.title}
              </h3>
              <p className="text-body-sm text-steel-500 leading-relaxed">
                {item.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-forest-500 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
