import type { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  Globe,
  Lightbulb,
  Link2,
  Wrench,
  Users,
} from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/animate";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, web applications, technical consulting, system integration, and managed project delivery services.",
};

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "We build bespoke software solutions tailored to your business processes and objectives. From internal tools and workflow automation to customer-facing platforms, we deliver software that fits how your business actually operates.",
    useCases: [
      "Internal business tools and dashboards",
      "Workflow automation systems",
      "Data processing and reporting platforms",
      "Custom business logic implementations",
    ],
    fits: "Businesses with unique operational requirements that off-the-shelf software cannot address.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Modern, responsive web applications built with proven frameworks and technologies. We focus on performance, usability, and maintainability to deliver applications that serve your users effectively.",
    useCases: [
      "Customer portals and self-service platforms",
      "SaaS product development",
      "Content management systems",
      "E-commerce and marketplace platforms",
    ],
    fits: "Startups launching new products and businesses moving services online.",
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    description:
      "Expert guidance on technology decisions, system architecture, and implementation strategy. We help you evaluate options, plan projects, and avoid costly technical mistakes before development begins.",
    useCases: [
      "Technology stack evaluation and selection",
      "System architecture review",
      "Technical due diligence",
      "Migration and modernisation planning",
    ],
    fits: "Businesses making significant technology investments or facing complex technical decisions.",
  },
  {
    icon: Link2,
    title: "System Integration",
    description:
      "Connecting your existing tools, services, and data sources into cohesive systems. We build bridges between platforms so your technology works together instead of in silos.",
    useCases: [
      "API development and third-party integrations",
      "Data synchronisation between platforms",
      "Legacy system connectivity",
      "Payment and service provider integrations",
    ],
    fits: "Organisations with multiple systems that need to share data and coordinate workflows.",
  },
  {
    icon: Wrench,
    title: "Software Maintenance & Support",
    description:
      "Ongoing technical support, performance monitoring, security updates, and feature improvements for existing software. We keep your systems current, secure, and running smoothly.",
    useCases: [
      "Bug fixes and performance optimisation",
      "Security patches and dependency updates",
      "Feature enhancements and iterations",
      "Infrastructure monitoring and incident response",
    ],
    fits: "Businesses with existing software that needs reliable ongoing technical care.",
  },
  {
    icon: Users,
    title: "Managed Project Delivery",
    description:
      "End-to-end project management and delivery using our internal team supplemented with specialist subcontractors where needed. We coordinate all aspects of execution so you get a single point of accountability.",
    useCases: [
      "Full-cycle product development",
      "Projects requiring multiple skill specialisations",
      "Time-sensitive delivery with scaled resources",
      "Complex projects needing coordinated workstreams",
    ],
    fits: "Businesses that want a reliable delivery partner without managing multiple vendors directly.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              What we offer
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              We provide software development and technology consulting services
              across the full project lifecycle, from initial planning through to
              delivery and ongoing support.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeInStagger className="space-y-6">
            {services.map((service) => (
              <FadeInStaggerItem key={service.title}>
                <div className="group rounded-xl border border-border p-8 shadow-sm transition-all duration-300 hover:border-accent/20 hover:shadow-lg">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                          <service.icon className="h-5 w-5" />
                        </div>
                        <h2 className="text-xl font-semibold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>
                    </div>
                    <div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                          Typical use cases
                        </p>
                        <ul className="mt-3 space-y-2">
                          {service.useCases.map((uc) => (
                            <li
                              key={uc}
                              className="flex items-start gap-2.5 text-sm text-muted"
                            >
                              <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/40" />
                              {uc}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 rounded-lg bg-surface-alt p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                          Best fit
                        </p>
                        <p className="mt-2 text-sm text-muted">{service.fits}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-dark via-accent to-accent-light">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-base text-white/80">
              Tell us what you need and we&apos;ll discuss how we can help.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-accent shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
