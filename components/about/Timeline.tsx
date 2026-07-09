"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const milestones = [
  {
    year: "2017",
    title: "Company Founded",
    desc: "ADON Equipments Pvt Ltd established in Ahmedabad, Gujarat — focused on biogas and CBG solutions.",
  },
  {
    year: "2019",
    title: "First EPC Project",
    desc: "Commissioned our first CBG plant, marking the entry into end-to-end EPC project delivery.",
  },
  {
    year: "2021",
    title: "SATAT Alignment",
    desc: "Fully aligned operations with India's SATAT Scheme, supporting nationwide CBG adoption.",
  },
  {
    year: "2023",
    title: "Manufacturing Unit Established",
    desc: "Set up dedicated manufacturing facility at Mahemdabad, Ahmedabad for in-house equipment fabrication.",
  },
  {
    year: "2024",
    title: "6+ Projects Commissioned",
    desc: "Crossed 42+ TPD total capacity across Gujarat, Haryana, and Uttarakhand with diverse feedstock projects.",
  },
  {
    year: "2025+",
    title: "Scaling Nationwide",
    desc: "Expanding to new states and larger capacity projects — advancing India's green fuel revolution.",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          badge="Our Journey"
          title="Milestones"
          centered
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-steel-200 md:-translate-x-px" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-forest-500 rounded-full border-4 border-white shadow-sm -translate-x-1.5 mt-2 z-10" />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-forest-50 text-forest-700 border border-forest-200 mb-2">
                    {m.year}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-steel-900 mb-1">{m.title}</h3>
                  <p className="text-steel-600 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
