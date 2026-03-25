import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Partnering With Local Governments to Bring EV Charging to On-Street Parking",
  description:
    "Municipal partnerships are key to deploying EV charging where people actually park. Explore how Luvante collaborates with local governments to transform on-street parking into charging infrastructure.",
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
              Partnerships
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Partnering With Local Governments to Bring EV Charging to
              On-Street Parking
            </h1>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                February 6, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                8 min read
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
                The transition to electric vehicles will not happen in parking
                garages and highway rest stops alone. For the majority of urban
                residents, the most relevant parking space is the one on their
                street — and transforming on-street parking into EV charging
                infrastructure requires a new kind of partnership between
                technology providers and local governments.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                Why Municipalities Are Essential Partners
              </h2>
              <p className="text-slate-light leading-relaxed">
                On-street parking spaces are public assets, managed by city and
                local governments. Any effort to install charging infrastructure
                in these spaces necessarily involves municipal permitting,
                right-of-way access, utility coordination, and alignment with
                local transportation and sustainability goals. Without municipal
                buy-in, curbside charging at scale simply cannot happen.
              </p>
              <p className="text-slate-light leading-relaxed">
                But the relationship goes far beyond permitting. Local
                governments are increasingly under pressure to meet climate
                commitments, improve air quality, and ensure that the benefits of
                the clean energy transition reach all residents — not just those
                in affluent neighborhoods with private charging options.
                On-street EV charging addresses all of these priorities
                simultaneously, making it a natural fit for municipal
                infrastructure agendas.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                The Challenges Cities Face
              </h2>
              <p className="text-slate-light leading-relaxed">
                Despite strong motivation, cities encounter significant
                obstacles when considering on-street charging deployments.
                Traditional in-ground installation methods require excavating
                streets to lay conduit — a process that disrupts traffic,
                damages existing infrastructure, requires lengthy permitting, and
                carries substantial costs that strained municipal budgets often
                cannot absorb. A single city block can require weeks of
                construction, tens of thousands of dollars in trenching and
                surface restoration, and coordination across multiple utility
                providers — all before a single vehicle is charged.
              </p>
              <p className="text-slate-light leading-relaxed">
                Above-ground, elevated charging infrastructure directly
                addresses these barriers. By routing power overhead rather than
                underground, elevated systems reduce trenching by up to 90%,
                compress installation timelines from months to days, and cut
                deployment costs by 20% or more. For municipal public works
                departments already stretched thin, this means fewer permits to
                manage, fewer traffic disruptions to coordinate, and fewer
                constituent complaints about torn-up streets. The construction
                itself produces up to 60% less carbon — a meaningful
                contribution to the same climate goals that motivated the
                charging deployment in the first place.
              </p>
              <p className="text-slate-light leading-relaxed">
                Cities must also think long-term about what happens to charging
                infrastructure over its lifecycle. Traditional in-ground
                installations create permanent underground assets — conduit,
                wiring, junction boxes — that are expensive to maintain, costly
                to remediate if they fail, and nearly impossible to relocate if
                demand shifts to a different corridor. As technology evolves and
                neighborhoods change, buried infrastructure risks becoming
                stranded — abandoned assets beneath city streets that represent
                sunk costs and ongoing liability. Above-ground systems solve this
                by keeping all components accessible and modular. They can be
                maintained without excavation, upgraded as charger technology
                advances, and physically relocated to match evolving demand — no
                abandoned assets, no remediation, no stranded investment.
              </p>
              <p className="text-slate-light leading-relaxed">
                Beyond construction and lifecycle concerns, cities face
                day-to-day operational challenges: managing parking turnover to
                prevent chargers from being blocked by fully charged vehicles,
                integrating charging data with existing parking management
                systems, ensuring ADA compliance, and maintaining consistent
                service levels. The technology partner a city selects must be
                able to address all of these realities, not just the hardware
                installation.
              </p>

              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 my-12">
                <p className="text-green font-heading font-semibold text-lg mb-3">
                  Partnership Principle
                </p>
                <p className="text-white leading-relaxed">
                  Successful municipal EV charging programs treat the city as a
                  strategic partner, not just a permitting authority. The best
                  outcomes emerge when technology providers align their
                  deployment approach with a city&apos;s infrastructure
                  priorities, equity goals, and operational realities.
                </p>
              </div>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                A Model for Effective Government Partnerships
              </h2>
              <p className="text-slate-light leading-relaxed">
                The most successful municipal charging partnerships share
                several common elements. First, they start with a shared
                understanding of goals — whether that is meeting a specific
                emissions reduction target, serving underserved neighborhoods, or
                building out a certain number of public chargers by a target
                date. Alignment on outcomes ensures that both parties are working
                toward the same definition of success.
              </p>
              <p className="text-slate-light leading-relaxed">
                Second, effective partnerships minimize the burden on city
                resources. This is where above-ground infrastructure becomes a
                decisive advantage. Elevated, modular systems require
                dramatically less permitting complexity because they avoid
                subsurface utility conflicts entirely. They cause minimal street
                disruption — no excavation, no resurfacing, no weeks-long
                construction zones. And they install in days rather than months.
                When a charging provider can activate an entire corridor without
                tearing up a single block, municipal staff can say yes more
                quickly and more often — and the political cost of approving
                deployments drops to near zero.
              </p>
              <p className="text-slate-light leading-relaxed">
                Third, the best partnerships plan for the long term — and that
                means choosing infrastructure that adapts. Cities need the
                ability to relocate charging assets as demand patterns evolve,
                neighborhoods grow, or transit routes change. Above-ground
                systems are uniquely suited to this because they are modular and
                portable — a city can move chargers from a low-utilization block
                to a high-demand corridor without abandoning buried conduit or
                paying for costly remediation of in-ground assets. Maintenance is
                equally practical: all components are accessible at the surface,
                so repairs and upgrades happen quickly without street closures or
                excavation. This operational flexibility is a major selling point
                for city managers who have been burned by rigid, hard-to-maintain
                legacy infrastructure.
              </p>
              <p className="text-slate-light leading-relaxed">
                Fourth, strong partnerships include ongoing data sharing and
                performance transparency. Cities want to know how chargers are
                being used, which neighborhoods are underserved, and how the
                network is contributing to their sustainability metrics. Charge
                point operators that provide this visibility become trusted
                long-term partners rather than one-time vendors.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                Funding the Buildout
              </h2>
              <p className="text-slate-light leading-relaxed">
                Federal programs like the National Electric Vehicle
                Infrastructure (NEVI) formula program, Charging and Fueling
                Infrastructure (CFI) grants, and Justice40-aligned funding are
                making billions available for public charging deployment. Many of
                these programs specifically prioritize community charging in
                underserved areas — exactly the use case that on-street
                infrastructure serves.
              </p>
              <p className="text-slate-light leading-relaxed">
                Cities that partner with charging providers experienced in
                navigating these funding mechanisms can leverage federal dollars
                to accelerate deployments while minimizing local budget impact.
                The most effective partnerships include grant identification,
                application support, and compliance reporting as part of the
                engagement.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                Building the City of the Future
              </h2>
              <p className="text-slate-light leading-relaxed">
                On-street EV charging is more than an infrastructure upgrade — it
                is a signal that a city is serious about its clean energy future,
                committed to serving all residents, and willing to invest in the
                public realm. Above-ground, elevated charging systems make that
                signal unmistakable — both figuratively, through faster and more
                equitable deployment, and literally, through visible
                infrastructure that residents and visitors can see as a tangible
                commitment to the clean energy transition.
              </p>
              <p className="text-slate-light leading-relaxed">
                The municipalities that build strong partnerships with providers
                offering low-disruption, high-speed above-ground deployment will
                be the ones that lead the way in creating the sustainable,
                accessible, and livable cities of tomorrow. For charge point
                operators, the message is equally clear: success in on-street
                deployment depends on offering cities a path that is fast,
                affordable, sustainable, and minimally disruptive. Elevated
                infrastructure checks every box — and the companies that bring
                this approach to their municipal partnerships will be the ones
                that scale.
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
