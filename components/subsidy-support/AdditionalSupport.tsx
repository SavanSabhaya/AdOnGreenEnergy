"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";

export default function AdditionalSupport() {
  const supports = [
    {
      title: "GOBARdhan Scheme Integration",
      desc: "Additional support under the Galvanizing Organic Bio-Agro Resources Dhan scheme for rural sanitation and waste-to-wealth projects."
    },
    {
      title: "Viability Gap Funding (VGF)",
      desc: "Eligible projects can tap into state-specific VGF mechanisms to bridge commercial shortfalls."
    },
    {
      title: "Priority Sector Lending",
      desc: "CBG is classified under Priority Sector Lending (PSL) by the RBI, unlocking favorable loan terms up to ₹50-100 Crore."
    },
    {
      title: "Carbon Credits & ESG",
      desc: "Generate verifiable carbon credits and fulfill corporate ESG mandates through green energy production."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            badge="Beyond CFA"
            title="Additional Ecosystem Support"
            centered
            className="mb-12"
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 gap-6 mb-12"
          >
            {supports.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex gap-4 p-5 rounded-xl border border-steel-100 shadow-sm hover:border-amber-300 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-steel-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-steel-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="bg-forest-50 p-6 md:p-8 rounded-2xl border border-forest-200 text-center flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="font-heading text-xl font-bold text-forest-900 mb-2">The 20% Regional Bonus</h3>
              <p className="text-forest-700 m-0">
                Projects located in <strong>North-East states</strong>, registered <strong>hilly regions</strong>, or integrated with <strong>Gaushalas</strong> are eligible for an extra 20% incentive on top of the base MNRE CFA amount.
              </p>
            </div>
            <div className="shrink-0 bg-white text-forest-700 font-bold px-6 py-3 rounded-xl border border-forest-200 shadow-sm text-lg">
              +20% Top-Up
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
