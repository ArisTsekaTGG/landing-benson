import type { Metadata } from "next";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { LegalPageBody } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Benson Goldstein",
  description:
    "How Benson Goldstein collects, uses, and protects your personal data when you use our services or this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LegalPageBody
          eyebrow="Privacy policy"
          title={
            <>
              How we handle your{" "}
              <span className="font-italic text-magenta-400">personal information.</span>
            </>
          }
          intro="This policy explains what data we collect, why we collect it, and the rights you have under the UK GDPR and Data Protection Act 2018."
          effective="January 2026"
          sections={[
            {
              title: "Who we are",
              body: (
                <>
                  <p>
                    Benson Goldstein is a trading name of Benson Goldstein Ltd, a company
                    registered in England &amp; Wales under company number 14417365. Our
                    registered office is 3rd Floor, 86–90 Paul Street, London EC2A 4NE. We are
                    authorised and regulated by the Solicitors Regulation Authority (SRA No.
                    8003245).
                  </p>
                  <p>
                    For the purposes of UK data protection law, Benson Goldstein Ltd is the
                    &ldquo;data controller&rdquo; of the personal data you share with us through
                    this website, our intake forms, and the course of any matter we handle.
                  </p>
                </>
              ),
            },
            {
              title: "What data we collect",
              body: (
                <>
                  <p>
                    We collect only the personal data we need to assess your eligibility, take
                    instructions, and represent you. Typically this includes:
                  </p>
                  <ul className="list-disc space-y-1 pl-5 marker:text-gold-300">
                    <li>Identifying information — name, address, date of birth.</li>
                    <li>Contact details — email address and phone number.</li>
                    <li>
                      Matter-specific information — finance agreements, lender correspondence,
                      payment history, and any documents you choose to share.
                    </li>
                    <li>
                      Technical information — IP address, browser type, and pages visited (via
                      privacy-respecting analytics).
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "Why we use your data",
              body: (
                <>
                  <p>We process your personal data on the following lawful bases:</p>
                  <ul className="list-disc space-y-1 pl-5 marker:text-gold-300">
                    <li>
                      <strong className="text-foreground">Performance of a contract</strong> —
                      to assess and pursue your claim.
                    </li>
                    <li>
                      <strong className="text-foreground">Legal obligation</strong> — to comply
                      with the SRA Standards and Regulations and applicable money-laundering
                      legislation.
                    </li>
                    <li>
                      <strong className="text-foreground">Legitimate interests</strong> — to
                      improve our service, prevent fraud, and communicate about your matter.
                    </li>
                    <li>
                      <strong className="text-foreground">Consent</strong> — for any optional
                      marketing communications, where you have opted in.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "Sharing your data",
              body: (
                <>
                  <p>
                    We never sell your personal data. We share it only with parties necessary to
                    deliver our service, including:
                  </p>
                  <ul className="list-disc space-y-1 pl-5 marker:text-gold-300">
                    <li>The lender or finance provider involved in your claim.</li>
                    <li>The Financial Ombudsman Service or relevant court, if escalation is required.</li>
                    <li>Carefully selected service providers — secure document storage, IT, and accountancy — bound by written confidentiality and processing terms.</li>
                  </ul>
                </>
              ),
            },
            {
              title: "How we keep your data safe",
              body: (
                <>
                  <p>
                    We apply technical and organisational measures appropriate to the sensitivity
                    of legal information, including encryption in transit and at rest,
                    role-based access controls, and regular security reviews.
                  </p>
                  <p>
                    We retain your personal data only for as long as necessary for the purposes
                    set out above, and in line with our regulatory obligations as a law firm —
                    typically six years from the end of your matter.
                  </p>
                </>
              ),
            },
            {
              title: "Your rights and how to contact us",
              body: (
                <>
                  <p>You have the right to:</p>
                  <ul className="list-disc space-y-1 pl-5 marker:text-gold-300">
                    <li>Request access to a copy of the personal data we hold about you.</li>
                    <li>Ask us to correct inaccurate or incomplete information.</li>
                    <li>Request deletion of personal data, where lawful.</li>
                    <li>Object to or restrict our processing in certain circumstances.</li>
                    <li>Withdraw consent for any optional processing at any time.</li>
                  </ul>
                  <p className="pt-2">
                    To exercise any of these rights, email{" "}
                    <a className="text-magenta-300 underline-offset-4 hover:underline" href="mailto:info@bensongoldstein.com">
                      info@bensongoldstein.com
                    </a>{" "}
                    or write to us at PO Box 79176, London NW4 9NH.
                  </p>
                  <p>
                    You also have the right to complain to the Information Commissioner&apos;s
                    Office at{" "}
                    <a className="text-magenta-300 underline-offset-4 hover:underline" href="https://ico.org.uk" rel="noreferrer noopener" target="_blank">
                      ico.org.uk
                    </a>
                    .
                  </p>
                </>
              ),
            },
          ]}
        />
      </main>
      <SiteFooter />
    </>
  );
}
