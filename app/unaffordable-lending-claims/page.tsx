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
import { ContactBlock } from "@/components/sections/contact-block";
import { ScrollsOver } from "@/components/sections/scrolls-over";
import { UnaffordableIllustration } from "@/components/decor/unaffordable-illustration";

export const metadata: Metadata = {
  title: "Unaffordable lending claims — Benson Goldstein",
  description:
    "Trapped in a cycle of unaffordable loans and high-interest debt? Benson Goldstein helps borrowers reclaim interest, fees and charges on a no-win-no-fee basis.",
};

export default function UnaffordableLendingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="relative">          <PageHeader
            eyebrow="Unaffordable lending claims"
            crumbs={[{ label: "Home", href: "/" }, { label: "Unaffordable lending claims" }]}
            title={
              <>
                Are you burdened by the weight of unaffordable loans and{" "}
                <span className="font-italic text-magenta-400">high-interest debts?</span>
              </>
            }
            intro={
              <>
                Have you been trapped in a cycle of borrowing that seems impossible to break free
                from? You&apos;re not alone — and there is a way out. Benson Goldstein is here to
                help you reclaim control over your financial future.
              </>
            }
            aside={
              <div className="relative aspect-4/5 w-full max-w-md overflow-hidden rounded-[28px] border border-gold-400/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <UnaffordableIllustration />
              </div>
            }
          />
        </div>

        <ScrollsOver bg="#06081a">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">            <Definition
              eyebrow="The basics"
              heading={
                <>
                  What is{" "}
                  <span className="font-italic text-magenta-400">unaffordable lending?</span>
                </>
              }
              body={
                <>
                  <p>
                    Unaffordable lending refers to situations where lenders provided credit or
                    loans without properly assessing the borrower&apos;s ability to repay —
                    leading to spiralling interest, persistent missed payments, and pressure to
                    borrow further.
                  </p>
                  <p>
                    If a lender failed in this duty, you may be entitled to reclaim the interest,
                    fees and charges paid on the agreement, plus statutory interest. This applies
                    to payday loans, credit cards, overdrafts, doorstep loans, instalment loans
                    and more.
                  </p>
                </>
              }
              stat={{
                value: "8%",
                label:
                  "statutory interest is typically applied to refunded charges — substantially boosting recoveries.",
              }}
            />
          </div>
        </ScrollsOver>

        <ScrollsOver bg="#faf7f2">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">
            <Benefits
              heading={
                <>
                  Why borrowers turn to{" "}
                  <span className="font-italic text-magenta-500">Benson Goldstein</span>.
                </>
              }
              intro="Our team has assessed thousands of consumer-credit complaints. We know which arguments succeed, which lenders settle quickly, and how to escalate stubborn cases through to the Financial Ombudsman."
              items={[
                {
                  title: "Free consultation",
                  body: "We assess your circumstances at no cost and tell you honestly whether a claim is worth pursuing.",
                  icon: <BenefitIcon path="M5 19a7 7 0 0 1 14 0 M12 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />,
                },
                {
                  title: "Specialist expertise",
                  body: "Our solicitors handle financial mis-selling daily and bring a specialist eye to every irresponsible-lending complaint.",
                  icon: <BenefitIcon path="M4 12 L10 18 L20 6" />,
                },
                {
                  title: "Affordable services",
                  body: "No upfront fees. Our work is funded on a strict no-win-no-fee basis, agreed with you in writing before we start.",
                  icon: <BenefitIcon path="M12 4 V20 M5 11 L12 4 L19 11" />,
                },
                {
                  title: "Maximised compensation",
                  body: "We pursue every avenue — interest, charges, statutory interest, and adverse credit-file removal where appropriate.",
                  icon: <BenefitIcon path="M3 12 H21 M12 3 V21" />,
                },
              ]}
            />
          </div>
        </ScrollsOver>

        <ScrollsOver bg="#06081a">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">            <Process
              heading={
                <>
                  Your journey to{" "}
                  <span className="font-italic text-magenta-400">financial recovery.</span>
                </>
              }
              steps={[
                {
                  title: "Free assessment",
                  body: "Tell us about the lender, the type of credit, and your circumstances at the time of borrowing. We respond promptly with our view.",
                },
                {
                  title: "Document gathering",
                  body: "We help you obtain the lender's affordability records and your statements where needed — most of this is recoverable directly.",
                },
                {
                  title: "Lender complaint",
                  body: "We submit a detailed irresponsible-lending complaint to the lender setting out the failures and the redress sought.",
                },
                {
                  title: "Ombudsman if needed",
                  body: "If the lender's response is inadequate, we escalate to the Financial Ombudsman and represent you through to outcome.",
                },
              ]}
            />
          </div>
        </ScrollsOver>

        <ScrollsOver bg="#06081a">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">
            <ServiceCta
              title={
                <>
                  Start your journey to{" "}
                  <span className="font-italic text-magenta-400">financial recovery</span> today.
                </>
              }
              body="Our experienced solicitors will respond promptly. There is no cost to find out where you stand."
            />
          </div>
        </ScrollsOver>

        <ScrollsOver bg="#faf7f2">
          <div className="relative overflow-hidden rounded-t-[36px] lg:rounded-t-[48px]">
            <ContactBlock variant="cream" />
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
