import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import {
  ArrowUpRight,
  Zap,
  Clock,
  ShieldCheck,
  Users,
  TrendingDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Luvante leadership team and learn about our mission to deliver sustainable, elevated EV charging infrastructure for fleets and streets.",
};

const missionPoints = [
  {
    icon: Zap,
    title: "Utility-Friendly Technology",
    description:
      "Leveraging proven power distribution technologies from industrial facilities, fully compatible with existing utility grids.",
  },
  {
    icon: Clock,
    title: "Faster Installation",
    description:
      "Modular, pre-engineered systems that deploy in days, not months — reducing project timelines by 40% to 50%.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Site Disruption",
    description:
      "Above-ground design eliminates costly trenching and excavation, keeping sites operational during deployment.",
  },
  {
    icon: Users,
    title: "Improved Stakeholder Experience",
    description:
      "Minimized downtime and cleaner installations mean happier property owners, tenants, and EV drivers.",
  },
  {
    icon: TrendingDown,
    title: "Lower Total Cost of Ownership",
    description:
      "Reduced material waste, faster deployment, and easier maintenance combine to deliver game-changing TCO savings.",
  },
];

interface TeamMember {
  name: string;
  role: string;
  experience: string[];
  photo: string;
}

const leadership: TeamMember[] = [
  {
    name: "Chris Angelou",
    role: "CEO",
    photo: "/images/team/chris-angelou.jpg",
    experience: [
      "Principal at EVKON",
      "CCO at Zeplug",
      "Managing Director at Aetna EV",
    ],
  },
  {
    name: "Morgan Allan",
    role: "Product Design",
    photo: "/images/team/morgan-allan.png",
    experience: [
      "VP Market Development at Nexii Building Solutions",
      "President of Lighthouse Procurement Logistics",
    ],
  },
  {
    name: "Todd Buchanan",
    role: "Corporate Development",
    photo: "/images/team/todd-buchanan.png",
    experience: [
      "Managing Director at Equifaira",
      "Board Chair of various tech companies",
    ],
  },
  {
    name: "Justin Maxwell",
    role: "Investor Relations",
    photo: "/images/team/justin-maxwell.png",
    experience: [
      "Partner at Equifaira",
      "Former VP at Nexii",
      "CEO of WinWin Academy",
    ],
  },
  {
    name: "Elliott Routly",
    role: "Finance & Treasury",
    photo: "/images/team/elliott-routly.jpg",
    experience: [
      "Associate Partner at Equifaira",
      "Former VP Treasury at Nexii",
      "VP Investment Banking at Agentis",
    ],
  },
  {
    name: "Enoch Lenge",
    role: "Sales",
    photo: "/images/team/enoch-lenge.png",
    experience: [
      "Head of US eMobility at Codibly",
      "Former EV Charging Program Lead at Eversource",
      "Director at CBRE",
    ],
  },
];

const advisors: TeamMember[] = [
  {
    name: "Adam Procell",
    role: "Strategy",
    photo: "/images/team/adam-procell.jpg",
    experience: [
      "Principal Consultant at Energy Transition Associates",
      "Former CEO of Zeplug USA",
    ],
  },
  {
    name: "John Belbusti",
    role: "Scale-up",
    photo: "/images/team/john-belbusti.png",
    experience: [
      "Project Advisory Lead at The Vertex Companies",
      "Former Global President of CBRE EV Charging",
    ],
  },
];

function TeamCard({
  member,
  delay,
}: {
  member: TeamMember;
  delay: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-5 ring-2 ring-white/10 group-hover:ring-green/30 transition-all mx-auto sm:mx-0">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>

        {/* Name & Role */}
        <h3 className="font-heading text-lg font-semibold text-white">
          {member.name}
        </h3>
        <p className="text-green text-sm font-medium mt-1">{member.role}</p>

        {/* Experience */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <ul className="space-y-2">
            {member.experience.map((exp) => (
              <li
                key={exp}
                className="text-sm text-slate flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green/50 mt-1.5 shrink-0" />
                {exp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,rgba(37,239,117,0.15),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green bg-green/10 rounded-full mb-6">
                About Luvante
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Sustainable Elevated EV Infrastructure for{" "}
                <span className="text-green">Fleets & Streets</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-slate max-w-3xl mx-auto leading-relaxed">
                Luvante is dedicated to bringing sustainable elevated electric
                vehicle infrastructure to fleets and streets.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Details Section */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="Our Mission"
              title="A Smarter Approach to EV Charging"
              description="We are rethinking EV charging from the ground up — literally. Our above-ground, modular systems solve the core pain points holding back widespread adoption."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionPoints.map((point, i) => (
              <AnimatedSection key={point.title} delay={i * 0.1}>
                <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                    <point.icon size={28} className="text-green" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section id="team" className="py-24 bg-gradient-to-b from-navy-dark to-navy">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="Leadership"
              title="Meet the Team"
              description="Seasoned leaders from across the energy, EV, construction, and finance sectors — united by a shared vision of sustainable transportation infrastructure."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member, i) => (
              <TeamCard
                key={member.name}
                member={member}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="Advisors"
              title="Strategic Guidance"
              description="Industry veterans providing deep expertise in energy transition strategy and global-scale EV charging operations."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {advisors.map((member, i) => (
              <TeamCard
                key={member.name}
                member={member}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-navy via-navy-dark to-navy">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Build the Future of EV Charging?
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
              Whether you are a site owner, fleet operator, or investor — we
              would love to hear from you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
              >
                Get in Touch
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/invest"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                Invest in Luvante
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
