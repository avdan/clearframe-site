import type { Metadata } from "next";
import { Mail, MapPin, Globe } from "lucide-react";
import { FadeIn } from "@/components/animate";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Clearframe Group Limited for software development, technical consulting, or project inquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Get in touch
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Contact
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Have a project in mind or want to discuss how we can help? Get in
              touch and we&apos;ll respond promptly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Contact form */}
            <FadeIn>
              <div className="rounded-xl border border-border p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-foreground">
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </FadeIn>

            {/* Contact details */}
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <div className="rounded-xl border border-border p-6 shadow-sm transition-all hover:border-accent/20 hover:shadow-md">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Email
                      </p>
                      <a
                        href="mailto:hello@clearframe-group.com"
                        className="mt-1 block text-sm text-foreground transition-colors hover:text-accent"
                      >
                        hello@clearframe-group.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border p-6 shadow-sm transition-all hover:border-accent/20 hover:shadow-md">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Registered Office
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        11/F., Unit B, Winbase Centre,
                        <br />
                        208 Queen&apos;s Road Central,
                        <br />
                        Sheung Wan, Hong Kong
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border p-6 shadow-sm transition-all hover:border-accent/20 hover:shadow-md">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Project Delivery
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        We support remote and international project delivery. Our
                        team works across time zones to suit your requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
