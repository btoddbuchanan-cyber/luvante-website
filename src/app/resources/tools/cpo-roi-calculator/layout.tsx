import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPO ROI Calculator",
  description:
    "Build the business case for above-ground EV charging infrastructure. Calculate deployment savings, time-to-revenue advantage, maintenance savings, and 5-year total cost of ownership.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
