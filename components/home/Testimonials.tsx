"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "ADON delivered our 6 TPD CBG plant on time and within budget. Their team's understanding of the SATAT process made the entire journey smooth — from LOI to commissioning.",
    author: "Plant Owner",
    company: "CBG Facility, Gujarat",
    rating: 5,
  },
  {
    quote: "What sets ADON apart is their single-window accountability. We didn't have to coordinate between multiple vendors. Their EPC approach saved us months of project timeline.",
    author: "Managing Director",
    company: "Biogas Project, Haryana",
    rating: 5,
  },
  {
    quote: "The technical depth of ADON's team — especially in gas purification and MNRE subsidy processes — gave us confidence that our investment was in the right hands.",
    author: "Promoter",
    company: "Green Energy Venture, Uttarakhand",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-section" aria-label="Client testimonials">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients "
          highlight="Say"
          subtitle="Real feedback from CBG plant owners who trusted ADON with their projects."
        />

        <ScrollReveal>
          <div className="relative max-w-3xl mx-auto">
            {/* Quote card */}
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-card border border-steel-100 text-center"
            >
              {/* Quote icon */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-forest-50">
                  <Quote className="h-7 w-7 text-forest-600" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-body-lg text-steel-700 leading-relaxed italic max-w-2xl mx-auto">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-8">
                <div className="font-heading font-bold text-steel-900">
                  {testimonials[current].author}
                </div>
                <div className="text-body-sm text-steel-500 mt-1">
                  {testimonials[current].company}
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-steel-200 hover:border-forest-300 hover:bg-forest-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-steel-600" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-forest-600 w-8" : "bg-steel-300 hover:bg-steel-400"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-steel-200 hover:border-forest-300 hover:bg-forest-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-steel-600" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
