"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FramerRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "fade";
  delay?: number; // Delay in seconds
  duration?: number; // Duration in seconds
  className?: string;
  triggerOnce?: boolean;
  threshold?: number;
}

export default function FramerReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  triggerOnce = true,
  threshold = 0.15,
}: FramerRevealProps) {
  // Define start position based on direction
  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        };
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 0.92 },
          visible: { opacity: 1, scale: 1 },
        };
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, amount: threshold }}
      variants={getVariants()}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 16,
        mass: 0.8,
        delay: delay,
        duration: duration,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
