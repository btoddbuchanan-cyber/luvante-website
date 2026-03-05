"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Send, CheckCircle2, ArrowUpRight } from "lucide-react";

const inquiryTypes = [
  "Charge Point Operator (CPO)",
  "General Inquiry",
  "Fleet Charging",
  "Commercial / Retail",
  "Municipal / Government",
  "Investment Opportunity",
  "Press / Media",
  "Partnership",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, this would connect to a form handler
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_40%_60%,rgba(37,239,117,0.15),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green bg-green/10 rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
              Let&apos;s Talk{" "}
              <span className="text-green">EV Charging</span>
            </h1>
            <p className="mt-6 text-lg text-slate max-w-xl mx-auto">
              Whether you&apos;re a charge point operator, site owner, fleet
              manager, investor, or partner — we&apos;d love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <div className="p-12 rounded-2xl bg-white/5 border border-green/20 text-center">
                    <CheckCircle2 size={48} className="text-green mx-auto mb-4" />
                    <h2 className="font-heading text-2xl font-bold text-white mb-2">
                      Thank You!
                    </h2>
                    <p className="text-slate">
                      We&apos;ve received your message and will be in touch
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <h2 className="font-heading text-2xl font-bold text-white mb-8">
                      Send Us a Message
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-dark focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/50 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate mb-1.5">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-dark focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/50 transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className="block text-sm font-medium text-slate mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-dark focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/50 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="mt-5">
                      <label className="block text-sm font-medium text-slate mb-1.5">
                        Organization
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-dark focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/50 transition-colors"
                        placeholder="Company name"
                      />
                    </div>

                    <div className="mt-5">
                      <label className="block text-sm font-medium text-slate mb-1.5">
                        Inquiry Type
                      </label>
                      <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/50 transition-colors appearance-none">
                        <option value="" className="bg-charcoal">
                          Select an option
                        </option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type} className="bg-charcoal">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-5">
                      <label className="block text-sm font-medium text-slate mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-dark focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/50 transition-colors resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-8 group inline-flex items-center gap-2 px-8 py-4 bg-green text-navy-dark font-bold rounded-lg hover:bg-green-light transition-colors text-sm w-full sm:w-auto justify-center"
                    >
                      <Send size={16} />
                      Send Message
                      <ArrowUpRight
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={0.1}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="font-heading text-lg font-semibold text-white mb-4">
                    General Inquiries
                  </h3>
                  <a
                    href="mailto:info@luvante.com"
                    className="inline-flex items-center gap-2 text-green hover:text-green-light transition-colors"
                  >
                    <Mail size={16} />
                    info@luvante.com
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="font-heading text-lg font-semibold text-white mb-4">
                    Investor Relations
                  </h3>
                  <a
                    href="mailto:ir@luvante.com"
                    className="inline-flex items-center gap-2 text-green hover:text-green-light transition-colors"
                  >
                    <Mail size={16} />
                    ir@luvante.com
                  </a>
                  <p className="mt-3 text-sm text-slate">
                    For information about current investment opportunities,
                    please reach out to our IR team.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="p-8 rounded-2xl bg-green/10 border border-green/20">
                  <h3 className="font-heading text-lg font-semibold text-white mb-3">
                    Charge Point Operators
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    Looking to deploy faster and reduce your CapEx per port?
                    Select &ldquo;Charge Point Operator&rdquo; from the inquiry
                    type and our CPO partnerships team will reach out within 24
                    hours.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="font-heading text-lg font-semibold text-white mb-3">
                    Quick Response
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    Our team typically responds within 1-2 business days. For
                    urgent inquiries, please indicate so in your message.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
