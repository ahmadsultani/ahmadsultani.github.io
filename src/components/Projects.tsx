import { LazyMotion, domAnimation, motion } from "framer-motion";
import { useState } from "react";
import { HiArrowUpRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { projects } from "../data";
import Section from "./Section";

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
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easing },
  },
};

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section id="projects">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-8"
        >
          <motion.div variants={item} className="space-y-4">
            <p className="section-eyebrow">Selected Work</p>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <h2 className="section-title">Selected Projects</h2>
                <p className="section-copy">
                  A selection of client and product work focused on frontend
                  quality, usability, and measurable outcomes.
                </p>
              </div>
              <a
                href="https://github.com/ahmadsultani"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-600/90 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-slate-500 hover:bg-slate-800/90"
              >
                View GitHub Profile
                <HiArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(0, page - 1))}
                disabled={currentPage === 0}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-slate-200 transition-colors ${
                  currentPage === 0
                    ? "cursor-not-allowed border-slate-800 bg-slate-900/50 text-slate-500"
                    : "border-slate-800/90 hover:border-slate-500 hover:bg-slate-800/85"
                }`}
                aria-label="Previous projects"
              >
                <HiChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() =>
                  setCurrentPage((page) => Math.min(totalPages - 1, page + 1))
                }
                disabled={currentPage === totalPages - 1}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-slate-200 transition-colors ${
                  currentPage === totalPages - 1
                    ? "cursor-not-allowed border-slate-800 bg-slate-900/50 text-slate-500"
                    : "border-slate-800/90 hover:border-slate-500 hover:bg-slate-800/85"
                }`}
                aria-label="Next projects"
              >
                <HiChevronRight size={18} />
              </button>
            </div>

            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {currentProjects.map((project) => (
                <motion.a
                  key={project.slug ?? project.title}
                  href={project.slug ? `/projects/${project.slug}` : project.href}
                  target={!project.slug && project.href ? "_blank" : undefined}
                  rel={!project.slug && project.href ? "noreferrer" : undefined}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group flex h-full flex-col overflow-hidden rounded border border-slate-800/90 bg-slate-900/45 backdrop-blur-sm transition-colors hover:border-slate-700/90"
                >
                  <div className="relative h-52 overflow-hidden border-b border-slate-800/90">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold leading-tight text-slate-100">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    {project.tags?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-slate-800/90 px-2.5 py-1 text-xs text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 ? (
                          <span className="rounded-md border border-slate-800/90 px-2.5 py-1 text-xs text-slate-400">
                            +{project.tags.length - 4}
                          </span>
                        ) : null}
                      </div>
                    ) : null}

                    <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.11em] text-slate-400 transition-colors group-hover:text-slate-200">
                      View Project
                      <HiArrowUpRight size={13} />
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentPage ? "w-7 bg-slate-300" : "w-2 bg-slate-600"
                  }`}
                  aria-label={`Open projects page ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </LazyMotion>
  );
}
