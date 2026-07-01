"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, textReveal, staggerContainer } from "@/lib/animations";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  centered?: boolean;
  theme?: "light" | "dark";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  description,
  align,
  centered,
  theme,
  light,
  className,
}: SectionHeadingProps) {
  const finalAlign = centered ? "center" : (align || "center");
  const finalTheme = light ? "dark" : (theme || "light");
  const finalSubtitle = description || subtitle;
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
        finalAlign === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {badge && (
        <motion.span
          variants={fadeInUp}
          className={cn(
            "inline-block px-4 py-1.5 rounded-full text-caption font-semibold tracking-widest uppercase mb-4",
            finalTheme === "light"
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
          finalTheme === "light" ? "text-steel-950" : "text-white"
        )}
      >
        {highlight
          ? (
            <>
              {titleParts[0]}
              <span className={finalTheme === "light" ? "gradient-text" : "text-forest-400"}>
                {highlight}
              </span>
              {titleParts[1]}
            </>
          )
          : title}
      </motion.h2>
      {finalSubtitle && (
        <motion.p
          variants={textReveal}
          className={cn(
            "mt-4 text-body-lg leading-relaxed",
            finalTheme === "light" ? "text-steel-500" : "text-steel-300"
          )}
        >
          {finalSubtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
