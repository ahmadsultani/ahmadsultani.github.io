import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

type Props = {
  threshold?: number;
  size?: number;
  className?: string;
  label?: string;
};

export default function ButtonHome({
  threshold = 240,
  size = 44,
  className = "",
  label = "Back to top",
}: Props) {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const border = useMotionTemplate`conic-gradient(rgba(226,232,240,0.9) ${progress}%, rgba(71,85,105,0.35) ${progress}%)`;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-5 z-40"
        >
          <motion.button
            type="button"
            aria-label={label}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileTap={{ scale: 0.96 }}
            className={`relative grid place-items-center rounded-full border border-slate-600 bg-slate-900/85 text-slate-100 backdrop-blur ${className}`}
            style={{ width: size, height: size }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-[2px] rounded-full"
              style={{ background: border as unknown as string, zIndex: -1 }}
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 18V6" />
              <path d="M6.5 11.5 12 6l5.5 5.5" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
