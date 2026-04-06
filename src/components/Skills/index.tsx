import { useMemo } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import Section from "../Section";
import { languages, frameworks } from "../../data";

type Skill = { name: string; image?: string; level?: number };

const easing = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easing, staggerChildren: 0.07 },
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

export default function Skills() {
  const core = useMemo(() => frameworks as Skill[], []);
  const langs = useMemo(() => languages as Skill[], []);

  const toolingGroups = useMemo(
    () => [
      { title: "Delivery", items: ["Git", "CI/CD", "Docker"] },
      {
        title: "Quality",
        items: ["Vitest", "Jest", "ESLint", "Prettier", "Storybook"],
      },
      {
        title: "Build & Toolchain",
        items: ["Vite", "Webpack"],
      },
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section id="skills">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-8"
        >
          <motion.div variants={item} className="space-y-3">
            <p className="section-eyebrow">Skills</p>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-copy">
              Core technologies and workflows I use to build production web
              applications with reliability and long-term maintainability.
            </p>
          </motion.div>

          <div className="grid gap-8 border-y border-slate-800/90 py-7 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div variants={item} className="space-y-7">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                  Frameworks and Libraries
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {core.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-md border border-slate-600 bg-slate-900/40 px-3 py-1.5 text-sm text-slate-200"
                    >
                      {skill.image ? (
                        <img src={skill.image} alt={skill.name} className="h-4 w-4" />
                      ) : null}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                  Programming Languages
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {langs.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-md border border-slate-600 bg-slate-900/40 px-3 py-1.5 text-sm text-slate-200"
                    >
                      {skill.image ? (
                        <img src={skill.image} alt={skill.name} className="h-4 w-4" />
                      ) : null}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Tooling</p>
              <div className="divide-y divide-slate-800/80 border-y border-slate-800/80">
                {toolingGroups.map((group) => (
                  <div key={group.title} className="py-3">
                    <p className="text-sm font-medium text-slate-200">{group.title}</p>
                    <p className="mt-1.5 text-sm text-slate-400">{group.items.join(" • ")}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </LazyMotion>
  );
}
