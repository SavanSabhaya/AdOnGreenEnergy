"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ResourcesIntro from "@/components/resources/ResourcesIntro";
import ResourceCard from "@/components/resources/ResourceCard";
import { staggerContainer } from "@/lib/animations";
import { articlesData } from "@/lib/data/articles";

export default function ResourcesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-20 lg:py-28 bg-forest-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-h1 font-bold text-white tracking-tight mb-6">
            Resources & <span className="text-amber-400">Insights</span>
          </h1>
          <p className="text-lg text-forest-200 max-w-2xl mx-auto">
            Industry knowledge, technology comparisons, and policy updates.
          </p>
        </div>
      </section>

      <ResourcesIntro />

      <section className="py-24 bg-steel-50">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {articlesData.map((article) => (
              <ResourceCard key={article.slug} resource={article} />
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
