"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Leaf } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-bg-hero overflow-hidden noise-overlay">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-forest-500/20 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px]"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative z-10 py-20 lg:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-forest-300 text-body-sm font-medium">
              <Leaf className="h-4 w-4" />
              SATAT Registered EPC Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-display font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Supporting India&apos;s{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-forest-400 to-emerald-300 bg-clip-text text-transparent">
                Green Fuel Revolution
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-forest-500 to-emerald-400 origin-left"
              />
            </span>{" "}
            through CBG
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-steel-300 max-w-2xl leading-relaxed"
          >
            End-to-end EPC solutions for Compressed Biogas plants — from concept design
            and engineering to procurement, construction, and commissioning across India.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
            <Button
              href="/contact"
              variant="accent"
              size="lg"
              showArrow
              id="hero-cta-consultation"
            >
              Get a Free Plant Consultation
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
              id="hero-cta-services"
            >
              Explore Our Services
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 flex flex-wrap gap-8 sm:gap-12"
          >
            {[
              { value: "6+", label: "Plants Commissioned" },
              { value: "3", label: "States Served" },
              { value: "49+", label: "TPD Total Capacity" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-px h-10 bg-forest-600/50" />
                <div>
                  <div className="font-heading text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-caption text-steel-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
