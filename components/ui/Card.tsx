"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, cardHover } from "@/lib/animations";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "dark" | "glass" | "bordered";
  padding?: "sm" | "md" | "lg";
}

const cardVariants = {
  default: "bg-white shadow-soft",
  dark: "bg-steel-800 text-white shadow-soft",
  glass: "glass-card",
  bordered: "bg-white border border-steel-200",
};

const paddings = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className,
  hover = true,
  variant = "default",
  padding = "md",
}: CardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover={hover ? "hover" : undefined}
      animate="rest"
      className={cn(
        "rounded-[var(--radius-card)] overflow-hidden transition-all duration-300",
        cardVariants[variant],
        paddings[padding],
        hover && "cursor-pointer",
        className
      )}
      style={hover ? {
        // @ts-expect-error -- Motion values are fine here
        ...cardHover.rest,
      } : undefined}
      whileHover={hover ? cardHover.hover : undefined}
    >
      {children}
    </motion.div>
  );
}
