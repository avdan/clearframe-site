import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/logo.png"
              alt="Clearframe Group"
              width={140}
              height={48}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Software development and technology consulting for modern
              businesses.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Pages
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Registered Office
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              11/F., Unit B, Winbase Centre,
              <br />
              208 Queen&apos;s Road Central,
              <br />
              Sheung Wan, Hong Kong
            </p>
            <Link
              href="/privacy-policy"
              className="mt-4 inline-block text-sm text-white/60 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Clearframe Group Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
