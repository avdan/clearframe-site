import type { Metadata } from "next";
import { FadeIn } from "@/components/animate";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Clearframe Group Limited covering data collection, usage, and your rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl px-6 py-24">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-muted">
              Last updated: March 2026
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <FadeIn>
            <div className="space-y-10 text-sm leading-relaxed text-muted">
              <section>
                <h2 className="text-lg font-semibold text-foreground">
                  1. Introduction
                </h2>
                <p className="mt-3">
                  Clearframe Group Limited (&quot;we&quot;, &quot;us&quot;, or
                  &quot;our&quot;) is committed to protecting the privacy of
                  visitors to our website and individuals who contact us through
                  our inquiry form. This policy explains what data we collect, why
                  we collect it, and how we handle it.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground">
                  2. Data We Collect
                </h2>
                <p className="mt-3">
                  We may collect the following information when you use our website
                  or contact us:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1">
                  <li>
                    <strong>Contact form submissions:</strong> name, email address,
                    company name (if provided), and message content
                  </li>
                  <li>
                    <strong>Technical data:</strong> IP address, browser type,
                    device information, and pages visited (collected automatically
                    through standard web server logs)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground">
                  3. How We Use Your Data
                </h2>
                <p className="mt-3">We use the data we collect to:</p>
                <ul className="mt-3 list-inside list-disc space-y-1">
                  <li>Respond to your inquiries and communicate about potential projects</li>
                  <li>Improve our website and services</li>
                  <li>Ensure the security and proper operation of our website</li>
                </ul>
                <p className="mt-3">
                  We do not sell, rent, or share your personal data with third
                  parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground">
                  4. Data Retention
                </h2>
                <p className="mt-3">
                  We retain contact form submissions and related correspondence for
                  as long as necessary to fulfill the purpose for which the data was
                  collected, or as required by law. If an inquiry does not lead to a
                  business relationship, we will delete the associated data within a
                  reasonable timeframe.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground">
                  5. Cookies
                </h2>
                <p className="mt-3">
                  Our website may use essential cookies required for the basic
                  operation of the site. We do not use tracking cookies or
                  third-party advertising cookies. If we introduce analytics in the
                  future, this policy will be updated accordingly.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground">
                  6. Your Rights
                </h2>
                <p className="mt-3">You have the right to:</p>
                <ul className="mt-3 list-inside list-disc space-y-1">
                  <li>Request access to the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Withdraw consent for data processing where applicable</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, please contact us using the
                  details below.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground">
                  7. Third-Party Services
                </h2>
                <p className="mt-3">
                  Our website may use third-party services for hosting, form
                  processing, or analytics. These services may process data on our
                  behalf in accordance with their own privacy policies. We only use
                  reputable service providers that offer adequate data protection.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground">
                  8. Changes to This Policy
                </h2>
                <p className="mt-3">
                  We may update this privacy policy from time to time. Any changes
                  will be posted on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground">
                  9. Contact
                </h2>
                <p className="mt-3">
                  If you have any questions about this privacy policy or wish to
                  exercise your data rights, please contact us at:
                </p>
                <p className="mt-3">
                  <strong>Clearframe Group Limited</strong>
                  <br />
                  11/F., Unit B, Winbase Centre,
                  <br />
                  208 Queen&apos;s Road Central,
                  <br />
                  Sheung Wan, Hong Kong
                  <br />
                  <a
                    href="mailto:hello@clearframe-group.com"
                    className="text-accent transition-colors hover:text-accent-light"
                  >
                    hello@clearframe-group.com
                  </a>
                </p>
              </section>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
