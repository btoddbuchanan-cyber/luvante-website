import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRight, Mail, FileText, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Luvante press resources, media inquiries, and company information for journalists covering EV charging infrastructure.",
};

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green bg-green/10 rounded-full mb-6">
              Press & Media
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
              Luvante in the <span className="text-green">News</span>
            </h1>
            <p className="mt-6 text-lg text-slate max-w-xl mx-auto">
              Stay up to date with the latest news, press releases, and media
              coverage about Luvante&apos;s elevated EV charging platform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="p-10 rounded-2xl bg-white/5 border border-white/10">
                <Mail size={32} className="text-green mb-6" />
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  Media Inquiries
                </h2>
                <p className="text-slate leading-relaxed mb-6">
                  For press inquiries, interview requests, or media resources,
                  please contact our communications team.
                </p>
                <a
                  href="mailto:info@luvante.com"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
                >
                  <Mail size={16} />
                  info@luvante.com
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="p-10 rounded-2xl bg-white/5 border border-white/10">
                <FileText size={32} className="text-green mb-6" />
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  About Luvante
                </h2>
                <p className="text-slate leading-relaxed mb-4">
                  Luvante Inc. is a B2B technology company offering elevated
                  electric vehicle charging infrastructure solutions. Our
                  modular, above-ground systems install faster, cost less, and
                  produce significantly less carbon than traditional in-ground
                  alternatives.
                </p>
                <p className="text-slate leading-relaxed">
                  Founded to solve the core challenges of EV charging
                  deployment, Luvante serves fleets, commercial properties,
                  municipalities, and public infrastructure across North America.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-24 bg-gradient-to-b from-navy-dark to-navy">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="Key Facts"
              title="Luvante at a Glance"
              description="Essential facts and figures for journalists and media professionals."
            />
          </AnimatedSection>

          <div className="mt-16 max-w-3xl mx-auto space-y-4">
            {[
              { label: "Company", value: "Luvante Inc." },
              { label: "Sector", value: "EV Charging Infrastructure / CleanTech" },
              { label: "Technology", value: "Elevated, Modular EV Charging Systems" },
              { label: "Markets", value: "Fleets, Commercial, Municipal, Residential" },
              {
                label: "Key Advantage",
                value: "20% less cost, 40% faster, 60% less carbon, 90% less trenching",
              },
              { label: "General Contact", value: "info@luvante.com" },
              { label: "Investor Relations", value: "ir@luvante.com" },
            ].map((fact, i) => (
              <AnimatedSection key={fact.label} delay={i * 0.05}>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 p-5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-sm font-semibold text-green min-w-[140px] shrink-0">
                    {fact.label}
                  </span>
                  <span className="text-sm text-white">{fact.value}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Want to Learn More?
            </h2>
            <p className="mt-4 text-lg text-slate max-w-xl mx-auto">
              Explore the Luvante platform or get in touch with our team.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/platform"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
              >
                The Luvante Platform
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
