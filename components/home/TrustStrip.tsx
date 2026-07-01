"use client";

import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Shield, Award, Users, MapPin, Zap, Clock } from "lucide-react";

const stats = [
  { icon: Zap, end: 6, suffix: "+", label: "Plants Commissioned", color: "text-forest-600" },
  { icon: MapPin, end: 3, suffix: "", label: "States Served", color: "text-amber-500" },
  { icon: Users, end: 49, suffix: "+", label: "TPD Total Capacity", color: "text-forest-600" },
  { icon: Clock, end: 6, suffix: "+", label: "Years of Expertise", color: "text-amber-500" },
  { icon: Shield, end: 100, suffix: "%", label: "Client Satisfaction", color: "text-forest-600" },
];

export default function TrustStrip() {
  return (
    <section className="py-16 bg-steel-50 border-y border-steel-100" aria-label="Key statistics">
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center relative"
              >
                <stat.icon className={`h-6 w-6 mb-3 ${stat.color}`} />
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                  className="text-steel-900"
                  labelClassName="text-steel-500"
                  duration={2 + i * 0.2}
                />
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-steel-200" />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
