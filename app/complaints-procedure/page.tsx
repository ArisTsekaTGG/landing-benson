import type { Metadata } from "next";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { LegalPageBody } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Complaints Procedure — Benson Goldstein",
  description:
    "How to make a complaint about Benson Goldstein, the steps we take to resolve it, and your right to escalate to the Legal Ombudsman or Solicitors Regulation Authority.",
};

export default function ComplaintsProcedurePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LegalPageBody
          eyebrow="Complaints procedure"
          title={
            <>
              Our promise to put things <span className="font-italic text-magenta-400">right.</span>
            </>
          }
          intro="We take complaints seriously. This procedure sets out exactly how to raise a concern, who will handle it, and the timescales you can expect from us at every stage."
          effective="January 2026"
          sections={[
            {
              title: "Our commitment",
              body: (
                <>
                  <p>
                    Benson Goldstein is committed to providing a high-quality legal service to all
                    our clients. When something goes wrong, we want you to tell us. This is the
                    only reliable way for us to put it right and to learn from it.
                  </p>
                  <p>
                    A complaint is any expression of dissatisfaction about our service, whether
                    raised verbally or in writing, and whether or not the word
                    &ldquo;complaint&rdquo; is used.
                  </p>
                </>
              ),
            },
            {
              title: "How to raise a complaint",
              body: (
                <>
                  <p>
                    You can raise a complaint at any time, in any of the following ways:
                  </p>
                  <ul className="list-disc space-y-1 pl-5 marker:text-gold-300">
                    <li>
                      By email to{" "}
                      <a className="text-magenta-300 underline-offset-4 hover:underline" href="mailto:info@bensongoldstein.com">
                        info@bensongoldstein.com
                      </a>
                      .
                    </li>
                    <li>By post to PO Box 79176, London NW4 9NH.</li>
                    <li>
                      By speaking directly to the solicitor handling your matter, who will record
                      the complaint in writing and pass it to the firm&apos;s Complaints
                      Partner.
                    </li>
                  </ul>
                  <p>
                    To help us investigate efficiently, please include your full name, your
                    matter reference (if you have one), a clear description of the problem, and
                    what outcome you would like.
                  </p>
                </>
              ),
            },
            {
              title: "What happens next",
              body: (
                <>
                  <p>Our complaints process follows clear, published timescales:</p>
                  <ul className="list-disc space-y-1 pl-5 marker:text-gold-300">
                    <li>
                      <strong className="text-foreground">Within 5 working days</strong> we
                      acknowledge receipt of your complaint in writing and confirm who will
                      investigate it.
                    </li>
                    <li>
                      <strong className="text-foreground">Within 4 weeks</strong> we will provide
                      a substantive response, or — if a full investigation is ongoing — a
                      written progress update.
                    </li>
                    <li>
                      <strong className="text-foreground">Within 8 weeks</strong> we will issue
                      our final response, setting out our findings, any action we propose to
                      take, and your further rights of escalation.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "If you remain unhappy — Legal Ombudsman",
              body: (
                <>
                  <p>
                    If we have not resolved your complaint within eight weeks of receiving it, or
                    if you remain unhappy with our final response, you may refer the complaint to
                    the Legal Ombudsman.
                  </p>
                  <p>
                    The Legal Ombudsman is a free, independent service for clients of regulated
                    legal service providers. You ordinarily have <strong className="text-foreground">
                    six months</strong> from our final response to bring your complaint to them.
                  </p>
                  <ul className="list-disc space-y-1 pl-5 marker:text-gold-300">
                    <li>
                      <a
                        className="text-magenta-300 underline-offset-4 hover:underline"
                        href="https://www.legalombudsman.org.uk"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        legalombudsman.org.uk
                      </a>
                    </li>
                    <li>0300 555 0333</li>
                    <li>PO Box 6167, Slough, SL1 0EH</li>
                    <li>
                      <a
                        className="text-magenta-300 underline-offset-4 hover:underline"
                        href="mailto:enquiries@legalombudsman.org.uk"
                      >
                        enquiries@legalombudsman.org.uk
                      </a>
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "Concerns about a solicitor's conduct — SRA",
              body: (
                <>
                  <p>
                    If your complaint relates to professional misconduct — for example, dishonesty,
                    or a serious breach of the SRA Standards and Regulations — you can raise it
                    directly with the Solicitors Regulation Authority at any time.
                  </p>
                  <ul className="list-disc space-y-1 pl-5 marker:text-gold-300">
                    <li>
                      <a
                        className="text-magenta-300 underline-offset-4 hover:underline"
                        href="https://www.sra.org.uk/consumers/problems"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        sra.org.uk/consumers/problems
                      </a>
                    </li>
                    <li>0370 606 2555</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Records and review",
              body: (
                <>
                  <p>
                    All complaints are logged centrally and reviewed by the firm&apos;s
                    Complaints Partner each quarter. Trends and lessons learned are shared with
                    the partners and feed into our annual training programme — to ensure
                    feedback drives genuine improvement, not just resolution.
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
