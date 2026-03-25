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
  Paintbrush,
  BadgeCheck,
  Scale,
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
    title: "Small Deal Sizes",
    items: [
      "Retrofits sized for 2–5 ports, not actual demand",
      "Trenching costs force conservative proposals",
      "Clients balk at parking lot construction",
      "Revenue opportunity left on the table",
    ],
  },
  {
    icon: Timer,
    title: "Slow Time to Revenue",
    items: [
      "Civil work adds weeks or months",
      "Tenant and HOA approval delays",
      "Building boards reject disruption",
      "Decision cycles stall at the proposal stage",
    ],
  },
  {
    icon: Puzzle,
    title: "Hard to Scale",
    items: [
      "Small pilots near the electrical panel",
      "Adding capacity means re-trenching",
      "No path from pilot to full deployment",
      "Fixed installations can't adapt",
    ],
  },
  {
    icon: Recycle,
    title: "Hard to Differentiate",
    items: [
      "Competitive bids look the same",
      "Margin pressure on commodity installs",
      "No way to add value beyond hardware",
      "Site hosts see all CPOs as interchangeable",
    ],
  },
];

const applications = [
  { icon: Home, title: "Multi-Family Housing" },
  { icon: Briefcase, title: "Workplaces & Office Parks" },
  { icon: Building2, title: "Industrial & Logistics Hubs" },
  { icon: ShoppingCart, title: "Commercial & Retail Parking" },
  { icon: Trees, title: "Urban Infrastructure" },
  { icon: Bus, title: "Transportation Hubs" },
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
              Elevated EV Charging Infrastructure
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-5xl mx-auto">
              Bigger Retrofits.{" "}
              <span className="text-green">Zero Trenching.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-slate max-w-2xl mx-auto leading-relaxed">
              Above-ground, modular EV charging infrastructure that eliminates
              excavation and disruption — so CPOs can deploy more ports, faster,
              at multifamily, office, and fleet sites.
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

          {/* Hero Product Image */}
          <AnimatedSection delay={0.4}>
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/Luvante-Elevated-EV-Charging-System-for-Sustainable-Parking-Lots-Fleets-and-Councils-15b.jpg"
                  alt="Luvante elevated EV charging in an urban street setting with electric vehicles"
                  width={1200}
                  height={675}
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
              title="Win Larger Deals. Compress Timelines. Stand Out."
              description="Retrofit deals in multifamily and office are undersized — not because of demand, but because of disruption. Luvante's elevated design removes the barriers that shrink your projects and stall approvals."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <TrendingUp size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Larger Retrofit Deals
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Our elevated design eliminates trenching disruption, so
                  retrofit deals can finally match actual demand. Design projects
                  at 15&ndash;20+ ports instead of settling for 2&ndash;5.
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
                  By saving on trenching and civil work, our system delivers
                  lower installed cost per port. Depreciable, relocatable assets
                  mean smarter capital allocation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <Rocket size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Faster Time to Revenue
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Not only do you save time by avoiding civil work — you compress
                  decision cycles by removing tenant and HOA concerns about
                  &ldquo;construction in the parking lot.&rdquo;
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <Scale size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Scale on Demand
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Modular, no-trenching design lets you add more charging
                  capacity in the future without disruption. Start with what the
                  site needs today and grow with demand.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <Paintbrush size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Differentiate Your Bid
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Our elevated design is unique — it allows your client to
                  integrate branding, art, lighting, security cameras, or other
                  amenities. Stand out without compressing your margins.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <BadgeCheck size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Hardware Agnostic
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Supports Level 2 and Level 3 chargers from any major OEM.
                  Choose the hardware that fits your business model — no
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

      {/* Market Opportunity Section */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="The Opportunity"
              title="Demand Is Real. Retrofits Are Undersized."
              description="EV charging demand in multifamily and office is surging — but most retrofit projects are sized around installation convenience, not resident or tenant need."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Multifamily Stats */}
            <AnimatedSection delay={0.1}>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-semibold uppercase tracking-widest text-green">Multifamily</span>
                <div className="mt-6 flex items-center gap-6">
                  <div className="text-center">
                    <p className="font-heading text-4xl md:text-5xl font-bold text-green">~5%</p>
                    <p className="mt-2 text-sm text-slate">of U.S. multifamily properties have on-site EV charging</p>
                  </div>
                  <span className="text-2xl text-slate font-light">vs.</span>
                  <div className="text-center">
                    <p className="font-heading text-4xl md:text-5xl font-bold text-white">15%</p>
                    <p className="mt-2 text-sm text-slate">of multifamily renters plan to buy an EV within 5 years</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate/80 leading-relaxed">
                  58% of those renters say they would pay more in rent to access charging. The default outcome of 2&ndash;5 chargers near the panel isn&apos;t about demand — it&apos;s about avoiding disruption.
                </p>
              </div>
            </AnimatedSection>

            {/* Office Stats */}
            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-semibold uppercase tracking-widest text-green">Office</span>
                <div className="mt-6 flex items-center gap-6">
                  <div className="text-center">
                    <p className="font-heading text-4xl md:text-5xl font-bold text-green">~64%</p>
                    <p className="mt-2 text-sm text-slate">increase in charging sessions vs. pre-pandemic</p>
                  </div>
                  <span className="text-2xl text-slate font-light">vs.</span>
                  <div className="text-center">
                    <p className="font-heading text-4xl md:text-5xl font-bold text-white">~22%</p>
                    <p className="mt-2 text-sm text-slate">increase in charging port installations</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate/80 leading-relaxed">
                  EV drivers per port in office buildings jumped from 8 to 12 post-pandemic. The inability to keep pace is driven by the cost of retrofits and concerns about disruption.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-navy-dark">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="The Problem"
              title="Why Retrofit Deals Stall"
              description="Proposals get cut because trenching in an occupied parking lot sounds costly and disruptive. Building boards and HOAs vote down larger deployments. The deal stalls at the proposal stage — not at engineering."
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
              title="Elevated Design Changes the Deal"
              description="For disruption-constrained sites — buildings from the 1990s–2010s with adequate panel capacity but occupied parking lots — Luvante's above-ground design removes the barrier that kills proposals."
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
                  No Trenching Required
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Elevated busway delivers power above ground — eliminating
                  excavation entirely. Leverages proven industrial power
                  distribution for Level 2 and Level 3 chargers.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <Clock size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Approval-Friendly Design
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  No &ldquo;construction in the parking lot&rdquo; means faster
                  approval from building boards, HOAs, and property managers.
                  Compress decision cycles from months to weeks.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <Leaf size={28} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Premium Amenity Integration
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  The elevated structure integrates branding, lighting, art,
                  security cameras, and weather protection — turning
                  infrastructure into an amenity that enhances the property.
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
              description="From multifamily retrofits to office parks and fleet depots, Luvante's modular system adapts to any site — especially where disruption is the constraint."
            />
          </AnimatedSection>

          {/* Fleet & Street Showcase */}
          <AnimatedSection delay={0.1}>
            <div className="mt-12 mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-green mb-3">Fleet</span>
                <div className="relative flex-1 rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                  <Image
                    src="/images/Luvante-Elevated-EV-Charging-System-for-Sustainable-Parking-Lots-Fleets-and-Councils-Fleet21.jpg"
                    alt="Aerial view of a large fleet depot with Luvante elevated EV charging infrastructure"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-green mb-3">Street</span>
                <div className="relative flex-1 rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                  <Image
                    src="/images/luvante-street-charging.jpg"
                    alt="Luvante elevated EV charging system on a retail street with brick storefronts and electric vehicles"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
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
              Ready to Win Larger Retrofit Deals?
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
              Whether you&apos;re deploying at multifamily, office, or fleet
              sites — Luvante&apos;s elevated design removes the disruption
              barrier that shrinks your projects and stalls approvals.
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
