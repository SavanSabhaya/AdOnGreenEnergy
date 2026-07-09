"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import {
  Leaf, ArrowUpDown, IndianRupee, Fuel, Tractor, Sprout,
  ShieldCheck, Factory, Wallet, Users,
} from "lucide-react";

const benefits = [
  { icon: Leaf, title: "Eco-Friendly Green Fuel", desc: "Renewable energy source that reduces CO₂ emissions and supports climate goals." },
  { icon: ArrowUpDown, title: "Waste to Wealth", desc: "Converts agriculture waste, cow dung, and food waste into fuel and bio-fertilizer." },
  { icon: IndianRupee, title: "Strong Revenue Model", desc: "Dual income from gas sales and fertilizer sales, backed by government pricing (SATAT)." },
  { icon: Fuel, title: "Fossil Fuel Substitute", desc: "Direct drop-in replacement for diesel, petrol, LPG, and PNG — same usage as CNG." },
  { icon: Tractor, title: "Farmer Income Boost", desc: "Farmers earn by selling crop residue and animal waste as feedstock." },
  { icon: Sprout, title: "Organic Fertilizer", desc: "Digestate produces solid manure and NPK-rich liquid fertilizer, cutting chemical dependency." },
  { icon: ShieldCheck, title: "Energy Security", desc: "Reduces dependence on imported fuels, promoting Atmanirbhar Bharat." },
  { icon: Factory, title: "Industrial & Transport Use", desc: "Used in vehicles (CNG replacement), boilers, furnaces, and power generation." },
  { icon: Wallet, title: "Low Operating Cost", desc: "Feedstock is low-cost or waste. Stable long-term operation with high plant life." },
  { icon: Users, title: "Employment Generation", desc: "Creates rural jobs in plant operation, waste collection, and transportation." },
];

const highlights = [
  { label: "CH₄ Purity", value: "≥ 95%" },
  { label: "Pressure", value: "200–250 bar" },
  { label: "Source", value: "100% Renewable" },
  { label: "Backing", value: "Government Supported" },
];

export default function BenefitsOfCBG() {
  return (
    <section className="py-24 bg-white border-t border-steel-100">
      <Container>
        <SectionHeading
          badge="Why CBG?"
          title="Benefits of Compressed Biogas"
          description="CBG is one of the few industries that simultaneously generates energy, fertilizer, rural employment — all from waste."
          centered
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16"
        >
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-steel-50 p-5 rounded-xl border border-steel-100 hover:border-forest-300 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 bg-forest-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-forest-100 transition-colors">
                  <Icon className="w-5 h-5 text-forest-600" />
                </div>
                <h4 className="font-heading text-sm font-bold text-steel-900 mb-1">{item.title}</h4>
                <p className="text-steel-600 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Highlights Strip */}
        <div className="bg-forest-900 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {highlights.map((h, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-heading font-bold text-amber-400 mb-1">{h.value}</div>
                <div className="text-forest-300 text-sm font-medium">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
