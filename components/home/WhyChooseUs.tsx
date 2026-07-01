"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { CheckCircle2, Wrench, FileCheck, Users, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "End-to-End EPC Delivery",
    description: "Single-window accountability from concept design to plant commissioning. No finger-pointing, no coordination headaches — one team, one contract.",
  },
  {
    icon: FileCheck,
    title: "SATAT & Subsidy Expertise",
    description: "Deep knowledge of SATAT registration, MNRE Central Financial Assistance, and GOBARdhan schemes. We help you maximize subsidies and secure guaranteed offtake.",
  },
  {
    icon: Users,
    title: "Experienced Leadership",
    description: "Our team brings hands-on experience across 6+ commissioned CBG plants in 3 states, with expertise spanning diverse feedstocks and plant configurations.",
  },
  {
    icon: Handshake,
    title: "Proven Technology Partners",
    description: "Strategic partnerships with leading equipment manufacturers for VPSA, membrane purification, compressors, and GFS tank systems — ensuring proven, reliable technology in every plant.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-section" aria-label="Why choose ADON">
      <Container>
        <SectionHeading
          badge="Why ADON"
          title="Why Clients Choose "
          highlight="ADON"
          subtitle="In a sector where project delays and cost overruns are common, we deliver on time, on budget, and on spec."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              className="group flex gap-5 p-6 lg:p-8 rounded-[var(--radius-card)] bg-white border border-steel-100 hover:border-forest-200 hover:shadow-card transition-all duration-300"
            >
              <div className="shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-forest-50 group-hover:bg-forest-100 transition-colors">
                  <reason.icon className="h-6 w-6 text-forest-600" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-h4 font-bold text-steel-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-body-sm text-steel-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
