import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/platform", label: "The Luvante Platform" },
    { href: "/invest", label: "Investment Opportunities" },
    { href: "/contact", label: "Contact Us" },
  ],
  resources: [
    { href: "/press", label: "Press & Media" },
    { href: "/about#team", label: "The Luvante Team" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-wide text-white">
                LUVANTE
              </span>
              <p className="text-[10px] tracking-[0.25em] text-slate uppercase mt-0.5">
                Elevated EV Charging
              </p>
            </Link>
            <p className="mt-4 text-sm text-slate leading-relaxed">
              Sustainable elevated electric vehicle charging infrastructure for
              fleets, streets, and councils.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate hover:text-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate hover:text-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate hover:text-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate">
            &copy; {new Date().getFullYear()} LUVANTE Inc. All rights reserved.
          </p>
          <a
            href="mailto:info@luvante.com"
            className="text-xs text-slate hover:text-green transition-colors"
          >
            info@luvante.com
          </a>
        </div>
      </div>
    </footer>
  );
}
