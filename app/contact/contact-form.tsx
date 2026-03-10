"use client";

import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xbdzdnwp");

  if (state.succeeded) {
    return (
      <div className="mt-6 flex flex-col items-center rounded-xl border border-border bg-surface p-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-semibold text-foreground">Thank you</h3>
        <p className="mt-2 text-sm text-muted">
          Your message has been received. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm placeholder:text-muted/50 transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="Your name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm placeholder:text-muted/50 transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="Your company (optional)"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm placeholder:text-muted/50 transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="you@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm placeholder:text-muted/50 transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="Tell us about your project..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
