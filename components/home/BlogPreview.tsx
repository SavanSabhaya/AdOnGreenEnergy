"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

const articles = [
  { title: "What is CBG?", category: "Education", readTime: "5 min read" },
  { title: "SATAT Scheme Explained", category: "Policy", readTime: "7 min read" },
  { title: "MNRE Subsidy Guide for CBG Plants", category: "Finance", readTime: "6 min read" },
];

export default function BlogPreview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          badge="Resources & Insights"
          title="Latest from the Knowledge Hub"
          description="Industry insights, technical guides, and policy updates."
          centered
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {articles.map((article, i) => (
            <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
              <div className="bg-steel-50 rounded-2xl p-6 h-full border border-steel-100 hover:border-forest-200 hover:shadow-soft transition-all duration-300 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="primary">{article.category}</Badge>
                  <span className="text-caption text-steel-400">{article.readTime}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-steel-900 mb-6 group-hover:text-forest-600 transition-colors">
                  {article.title}
                </h3>
                <div className="mt-auto flex items-center text-forest-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  <Link href="/resources" className="after:absolute after:inset-0">
                    Read More
                  </Link>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
