import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import {
  ArrowUpRight,
  TrendingUp,
  Globe,
  Leaf,
  Shield,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Investment Opportunities",
  description:
    "Invest in the future of electric vehicle charging infrastructure. Learn about investment opportunities with Luvante's elevated EV charging platform.",
};

const stats = [
  { value: "$1.5T", label: "Projected Global EV Market by 2030" },
  { value: "40M+", label: "EV Chargers Needed Globally" },
  { value: "5x", label: "Growth in Fleet Electrification" },
  { value: "80%", label: "TCO Savings Potential" },
];

const reasons = [
  {
    icon: TrendingUp,
    title: "Massive Market Opportunity",
    description:
      "The global EV charging infrastructure market is projected to grow exponentially. Luvante's modular approach positions us to capture significant market share with lower deployment costs and faster timelines.",
  },
  {
    icon: Globe,
    title: "Scalable Technology",
    description:
      "Our modular, above-ground system scales effortlessly. Add capacity by connecting additional pillars and canopies without excavation — enabling rapid expansion across markets.",
  },
  {
    icon: Leaf,
    title: "Sustainability Leadership",
    description:
      "60% less carbon emissions, 90% less trenching, and fully redeployable infrastructure. Luvante's approach aligns with ESG mandates and sustainability targets that drive institutional investment.",
  },
  {
    icon: Shield,
    title: "Experienced Leadership",
    description:
      "Our team brings decades of combined experience from CBRE, Nexii, Eversource, McKinsey, and other leading organizations in energy, infrastructure, and finance.",
  },
];

export default function InvestPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_60%_40%,rgba(241,197,14,0.1),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 rounded-full mb-6">
                Investor Relations
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Invest in the Future of{" "}
                <span className="text-green">
                  EV Charging Infrastructure
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-slate max-w-3xl mx-auto leading-relaxed">
                Join us in building the next generation of sustainable EV
                charging infrastructure. Luvante represents a compelling
                opportunity at the intersection of clean energy, infrastructure,
                and technology.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-10">
                <a
                  href="mailto:ir@luvante.com"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
                >
                  <Mail size={16} />
                  Contact Investor Relations
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="Opportunity"
              title="Why Invest in Luvante?"
              description="The EV transition is accelerating globally. Luvante's elevated charging platform addresses the largest bottleneck: affordable, scalable charging infrastructure."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <AnimatedSection key={reason.title} delay={i * 0.1}>
                <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/20 transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                    <reason.icon size={28} className="text-green" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact IR */}
      <section className="py-24 bg-gradient-to-b from-navy-dark to-navy">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <div className="p-10 md:p-16 rounded-3xl bg-white/5 border border-white/10">
              <Mail size={40} className="text-green mx-auto mb-6" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
                Speak with Our Investor Relations Team
              </h2>
              <p className="mt-4 text-slate max-w-xl mx-auto">
                For information about current investment opportunities, please
                contact our Investor Relations team directly.
              </p>
              <a
                href="mailto:ir@luvante.com"
                className="mt-8 group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
              >
                <Mail size={16} />
                ir@luvante.com
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-charcoal">
        <div className="mx-auto max-w-4xl px-6">
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5">
            <h3 className="font-heading text-sm font-semibold text-slate-dark uppercase tracking-wider mb-4">
              Important Disclaimers
            </h3>
            <div className="space-y-3 text-xs text-slate-dark leading-relaxed">
              <p>
                This page is for information purposes only and does not
                constitute an offer to sell or a solicitation of an offer to
                purchase any securities. Any investment in Luvante Inc. involves
                significant risks given the early-stage nature of the company.
              </p>
              <p>
                Neither Luvante nor any of its affiliates makes any
                representation or warranty as to the accuracy or completeness of
                the information presented. Forward-looking statements are subject
                to risks and uncertainties that may cause actual results to
                differ materially.
              </p>
              <p>
                Securities have not been registered under the U.S. Securities
                Act of 1933, as amended. Please consult with qualified legal and
                financial advisors before making any investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
