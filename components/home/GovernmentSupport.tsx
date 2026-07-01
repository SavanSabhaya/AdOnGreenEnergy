"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Landmark, FileCheck, CheckCircle } from "lucide-react";

export default function GovernmentSupport() {
  return (
    <section className="py-20 bg-forest-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
      
      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-caption font-semibold tracking-widest uppercase mb-4 bg-white/10 text-forest-300 border border-white/10">Government Initiatives</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Unlocking Subsidies & Support</h2>
            <p className="text-forest-200 max-w-2xl mx-auto text-lg">We help you navigate and secure major government incentives for CBG production.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-forest-800/50 p-6 rounded-2xl border border-forest-700 backdrop-blur-sm">
              <Landmark className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">SATAT Scheme</h3>
              <p className="text-forest-200 text-sm">Assured gas purchase via Letter of Intent (LOI) by IOC, BPCL, HPCL, GAIL with long-term revenue guarantee.</p>
            </div>
            
            <div className="bg-forest-800/50 p-6 rounded-2xl border border-forest-700 backdrop-blur-sm">
              <FileCheck className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">MNRE CFA Subsidy</h3>
              <p className="text-forest-200 text-sm">Central Financial Assistance up to ₹10 Crore per project (e.g., ₹4 Cr per 4800 kg/day capacity).</p>
            </div>

            <div className="bg-forest-800/50 p-6 rounded-2xl border border-forest-700 backdrop-blur-sm">
              <CheckCircle className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">GOBARdhan & More</h3>
              <p className="text-forest-200 text-sm">Support for rural waste management, plus extra 20% subsidy for North-East states and Gaushalas.</p>
            </div>
          </div>

          <div className="text-center">
            <Button href="/subsidy-support" variant="accent" size="lg" showArrow>
              Explore Subsidy & Support
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
