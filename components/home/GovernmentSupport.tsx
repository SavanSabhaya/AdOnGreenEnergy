"use client";

import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { FileText, IndianRupee, Landmark } from "lucide-react";

const schemes = [
  {
    icon: Landmark,
    title: "SATAT Initiative",
    description: "Sustainable Alternative Towards Affordable Transportation — assured CBG offtake by Oil Marketing Companies at guaranteed prices.",
    cta: "Learn about SATAT →",
  },
  {
    icon: IndianRupee,
    title: "MNRE Central Financial Assistance",
    description: "Up to ₹4 crore CFA from the Ministry of New & Renewable Energy covering 30-50% of project cost.",
    cta: "Check subsidy eligibility →",
  },
  {
    icon: FileText,
    title: "GOBARdhan",
    description: "Galvanizing Organic Bio-Agro Resources — government mission promoting waste-to-wealth through biogas and CBG.",
    cta: "Read about GOBARdhan →",
  },
];

export default function GovernmentSupport() {
  return (
    <section className="py-section gradient-bg-dark text-white relative overflow-hidden" aria-label="Government support">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 50%, rgba(34,197,94,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 75% 50%, rgba(245,158,11,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-caption font-semibold tracking-widest uppercase mb-4 bg-forest-900/50 text-forest-400 border border-forest-700/30">
              Government Support
            </span>
            <h2 className="font-heading text-h2 font-bold text-white tracking-tight">
              Leverage India&apos;s{" "}
              <span className="text-amber-400">CBG Incentive Ecosystem</span>
            </h2>
            <p className="mt-4 text-body-lg text-steel-300 max-w-2xl mx-auto">
              Our team guides you through every government scheme, ensuring you maximize
              financial support for your CBG project.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {schemes.map((scheme, index) => (
            <ScrollReveal key={scheme.title} delay={index * 0.1}>
              <div className="group glass-card-dark rounded-[var(--radius-card)] p-6 lg:p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-forest-600/20 mb-5">
                  <scheme.icon className="h-6 w-6 text-forest-400" />
                </div>
                <h3 className="font-heading text-h4 font-bold text-white mb-3">
                  {scheme.title}
                </h3>
                <p className="text-body-sm text-steel-400 leading-relaxed mb-4">
                  {scheme.description}
                </p>
                <span className="text-body-sm font-semibold text-forest-400 group-hover:text-forest-300 transition-colors">
                  {scheme.cta}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/resources" variant="accent" showArrow>
            Explore Resources & Guides
          </Button>
        </div>
      </Container>
    </section>
  );
}
