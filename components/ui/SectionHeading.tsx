"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, textReveal, staggerContainer } from "@/lib/animations";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const titleParts = highlight
    ? title.split(highlight)
    : [title];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {badge && (
        <motion.span
          variants={fadeInUp}
          className={cn(
            "inline-block px-4 py-1.5 rounded-full text-caption font-semibold tracking-widest uppercase mb-4",
            theme === "light"
              ? "bg-forest-100 text-forest-700 border border-forest-200"
              : "bg-forest-900/50 text-forest-400 border border-forest-700/30"
          )}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        variants={textReveal}
        className={cn(
          "font-heading text-h2 font-bold tracking-tight",
          theme === "light" ? "text-steel-950" : "text-white"
        )}
      >
        {highlight
          ? (
            <>
              {titleParts[0]}
              <span className={theme === "light" ? "gradient-text" : "text-forest-400"}>
                {highlight}
              </span>
              {titleParts[1]}
            </>
          )
          : title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={textReveal}
          className={cn(
            "mt-4 text-body-lg leading-relaxed",
            theme === "light" ? "text-steel-500" : "text-steel-300"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
