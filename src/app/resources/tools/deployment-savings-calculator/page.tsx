"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SliderInput from "@/components/calculators/SliderInput";
import ResultCard from "@/components/calculators/ResultCard";
import CalculatorDisclaimer from "@/components/calculators/CalculatorDisclaimer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  DEPLOYMENT,
  CARBON,
  ENVIRONMENTS,
  type Environment,
} from "@/lib/calculator-constants";

export default function DeploymentSavingsCalculator() {
  const [stations, setStations] = useState(10);
  const [environment, setEnvironment] = useState<Environment>("urbanStreet");

  const inGroundCost = DEPLOYMENT.inGround[environment] * stations;
  const aboveGroundCost = DEPLOYMENT.aboveGround[environment] * stations;
  const costSavings = inGroundCost - aboveGroundCost;
  const costSavingsPercent = Math.round((costSavings / inGroundCost) * 100);

  const inGroundDays = DEPLOYMENT.timeInGround * stations;
  const aboveGroundDays = DEPLOYMENT.timeAboveGround * stations;
  const daysSaved = inGroundDays - aboveGroundDays;

  const trenchingAvoided = Math.round(
    DEPLOYMENT.trenchingFeetPerStation * stations * DEPLOYMENT.trenchingReduction
  );

  const co2Saved = (CARBON.co2InGround - CARBON.co2AboveGround) * stations;

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
              Deployment Savings Calculator
            </h1>
            <p className="mt-4 text-lg text-slate max-w-2xl">
              Estimate how much you can save with above-ground EV charging
              infrastructure compared to traditional in-ground installations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Inputs */}
            <AnimatedSection>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <h2 className="font-heading text-xl font-bold text-white mb-8">
                  Your Deployment
                </h2>

                <div className="space-y-8">
                  <SliderInput
                    label="Number of Charging Stations"
                    value={stations}
                    min={1}
                    max={200}
                    onChange={setStations}
                  />

                  <div>
                    <label className="block text-sm font-medium text-slate mb-2">
                      Installation Environment
                    </label>
                    <select
                      value={environment}
                      onChange={(e) =>
                        setEnvironment(e.target.value as Environment)
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/50 transition-colors appearance-none"
                    >
                      {ENVIRONMENTS.map((env) => (
                        <option
                          key={env.value}
                          value={env.value}
                          className="bg-charcoal"
                        >
                          {env.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Cost Comparison Bar */}
                <div className="mt-10 space-y-4">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Cost Comparison
                  </h3>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate">In-Ground</span>
                      <span className="text-white font-medium">
                        ${inGroundCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-400/60 rounded-full transition-all duration-500"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate">Above-Ground</span>
                      <span className="text-green font-medium">
                        ${aboveGroundCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green rounded-full transition-all duration-500"
                        style={{
                          width: `${(aboveGroundCost / inGroundCost) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Results */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <h2 className="font-heading text-xl font-bold text-white mb-6">
                  Your Savings
                </h2>

                <ResultCard
                  label="Total Cost Savings"
                  value={`$${costSavings.toLocaleString()}`}
                  description={`${costSavingsPercent}% reduction in deployment costs`}
                  highlight
                />

                <ResultCard
                  label="Time Saved"
                  value={`${daysSaved.toLocaleString()} days`}
                  description={`Deploy in ${aboveGroundDays} days instead of ${inGroundDays} days`}
                />

                <ResultCard
                  label="Trenching Avoided"
                  value={`${trenchingAvoided.toLocaleString()} ft`}
                  description="Linear feet of trenching eliminated"
                />

                <ResultCard
                  label="CO₂ Saved During Construction"
                  value={`${(co2Saved / 1000).toFixed(1)} tons`}
                  description="Reduced construction emissions vs. in-ground"
                />
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
              Ready to See These Savings in Action?
            </h2>
            <p className="mt-4 text-lg text-slate max-w-xl mx-auto">
              Get a customized deployment analysis for your specific sites and
              requirements.
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
