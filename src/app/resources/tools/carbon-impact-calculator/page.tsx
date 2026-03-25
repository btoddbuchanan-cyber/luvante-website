"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SliderInput from "@/components/calculators/SliderInput";
import ResultCard from "@/components/calculators/ResultCard";
import CalculatorDisclaimer from "@/components/calculators/CalculatorDisclaimer";
import { ArrowLeft, ArrowUpRight, Leaf, TreePine, Car } from "lucide-react";
import { CARBON } from "@/lib/calculator-constants";

export default function CarbonImpactCalculator() {
  const [stations, setStations] = useState(25);

  const co2InGround = CARBON.co2InGround * stations;
  const co2AboveGround = CARBON.co2AboveGround * stations;
  const co2Saved = co2InGround - co2AboveGround;
  const treesEquivalent = Math.round(co2Saved / CARBON.co2PerTree);
  const gasMilesRemoved = Math.round(co2Saved / CARBON.co2PerGasMile);
  const carbonReductionPercent = Math.round(CARBON.carbonReduction * 100);

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
              Calculator Tool
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Carbon Impact Calculator
            </h1>
            <p className="mt-4 text-lg text-slate max-w-2xl">
              Quantify the environmental benefits of choosing above-ground
              charging infrastructure for your deployment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input */}
            <AnimatedSection>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <h2 className="font-heading text-xl font-bold text-white mb-8">
                  Your Deployment Size
                </h2>

                <SliderInput
                  label="Number of Charging Stations"
                  value={stations}
                  min={1}
                  max={500}
                  onChange={setStations}
                />

                {/* Emissions Comparison */}
                <div className="mt-10 space-y-6">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Construction Emissions Comparison
                  </h3>

                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-slate">In-Ground Method</span>
                      <span className="text-sm text-white font-medium">
                        {(co2InGround / 1000).toFixed(1)} metric tons CO₂
                      </span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-400/60 rounded-full transition-all duration-500"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-green/5 border border-green/20">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-slate">
                        Above-Ground Method
                      </span>
                      <span className="text-sm text-green font-medium">
                        {(co2AboveGround / 1000).toFixed(1)} metric tons CO₂
                      </span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green rounded-full transition-all duration-500"
                        style={{
                          width: `${(co2AboveGround / co2InGround) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/10 text-green text-sm font-semibold">
                      <Leaf size={14} />
                      {carbonReductionPercent}% Less Construction Carbon
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Results */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="font-heading text-xl font-bold text-white mb-6">
                  Environmental Impact
                </h2>

                <ResultCard
                  label="CO₂ Saved"
                  value={`${(co2Saved / 1000).toFixed(1)} tons`}
                  description="Construction carbon eliminated by choosing above-ground deployment"
                  highlight
                />

                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate mb-4">
                    That&apos;s Equivalent To
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center">
                        <TreePine size={20} className="text-green" />
                      </div>
                      <div>
                        <p className="font-heading text-2xl font-bold text-white">
                          {treesEquivalent.toLocaleString()}
                        </p>
                        <p className="text-sm text-slate">
                          trees absorbing CO₂ for one year
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-white/10" />
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center">
                        <Car size={20} className="text-green" />
                      </div>
                      <div>
                        <p className="font-heading text-2xl font-bold text-white">
                          {gasMilesRemoved.toLocaleString()}
                        </p>
                        <p className="text-sm text-slate">
                          gas vehicle miles taken off the road
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-green/10 border border-green/20">
                  <p className="text-green font-heading font-semibold mb-2">
                    Sustainability Reporting
                  </p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    These construction carbon savings can be documented for ESG
                    reporting, municipal sustainability metrics, and federal grant
                    compliance — helping you demonstrate measurable environmental
                    impact.
                  </p>
                </div>
              </div>

              <CalculatorDisclaimer />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-navy-dark to-navy">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Build Sustainability Into Your Deployment
            </h2>
            <p className="mt-4 text-lg text-slate max-w-xl mx-auto">
              Learn how above-ground infrastructure can help you meet your
              environmental commitments while saving on costs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
              >
                Get a Custom Assessment
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                All Resources
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
