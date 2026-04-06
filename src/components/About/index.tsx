import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, motion, useInView } from "framer-motion";
import Section from "../Section";

const easing = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing, staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easing },
  },
};

function TypeOnce({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.65 });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setCount(index);
      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, 18);

    return () => window.clearInterval(timer);
  }, [inView, text]);

  const isDone = count >= text.length;

  return (
    <p ref={ref} className={className} aria-label={text}>
      {text.slice(0, count)}
      {!isDone ? (
        <motion.span
          aria-hidden
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        >
          |
        </motion.span>
      ) : null}
    </p>
  );
}

export default function About() {
  return (
    <LazyMotion features={domAnimation}>
      <Section id="about">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-8"
        >
          <motion.div variants={item} className="space-y-3">
            <p className="section-eyebrow">About</p>
            <h2 className="section-title">Clear interfaces. Reliable engineering.</h2>
            <p className="section-copy">
              Frontend engineer focused on clarity, performance, and scalable
              product systems.
            </p>
          </motion.div>

          <div className="grid gap-8 border-y border-slate-800/90 py-7 lg:grid-cols-[1.25fr_0.75fr]">
            <motion.div variants={item} className="space-y-6">
              <TypeOnce
                text="I build polished UI foundations that help teams ship faster without compromising quality."
                className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.02em] text-slate-100 md:text-3xl"
              />
              <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
                Architecture, design systems, and performance are treated as one
                system, not separate tasks.
              </p>
            </motion.div>

            <motion.div variants={item} className="space-y-2.5">
              {[
                "Frontend Architecture",
                "Design Systems",
                "Performance Engineering",
              ].map((line) => (
                <div
                  key={line}
                  className="group rounded-lg border border-slate-800/80 bg-slate-900/45 px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-700/90 hover:text-slate-200"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-500 transition-colors group-hover:bg-slate-300" />
                    {line}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </LazyMotion>
  );
}
