import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solving Range Anxiety Through Public Curbside Charging",
  description:
    "Range anxiety remains one of the biggest barriers to EV adoption. Discover how expanding public curbside charging infrastructure can eliminate this concern and accelerate the transition to electric vehicles.",
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
              Industry Insights
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Solving Range Anxiety Through Public Curbside Charging
            </h1>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                March 5, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                6 min read
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
                Range anxiety — the fear of running out of battery power before
                reaching a charging station — remains one of the most
                significant psychological barriers to widespread electric vehicle
                adoption. While battery technology continues to improve, the real
                solution lies not in bigger batteries, but in ubiquitous,
                convenient charging infrastructure that meets drivers where they
                already are.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                The Psychology Behind Range Anxiety
              </h2>
              <p className="text-slate-light leading-relaxed">
                Studies consistently show that range anxiety persists even among
                drivers whose daily driving patterns fall well within their
                vehicle&apos;s range. The issue is not actual range limitations —
                most modern EVs can travel 250 to 350 miles on a single charge —
                but rather the perceived scarcity of charging options. When
                drivers cannot easily see or access chargers in their daily
                environment, uncertainty takes hold.
              </p>
              <p className="text-slate-light leading-relaxed">
                This is fundamentally different from how we think about gasoline.
                Gas stations are visible on nearly every major road, deeply
                embedded in the fabric of urban and suburban life. EV charging
                needs to achieve the same visibility and accessibility to fully
                replace that sense of security.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                Why Curbside Charging Changes the Equation
              </h2>
              <p className="text-slate-light leading-relaxed">
                Public curbside charging transforms the streets themselves into a
                distributed charging network. Instead of requiring drivers to
                seek out dedicated charging stations — often located in parking
                garages, highway rest stops, or commercial lots — curbside
                chargers bring power directly to where vehicles are already
                parked throughout the day and night.
              </p>
              <p className="text-slate-light leading-relaxed">
                Consider the typical urban driver: they park on the street near
                their apartment, outside the coffee shop, along the block from
                their office, or beside the restaurant where they eat dinner.
                Each of these moments represents an opportunity to add range
                without any change in behavior. The vehicle charges passively
                while the driver goes about their life.
              </p>

              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 my-12">
                <p className="text-green font-heading font-semibold text-lg mb-3">
                  Key Insight
                </p>
                <p className="text-white leading-relaxed">
                  When charging is as common as parking, range anxiety
                  disappears. The goal is not to build a few massive charging
                  hubs — it&apos;s to embed charging capability into the existing
                  streetscape so that EV drivers never need to think about
                  finding a charger.
                </p>
              </div>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                The Infrastructure Challenge — and a Better Path Forward
              </h2>
              <p className="text-slate-light leading-relaxed">
                Historically, deploying curbside chargers has been expensive and
                disruptive. Traditional in-ground installations require
                extensive trenching, permitting, and utility coordination —
                processes that can take months and cost tens of thousands of
                dollars per charger. For cities trying to scale charging access
                across thousands of on-street parking spaces, these costs and
                timelines are simply prohibitive.
              </p>
              <p className="text-slate-light leading-relaxed">
                Elevated, above-ground charging systems offer a fundamentally
                different approach. By routing power overhead rather than
                underground, these modular systems eliminate the need for
                extensive trenching — reducing excavation by up to 90%. The
                result is dramatic: installation timelines compress from months
                to days, deployment costs drop by 20% or more, and the carbon
                footprint of construction falls by as much as 60% compared to
                traditional in-ground methods.
              </p>
              <p className="text-slate-light leading-relaxed">
                Above-ground systems also eliminate the long-term liabilities
                that plague in-ground installations. Because all components are
                accessible at the surface, maintenance is straightforward — no
                excavation required to service, upgrade, or replace equipment.
                And because the systems are modular, they can be relocated as
                demand patterns shift. A city that installs curbside chargers on
                one corridor can move them to a higher-demand area as the network
                matures, rather than abandoning buried conduit and starting from
                scratch. There are no stranded assets left underground and no
                costly remediation of in-ground infrastructure that has outlived
                its usefulness.
              </p>
              <p className="text-slate-light leading-relaxed">
                Just as importantly, above-ground infrastructure is visible.
                Drivers can see the charging network as they walk and drive
                through their neighborhoods — a constant, tangible reminder that
                charging is available. This visibility directly combats the
                perception of scarcity that fuels range anxiety. Unlike buried
                conduit and recessed charging pedestals that blend into the
                background, elevated systems make the charging network legible
                and unmistakable as part of the urban landscape.
              </p>

              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 my-12">
                <p className="text-green font-heading font-semibold text-lg mb-3">
                  The Above-Ground Advantage
                </p>
                <p className="text-white leading-relaxed">
                  Above-ground charging infrastructure does not just solve the
                  deployment problem — it solves the perception problem. When
                  charging hardware is elevated and visible throughout a
                  streetscape, drivers internalize that power is everywhere. That
                  shift in perception is what finally makes range anxiety
                  obsolete.
                </p>
              </div>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                A Network Effect for EV Adoption
              </h2>
              <p className="text-slate-light leading-relaxed">
                There is a powerful feedback loop between charging availability
                and EV adoption. As more curbside chargers appear, more people
                feel confident purchasing an EV. As more EVs hit the road,
                demand for curbside charging increases, justifying further
                investment. This virtuous cycle is already visible in cities that
                have made early investments in public charging density.
              </p>
              <p className="text-slate-light leading-relaxed">
                Above-ground, modular systems accelerate this cycle because they
                can be deployed at the speed and scale needed to reach critical
                mass. A city does not need to spend years trenching block by
                block — it can light up entire corridors in weeks, creating
                visible density that shifts public perception and drives
                adoption. The cities and charge point operators that move first
                to establish these dense curbside networks will not only serve
                existing EV drivers — they will actively accelerate adoption in
                their communities.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-12">
                Looking Ahead
              </h2>
              <p className="text-slate-light leading-relaxed">
                Solving range anxiety is not about building a few more fast
                chargers along highways. It is about reimagining the urban
                streetscape so that charging is woven into the everyday
                experience of parking. Above-ground, elevated charging
                infrastructure makes this vision achievable at scale — deploying
                faster, costing less, producing a fraction of the carbon, and
                creating the kind of visible, ubiquitous network that finally
                makes range anxiety a thing of the past.
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
