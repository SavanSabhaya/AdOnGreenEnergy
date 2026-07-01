"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const industries = [
  {
    title: "Agriculture & Agro-Based",
    image: "/images/industry/agri.png",
    description: "Converts farm waste (straw, husk, Napier grass) into energy and fertilizer.",
  },
  {
    title: "Sugar & Distillery",
    image: "/images/industry/sugar.png",
    description: "Processes press mud and spent wash into highly profitable CBG.",
  },
  {
    title: "Food Processing & FMCG",
    image: "/images/industry/food.png",
    description: "Reduces disposal costs of food/vegetable waste while generating clean fuel.",
  },
  {
    title: "Municipal Solid Waste",
    image: "/images/industry/msw.png",
    description: "Supports Smart City & Swachh Bharat initiatives via urban wet waste processing.",
  },
  {
    title: "Dairy & Poultry Farms",
    image: "/images/industry/dairy.png",
    description: "Utilizes cow dung and poultry litter for captive or commercial energy generation.",
  },
];

export default function IndustriesServed() {
  return (
    <section className="py-24 bg-steel-900 text-white border-t border-steel-800">
      <Container>
        <SectionHeading
          badge="Markets We Serve"
          title="Transforming Waste Across Industries"
          description="We tailor our CBG solutions to handle diverse organic feedstocks from multiple sectors."
          centered
          className="mb-16"
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-steel-800 rounded-2xl overflow-hidden border border-steel-700 hover:border-forest-500 transition-colors group"
            >
              <div className="h-40 w-full relative">
                <ImagePlaceholder
                  src={ind.image}
                  alt={ind.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  isPlaceholder={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900 via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-white mb-2">{ind.title}</h3>
                <p className="text-steel-400 text-sm leading-relaxed">{ind.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
