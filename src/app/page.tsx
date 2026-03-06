import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import StatCard from "@/components/StatCard";
import SectionHeading from "@/components/SectionHeading";
import {
  Zap,
  Clock,
  Leaf,
  ArrowUpRight,
  Building2,
  ShoppingCart,
  Trees,
  Briefcase,
  Bus,
  Home,
  Fuel,
  Landmark,
  DollarSign,
  Timer,
  Recycle,
  Puzzle,
  CircleDollarSign,
  Rocket,
  Wrench,
  BadgeCheck,
  MapPin,
  TrendingUp,
} from "lucide-react";

const stats = [
  { value: "20%", label: "Less Cost" },
  { value: "40%", label: "Faster Installation" },
  { value: "60%", label: "Less Carbon" },
  { value: "90%", label: "Less Trenching" },
];

const problems = [
  {
    icon: DollarSign,
    title: "Cost",
    items: [
      "Bespoke designs don't scale",
      "Large upfront expenses",
      "Operational disruptions",
      "Difficult financing",
    ],
  },
  {
    icon: Timer,
    title: "Speed",
    items: [
      "Long project timelines",
      "Equipment lead time delays",
      "Utility coordination obstacles",
      "Operational disruptions",
    ],
  },
  {
    icon: Recycle,
    title: "Sustainability",
    items: [
      "Buried concrete, plastic & wire",
      "Parking lot disruption",
      "Limited redeployability",
      "Wasted materials",
    ],
  },
  {
    icon: Puzzle,
    title: "Flexibility",
    items: [
      "Fixed to current demands only",
      "Industry evolution incompatibility",
      "Incentive programs lack adaptability",
      "Single-use installations",
    ],
  },
];

