"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { ArrowRight, Clock } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export interface ResourceData {
  slug: string;
  title: string;
  category: "Education" | "Policy" | "Finance" | "Technology";
  readTime: string;
  excerpt: string;
}

export default function ResourceCard({ resource }: { resource: ResourceData }) {
  const badgeVariant = 
    resource.category === "Education" ? "info" :
    resource.category === "Policy" ? "warning" :
    resource.category === "Finance" ? "success" : "default";

  return (
    <motion.div variants={fadeInUp} className="group cursor-pointer flex flex-col h-full">
      <div className="bg-white rounded-2xl p-6 sm:p-8 h-full border border-steel-200 hover:border-forest-300 hover:shadow-elevated transition-all duration-300 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <Badge variant={badgeVariant}>{resource.category}</Badge>
          <div className="flex items-center gap-1.5 text-steel-400 text-sm font-medium">
            <Clock className="w-4 h-4" />
            <span>{resource.readTime}</span>
          </div>
        </div>
        
        <h3 className="font-heading text-xl md:text-2xl font-bold text-steel-900 mb-4 group-hover:text-forest-700 transition-colors">
          {resource.title}
        </h3>
        
        <p className="text-steel-600 leading-relaxed mb-8 flex-grow">
          {resource.excerpt}
        </p>
        
        <div className="mt-auto flex items-center text-forest-600 font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
          <Link href={`/resources/${resource.slug}`} className="after:absolute after:inset-0">
            Read Full Article
          </Link>
          <ArrowRight className="w-5 h-5 ml-2 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
