import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Luvante Inc. privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-navy-dark to-charcoal">
      <div className="mx-auto max-w-3xl px-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-green bg-green/10 rounded-full mb-4">
          Legal
        </span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate mb-12">Last updated: June 18, 2025</p>

        <div className="prose-invert space-y-8">
          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              1. Introduction
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              Luvante Inc. (&ldquo;Luvante,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website at www.luvante.com.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              2. Information We Collect
            </h2>
            <p className="text-sm text-slate leading-relaxed mb-3">
              We may collect personal information that you voluntarily provide to
              us when you express an interest in obtaining information about us
              or our products and services, when you participate in activities on
              the website, or otherwise when you contact us. This may include:
            </p>
            <ul className="space-y-1.5 text-sm text-slate">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green/50 mt-1.5 shrink-0" />
                Name, email address, and phone number
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green/50 mt-1.5 shrink-0" />
                Company name and job title
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green/50 mt-1.5 shrink-0" />
                Inquiry details and message content
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green/50 mt-1.5 shrink-0" />
                Usage data and analytics information
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              We use the information we collect to respond to your inquiries,
              provide you with information about our products and services,
              improve our website and services, and comply with applicable laws
              and regulations.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              4. Disclosure of Your Information
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with service providers who assist
              us in operating our website, conducting our business, or serving
              our users, provided that those parties agree to keep this
              information confidential.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              5. Data Security
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no
              electronic transmission over the internet or information storage
              technology can be guaranteed to be 100% secure.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              6. Your Rights
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              Depending on your location, you may have rights regarding your
              personal data, including the right to access, correct, delete, or
              port your data. To exercise any of these rights, please contact us
              at info@luvante.com.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              7. Contact Us
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              If you have questions about this Privacy Policy, please contact us
              at{" "}
              <a
                href="mailto:info@luvante.com"
                className="text-green hover:text-green-light transition-colors"
              >
                info@luvante.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
