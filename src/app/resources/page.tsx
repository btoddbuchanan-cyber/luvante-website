import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRight, Calendar, Clock, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Insights, analysis, and thought leadership on EV charging infrastructure, curbside charging, and the future of electric mobility from the Luvante team.",
};

const blogPosts = [
  {
    slug: "above-ground-charging-for-charge-point-operators",
    title: "Above-Ground Charging for Charge Point Operators",
    excerpt:
      "For CPOs, above-ground EV charging infrastructure offers a faster, more cost-effective, and more flexible path to network growth. Discover how elevated systems transform the CPO business model.",
    date: "March 9, 2026",
    readTime: "8 min read",
    category: "For CPOs",
  },
  {
    slug: "solving-range-anxiety-through-public-curbside-charging",
    title: "Solving Range Anxiety Through Public Curbside Charging",
    excerpt:
      "Range anxiety remains one of the biggest barriers to EV adoption. Discover how expanding public curbside charging infrastructure can eliminate this concern and accelerate the transition to electric vehicles.",
    date: "March 5, 2026",
    readTime: "6 min read",
    category: "Industry Insights",
  },
  {
    slug: "scaling-ev-charging-accessibility-through-curbside-charging",
    title: "Scaling EV Charging Accessibility Through Curbside Charging",
    excerpt:
      "Not everyone has a garage or dedicated parking spot. Learn how curbside charging solutions are making EV ownership accessible for renters, urban residents, and underserved communities.",
    date: "February 20, 2026",
    readTime: "7 min read",
    category: "Accessibility",
  },
  {
    slug: "partnering-with-local-governments-ev-charging-on-street-parking",
    title:
      "Partnering With Local Governments to Bring EV Charging to On-Street Parking",
    excerpt:
      "Municipal partnerships are key to deploying EV charging where people actually park. Explore how Luvante collaborates with local governments to transform on-street parking into charging infrastructure.",
    date: "February 6, 2026",
    readTime: "8 min read",
    category: "Partnerships",
  },
];

const tools = [
  {
    slug: "tools/deployment-savings-calculator",
    title: "Deployment Savings Calculator",
    description:
      "Compare costs, timelines, and trenching between above-ground and in-ground EV charging installations.",
  },
  {
    slug: "tools/carbon-impact-calculator",
    title: "Carbon Impact Calculator",
    description:
      "Quantify the environmental benefits of above-ground deployment — CO₂ saved, trees equivalent, and more.",
  },
  {
    slug: "tools/cpo-roi-calculator",
    title: "CPO ROI Calculator",
    description:
      "Build the business case with deployment savings, time-to-revenue, maintenance costs, and 5-year TCO.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green bg-green/10 rounded-full mb-6">
              Resources
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
              Insights & <span className="text-green">Thought Leadership</span>
            </h1>
            <p className="mt-6 text-lg text-slate max-w-xl mx-auto">
              Explore our latest thinking on EV charging infrastructure,
              curbside solutions, and the future of electric mobility.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="Blog"
              title="Latest Articles"
              description="Deep dives into the challenges and opportunities shaping EV charging infrastructure."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/resources/${post.slug}`}
                  className="group block h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-colors"
                >
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green bg-green/10 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-green transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4 text-xs text-slate">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-slate group-hover:text-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Calculators */}
      <section id="tools" className="py-24 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              tag="Tools"
              title="Calculators & Tools"
              description="Interactive tools to help you quantify the advantages of above-ground EV charging infrastructure."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <AnimatedSection key={tool.slug} delay={i * 0.1}>
                <Link
                  href={`/resources/${tool.slug}`}
                  className="group block h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center mb-5">
                    <Calculator size={22} className="text-green" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-green transition-colors leading-snug mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green">
                    Launch Tool
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-navy-dark to-navy">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Ready to Transform EV Charging?
            </h2>
            <p className="mt-4 text-lg text-slate max-w-xl mx-auto">
              Learn how Luvante&apos;s elevated charging platform can work for
              your community or business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/platform"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm"
              >
                The Luvante Platform
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
