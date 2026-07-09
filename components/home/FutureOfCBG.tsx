"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Target, Leaf, Wheat, TrendingUp, IndianRupee, Sprout } from "lucide-react";

const futureItems = [
  {
    icon: Target,
    title: "5,000+ CBG Plants Targeted",
    desc: "Under SATAT, supported by IOC, BPCL, HPCL, GAIL, ATGL & GGL with long-term offtake agreements.",
  },
  {
    icon: Leaf,
    title: "Clean Energy Transition",
    desc: "Replacing fossil fuels with renewable gas — reducing CO₂ emissions and supporting India's Net Zero goals.",
  },
  {
    icon: Wheat,
    title: "Abundant Feedstock",
    desc: "India's vast biomass — agriculture residue, press mud, cow dung, food waste — ensures continuous supply.",
  },
  {
    icon: TrendingUp,
    title: "Rising Green Fuel Demand",
    desc: "Increasing adoption in CNG transport, industrial fuel, and City Gas Distribution (CGD) networks.",
  },
  {
    icon: IndianRupee,
    title: "₹2–3 Lakh Crore Market",
    desc: "CBG can replace diesel, LPG, and PNG — a massive market potential growing rapidly.",
  },
  {
    icon: Sprout,
    title: "Bio-Fertilizer Revolution",
    desc: "Digestate is becoming a high-value organic fertilizer product, creating an additional revenue stream.",
  },
];

export default function FutureOfCBG() {
  return (
    <section className="py-24 bg-steel-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          badge="Market Outlook"
          title="The Future of CBG in India"
          description="CBG is at the forefront of India's green fuel revolution — backed by government policy, abundant feedstock, and rising demand."
          centered
          light
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {futureItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-steel-800/60 backdrop-blur-sm p-6 rounded-2xl border border-steel-700 hover:border-amber-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-steel-700/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-steel-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
