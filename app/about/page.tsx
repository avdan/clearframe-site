import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/animate";

export const metadata: Metadata = {
  title: "About",
  description:
    "Clearframe Group Limited is a Hong Kong registered company providing software development and technology consulting services for business clients.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              About us
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              About Clearframe
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Professional software delivery for businesses that need practical
              digital solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeInStagger className="grid gap-8 md:grid-cols-2">
            {/* Company overview */}
            <FadeInStaggerItem>
              <div className="rounded-xl border border-border p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-foreground">
                  Company Overview
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Clearframe Group Limited is a Hong Kong registered company
                  focused on software development and related technology
                  consulting services. We work with business clients on custom
                  digital projects ranging from web applications and internal
                  tools to system integrations and ongoing software support.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Our approach is straightforward: understand the problem,
                  design a practical solution, build it well, and deliver it on
                  time. We value clear communication, honest assessments, and
                  reliable execution.
                </p>
              </div>
            </FadeInStaggerItem>

            {/* Business model */}
            <FadeInStaggerItem>
              <div className="rounded-xl border border-border p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-foreground">
                  How We Work
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  We operate as a lean software consultancy. For most projects,
                  we handle delivery directly using our in-house expertise. When
                  projects require additional specialisation or scale, we engage
                  trusted independent specialists, freelancers, or partner firms
                  to support execution.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  This flexible model means clients get a single point of
                  contact and accountability, while benefiting from the right
                  expertise for their specific project requirements.
                </p>
              </div>
            </FadeInStaggerItem>

            {/* Delivery */}
            <FadeInStaggerItem>
              <div className="rounded-xl border border-border p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-foreground">
                  Project Delivery
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Every engagement begins with a clear understanding of
                  objectives, constraints, and success criteria. We work in
                  structured phases with regular check-ins, ensuring projects
                  stay on track and aligned with business goals.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  We support remote and international project delivery, working
                  across time zones to suit our clients&apos; needs.
                </p>
              </div>
            </FadeInStaggerItem>

            {/* Company details */}
            <FadeInStaggerItem>
              <div className="rounded-xl border border-border p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-foreground">
                  Company Details
                </h2>
                <div className="mt-4 space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Legal Name
                    </p>
                    <p className="mt-1.5 text-sm text-foreground">
                      Clearframe Group Limited
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Registered Office
                    </p>
                    <p className="mt-1.5 text-sm text-muted">
                      11/F., Unit B, Winbase Centre,
                      <br />
                      208 Queen&apos;s Road Central,
                      <br />
                      Sheung Wan, Hong Kong
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Jurisdiction
                    </p>
                    <p className="mt-1.5 text-sm text-foreground">
                      Hong Kong SAR
                    </p>
                  </div>
                </div>
              </div>
            </FadeInStaggerItem>
          </FadeInStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-dark via-accent to-accent-light">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white">
              Interested in working together?
            </h2>
            <p className="mt-4 text-base text-white/80">
              We&apos;re always open to discussing new projects and partnerships.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-accent shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
