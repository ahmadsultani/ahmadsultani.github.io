import { useState } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import Section from "../Section";
import Form from "./Form";

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

export default function Connect() {
  const email = "ahmadsultanidayanullah@gmail.com";
  const [copied, setCopied] = useState(false);
  const actionButtonClass =
    "inline-flex h-9 items-center gap-1.5 rounded-md border border-slate-600 bg-slate-900/60 px-3.5 text-sm text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  const socials = [
    {
      href: "https://www.linkedin.com/in/ahmadsultanid/",
      label: "LinkedIn",
      Icon: AiFillLinkedin,
    },
    {
      href: "https://www.instagram.com/ahmadsultanid/",
      label: "Instagram",
      Icon: AiFillInstagram,
    },
    {
      href: "https://www.github.com/ahmadsultani/",
      label: "GitHub",
      Icon: AiFillGithub,
    },
    {
      href: "https://www.facebook.com/ahmadsultanidayanullah/",
      label: "Facebook",
      Icon: AiFillFacebook,
    },
    {
      href: "https://wa.me/6282193179080",
      label: "WhatsApp",
      Icon: RiWhatsappFill,
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <Section id="connect">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-8"
        >
          <motion.div variants={item} className="space-y-4">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title">Let&apos;s Connect</h2>
            <p className="section-copy">
              Open to full-time roles, contract work, and product collaboration.
            </p>
          </motion.div>

          <div className="grid gap-8  border-slate-600/90 py-7 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div variants={item} className="space-y-7">
              <p className="max-w-md text-xl font-medium leading-tight tracking-[-0.02em] text-slate-100 md:text-2xl">
                If you are hiring or building a product, feel free to reach out.
              </p>

              <div className="divide-y divide-slate-600/70 border-y border-slate-600/90">
                <div className="py-3.5">
                  <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">
                        Email
                      </p>
                      <a
                        href={`mailto:${email}`}
                        className="text-sm font-medium text-slate-100"
                      >
                        {email}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className={actionButtonClass}
                    >
                      {copied ? "Copied" : "Copy Email"}
                    </button>
                  </div>
                </div>

                <div className="py-3.5">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">
                    Social
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {socials.map(({ href, label, Icon }, idx) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: idx * 0.04 }}
                        className={actionButtonClass}
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <Form />
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </LazyMotion>
  );
}
