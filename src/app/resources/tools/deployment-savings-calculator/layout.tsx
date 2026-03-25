import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deployment Savings Calculator",
  description:
    "Estimate how much you can save with above-ground EV charging infrastructure versus traditional in-ground installations. Compare costs, timelines, and environmental impact.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
