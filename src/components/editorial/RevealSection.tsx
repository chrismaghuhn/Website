"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { sectionReveal } from "@/lib/motion";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function RevealSection({ children, className, id }: RevealSectionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={sectionReveal}
    >
      {children}
    </motion.section>
  );
}
