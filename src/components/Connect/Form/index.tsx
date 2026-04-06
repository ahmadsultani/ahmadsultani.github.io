import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const TO = "ahmadsultanidayanullah@gmail.com";

export default function Form() {
  const [data, setData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const fields = useMemo(
    () =>
      [
        { key: "name", label: "Full Name", type: "text", autoComplete: "name" },
        { key: "email", label: "Email", type: "email", autoComplete: "email" },
        { key: "subject", label: "Subject", type: "text", autoComplete: "off" },
      ] as const,
    []
  );

  function validate(payload: FormState) {
    const next: Partial<FormState> = {};
    if (!payload.name.trim()) next.name = "Please provide your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      next.email = "Please provide a valid email address.";
    }
    if (!payload.subject.trim()) next.subject = "Please add a subject.";
    if (payload.message.trim().length < 10) {
      next.message = "Please share more detail (minimum 10 characters).";
    }
    return next;
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const body = [
      "Hi Ahmad,",
      "",
      data.message.trim(),
      "",
      `- ${data.name}`,
      `(${data.email})`,
    ].join("\n");

    const mailto = `mailto:${TO}?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      className="flex h-full flex-col gap-5 rounded-lg border border-slate-600/90 bg-slate-900/45 p-6 md:p-7"
    >
      <div>
        <h3 className="text-lg font-semibold text-slate-100 md:text-xl">Send a Message</h3>
        <p className="mt-1 text-sm text-slate-400">
          Share your project scope, timeline, and goals. I will reply by email.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {fields.map(({ key, label, type, autoComplete }) => (
          <div key={key} className="flex flex-col gap-1.5">
            <label htmlFor={key} className="text-xs uppercase tracking-[0.11em] text-slate-400">
              {label}
            </label>
            <input
              id={key}
              type={type}
              autoComplete={autoComplete}
              value={(data as FormState)[key]}
              onChange={(event) =>
                setData((prev) => ({ ...prev, [key]: event.target.value }))
              }
              className="rounded-lg border border-slate-600 bg-transparent px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-slate-500"
              aria-invalid={Boolean((errors as FormState)[key])}
              aria-describedby={(errors as FormState)[key] ? `${key}-err` : undefined}
            />
            {(errors as FormState)[key] ? (
              <p id={`${key}-err`} className="text-xs text-rose-300">
                {(errors as FormState)[key]}
              </p>
            ) : null}
          </div>
        ))}

        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label htmlFor="message" className="text-xs uppercase tracking-[0.11em] text-slate-400">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            value={data.message}
            onChange={(event) =>
              setData((prev) => ({ ...prev, message: event.target.value }))
            }
            className="rounded-lg border border-slate-600 bg-transparent px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-slate-500"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-err" : undefined}
            placeholder="Tell me about your project, timeline, and scope."
          />
          {errors.message ? (
            <p id="message-err" className="text-xs text-rose-300">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-wrap justify-end gap-2.5">
        <button
          type="button"
          onClick={() => setData({ name: "", email: "", subject: "", message: "" })}
          className="rounded-lg border border-slate-600 bg-slate-950/35 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100"
        >
          Clear
        </button>
        <button
          type="submit"
          className="rounded-lg border border-slate-600 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-500 hover:bg-white"
        >
          Send Message
        </button>
      </div>
    </motion.form>
  );
}
