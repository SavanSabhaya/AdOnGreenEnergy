"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { industries } from "@/lib/data/industries";
import { CheckCircle2 } from "lucide-react";
import * as LucideIcons from "lucide-react";

export default function IndustriesPage() {
  const getIcon = (name: string) => {
    const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[name];
    return IconComponent ? <IconComponent className="h-8 w-8 text-white" /> : null;
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-20 lg:py-28 gradient-bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-caption font-semibold tracking-widest uppercase mb-4 bg-white/10 text-forest-300 border border-white/10">Industries We Serve</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-h1 font-bold text-white tracking-tight max-w-3xl">
              Sector-Specific <span className="text-amber-400">CBG Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-steel-300 max-w-2xl leading-relaxed">
              Every industry has unique organic waste streams. We engineer CBG plants optimized for your specific feedstock characteristics.
            </p>
          </motion.div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Industry Details */}
      <section className="py-section">
        <Container>
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.id}>
                <div id={industry.id} className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                  {/* Visual */}
                  <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-forest-100 to-forest-50 p-12 flex items-center justify-center aspect-[4/3]">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-forest-700 to-forest-500 shadow-lg mb-4">
                          {getIcon(industry.icon)}
                        </div>
                        <h3 className="font-heading text-xl font-bold text-steel-900">{industry.title}</h3>
                      </div>
                      <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-amber-200/40 animate-pulse-slow" />
                      <div className="absolute bottom-8 left-8 w-10 h-10 rounded-full bg-forest-200/50 animate-float" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <h2 className="font-heading text-h2 font-bold text-steel-950 tracking-tight">{industry.title}</h2>
                    <p className="mt-4 text-body text-steel-600 leading-relaxed">{industry.description}</p>

                    <div className="mt-6 p-4 rounded-xl bg-forest-50 border border-forest-100">
                      <h4 className="text-body-sm font-bold text-forest-800 uppercase tracking-wider mb-2">Feedstock Types</h4>
                      <p className="text-body-sm text-forest-700">{industry.feedstockType}</p>
                    </div>

                    <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-100">
                      <h4 className="text-body-sm font-bold text-amber-800 uppercase tracking-wider mb-2">Value Proposition</h4>
                      <p className="text-body-sm text-amber-700">{industry.valueProposition}</p>
                    </div>

                    <div className="mt-6">
                      <Button href="/contact" variant="primary" showArrow>
                        Discuss Your Project
                      </Button>
                    </div>
                  </div>
                </div>
                {index < industries.length - 1 && <div className="section-divider mt-16" />}
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
