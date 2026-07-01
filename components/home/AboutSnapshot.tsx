"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function AboutSnapshot() {
  return (
    <section className="py-section" aria-label="About ADON Green Energy">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-caption font-semibold tracking-widest uppercase mb-4 bg-forest-100 text-forest-700 border border-forest-200">
                Who We Are
              </span>
              <h2 className="font-heading text-h2 font-bold text-steel-950 tracking-tight">
                India&apos;s Specialist{" "}
                <span className="gradient-text">EPC Partner</span>{" "}
                for CBG Plants
              </h2>
              <p className="mt-6 text-body-lg text-steel-600 leading-relaxed">
                ADON Equipments Pvt. Ltd. is a specialist EPC company focused exclusively
                on Compressed Biogas plant solutions. We handle every aspect of your CBG project —
                from initial feasibility and plant design through procurement, construction, and
                commissioning — ensuring a seamless, single-window delivery experience.
              </p>
              <p className="mt-4 text-body text-steel-500 leading-relaxed">
                With deep expertise in SATAT scheme registration, MNRE subsidies, and all
                regulatory licensing, we don&apos;t just build plants — we help entrepreneurs
                navigate the entire CBG ecosystem to build profitable, sustainable businesses.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="ghost" showArrow>
                  Learn More About Us
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Visual Element */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-forest-100 to-forest-50 p-8 lg:p-12 aspect-square flex items-center justify-center">
                {/* Decorative circles */}
                <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-forest-200/50 animate-pulse-slow" />
                <div className="absolute bottom-12 left-8 w-14 h-14 rounded-full bg-amber-200/50 animate-float" />

                <div className="relative z-10 text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-forest-700 shadow-lg">
                    <span className="font-heading text-3xl font-bold text-white">A</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-steel-900">End-to-End EPC</h3>
                    <p className="text-body-sm text-steel-500 mt-2 max-w-xs mx-auto">
                      Design → Procurement → Construction → Commissioning
                    </p>
                  </div>

                  {/* Feature chips */}
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {["SATAT Expert", "MNRE Subsidies", "6+ Plants Live", "3 States"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur text-caption font-semibold text-forest-700 shadow-sm border border-forest-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Shadow decoration */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-forest-200/30 -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
