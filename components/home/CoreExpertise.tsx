"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Wrench, Leaf, Zap, Filter, Flame, RefreshCw } from "lucide-react";

const expertise = [
  {
    icon: Wrench,
    title: "CBG Plant Engineering & Design",
    description: "End-to-end plant design and engineering tailored to your specific feedstock and capacity requirements.",
  },
  {
    icon: Leaf,
    title: "Feedstock Handling & Pre-treatment",
    description: "Specialized systems for agricultural waste, press mud, food waste, and Napier grass with precise size reduction and mixing.",
  },
  {
    icon: Zap,
    title: "Anaerobic Digestion (CSTR/RCC)",
    description: "Advanced CSTR and RCC digesters with mesophilic or thermophilic operation, mechanical agitation, and optimal HRT.",
  },
  {
    icon: Filter,
    title: "Biogas Purification (VPSA/Membrane)",
    description: "High-efficiency VPSA and Membrane separation systems achieving 96–98% biomethane purity, alongside robust H2S removal.",
  },
  {
    icon: Flame,
    title: "Gas Compression & Bottling",
    description: "Multi-stage compression up to 250 bar with mobile cascade filling stations and priority panel sequences.",
  },
  {
    icon: RefreshCw,
    title: "Bio-Fertilizer Management",
    description: "Industrial Solid-Liquid Separators (SLS) to recover high-quality dry organic manure and NPK-rich liquid fertilizer.",
  },
];

export default function CoreExpertise() {
  return (
    <section className="py-24 bg-steel-50 border-t border-steel-100">
      <Container>
        <SectionHeading
          badge="Our Expertise"
          title="End-to-End EPC Solutions"
          description="We provide comprehensive engineering, procurement, and construction services across the entire CBG value chain."
          centered
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-elevated transition-all duration-300 border border-steel-100 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-14 h-14 bg-forest-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-forest-100 transition-colors">
                  <Icon className="w-7 h-7 text-forest-600" />
                </div>
                <h3 className="font-heading text-xl font-bold text-steel-900 mb-3">{item.title}</h3>
                <p className="text-steel-600 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
