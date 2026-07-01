"use client";

import { ReactNode, ElementType } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { buttonArrow } from "@/lib/animations";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ElementType;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  id?: string;
}

const variants = {
  primary:
    "bg-forest-700 text-white hover:bg-forest-600 shadow-lg hover:shadow-xl active:bg-forest-800",
  secondary:
    "bg-steel-800 text-white hover:bg-steel-700 shadow-lg hover:shadow-xl active:bg-steel-900",
  outline:
    "bg-transparent text-forest-700 border-2 border-forest-700 hover:bg-forest-700 hover:text-white",
  ghost:
    "bg-transparent text-forest-700 hover:bg-forest-50 active:bg-forest-100",
  accent:
    "bg-amber-500 text-steel-950 hover:bg-amber-400 shadow-lg hover:shadow-xl active:bg-amber-600 font-bold",
};

const sizes = {
  sm: "px-4 py-2 text-body-sm font-semibold rounded-lg gap-1.5",
  md: "px-6 py-3 text-body-sm font-semibold rounded-lg gap-2",
  lg: "px-8 py-4 text-body font-bold rounded-xl gap-2.5",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  icon: Icon,
  showArrow = false,
  type = "button",
  disabled = false,
  id,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center transition-all duration-300 tracking-wide uppercase cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-500",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
      {showArrow && (
        <motion.span variants={buttonArrow} className="inline-flex">
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div initial="rest" whileHover="hover" animate="rest" className="inline-flex">
        <Link href={href} className={classes} id={id}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      id={id}
    >
      {content}
    </motion.button>
  );
}
