import Link from "next/link";
import {
  Code,
  Globe,
  Lightbulb,
  Link2,
  Wrench,
  Rocket,
  Hammer,
  PackageCheck,
  Building2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/animate";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Bespoke software solutions designed around your specific business requirements and workflows.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Modern, responsive web applications built with proven technologies and best practices.",
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    description:
      "Expert guidance on technology strategy, architecture decisions, and implementation planning.",
  },
  {
    icon: Link2,
    title: "System Integration",
    description:
      "Connecting your existing tools, platforms, and data sources into cohesive, efficient systems.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing technical support, updates, and improvements to keep your software running smoothly.",
  },
];

const clients = [
  {
    icon: Rocket,
    label: "Startups",
    description:
      "Early-stage companies building their first product or scaling existing systems.",
  },
  {
    icon: Building2,
    label: "SMEs",
    description:
      "Small and medium businesses modernising operations or building custom tools.",
  },
  {
    icon: Users,
    label: "Business Clients",
    description:
      "Established organisations needing reliable software delivery partners.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your requirements, constraints, and objectives through focused conversations.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We design and develop your solution with regular check-ins and transparent progress updates.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We deploy, test, and hand over a working solution with documentation and ongoing support options.",
  },
];

const trust = [
  {
    icon: ShieldCheck,
    title: "Hong Kong Registered",
    description:
      "A properly registered company with a clear legal presence and professional business operations.",
  },
  {
    icon: PackageCheck,
    title: "Professional Delivery",
    description:
      "Structured project management, clear communication, and reliable timelines for every engagement.",
  },
  {
    icon: Hammer,
    title: "Flexible Execution",
    description:
      "Internal expertise supplemented with specialist subcontractors when projects require it.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
        {/* Dot grid background */}
        <div className="bg-grid absolute inset-0 opacity-40" />
        {/* Gradient orb */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-blue-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Software Development &middot; Technical Consulting
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              Build better software with a{" "}
              <span className="text-gradient">trusted partner</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Clearframe Group Limited provides custom software development,
              technical consulting, and project delivery services for businesses
              that need practical digital solutions.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-accent px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-lg border border-border bg-white px-6 py-3.5 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                Our Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services overview */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              What we do
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              We deliver practical software solutions across the full project
              lifecycle.
            </p>
          </FadeIn>
          <FadeInStagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <FadeInStaggerItem key={service.title}>
                <div className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
          <FadeIn>
            <div className="mt-12">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-light"
              >
                View all services
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Clients
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Who we work with
            </h2>
          </FadeIn>
          <FadeInStagger className="mt-14 grid gap-8 md:grid-cols-3">
            {clients.map((client) => (
              <FadeInStaggerItem key={client.label}>
                <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <client.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {client.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {client.description}
                  </p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              How we work
            </h2>
          </FadeIn>
          <FadeInStagger className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <FadeInStaggerItem key={step.number}>
                <div className="relative">
                  <span className="text-5xl font-bold text-accent/10">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="absolute right-0 top-6 hidden h-px w-12 bg-border lg:block" />
                  )}
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Why us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Why Clearframe
            </h2>
          </FadeIn>
          <FadeInStagger className="mt-14 grid gap-8 md:grid-cols-3">
            {trust.map((item) => (
              <FadeInStaggerItem key={item.title}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
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
              Ready to discuss your project?
            </h2>
            <p className="mt-4 text-base text-white/80">
              Get in touch and tell us what you&apos;re building.
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
