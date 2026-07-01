"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const capacities = [0.5, 1.0, 2.0, 2.5, 3.0, 5.0, 6.0, 8.0, 10.0, 12.0, 15.0];

export default function PlantCapacityRange() {
  return (
    <section className="py-24 bg-forest-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
      
      <Container className="relative z-10 text-center">
        <SectionHeading
          badge="Scalable Engineering"
          title="Plant Capacities Offered"
          description="From small-scale captive consumption to large-scale commercial grids, we engineer CBG plants across all capacities."
          centered
          light
          className="mb-16"
        />

        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {capacities.map((cap, index) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-forest-800 border border-forest-600 rounded-xl px-5 py-4 flex flex-col items-center min-w-[100px] shadow-sm"
              >
                <span className="font-heading text-2xl font-bold text-amber-400 mb-1">{cap.toFixed(1)}</span>
                <span className="text-xs font-semibold tracking-wider text-forest-200 uppercase">TPD CBG</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button href="/contact" variant="accent" size="lg" showArrow>
            Discuss Your Plant Capacity
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
