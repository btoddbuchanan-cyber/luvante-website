import Link from "next/link";
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
              <span className="text-green">Fleets, Streets & Councils</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-slate max-w-2xl mx-auto leading-relaxed">
              Above-ground, weather-resistant, fully engineered, modular EV
              charging infrastructure. Utility friendly. Faster installation.
              Vastly less site disruption.
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

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
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
              Join the movement toward smarter, more sustainable EV
              infrastructure. Get in touch to learn how Luvante can transform
              your site.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
              >
                Get in Touch
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/about#team"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                Meet the Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
