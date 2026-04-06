import {
  LazyMotion,
  domAnimation,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Headline from "./Headline";

const easing = [0.22, 1, 0.36, 1] as const;

type HeroProps = {
  compact?: boolean;
};

const stats = [
  { label: "Years of Experience", value: 2.5, suffix: "+", decimals: 1 },
  { label: "Projects Delivered", value: 20, suffix: "+", decimals: 0 },
  { label: "Primary Stack", text: "React / TypeScript / Next.js" },
] as const;

function AnimatedMetric({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 24,
    stiffness: 105,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (!ref.current) return;
      ref.current.textContent = `${latest.toFixed(decimals)}${suffix}`;
    });
    return unsubscribe;
  }, [decimals, spring, suffix]);

  return (
    <p ref={ref} className="text-2xl font-semibold tracking-tight text-slate-100">
      {value.toFixed(decimals)}
      {suffix}
    </p>
  );
}

export default function Hero({ compact = false }: HeroProps) {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="hero"
        className={`relative flex w-full items-center overflow-hidden px-5 py-10 sm:px-8 lg:px-12 ${
          compact ? "min-h-screen" : "min-h-[calc(100vh-4rem)] mt-5"
        }`}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10rem] top-[-9rem] h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
          <div className="absolute left-[-12rem] top-[45%] h-72 w-72 rounded-full bg-slate-300/10 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easing }}
            className="relative"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-400/35 to-transparent"
            />

            <div className="relative grid items-end gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:py-14">
              <div>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/65 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.17em] text-slate-300">
                  Software Engineer
                </div>

                <h1 className="text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-slate-100 sm:text-5xl md:text-7xl">
                  Ahmad Sultani
                  <br />
                  Dayanullah
                </h1>

                <div className="mt-5">
                  <Headline />
                </div>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                  I build production-grade web applications with a focus on
                  clarity, performance, and long-term maintainability. I partner
                  closely with product and design to turn complex requirements
                  into reliable, high-quality user experiences.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    className="rounded-lg border border-slate-500/90 bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-white"
                  >
                    View Projects
                  </a>
                  <a
                    href="#connect"
                    className="rounded-lg border border-slate-600/90 bg-transparent px-5 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-slate-400 hover:text-white"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              <aside className="relative border-t border-slate-700/80 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                  Selected Metrics
                </p>
                <div className="mt-4 divide-y divide-slate-700/80 border-y border-slate-700/80">
                  {stats.map((item) => (
                    <div key={item.label} className="py-3">
                      {"value" in item ? (
                        <AnimatedMetric
                          value={item.value}
                          suffix={item.suffix}
                          decimals={item.decimals}
                        />
                      ) : (
                        <p className="text-2xl font-semibold tracking-tight text-slate-100">
                          {item.text}
                        </p>
                      )}
                      <p className="mt-1 text-xs uppercase tracking-[0.13em] text-slate-400">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
}
