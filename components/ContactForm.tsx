"use client";

import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { budgetOptions, contactInterestOptions, timelineOptions } from "@/lib/site-data";

type FormState = "idle" | "submitting" | "success" | "error";
type Errors = Record<string, string>;

function validate(formData: FormData): Errors {
  const errors: Errors = {};
  const email = String(formData.get("email") || "");
  const description = String(formData.get("description") || "");

  if (!String(formData.get("name") || "").trim()) errors.name = "Enter your name.";
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = "Enter a valid work email.";
  if (!String(formData.get("company") || "").trim()) errors.company = "Enter your company.";
  if (!String(formData.get("interest") || "").trim()) errors.interest = "Select an area of interest.";
  if (description.trim().length < 30) errors.description = "Describe the challenge in at least 30 characters.";
  if (formData.get("consent") !== "on") errors.consent = "Confirm consent before sending.";

  return errors;
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const statusMessage = useMemo(() => {
    if (state === "success") return "Thanks! Your project challenge has been received.";
    if (state === "error") return "The inquiry could not be submitted. Please check the fields and try again.";
    return "";
  }, [state]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setState("error");
      return;
    }

    setState("submitting");

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as { errors?: Errors } | null;
      setErrors(payload?.errors || {});
      setState("error");
      return;
    }

    form.reset();
    setErrors({});
    setState("success");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass-panel rounded-3xl p-6 sm:p-8"
      noValidate
      aria-describedby="contact-status"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" className="form-input" aria-invalid={Boolean(errors.name)} />
        </Field>
        <Field label="Work email" id="email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" className="form-input" aria-invalid={Boolean(errors.email)} />
        </Field>
        <Field label="Company" id="company" error={errors.company}>
          <input id="company" name="company" autoComplete="organization" className="form-input" aria-invalid={Boolean(errors.company)} />
        </Field>
        <Field label="Role" id="role">
          <input id="role" name="role" autoComplete="organization-title" className="form-input" />
        </Field>
        <Field label="Area of interest" id="interest" error={errors.interest}>
          <select id="interest" name="interest" className="form-input text-foreground bg-surface" aria-invalid={Boolean(errors.interest)}>
            <option value="">Select one</option>
            {contactInterestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Expected timeline" id="timeline">
          <select id="timeline" name="timeline" className="form-input text-foreground bg-surface">
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget context" id="budget" className="sm:col-span-2">
          <select id="budget" name="budget" className="form-input text-foreground bg-surface">
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Project or challenge description" id="description" error={errors.description} className="sm:col-span-2">
          <textarea
            id="description"
            name="description"
            rows={5}
            className="form-input min-h-32 resize-y py-3"
            aria-invalid={Boolean(errors.description)}
            placeholder="Describe the current state, desired outcome, constraints, and systems involved."
          />
        </Field>
      </div>

      <input tabIndex={-1} autoComplete="off" className="hidden" name="website" aria-hidden="true" />

      <div className="mt-5">
        <label className="flex gap-3 text-xs leading-5 text-muted-foreground">
          <input name="consent" type="checkbox" className="mt-0.5 h-4 w-4 rounded border-border bg-surface accent-primary" />
          <span>
            I agree that Aarkax may use this information to respond to my inquiry. Do not include confidential customer secrets.
          </span>
        </label>
        {errors.consent ? <p className="mt-1.5 text-xs text-destructive">{errors.consent}</p> : null}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-4px_rgba(59,130,246,0.5)] hover:bg-primary/90 disabled:opacity-60 transition-all duration-300"
        >
          {state === "submitting" ? "Sending..." : "Send inquiry"}
          <ArrowRight className="h-4 w-4" />
        </button>
        <p id="contact-status" role="status" className="text-xs font-mono text-muted-foreground">
          {statusMessage}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  className,
  children
}: {
  label: string;
  id: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold text-foreground uppercase tracking-wider font-mono">
        {label}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
