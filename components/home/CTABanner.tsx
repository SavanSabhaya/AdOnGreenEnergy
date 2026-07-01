"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 bg-steel-900 text-white overflow-hidden relative">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-forest-900/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-forest-800/40 blur-3xl" />

      <Container className="relative z-10">
        <ScrollReveal className="bg-forest-900/60 border border-forest-700/50 rounded-3xl p-8 md:p-16 backdrop-blur-sm max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Build Your CBG Plant?</h2>
            <p className="text-forest-200 text-lg leading-relaxed">
              Connect with our EPC experts to discuss your feedstock, capacity goals, and available government subsidies.
            </p>
          </div>
          
          <div className="md:w-1/2 w-full max-w-md">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = '/contact'; }}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-steel-300 focus:outline-none focus:border-amber-400 transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-steel-300 focus:outline-none focus:border-amber-400 transition-colors"
                />
                <Button type="submit" variant="accent" className="w-full justify-center group">
                  Contact Us Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
