"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { fadeInUp } from "@/lib/animations";

const heroImages = [
  "/images/assets/bio thermal.png",
  "/images/assets/bio CNG.png",
  "/images/assets/bio energy.png",
  "/images/assets/green hydrogen.png"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-forest-950 transition-colors duration-1000">
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <div 
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
          >
            <ImagePlaceholder
              src={src}
              alt="Adon Green Energy"
              fill
              priority={index === 0}
              className="object-cover object-right opacity-90"
              isPlaceholder={false}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/80 to-transparent z-10" />
      </div>

      <Container className="relative z-10 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              Supporting India's <span className="text-amber-400">Green Fuel</span> Revolution through CBG
            </h1>
            <p className="text-lg md:text-xl text-steel-200 mb-10 max-w-2xl leading-relaxed">
              EPC company for CBG plant design, procurement, construction, and commissioning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Get a Free Plant Consultation
              </Button>
              <Button href="/services" variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm">
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
