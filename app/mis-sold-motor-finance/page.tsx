import type { Metadata } from "next";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageHeader } from "@/components/sections/page-header";
import {
  Definition,
  Benefits,
  Process,
  ServiceCta,
} from "@/components/sections/service-page-blocks";
import { Faq } from "@/components/sections/faq";
import { LegalTeam } from "@/components/decor/legal-team";
import { MarqueeBand } from "@/components/sections/marquee-band";
import { ContactBlock } from "@/components/sections/contact-block";
import { ScrollsOver } from "@/components/sections/scrolls-over";

export const metadata: Metadata = {
  title: "Mis-sold motor finance — Benson Goldstein",
  description:
    "Mis-sold car finance? You may be entitled to substantial compensation. Benson Goldstein recovers undisclosed commission from PCP, HP and motor finance agreements on a no-win-no-fee basis.",
};

export default function MotorFinancePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="relative">          <PageHeader
            eyebrow="Mis-sold motor finance"
            crumbs={[{ label: "Home", href: "/" }, { label: "Mis-sold motor finance" }]}
            title={
              <>
                Are you one of the countless individuals who unknowingly paid hefty commissions on
                your <span className="font-italic text-magenta-400">motor finance?</span>
              </>
            }
            intro={
              <>
                You might be entitled to substantial compensation. At Benson Goldstein we
                specialise in helping clients reclaim what&apos;s rightfully theirs from PCP, HP
                and conditional sale agreements where the broker&apos;s commission was never
                disclosed.
              </>
            }
            aside={
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[28px] border border-gold-400/25 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
                <LegalTeam />
              </div>
            }
          />
        </div>

        <ScrollsOver bg="#06081a">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">            <Definition
              eyebrow="The basics"
              heading={
                <>
                  What is <span className="font-italic text-magenta-400">mis-sold</span> motor
                  finance?
                </>
              }
              body={
                <>
                  <p>
                    Mis-sold motor finance occurs when lenders pay a commission to brokers —
                    typically the dealership — without your knowledge or consent. These hidden
                    commissions can significantly increase the cost of a finance agreement,
                    leaving you out of pocket for years.
                  </p>
                  <p>
                    Even if you settled the agreement years ago, you may still be entitled to
                    recover the undisclosed commission. We assess every case for free, on a
                    strict no-win-no-fee basis.
                  </p>
                </>
              }
              stat={{
                value: "95%",
                label:
                  "of finance companies paid undisclosed commissions to brokers without their customers' knowledge.",
              }}
            />
          </div>
        </ScrollsOver>

        <ScrollsOver bg="#faf7f2">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">
            <Benefits
              heading={
                <>
                  Why drivers choose us for{" "}
                  <span className="font-italic text-magenta-500">motor-finance recovery</span>.
                </>
              }
              intro="Our entire practice is built around financial mis-selling. That focus shows in the standard of representation, the attention to detail, and the speed of recovery."
              items={[
                {
                  title: "Specialist expertise",
                  body: "Our solicitors have represented claimants in over fifteen appeal-level test cases on financial mis-selling.",
                  icon: <BenefitIcon path="M4 12 L10 18 L20 6" />,
                },
                {
                  title: "Proven track record",
                  body: "Benson Goldstein has successfully recovered substantial sums for clients, with the average claim value exceeding £1,000.",
                  icon: <BenefitIcon path="M12 4 V20 M5 11 L12 4 L19 11" />,
                },
                {
                  title: "Personalised approach",
                  body: "Every agreement is reviewed individually by a senior member of the team — not by a triage script.",
                  icon: <BenefitIcon path="M5 19a7 7 0 0 1 14 0 M12 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />,
                },
                {
                  title: "No win, no fee",
                  body: "You don't pay our legal fees unless we recover compensation. Our success fee is agreed in writing before we start.",
                  icon: <BenefitIcon path="M6 12 H18 M12 6 V18" />,
                },
              ]}
            />
          </div>
        </ScrollsOver>

        <ScrollsOver bg="#06081a">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">            <Process
              heading={
                <>
                  Your path to <span className="font-italic text-magenta-400">compensation</span>.
                </>
              }
              steps={[
                {
                  title: "Eligibility check",
                  body: "Answer a handful of questions about your agreement. The check takes under sixty seconds and never affects your credit file.",
                },
                {
                  title: "Agreement review",
                  body: "If you look eligible, our team reviews the underlying finance documents to identify undisclosed commission and other unfair terms.",
                },
                {
                  title: "Lender complaint & negotiation",
                  body: "We submit a formal complaint to the lender and negotiate hard for compensation. Most cases settle without going to court.",
                },
                {
                  title: "Recovery & sign-off",
                  body: "Compensation is paid directly to you, less our pre-agreed success fee. We close the file and provide written confirmation.",
                },
              ]}
            />
          </div>
        </ScrollsOver>

        <MarqueeBand direction="left" baseSpeed={32} />

        <ScrollsOver bg="#06081a">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">
            <Faq />
          </div>
        </ScrollsOver>

        <ScrollsOver bg="#06081a">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">
            <ServiceCta
              title={
                <>
                  Don&apos;t let hidden commissions drain your finances any longer. Take the first
                  step towards reclaiming what&apos;s rightfully{" "}
                  <span className="font-italic text-magenta-400">yours.</span>
                </>
              }
              body="Check your eligibility in under sixty seconds. If your case has merit, our solicitors take it from there."
            />
          </div>
        </ScrollsOver>

        <ScrollsOver bg="#06081a">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">
            <ContactBlock />
          </div>
        </ScrollsOver>
      </main>
      <SiteFooter />
    </>
  );
}

const BenefitIcon = ({ path }: { path: string }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
    <path d={path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
