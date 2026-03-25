// Centralized assumptions for all calculator tools.
// Sources: industry averages, Luvante internal data, DOE/EPA benchmarks.

export const DEPLOYMENT = {
  // Cost per station (USD) by environment
  inGround: {
    urbanStreet: 45000,
    parkingLot: 35000,
    commercial: 40000,
  },
  aboveGround: {
    urbanStreet: 32000,
    parkingLot: 25000,
    commercial: 29000,
  },
  // Time to deploy per station (days)
  timeInGround: 90, // ~3 months average
  timeAboveGround: 7, // ~1 week
  // Trenching reduction percentage
  trenchingReduction: 0.9, // 90%
  // Average trenching feet per in-ground station
  trenchingFeetPerStation: 150,
};

export const CARBON = {
  // CO2 produced during construction (kg per station)
  co2InGround: 4200,
  co2AboveGround: 1680, // 60% less
  // Equivalencies
  co2PerTree: 22, // kg CO2 absorbed per tree per year
  co2PerGasMile: 0.404, // kg CO2 per mile driven by avg gas car
  // Construction carbon reduction percentage
  carbonReduction: 0.6, // 60%
};

export const CPO = {
  // Average kWh delivered per charger per day at various utilization rates
  avgKwhPerChargerPerDay: 120, // at ~20% utilization baseline
  // Maintenance cost per charger per year (USD)
  maintenanceInGround: 2400,
  maintenanceAboveGround: 1200,
  // Average revenue per kWh (USD)
  defaultRevenuePerKwh: 0.35,
  // Time to revenue advantage (days saved)
  timeToRevenueAdvantage: 83, // 90 - 7 days
  // Charger uptime
  uptimeInGround: 0.92,
  uptimeAboveGround: 0.97,
  // Relocatability: salvage value of above-ground vs in-ground (% of original cost)
  salvageAboveGround: 0.7, // 70% recoverable
  salvageInGround: 0.05, // 5% — mostly write-off
};

export const ENVIRONMENTS = [
  { value: "urbanStreet", label: "Urban Street / Curbside" },
  { value: "parkingLot", label: "Parking Lot" },
  { value: "commercial", label: "Commercial / Retail" },
] as const;

export type Environment = (typeof ENVIRONMENTS)[number]["value"];
