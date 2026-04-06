import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
	HiArrowLeft,
	HiArrowUpRight,
	HiCodeBracket,
	HiTag,
} from "react-icons/hi2";
import { projects } from "../data";

const easing = [0.22, 1, 0.36, 1] as const;

const fadeIn = {
	hidden: { opacity: 0, y: 16 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: easing },
	},
};

export default function ProjectDetail() {
	const { slug } = useParams();
	const project = projects.find((item) => item.slug === slug);

	if (!project) {
		return (
			<div className="grid min-h-screen place-items-center px-6">
				<div className="app-panel max-w-md rounded-2xl border border-slate-700/80 p-8 text-center">
					<h1 className="text-3xl font-semibold tracking-[-0.02em] text-slate-100">
						Project not found
					</h1>
					<p className="mt-3 text-sm leading-relaxed text-slate-400">
						The requested project could not be found. Please verify the URL.
					</p>
					<Link
						to="/"
						className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-500 hover:bg-slate-800/90"
					>
						<HiArrowLeft size={16} />
						Back to Home
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="pb-20">
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.55 }}
				className="relative h-[42vh] min-h-[280px] overflow-hidden md:h-[50vh]"
			>
				{project.image ? (
					<img
						src={project.image}
						alt={project.title}
						className="absolute inset-0 h-full w-full object-cover object-top"
					/>
				) : null}

				<div className="absolute inset-0 bg-gradient-to-t from-[#0b0f16] via-[#0b0f16]/75 to-[#0b0f16]/30" />
				<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/35 to-transparent" />

				<div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 lg:px-12">
					<div className="space-y-3">
						<div className="text-xs uppercase tracking-[0.14em] text-slate-300">
							<Link to="/" className="hover:text-slate-100">
								Home
							</Link>
							<span className="mx-2 text-slate-500">/</span>
							<Link to="/#projects" className="hover:text-slate-100">
								Projects
							</Link>
						</div>

						<p className="section-eyebrow">Project</p>

						<h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-100 md:text-5xl">
							{project.title}
						</h1>

						<p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
							{project.description}
						</p>
					</div>
				</div>
			</motion.section>

			<div className="mx-auto mt-8 w-full max-w-6xl space-y-8 px-5 sm:px-8 lg:px-12">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={fadeIn}
					className="flex flex-wrap items-center gap-2.5 border-y border-slate-800/90 py-4"
				>
					{project.href ? (
						<motion.a
							href={project.href}
							target="_blank"
							rel="noreferrer"
							whileHover={{ y: -2 }}
							transition={{ duration: 0.2, ease: easing }}
							className="inline-flex items-center gap-2 rounded-lg border border-slate-500 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-white"
						>
							Open Live Project
							<HiArrowUpRight size={15} />
						</motion.a>
					) : null}

					<motion.div
						whileHover={{ y: -2 }}
						transition={{ duration: 0.2, ease: easing }}
					>
						<Link
							to="/#projects"
							className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-900/75 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-500 hover:bg-slate-800/85"
						>
							<HiArrowLeft size={15} />
							Return to Projects
						</Link>
					</motion.div>
				</motion.div>

				<div className="grid gap-6 lg:grid-cols-3">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.12 }}
						variants={fadeIn}
						className="space-y-6 lg:col-span-2"
					>
						<section className="app-panel rounded-2xl border border-slate-700/80 p-6 md:p-7">
							{project.story ? (
								<>
									<h2 className="text-2xl font-semibold text-slate-100">
										Project Overview
									</h2>
									<div
										className="project-story mt-4 text-sm md:text-base"
										dangerouslySetInnerHTML={{ __html: project.story }}
									/>
								</>
							) : (
								<p className="text-sm text-slate-400">
									Project details will be added soon.
								</p>
							)}

							<div className="mt-8 border-t border-slate-800/90 pt-6">
								<h3 className="text-lg font-semibold text-slate-100">
									Implementation Notes
								</h3>
								<p className="mt-3 text-sm leading-relaxed text-slate-400">
									Additional implementation details and architecture notes will
									be published soon.
								</p>
							</div>
						</section>
					</motion.div>

					<motion.aside
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeIn}
						className="app-panel space-y-6 rounded-2xl border border-slate-700/80 p-6 lg:sticky lg:top-24 lg:self-start"
					>
						{project.stack?.length ? (
							<div>
								<div className="mb-3 flex items-center gap-2">
									<HiCodeBracket size={18} className="text-slate-300" />
									<h3 className="text-lg font-semibold text-slate-100">
										Tech Stack
									</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{project.stack.map((tech) => (
										<motion.span
											key={tech}
											whileHover={{ y: -1 }}
											transition={{ duration: 0.15 }}
											className="rounded-md border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300"
										>
											{tech}
										</motion.span>
									))}
								</div>
							</div>
						) : null}

						{project.tags?.length ? (
							<div className="border-t border-slate-800/90 pt-5">
								<div className="mb-3 flex items-center gap-2">
									<HiTag size={18} className="text-slate-300" />
									<h3 className="text-lg font-semibold text-slate-100">Tags</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<motion.span
											key={tag}
											whileHover={{ y: -1 }}
											transition={{ duration: 0.15 }}
											className="rounded-md border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300"
										>
											{tag}
										</motion.span>
									))}
								</div>
							</div>
						) : null}

						{project.href ? (
							<div className="border-t border-slate-800/90 pt-5">
								<a
									href={project.href}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-900/70 px-3.5 py-2 text-sm text-slate-200 transition-colors hover:border-slate-500 hover:text-slate-100"
								>
									Open Live Project
									<HiArrowUpRight size={14} />
								</a>
							</div>
						) : null}
					</motion.aside>
				</div>
			</div>
		</div>
	);
}
