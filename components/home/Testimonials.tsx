"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Adon Green Energy has a dedicated and committed team of professional technocrats who are always eager to address the client needs and their support round to clock.",
    author: "Bhadresh Patel",
    title: "CEO",
  },
  {
    quote: "The professionalism and expertise of Adon Green Energy's technical team was outstanding. Seeing the meter running has been satisfying and honestly, a lot of fun. They have really supportive team.",
    author: "HPCL",
    title: "Project Developer",
  },
  {
    quote: "It becomes our moral responsibility to move to renewable energy. Three reasons to go for Adon Green Energy. First, right price second, promptness to queries and bring solutions and lastly experience.",
    author: "Dr. Rajesh Iyer",
    title: "Project Developer",
  },
  {
    quote: "There is no other brand or no other company can stand beside Adon Green Energy. When its captive plant there is no company which can compete Adon Green Energy.",
    author: "Mr. Rajeev Aggrawal",
    title: "CEO",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-steel-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center relative">
          <Quote className="w-16 h-16 text-forest-200 mx-auto mb-8 opacity-50" />
          
          <div className="h-64 sm:h-48 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="text-xl md:text-2xl text-steel-700 font-medium italic mb-8 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <div className="font-bold text-steel-900">{testimonials[currentIndex].author}</div>
                  <div className="text-steel-500 text-sm">{testimonials[currentIndex].title}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full bg-white border border-steel-200 text-steel-600 hover:text-forest-600 hover:border-forest-600 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? "w-6 bg-forest-600" : "bg-steel-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full bg-white border border-steel-200 text-steel-600 hover:text-forest-600 hover:border-forest-600 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
