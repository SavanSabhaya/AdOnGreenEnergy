"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: string;
  variant?: "default" | "success" | "warning" | "info" | "dark" | "primary";
  size?: "sm" | "md";
  className?: string;
}

const variants = {
  default: "bg-steel-100 text-steel-700 border-steel-200",
  success: "bg-forest-100 text-forest-700 border-forest-200",
  primary: "bg-forest-100 text-forest-700 border-forest-200",
  warning: "bg-amber-100 text-amber-700 border-amber-200",
  info: "bg-blue-50 text-blue-700 border-blue-200",
  dark: "bg-steel-800 text-steel-200 border-steel-700",
};

const sizes = {
  sm: "px-2 py-0.5 text-[0.625rem]",
  md: "px-3 py-1 text-caption",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-semibold tracking-wide uppercase",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
