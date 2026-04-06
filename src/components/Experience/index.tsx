import { LazyMotion, domAnimation, motion } from "framer-motion";
import { HiMapPin } from "react-icons/hi2";
import Section from "../Section";

const easing = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easing, staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easing },
  },
};

interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "SkillMapper",
    location: "Paris, France",
    role: "Software Engineer (Frontend)",
    period: "Jul 2023 - Dec 2025",
    highlights: [
      "Improved application performance by approximately 50% through caching strategy and state-layer optimization.",
      "Delivered production interfaces with high visual fidelity to design specifications across platforms.",
      "Built 30+ reusable utilities and 25+ atomic components, reducing feature delivery time by 20-30%.",
    ],
  },
  {
    company: "Celebes Digital",
    location: "Makassar, Indonesia",
    role: "Software Engineer (Fullstack)",
    period: "Jun 2024 - Dec 2024",
    highlights: [
      "Led development of a disaster reporting platform with an operations dashboard.",
      "Built fully responsive interfaces optimized for mobile, tablet, and desktop.",
      "Implemented RBAC, browser push notifications, and reusable Blade components.",
    ],
  },
  {
    company: "Torche Education",
    location: "Tangerang, Indonesia",
    role: "Frontend Engineer Intern",
    period: "Feb 2023 - Jun 2023",
    highlights: [
      "Delivered a production-ready careers application ahead of schedule with minimal supervision.",
      "Standardized state management with Redux Toolkit using scalable patterns.",
      "Achieved over 90% design fidelity with responsive, pixel-accurate UI implementation.",
    ],
  },
];

export default function Experience() {
  return (
    <LazyMotion features={domAnimation}>
      <Section id="experience">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          <motion.div variants={item} className="space-y-4">
            <p className="section-eyebrow">Experience</p>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-copy">
              Product engineering across startup and agency environments, with a
              focus on quality, velocity, and maintainable frontend systems.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute bottom-0 left-3 top-0 w-px bg-slate-800/90 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const isRight = index % 2 === 1;

                return (
                  <motion.article
                    key={`${exp.company}-${exp.role}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, ease: easing, delay: index * 0.08 }}
                  >
                    <div className="grid md:grid-cols-2 md:gap-10">
                      <div
                        className={`relative pl-10 md:pl-0 ${
                          isRight ? "md:col-start-2 md:pl-8" : "md:pr-8"
                        }`}
                      >
                        <span
                          className={`absolute top-7 h-3.5 w-3.5 rounded-full border border-slate-500 ${
                            isRight ? "left-1.5 md:-left-[0.95rem]" : "left-1.5 md:-right-[0.95rem] md:left-auto"
                          }`}
                        />

                        <div className="rounded-xl border border-slate-800/90 bg-slate-900/45 p-5 backdrop-blur-sm md:p-6">
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div className="space-y-1.5">
                              <h3 className="text-lg font-semibold text-slate-100 md:text-xl">
                                {exp.role}
                              </h3>
                              <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
                                {exp.company}
                              </p>
                              <p className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                                <HiMapPin size={14} />
                                {exp.location}
                              </p>
                            </div>

                            <p className="rounded-full border border-slate-700/90 bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-slate-300">
                              {exp.period}
                            </p>
                          </div>

                          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-300 md:text-[0.95rem]">
                            {exp.highlights.map((highlight) => (
                              <li key={highlight} className="flex items-start gap-2.5">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Section>
    </LazyMotion>
  );
}
