import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTryhackme, SiWritedotas } from "react-icons/si";

const WRITEUPS = [
  {
    id: 1,
    title: "Gemastik XVIII Final (Attack-Defense)",
    platform: "Gemastik XVIII",
    category: "Web Exploitation",
    link: "https://docs.google.com/document/d/1nLLJ-mlBQyQCCoJohhorfmZ_k4U38Z4QMzNGAsQsDK8/edit?usp=drive_link",
    description:
      "Secured 2nd place by exploiting critical vulnerabilities including SSTI, command injection, and SQL injection under live attack-defense conditions.",
  },
  {
    id: 2,
    title: "Cyber Ops Clash 2.0 Final",
    platform: "CTFd",
    category: "Reverse Engineering, Forensics, Web Exploitation, Cryptography",
    link: "https://docs.google.com/document/d/1OncakXPl54cOtHpIyhBB2zUuYeSZ7c94vUxfDbRg8GA/edit?usp=drive_link",
    description:
      "Achieved 1st place with strong performance across forensics and reverse engineering challenges requiring deep binary and artifact analysis.",
  },
  {
    id: 3,
    title: "Intechfest 2025",
    platform: "CTFd",
    category: "Web Exploitation, Forensics, Cryptography, Reverse Engineering",
    link: "https://docs.google.com/document/d/1MPjItUAetRLnIKgX4WS4WAtWcB6qCaI9y89KIxTsTwE/edit?usp=drive_link",
    description:
      "Finished in 3rd place after solving a broad challenge set spanning web exploitation, forensics, cryptography, and reverse engineering.",
  },
  {
    id: 4,
    title: "Schematics 2025 Qualifier",
    platform: "CTFd",
    category: "Web Exploitation, Forensics, Cryptography, Reverse Engineering, Misc",
    link: "https://docs.google.com/document/d/1I8NooJs2TAUkblW3o4GaNB8Aas1WRQeasTa7lrN40aA/edit?usp=drive_link",
    description:
      "Qualified for the final round with full clears in key categories, including web exploitation, forensics, cryptography, and miscellaneous tracks.",
  },
];

const SKILLS = [
  {
    category: "Web Exploitation",
    items: [
      "SQL Injection",
      "XSS",
      "CSRF",
      "SSRF",
      "LFI/RFI",
      "Command Injection",
    ],
  },
  {
    category: "Reverse Engineering",
    items: [
      "Binary Analysis",
      "Ghidra",
      "IDA Pro",
      "Dynamic Analysis",
      "Debugging",
    ],
  },
  {
    category: "Tooling",
    items: ["Burp Suite", "Metasploit", "Wireshark", "Nmap", "Python", "GDB"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const year = new Date().getFullYear();

export default function Ziru() {
  return (
    <div className="min-h-screen px-5 pb-14 sm:px-8 lg:px-12">
      <section className="grid min-h-screen place-items-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="app-panel w-full max-w-6xl rounded-2xl p-7 sm:p-10 md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-slate-600/80 bg-slate-900/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-slate-300">
                Offensive Security Profile
              </span>

              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.03em] text-slate-100 md:text-7xl">
                ziru
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Security enthusiast focused on web exploitation and reverse
                engineering. I approach security with a builder&apos;s mindset and
                specialize in finding practical weaknesses in real systems.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <a
                  href="https://github.com/arctanziru"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-900/75 px-3.5 py-2 text-sm text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800/90"
                >
                  <FaGithub className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href="https://tryhackme.com/p/ziru"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TryHackMe"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-900/75 px-3.5 py-2 text-sm text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800/90"
                >
                  <SiTryhackme className="h-5 w-5" />
                  TryHackMe
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmadsultanid/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-900/75 px-3.5 py-2 text-sm text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800/90"
                >
                  <FaLinkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-slate-700/80 bg-slate-900/70 p-5 md:p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                Focus Areas
              </p>
              <div className="mt-4 space-y-3">
                {[
                  "Web Exploitation",
                  "Reverse Engineering",
                  "Forensics Analysis",
                  "CTF Team Competition",
                ].map((focus) => (
                  <div
                    key={focus}
                    className="rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-300"
                  >
                    {focus}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 pb-12">
        <div className="space-y-3">
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">Security through an attacker-focused lens.</h2>
          <p className="section-copy">
            My security path developed alongside software engineering, giving me
            perspective from both offensive and defensive sides. I focus on
            identifying exploitable patterns, validating impact, and translating
            findings into clear remediation guidance.
          </p>
        </div>

        <div className="app-panel rounded-2xl p-6 md:p-7">
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            I work across web exploitation and reverse engineering, with hands-on
            experience in attack chains involving injection flaws, access-control
            weaknesses, and logic issues. I also perform binary-level analysis
            using industry tools to recover hidden logic and understand program
            behavior at runtime.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 border-t border-slate-800/80 py-12">
        <div className="space-y-3">
          <p className="section-eyebrow">Capabilities</p>
          <h2 className="section-title">Technical Disciplines</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="app-panel rounded-xl p-5"
            >
              <h3 className="text-lg font-semibold text-slate-100">{skill.category}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 border-t border-slate-800/80 py-12">
        <div className="space-y-3">
          <p className="section-eyebrow">Writeups</p>
          <h2 className="section-title">CTF Notes and Analyses</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {WRITEUPS.map((writeup) => (
            <motion.a
              key={writeup.id}
              href={writeup.link}
              target="_blank"
              rel="noreferrer"
              variants={itemVariants}
              className="app-panel group block rounded-xl p-5 transition-colors hover:bg-slate-900/90"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-100 md:text-xl">
                    {writeup.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {writeup.description}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2.5 text-xs uppercase tracking-[0.08em] text-slate-400 md:text-sm">
                    <span>{writeup.platform}</span>
                    <span className="text-slate-600">•</span>
                    <span>{writeup.category}</span>
                  </div>
                </div>
                <SiWritedotas className="h-6 w-6 shrink-0 text-slate-300 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-slate-800/80 py-12">
        <div className="app-panel rounded-2xl p-7 text-center md:p-9">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
            Open to Collaboration
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Available for CTF collaboration, security research discussions, and
            technical exchange on exploitation and analysis workflows.
          </p>
          <a
            href="mailto:ahmadsultanidayanullah@gmail.com"
            className="mt-6 inline-flex rounded-lg border border-slate-500 bg-slate-100 px-6 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-white"
          >
            Contact by Email
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800/80 py-7 text-center text-sm text-slate-500">
        © {year} ziru. All rights reserved.
      </footer>
    </div>
  );
}
