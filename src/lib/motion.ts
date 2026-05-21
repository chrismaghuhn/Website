export const sectionReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const reducedMotionProps = {
  initial: false as const,
  animate: { opacity: 1, y: 0 },
};
