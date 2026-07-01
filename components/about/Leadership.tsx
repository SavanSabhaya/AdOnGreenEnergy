"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { User } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder"; // Even though it's an icon, we can still use the badge manually for the avatar container

const team = [
  {
    name: "Ankit R Jagani",
    title: "Director",
    bio: "Leads strategic initiatives in engineering, project execution, and technology integration. Expertise in CBG/Biogas Project Development, EPC Project Management, Renewable Energy Infrastructure, Waste-to-Energy Solutions, Strategic Partnerships & Technology Integration.",
  },
  {
    name: "Chirag Bhavsar",
    title: "Electrical Engineer / Technical Leader",
    bio: "Visionary leader with 8+ years of experience in industrial manufacturing. Focus on sustainable energy solutions, operational efficiency, and technological innovation.",
  },
  {
    name: "Gajendra Saini",
    title: "AGM-CBG",
    bio: "Mechanical Engineer with 10+ years experience in CBG. Expertise spans the entire CBG value chain: feedstock sourcing, anaerobic digestion, gas purification, compression, and commercialization.",
  },
];

export default function Leadership() {
  return (
    <section className="py-24 bg-steel-50 border-t border-steel-100">
      <Container>
        <SectionHeading
          badge="Leadership"
          title="Guided by Experience"
          centered
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {team.map((member, i) => (
            <motion.div key={i} variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-sm border border-steel-100 text-center">
              <div className="w-32 h-32 mx-auto bg-steel-200 rounded-full mb-6 flex items-center justify-center relative overflow-hidden">
                <User className="w-16 h-16 text-steel-400" />
                <div className="absolute top-2 right-2 bg-black/75 text-white text-[0.4rem] font-bold px-1 py-0.5 rounded-sm uppercase tracking-wider z-10 text-center leading-tight">
                  PLACEHOLDER<br/>Real photo soon
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-steel-900 mb-1">{member.name}</h3>
              <p className="text-forest-600 font-medium text-sm mb-4">{member.title}</p>
              <p className="text-steel-600 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
