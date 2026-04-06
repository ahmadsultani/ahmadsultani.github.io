import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type HeadlineProps = {
  phrases?: string[];
  intervalMs?: number;
};

const easing = [0.22, 1, 0.36, 1] as const;

export default function Headline({
  phrases = [
    "Frontend Engineering and Architecture",
    "Design Systems and Product UI Delivery",
    "Performance, Accessibility, and Maintainability",
  ],
  intervalMs = 2800,
}: HeadlineProps) {
  const list = useMemo(() => phrases, [phrases]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((prev) => (prev + 1) % list.length),
      intervalMs
    );
    return () => window.clearInterval(id);
  }, [intervalMs, list.length]);

  return (
    <div className="h-8 overflow-hidden md:h-10">
      <AnimatePresence mode="wait">
        <motion.p
          key={list[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: easing }}
          className="text-base font-medium tracking-[0.01em] text-slate-300 md:text-xl"
        >
          {list[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
