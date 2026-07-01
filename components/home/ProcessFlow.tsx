"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import {
  Wheat, Cog, FlaskConical, Filter, Gauge, Package,
} from "lucide-react";

const steps = [
  { icon: Wheat, title: "Feedstock Collection", description: "Sourcing & receiving organic waste", color: "bg-amber-500" },
  { icon: Cog, title: "Pre-treatment", description: "Sizing, slurry prep & de-gritting", color: "bg-forest-600" },
  { icon: FlaskConical, title: "Anaerobic Digestion", description: "Biogas production in CSTR digesters", color: "bg-forest-700" },
  { icon: Filter, title: "Purification", description: "VPSA/Membrane CO₂ removal to >96% CH₄", color: "bg-sky-500" },
  { icon: Gauge, title: "Compression", description: "High-pressure compression to 250 bar", color: "bg-steel-700" },
  { icon: Package, title: "Bottling / Pipeline", description: "Cascade filling or CGD injection", color: "bg-forest-800" },
];

export default function ProcessFlow() {
  return (
    <section className="py-section overflow-hidden" aria-label="CBG production process">
      <Container>
        <SectionHeading
          badge="How It Works"
          title="The CBG Production "
          highlight="Process"
          subtitle="From raw organic waste to pipeline-quality Compressed Biogas — here's how our EPC-delivered plants operate."
        />

        {/* Desktop: Horizontal flow */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-[52px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-amber-400 via-forest-500 to-forest-800 opacity-30" />

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`relative z-10 flex items-center justify-center w-[72px] h-[72px] rounded-2xl ${step.color} shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-caption font-bold text-steel-700 z-20">
                      {index + 1}
                    </div>
                    {/* Connector dot */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${step.color} shadow-md z-20 left-1/2 -translate-x-1/2 mt-10`} />
                  </div>

                  {/* Text */}
                  <h3 className="font-heading text-body-sm font-bold text-steel-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-caption text-steel-500 leading-relaxed px-2">
                    {step.description}
                  </p>

                  {/* Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile/Tablet: Vertical flow */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="lg:hidden"
        >
          <div className="relative ml-8">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-gradient-to-b from-amber-400 via-forest-500 to-forest-800 opacity-30" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                  className="flex items-start gap-6 relative"
                >
                  {/* Icon */}
                  <div className="relative shrink-0">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${step.color} shadow-md`}>
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white shadow text-[10px] font-bold text-steel-700 flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-heading text-body font-bold text-steel-900">
                      {step.title}
                    </h3>
                    <p className="text-body-sm text-steel-500 mt-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
