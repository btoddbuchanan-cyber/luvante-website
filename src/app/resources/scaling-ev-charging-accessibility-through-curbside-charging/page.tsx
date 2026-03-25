import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Scaling EV Charging Accessibility Through Curbside Charging",
  description:
    "Not everyone has a garage or dedicated parking spot. Learn how curbside charging solutions are making EV ownership accessible for renters, urban residents, and underserved communities.",
};

export default function BlogPost() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm text-slate hover:text-green transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Resources
            </Link>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green bg-green/10 rounded-full mb-4">
              Accessibility
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Scaling EV Charging Accessibility Through Curbside Charging
            </h1>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                February 20, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                7 min read
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <div className="prose prose-lg prose-invert max-w-none space-y-8">
              <p className="text-lg text-slate-light leading-relaxed">
                The electric vehicle revolution promises cleaner air, lower
                transportation costs, and a more sustainable future. But for
                millions of Americans who rent their homes, live in multi-unit
                buildings, or park on the street, EV ownership remains out of
                reach — not because of the vehicles themselves, but because of
                where and how they can charge.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                The Charging Access Gap
              </h2>
              <p className="text-slate-light leading-relaxed">
                Today&apos;s EV charging infrastructure heavily favors
                homeowners with garages and dedicated parking. The vast majority
                of EV charging happens at home, overnight — a convenient reality
                for those with private driveways but an impossible one for the
                roughly 36% of American households who rent and the millions more
                who live in apartments, condos, or dense urban neighborhoods
                without dedicated parking.
              </p>
              <p className="text-slate-light leading-relaxed">
                This gap creates a two-tier system: those who can charge at home
                enjoy all the benefits of EV ownership, while those who cannot
                are effectively excluded from the transition. If the EV future is
                to be equitable, charging access must extend beyond private
                property and into the public realm.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                Curbside Charging as an Equalizer
              </h2>
              <p className="text-slate-light leading-relaxed">
                Curbside charging infrastructure flips the accessibility equation
                by bringing charging to the public right-of-way — the streets,
                curbs, and parking spaces that every resident can access
                regardless of their housing situation. A renter in a walk-up
                apartment can charge their EV on the same block where they park
                every night. A resident of a multi-unit building without garage
                access can top off while running errands.
              </p>
              <p className="text-slate-light leading-relaxed">
                This is not just about convenience — it is about equity. Federal
                and state incentive programs increasingly recognize this, with
                Justice40 and similar initiatives directing charging investments
                toward disadvantaged communities. But incentive dollars are only
                effective when paired with infrastructure that can actually be
                deployed in these neighborhoods — many of which have limited
                space for traditional charging stations and aging underground
                utilities that make trenching difficult and expensive.
              </p>

              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 my-12">
                <p className="text-green font-heading font-semibold text-lg mb-3">
                  The Equity Imperative
                </p>
                <p className="text-white leading-relaxed">
                  If EV charging only works for people with garages and
                  driveways, the clean transportation future will leave behind
                  the communities that need it most. Curbside charging is the
                  infrastructure bridge that makes EV ownership possible for
                  everyone.
                </p>
              </div>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                Overcoming Deployment Barriers With Above-Ground Infrastructure
              </h2>
              <p className="text-slate-light leading-relaxed">
                The challenge in scaling curbside charging has always been
                deployment cost and complexity. Traditional in-ground
                installations require digging up streets to run conduit, which is
                slow, expensive, and disruptive — especially in older
                neighborhoods where underground utilities are densely packed and
                difficult to navigate. These are often the same neighborhoods
                where charging access is most needed, creating a cruel irony:
                the communities that stand to benefit most from public charging
                are the hardest to serve with conventional methods.
              </p>
              <p className="text-slate-light leading-relaxed">
                Above-ground, elevated charging infrastructure breaks this
                pattern. By routing power overhead rather than underground, these
                systems reduce trenching requirements by up to 90% and cut
                deployment costs by 20% or more. Installation timelines compress
                from months to days — a single block can be activated in a
                fraction of the time it takes to complete a traditional
                underground build. For communities that have waited years for
                infrastructure investment, this speed is not just a convenience —
                it is a matter of equity.
              </p>
              <p className="text-slate-light leading-relaxed">
                The environmental case is equally compelling. Above-ground
                systems produce up to 60% less carbon during construction
                compared to in-ground alternatives, because they eliminate the
                heavy excavation, concrete work, and surface restoration that
                drive construction emissions. In communities already
                disproportionately burdened by pollution and environmental
                degradation, deploying cleaner infrastructure is not just good
                practice — it is an obligation.
              </p>
              <p className="text-slate-light leading-relaxed">
                Critically, modular above-ground systems also minimize disruption
                to the neighborhoods being served. There is no tearing up
                sidewalks, no weeks of traffic diversions, no damage to mature
                street trees or existing underground utilities. For historically
                underserved communities where trust in public projects may
                already be low, this low-impact approach builds goodwill and
                demonstrates respect for the places people call home.
              </p>
              <p className="text-slate-light leading-relaxed">
                There is another equity dimension that often goes unmentioned:
                what happens when in-ground charging infrastructure becomes
                obsolete or needs change? Buried conduit and embedded hardware
                become abandoned assets — stranded underground, expensive to
                remediate, and impossible to repurpose. Communities are left with
                the environmental and financial burden of infrastructure they
                never asked for and can no longer use. Above-ground, modular
                systems eliminate this risk entirely. They can be relocated to
                serve new demand patterns, upgraded as technology evolves, or
                removed without excavation. No abandoned assets, no remediation
                costs, no legacy infrastructure buried beneath the streets of the
                communities that can least afford to deal with it.
              </p>
              <p className="text-slate-light leading-relaxed">
                Maintenance is equally straightforward. Because every component
                sits above ground, servicing and repairs happen quickly and
                without disruption — no digging, no street closures, no weeks of
                waiting for underground utility coordination. This accessibility
                translates directly to higher uptime and more reliable service
                for the residents who depend on public charging as their primary
                option.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                Designing for the Full Community
              </h2>
              <p className="text-slate-light leading-relaxed">
                Truly accessible curbside charging goes beyond simply installing
                hardware on a street. It requires thoughtful integration with
                existing streetscapes, ADA compliance, clear signage, intuitive
                payment systems that do not require smartphone apps or credit
                cards, and community engagement to ensure installations serve
                actual needs rather than just checking boxes.
              </p>
              <p className="text-slate-light leading-relaxed">
                Charge point operators and municipalities that approach curbside
                charging with an accessibility-first mindset will build networks
                that serve broader populations, generate more consistent
                utilization, and qualify for the growing pool of equity-focused
                federal and state funding.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                The Road to Universal Access
              </h2>
              <p className="text-slate-light leading-relaxed">
                Scaling EV charging accessibility is not optional — it is
                essential for meeting climate goals, transportation equity
                mandates, and the growing demand for electric vehicles across all
                demographics. Above-ground, elevated charging infrastructure is
                the key enabler — it deploys faster, costs less, produces a
                fraction of the construction carbon, and integrates into
                neighborhoods with minimal disruption. It is the most direct
                path to ensuring that every community can participate in the
                electric future, regardless of housing type, income level, or
                zip code.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* More Articles CTA */}
      <section className="py-24 bg-gradient-to-b from-navy-dark to-navy">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Continue Reading
            </h2>
            <p className="mt-4 text-lg text-slate max-w-xl mx-auto">
              Explore more insights on the future of EV charging infrastructure.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/resources"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
              >
                All Articles
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