const applications = [
  { icon: Building2, title: "Industrial & Logistics Hubs" },
  { icon: ShoppingCart, title: "Commercial & Retail Parking" },
  { icon: Trees, title: "Urban Infrastructure" },
  { icon: Briefcase, title: "Workplaces & Office Parks" },
  { icon: Bus, title: "Transportation Hubs" },
  { icon: Home, title: "Multi-Family Housing" },
  { icon: Fuel, title: "Highway Travel Stops" },
  { icon: Landmark, title: "Institutions & Public Services" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,rgba(37,239,117,0.15),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green bg-green/10 rounded-full mb-6">
              A Smarter Way to Charge
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-5xl mx-auto">
              Sustainable Elevated EV Charging for{" "}
              <span className="text-green">Fleets & Streets</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-slate max-w-2xl mx-auto leading-relaxed">
              Above-ground, modular EV charging infrastructure for charge point
              operators, fleets, and site hosts. Faster to deploy. Lower cost
              per port. Zero excavation.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/platform"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
              >
                Discover More
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/invest"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                Invest in Luvante
              </Link>
            </div>
          </AnimatedSection>

          {/* Hero Product Images — Street & Fleet */}
          <AnimatedSection delay={0.4}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/Luvante-Elevated-EV-Charging-System-for-Sustainable-Parking-Lots-Fleets-and-Councils-15b.jpg"
                  alt="Luvante elevated EV charging in an urban street setting with electric vehicles"
                  width={600}
                  height={338}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/Luvante-Elevated-EV-Charging-System-for-Sustainable-Parking-Lots-Fleets-and-Councils-14.jpg"
                  alt="Luvante elevated EV charging system at night in a downtown urban environment"
                  width={600}
                  height={338}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Stats */}
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

      {/* CPO Partner Section */}
      <section className="py-24 bg-gradient-to-b from-navy-dark to-navy">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="For Charge Point Operators"
              title="Deploy Faster. Earn More. Scale Without Limits."
              description="Luvante gives CPOs a competitive edge with modular infrastructure that installs in days, reduces capital outlay, and scales to meet demand — without excavation or utility delays."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <Rocket size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Faster Time to Revenue
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Go live in days, not months. Our above-ground modular system
                  eliminates trenching and excavation — so your chargers start
                  earning sooner.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <CircleDollarSign size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Lower CapEx Per Port
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Save 10-25% on installation costs versus in-ground systems.
                  Depreciable, relocatable assets mean smarter capital allocation
                  and new financing pathways.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <TrendingUp size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Scale on Demand
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Add capacity by connecting additional modules — no rip and
                  replace. Grow your network site by site, matching charger
                  rollout to actual demand.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <MapPin size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Win More Site Hosts
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Property owners prefer minimal disruption. Luvante&apos;s
                  above-ground install means no torn-up parking lots, no
                  weeks-long closures — making you the CPO of choice.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <Wrench size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Simpler O&M
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Above-ground components mean easier routine maintenance,
                  faster charger swaps, and straightforward upgrades — keeping
                  uptime high and service costs low.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <BadgeCheck size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Charger Agnostic
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Supports Level 2 and Level 3 chargers from any major OEM.
                  Choose the hardware that fits your business model without
                  infrastructure lock-in.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-12 text-center">
              <Link
                href="/contact?type=cpo"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
              >
                Become a CPO Partner
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="The Problem"
              title="Why Current EV Charging Falls Short"
              description="Traditional in-ground EV charging systems face critical challenges that limit adoption, increase costs, and slow the transition to electric vehicles."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, i) => (
              <AnimatedSection key={problem.title} delay={i * 0.1}>
                <div className="h-full p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green/20 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center mb-4">
                    <problem.icon size={24} className="text-green" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">
                    {problem.title}
                  </h3>
                  <ul className="space-y-2">
                    {problem.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-slate flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green/50 mt-1.5 shrink-0" />
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

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-b from-navy-dark to-navy">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="The Solution"
              title="Elevated, Modular EV Charging"
              description="Luvante positions charging components in above-ground, weather-resistant, fully engineered, modular structures — delivering game-changing reduction in Total Cost of Ownership."
            />
          </AnimatedSection>

          {/* Solution Showcase Images — Street & Fleet */}
          <AnimatedSection delay={0.1}>
            <div className="mt-12 mb-16 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/Luvante-Elevated-EV-Charging-System-for-Sustainable-Parking-Lots-Fleets-and-Councils-15c.jpg"
                  alt="Luvante elevated EV charging on a city street with electric vehicles"
                  width={600}
                  height={338}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/Luvante-Elevated-EV-Charging-System-for-Sustainable-Parking-Lots-Fleets-and-Councils-Fleet1.jpg"
                  alt="Luvante elevated EV charging system for fleet vehicles in a parking lot"
                  width={600}
                  height={338}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <Zap size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Utility Friendly
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Leverages proven power distribution technologies from
                  industrial facilities. Supports Level 2 and Level 3 EV
                  chargers for fleet and street applications.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <Clock size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Faster Installation
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Deploys in days or weeks versus weeks or months with
                  conventional in-ground systems. Reducing installation times by
                  40% to 50%.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <Leaf size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Vastly Less Disruption
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Eliminates costly, time-consuming excavation for power cables
                  and conduits. Easier routine maintenance, upgrades, and
                  component swaps.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="Applications"
              title="Built for Every Environment"
              description="From industrial fleet depots to urban street-side parking, Luvante's modular system adapts to any application."
            />
          </AnimatedSection>

          {/* Fleet Depot Showcase */}
          <AnimatedSection delay={0.1}>
            <div className="mt-12 mb-16 relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
              <Image
                src="/images/Luvante-Elevated-EV-Charging-System-for-Sustainable-Parking-Lots-Fleets-and-Councils-Fleet21.jpg"
                alt="Aerial view of a large fleet depot with Luvante elevated EV charging infrastructure"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {applications.map((app, i) => (
              <AnimatedSection key={app.title} delay={i * 0.05}>
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green/20 hover:bg-white/[0.07] transition-all group cursor-default">
                  <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center mb-3 group-hover:bg-green/20 transition-colors">
                    <app.icon size={22} className="text-green" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    {app.title}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-navy via-navy-dark to-navy">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Elevate Your EV Charging?
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
              Whether you&apos;re a charge point operator, site owner, or fleet
              manager — Luvante&apos;s modular platform gets your chargers live
              faster and at lower cost.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?type=cpo"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
              >
                Talk to Our CPO Team
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                Explore the Platform
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
