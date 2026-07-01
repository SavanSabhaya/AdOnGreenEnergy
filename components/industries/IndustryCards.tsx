"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Leaf, Droplets, Trash2, Tractor, Apple } from "lucide-react";

const industries = [
  {
    title: "Agriculture & Agro-Based Industries",
    icon: Tractor,
    image: "/images/industry/agri.png",
    feedstocks: ["Crop residue (straw, husk)", "Napier grass", "Agro-processing waste"],
    valueProp: "Converts farm waste into energy + organic fertilizer.",
  },
  {
    title: "Sugar & Distillery Industry",
    icon: Droplets,
    image: "/images/industry/sugar.png",
    feedstocks: ["Press mud", "Spent wash"],
    valueProp: "Unlocks new revenue streams from high-yield distillery by-products.",
  },
  {
    title: "Food Processing & FMCG",
    icon: Apple,
    image: "/images/industry/food.png",
    feedstocks: ["Food waste", "Vegetable waste", "Expired products"],
    valueProp: "Reduces disposal cost, generates clean fuel.",
  },
  {
    title: "Municipal Solid Waste (MSW)",
    icon: Trash2,
    image: "/images/industry/msw.png",
    feedstocks: ["Wet waste from cities", "Organic municipal waste"],
    valueProp: "Supports Smart City & Swachh Bharat initiatives.",
  },
  {
    title: "Dairy & Poultry Farms",
    icon: Leaf,
    image: "/images/industry/dairy.png",
    feedstocks: ["Cow dung", "Poultry litter"],
    valueProp: "Turns animal waste into a stable, profitable energy source.",
  },
];

export default function IndustryCards() {
  return (
    <section className="py-24 bg-steel-50 border-t border-steel-100">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-elevated transition-shadow duration-300 border border-steel-100 flex flex-col sm:flex-row group"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto relative shrink-0">
                  <ImagePlaceholder
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    isPlaceholder={true}
                  />
                  <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-forest-50 rounded-lg flex items-center justify-center text-forest-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-steel-900 leading-tight">{ind.title}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-steel-500 uppercase tracking-wider mb-2">Key Feedstocks:</p>
                    <ul className="list-disc list-inside text-steel-600 text-sm space-y-1">
                      {ind.feedstocks.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-steel-100">
                    <p className="text-forest-700 font-medium text-sm italic">{ind.valueProp}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
