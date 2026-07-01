"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { fadeInUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder
          src="/images/plant/hero_bg.png"
          alt="Large-scale industrial CBG plant at golden hour"
          fill
          priority
          className="object-cover"
          isPlaceholder={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/80 to-transparent" />
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
            <span className="inline-block px-4 py-1.5 rounded-full text-caption font-semibold tracking-widest uppercase mb-6 bg-forest-800/50 text-forest-100 border border-forest-500/30 backdrop-blur-sm">
              ADON Green Energy
            </span>
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
