import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import {
  ArrowUpRight,
  DollarSign,
  Clock,
  Blocks,
  PiggyBank,
  BarChart3,
  Building2,
  ShoppingCart,
  Briefcase,
  Trees,
  CheckCircle2,
  Handshake,
  Rocket,
  MapPin,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Luvante Platform",
  description:
    "Discover the Luvante elevated EV charging platform — modular, above-ground systems that install faster, cost less, and produce 60% less carbon than in-ground alternatives.",
};

const stats = [
  { value: "20%", label: "Less Cost vs. In-Ground" },
  { value: "40%", label: "Faster Installation" },
  { value: "60%", label: "Less Carbon Emissions" },
  { value: "90%", label: "Less Trenching Required" },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Less Expensive Installation",
    description:
      "Savings estimated between 10% and 25% over conventional EV charging systems when 12 or more charging ports are installed. Eliminates costly excavation and underground conduit work.",
  },
  {
    icon: Clock,
    title: "Faster Installation",
    description:
      "Deploys in days or weeks versus weeks or months with current EV in-ground charging systems. Reducing installation times by 40% to 50% compared to conventional approaches.",
  },
  {
    icon: Blocks,
    title: "Scalable Modularity",
    description:
      "Add capacity by connecting additional pillars and canopies without excavation. Scale your charging infrastructure as demand grows — no rip-and-replace required.",
  },
  {
    icon: PiggyBank,
    title: "Smarter Financing",
    description:
      "Transforms EV stations into depreciable assets that can be relocated or expanded. Eliminates abandoned sunk costs and opens new financing pathways.",
  },
  {
    icon: BarChart3,
    title: "Lower Total Cost of Ownership",
    description:
      "Game-changing reduction in Total Cost of Ownership through redeployability, easier maintenance, simpler upgrades, and modular component swaps.",
  },
];

const applications = [
  {
    icon: Building2,
    title: "Industrial & Logistics Hubs",
    items: [
      "Warehouses and distribution centers",
      "Electric fleet vehicles (vans, trucks)",
      "Manufacturing plants",
      "Staff and service vehicle charging",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Commercial & Retail Locations",
    items: [
      "Shopping malls and retail centers",
      "Supermarkets and big-box stores",
      "Hotels and resorts",
      "Customer attraction and dwell-time",
    ],
  },
  {
    icon: Briefcase,
    title: "Workplace & Office Parks",
    items: [
      "Corporate campuses",
      "Employee EV charging perks",
      "Business parks",
      "Tenant attraction and sustainability goals",
    ],
  },
  {
    icon: Trees,
    title: "Urban Infrastructure & Public",
    items: [
      "Municipal parking lots and garages",
      "On-street parking for residents",
      "Dense urban areas with limited private parking",
      "Public parks and recreational areas",
    ],
  },
];

const systemFeatures = [
  "Above-ground, weather-resistant, fully engineered",
  "Modular structure — expand on demand",
  "Supports Level 2 and Level 3 EV chargers",
  "Fleet and street applications",
  "Proven power distribution technologies",
  "Easier routine maintenance and upgrades",
  "Relocatable — improves lifetime cost",
  "Eliminates excavation for cables and conduits",
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(37,239,117,0.15),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green bg-green/10 rounded-full mb-6">
                The Luvante Platform
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Modular, Elevated{" "}
                <span className="text-green">EV Charging Systems</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-slate max-w-3xl mx-auto leading-relaxed">
                The Luvante system positions EV charging components in an
                above-ground, weather-resistant, modular structure — eliminating
                the costly, time-consuming excavation that holds back traditional
                installations.
              </p>
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

      {/* System Overview */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-green bg-green/10 rounded-full mb-4">
                  System Overview
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
                  Engineered for Performance
                </h2>
                <p className="mt-4 text-slate leading-relaxed">
                  The Luvante platform leverages proven power distribution
                  technologies from industrial facilities to deliver a
                  best-in-class EV charging experience. Our above-ground design
                  supports both Level 2 and Level 3 chargers for any fleet or
                  public application.
                </p>
                <div className="mt-8 rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/Luvante-Elevated-EV-Charging-System-for-Sustainable-Parking-Lots-Fleets-and-Councils-Fleet1.jpg"
                    alt="Luvante elevated EV charging system for fleet vehicles"
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {systemFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-green shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-b from-navy-dark to-navy">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="Key Benefits"
              title="Why Choose Elevated EV Charging?"
              description="The Luvante platform addresses every major pain point in traditional EV charging deployment — from cost and speed to sustainability and flexibility."
            />
          </AnimatedSection>

          <div className="mt-16 space-y-6">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.08}>
                <div className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/20 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center shrink-0">
                    <benefit.icon size={28} className="text-green" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="Applications"
              title="Designed for Every Environment"
              description="From fleet depots to urban streets, the Luvante platform adapts to any deployment scenario."
            />
          </AnimatedSection>

          {/* Application Showcase Images — Street & Fleet */}
          <AnimatedSection delay={0.1}>
            <div className="mt-12 mb-16 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/Luvante-Elevated-EV-Charging-System-for-Sustainable-Parking-Lots-Fleets-and-Councils-15.jpg"
                  alt="Luvante elevated EV charging in a street-side urban setting"
                  width={600}
                  height={338}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/Luvante-Elevated-EV-Charging-System-for-Sustainable-Parking-Lots-Fleets-and-Councils-Fleet-3.jpg"
                  alt="Aerial view of Luvante elevated EV charging infrastructure at a fleet depot"
                  width={600}
                  height={338}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, i) => (
              <AnimatedSection key={app.title} delay={i * 0.1}>
                <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/20 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-5">
                    <app.icon size={28} className="text-green" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-4">
                    {app.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {app.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-slate flex items-start gap-2"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-green/60 shrink-0 mt-0.5"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CPO Advantage Section */}
      <section className="py-24 bg-gradient-to-b from-navy-dark to-navy">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="CPO Advantage"
              title="Purpose-Built for Charge Point Operators"
              description="Luvante's platform is designed to help CPOs deploy more sites, faster — with lower capital requirements and higher return on every port."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="h-full flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/20 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center shrink-0">
                  <Rocket size={28} className="text-green" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">
                    Rapid Site Activation
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Deploy a full charging site in days instead of months. No
                    trenching permits, no excavation crews, no weeks of
                    construction downtime. Your chargers go live while
                    competitors are still waiting on permits.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="h-full flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/20 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center shrink-0">
                  <MapPin size={28} className="text-green" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">
                    Relocatable Assets
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Lease ends or demand shifts? Move your infrastructure to a
                    new site instead of writing it off. Luvante turns charging
                    stations into portable, depreciable assets that follow your
                    business.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="h-full flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/20 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center shrink-0">
                  <Wrench size={28} className="text-green" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">
                    Hardware Flexibility
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Bring your preferred Level 2 or Level 3 chargers from any
                    OEM. The Luvante platform is charger-agnostic, so you are
                    never locked into a single hardware vendor or technology
                    cycle.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="h-full flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/20 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center shrink-0">
                  <Handshake size={28} className="text-green" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">
                    Site Host Appeal
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Property owners and landlords prefer Luvante because it
                    means no torn-up lots, no multi-week closures, and no
                    permanent ground alterations — making it easier for you to
                    win the best locations.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-navy via-navy-dark to-navy">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Deploy Faster as a CPO?
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
              See how Luvante&apos;s modular platform can accelerate your
              rollout, reduce your CapEx, and help you win more sites.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?type=cpo"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
              >
                Schedule a CPO Consultation
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/invest"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                Investment Opportunities
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
