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
  CPO,
  type Environment,
  ENVIRONMENTS,
} from "@/lib/calculator-constants";

export default function CpoRoiCalculator() {
  const [sites, setSites] = useState(10);
  const [chargersPerSite, setChargersPerSite] = useState(4);
  const [utilization, setUtilization] = useState(20);
  const [revenuePerKwh, setRevenuePerKwh] = useState(0.35);
  const [environment, setEnvironment] = useState<Environment>("urbanStreet");

  const totalChargers = sites * chargersPerSite;

  // Deployment cost savings
  const inGroundDeployCost = DEPLOYMENT.inGround[environment] * totalChargers;
  const aboveGroundDeployCost =
    DEPLOYMENT.aboveGround[environment] * totalChargers;
  const deploymentSavings = inGroundDeployCost - aboveGroundDeployCost;

  // Time to revenue
  const inGroundDays = DEPLOYMENT.timeInGround;
  const aboveGroundDays = DEPLOYMENT.timeAboveGround;
  const daysToRevenueSaved = (inGroundDays - aboveGroundDays) * sites;

  // Revenue from faster deployment (per site)
  const utilizationFactor = utilization / 20; // normalized to baseline
  const dailyRevenuePerCharger =
    CPO.avgKwhPerChargerPerDay * utilizationFactor * revenuePerKwh;
  const revenueFromFasterDeployment =
    dailyRevenuePerCharger *
    chargersPerSite *
    CPO.timeToRevenueAdvantage *
    sites;

  // Annual maintenance savings
  const annualMaintenanceInGround =
    CPO.maintenanceInGround * totalChargers;
  const annualMaintenanceAboveGround =
    CPO.maintenanceAboveGround * totalChargers;
  const annualMaintenanceSavings =
    annualMaintenanceInGround - annualMaintenanceAboveGround;

  // Uptime revenue advantage (annual)
  const uptimeDifference = CPO.uptimeAboveGround - CPO.uptimeInGround;
  const annualUptimeRevenueGain =
    dailyRevenuePerCharger * totalChargers * 365 * uptimeDifference;

  // 5-year TCO
  const fiveYearInGround =
    inGroundDeployCost + annualMaintenanceInGround * 5;
  const fiveYearAboveGround =
    aboveGroundDeployCost + annualMaintenanceAboveGround * 5;
  const fiveYearSavings = fiveYearInGround - fiveYearAboveGround;

  // Relocatability value
  const relocatabilityValue =
    aboveGroundDeployCost * CPO.salvageAboveGround -
    inGroundDeployCost * CPO.salvageInGround;

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
              CPO ROI Calculator
            </h1>
            <p className="mt-4 text-lg text-slate max-w-2xl">
              Build the business case for above-ground charging infrastructure.
              See how deployment speed, lower costs, and higher uptime translate
              to a stronger bottom line.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Inputs */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <h2 className="font-heading text-xl font-bold text-white mb-8">
                    Your Network
                  </h2>

                  <div className="space-y-8">
                    <SliderInput
                      label="Number of Sites"
                      value={sites}
                      min={1}
                      max={100}
                      onChange={setSites}
                    />

                    <SliderInput
                      label="Chargers per Site"
                      value={chargersPerSite}
                      min={2}
                      max={20}
                      onChange={setChargersPerSite}
                    />

                    <SliderInput
                      label="Average Utilization"
                      value={utilization}
                      min={5}
                      max={60}
                      unit="%"
                      onChange={setUtilization}
                    />

                    <SliderInput
                      label="Revenue per kWh"
                      value={revenuePerKwh}
                      min={0.2}
                      max={0.6}
                      step={0.01}
                      prefix="$"
                      onChange={setRevenuePerKwh}
                    />

                    <div>
                      <label className="block text-sm font-medium text-slate mb-2">
                        Primary Environment
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

                  <div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-slate">
                      Total chargers:{" "}
                      <span className="text-white font-medium">
                        {totalChargers}
                      </span>{" "}
                      across{" "}
                      <span className="text-white font-medium">{sites}</span>{" "}
                      sites
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Results */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <h2 className="font-heading text-xl font-bold text-white mb-6">
                  The Above-Ground Advantage
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ResultCard
                    label="Deployment Cost Savings"
                    value={`$${(deploymentSavings / 1000).toFixed(0)}K`}
                    description="Lower CapEx vs. in-ground installation"
                    highlight
                  />

                  <ResultCard
                    label="Revenue From Faster Deployment"
                    value={`$${(revenueFromFasterDeployment / 1000).toFixed(0)}K`}
                    description={`${daysToRevenueSaved.toLocaleString()} days faster to revenue`}
                  />

                  <ResultCard
                    label="Annual Maintenance Savings"
                    value={`$${annualMaintenanceSavings.toLocaleString()}`}
                    description="Surface-accessible components vs. buried infrastructure"
                  />

                  <ResultCard
                    label="Annual Uptime Revenue Gain"
                    value={`$${(annualUptimeRevenueGain / 1000).toFixed(0)}K`}
                    description={`${Math.round(CPO.uptimeAboveGround * 100)}% vs. ${Math.round(CPO.uptimeInGround * 100)}% charger uptime`}
                  />

                  <ResultCard
                    label="5-Year TCO Savings"
                    value={`$${(fiveYearSavings / 1000).toFixed(0)}K`}
                    description="Total cost of ownership advantage over 5 years"
                    highlight
                  />

                  <ResultCard
                    label="Relocatability Value"
                    value={`$${(relocatabilityValue / 1000).toFixed(0)}K`}
                    description="Asset recovery advantage if sites need to move"
                  />
                </div>

                {/* Summary */}
                <div className="mt-8 p-8 rounded-2xl bg-green/10 border border-green/20">
                  <p className="text-green font-heading font-semibold text-lg mb-3">
                    Total First-Year Advantage
                  </p>
                  <p className="font-heading text-4xl md:text-5xl font-bold text-white">
                    $
                    {(
                      (deploymentSavings +
                        revenueFromFasterDeployment +
                        annualMaintenanceSavings +
                        annualUptimeRevenueGain) /
                      1000
                    ).toFixed(0)}
                    K
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Combined deployment savings, accelerated revenue, lower
                    maintenance, and higher uptime in year one.
                  </p>
                </div>

                <CalculatorDisclaimer />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-navy-dark to-navy">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Ready to Build Your Business Case?
            </h2>
            <p className="mt-4 text-lg text-slate max-w-xl mx-auto">
              Our team can provide a detailed financial analysis tailored to your
              network and growth plans.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
              >
                Contact Our CPO Team
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
