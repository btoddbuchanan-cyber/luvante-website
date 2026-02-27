import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Luvante Inc. terms and conditions governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-navy-dark to-charcoal">
      <div className="mx-auto max-w-3xl px-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-green bg-green/10 rounded-full mb-4">
          Legal
        </span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-slate mb-12">Last updated: June 18, 2025</p>

        <div className="prose-invert space-y-8">
          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              By accessing and using the Luvante Inc. website at
              www.luvante.com, you accept and agree to be bound by these Terms
              and Conditions. If you do not agree, please do not use the
              website.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              2. Services Provided
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              Luvante provides information and resources related to
              above-ground elevated EV charging station infrastructure,
              including white papers, inquiry forms, and contact opportunities.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              3. Intellectual Property
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              All content on this website, including text, graphics, logos,
              images, and software, is the exclusive property of Luvante Inc. or
              its licensors. Unauthorized copying, modification, distribution,
              or use of any material is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              4. User Conduct
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              You agree not to use the website for any unlawful purpose, to
              harm others, upload malicious code, or interfere with the
              website&apos;s operation.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              5. Disclaimer of Warranties
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              The website is provided &ldquo;as is&rdquo; without warranties of any kind,
              either express or implied, including but not limited to warranties
              of merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              6. Limitation of Liability
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              Luvante Inc. shall not be liable for any direct, indirect,
              incidental, special, or consequential damages resulting from your
              use of or inability to use the website.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              7. Governing Law
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of the Commonwealth of Massachusetts. Any disputes shall
              be resolved in the courts of Massachusetts.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              8. Changes to Terms
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              Luvante reserves the right to modify these Terms at any time. We
              will notify users of any changes by updating the &ldquo;Last updated&rdquo;
              date.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-3">
              9. Contact
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              For questions about these Terms, please contact us at{" "}
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
