"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
  "MC-CSTR with Thermophilic Digestion",
  "Up to 20% raw biogas generation",
  "Less multi-raw-material required",
  "≤3% loss of Bio-CNG via VPSA technology",
  "≥96% Bio-CNG purity",
  "Minimum timeline to project commissioning",
  "1-year full guarantee + expert on-site engineer",
  "Low capital investment, ROI within 30 months",
  "Government benefits and buyback guarantee",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-forest-50">
      <Container>
        <SectionHeading
          badge="Why Choose ADON"
          title="The ADON Advantage"
          description="Industry-leading technology and guaranteed performance for maximum ROI."
          centered
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {differentiators.map((diff, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-start gap-3 bg-white p-5 rounded-xl border border-steel-100 shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
              <p className="text-steel-700 text-sm font-medium leading-relaxed">{diff}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
