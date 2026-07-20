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
    bio: "Visionary leader with 15+ years of experience in industrial manufacturing. Focus on sustainable energy solutions, operational efficiency, and technological innovation.",
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
            <motion.div key={i} variants={fadeInUp} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-steel-100 flex flex-col group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-full aspect-[4/3] bg-steel-100 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-steel-200 to-steel-50 opacity-60" />
                <User className="w-20 h-20 text-steel-300 drop-shadow-sm group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
                <h3 className="font-heading text-2xl font-bold text-steel-900 mb-2 group-hover:text-forest-700 transition-colors">{member.name}</h3>
                <div className="mb-4">
                  <span className="inline-block text-forest-700 font-bold text-xs uppercase tracking-wider bg-forest-50 px-3 py-1 rounded-full border border-forest-100/50">
                    {member.title}
                  </span>
                </div>
                <p className="text-steel-600 text-sm leading-relaxed flex-grow">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
