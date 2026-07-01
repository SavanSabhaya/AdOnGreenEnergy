"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { fadeInUp } from "@/lib/animations";

export default function ContactHero() {
  return (
    <section className="py-20 lg:py-28 bg-forest-900 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      <Container className="relative z-10 text-center">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-h1 font-bold text-white tracking-tight mb-6">
            Let's Build Your <span className="text-amber-400">CBG Plant</span> Together
          </h1>
          <p className="text-lg text-forest-200 max-w-2xl mx-auto">
            Get in touch with our engineering and EPC experts to discuss your upcoming project.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
