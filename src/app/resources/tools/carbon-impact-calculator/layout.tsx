import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carbon Impact Calculator",
  description:
    "Quantify the environmental benefits of above-ground EV charging deployment. Calculate construction carbon savings, tree equivalents, and gas vehicle miles eliminated.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
