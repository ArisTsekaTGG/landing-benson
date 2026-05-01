import type { Metadata } from "next";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageHeader } from "@/components/sections/page-header";
import { CounselBio } from "@/components/sections/counsel-bio";
import { Philosophy } from "@/components/sections/philosophy";
import { ContactBlock } from "@/components/sections/contact-block";
import { ScrollsOver } from "@/components/sections/scrolls-over";
import { CounselPortrait } from "@/components/decor/counsel-portrait";

export const metadata: Metadata = {
  title: "About — Benson Goldstein",
  description:
    "Coby Benson and David Goldstein founded Benson Goldstein on principles of legal expertise, client advocacy, and accessible no-win-no-fee representation.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="relative">          <PageHeader
            eyebrow="About the firm"
            crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
            title={
              <>
                Two solicitors, decades of experience, and a quietly{" "}
                <span className="font-italic text-magenta-400">uncompromising</span> standard.
              </>
            }
            intro={
              <>
                Benson Goldstein is a specialist consumer-law firm founded by{" "}
                <a className="text-magenta-300 underline-offset-4 hover:underline" href="#coby">
                  Coby Benson
                </a>{" "}
                and{" "}
                <a className="text-magenta-300 underline-offset-4 hover:underline" href="#david">
                  David Goldstein
                </a>
                . Our entire practice is built on financial mis-selling litigation — and we run it
                with the discretion of a private chambers and the speed of a service built for you.
              </>
            }
            aside={
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-[20px] border border-gold-400/30 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)]">
                  <CounselPortrait variant="coby" />
                </div>
                <div className="mt-10 overflow-hidden rounded-[20px] border border-gold-400/30 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)]">
                  <CounselPortrait variant="david" />
                </div>
              </div>
            }
          />
        </div>

        <ScrollsOver bg="#06081a">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">            <CounselBio
              id="coby"
              variant="coby"
              name="Coby Benson"
              role="Founding solicitor"
              email="coby@bensongoldstein.com"
              intro="Coby has over a decade of experience as a litigation solicitor with particular expertise in financial mis-selling and flight-delay compensation, having represented claimants in over fifteen appeal-level test cases."
              body={
                <>
                  <p>
                    That experience has earned him a name as a leading authority in the field —
                    with regular features on BBC Radio 4, BBC Radio 5 Live, BBC Three Counties,
                    BBC Television, Sky News and ITV News.
                  </p>
                  <p>
                    He is regularly quoted in The Daily Mail, The Daily Telegraph, The Times, The
                    Guardian and The Independent on consumer rights, mis-selling, and access to
                    justice.
                  </p>
                </>
              }
              awards={[
                { title: "Associate of the Year", result: "Winner", body: "Manchester Legal Awards 2014" },
                { title: "Junior Lawyer of the Year", result: "Highly Commended", body: "Law Society Excellence Awards 2013" },
                { title: "Rising Star", result: "Winner", body: "Modern Law Awards 2013" },
              ]}
            />
          </div>
        </ScrollsOver>

        <ScrollsOver bg="#faf7f2">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">
            <Philosophy />
          </div>
        </ScrollsOver>

        <ScrollsOver bg="#06081a">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">            <CounselBio
              id="david"
              variant="david"
              name="David Goldstein"
              role="Founding solicitor"
              email="david@bensongoldstein.com"
              intro="David has over two decades of legal experience, having served as Legal Director at The Claims Guys Legal and Head of Legal & Compliance at Valour Group."
              reverse
              body={
                <>
                  <p>
                    Through his legal experience and leadership skills, David handled a high
                    volume of Plevin claims — overseeing legal strategy and maintaining
                    high-level legal relationships with banks and their representatives.
                  </p>
                  <p>
                    As Head of Legal &amp; Compliance for the Valour Group&apos;s four
                    consumer-credit companies, David successfully steered the group&apos;s
                    transition from OFT to FCA regulation while managing the compliance and legal
                    teams.
                  </p>
                  <p>
                    David previously served as a Solicitor at Irwin Mitchell, on the regulatory
                    and investigations team, primarily representing PLCs under investigation by
                    their respective regulators.
                  </p>
                </>
              }
            />
          </div>
        </ScrollsOver>

        <ScrollsOver bg="#06081a">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">
            <ContactBlock
              heading="Speak directly with our team."
              intro="Whether you have a question about your finance agreement or want to begin a claim, our solicitors and senior staff respond personally."
            />
          </div>
        </ScrollsOver>
      </main>
      <SiteFooter />
    </>
  );
}
