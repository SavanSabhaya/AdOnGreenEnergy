"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Tractor, Factory, UtensilsCrossed, Building2, Milk } from "lucide-react";

const industries = [
  { icon: Tractor, title: "Agriculture & Agro-Based", feedstock: "Crop residue, paddy straw, sugarcane trash", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
  { icon: Factory, title: "Sugar & Distillery", feedstock: "Press mud, spent wash, bagasse", color: "text-forest-600", bg: "bg-forest-50", border: "border-forest-200" },
  { icon: UtensilsCrossed, title: "Food & FMCG", feedstock: "Food processing waste, expired food", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
  { icon: Building2, title: "Municipal Solid Waste", feedstock: "Segregated organic MSW, market waste", color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-200" },
  { icon: Milk, title: "Dairy & Poultry", feedstock: "Cattle dung, poultry litter, dairy effluent", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
];

export default function IndustriesServed() {
  return (
    <section className="py-section bg-steel-50/50" aria-label="Industries served">
      <Container>
        <SectionHeading
          badge="Industries We Serve"
          title="CBG Solutions Across "
          highlight="Industries"
          subtitle="We design feedstock-specific CBG plants for diverse organic waste streams across India's key industrial sectors."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative group rounded-[var(--radius-card)] ${industry.bg} border ${industry.border} p-6 text-center hover:shadow-card transition-all duration-300 cursor-pointer`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${industry.bg} mb-4`}>
                <industry.icon className={`h-7 w-7 ${industry.color}`} />
              </div>
              <h3 className="font-heading text-body-sm font-bold text-steel-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-caption text-steel-500 leading-relaxed">
                {industry.feedstock}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
