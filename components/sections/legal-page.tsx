import type { ReactNode } from "react";
import { PageHeader } from "@/components/sections/page-header";

interface LegalSection {
  title: string;
  body: ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  effective: string;
  sections: LegalSection[];
}

/**
 * Editorial law-firm-style long-form layout for policy documents.
 * Two-column: sticky table of contents on the left, prose on the right.
 */
export const LegalPageBody = ({ eyebrow, title, intro, effective, sections }: LegalPageProps) => {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        crumbs={[{ label: "Home", href: "/" }, { label: eyebrow }]}
        title={title}
        intro={intro}
      />

      <section className="section-cv relative bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-16">
          {/* TOC */}
          <aside className="order-2 lg:order-1">
            <div className="sticky top-28">
              <span className="text-[0.74rem] uppercase tracking-[0.18em] text-blue-700">
                In this document
              </span>
              <ol className="mt-4 flex flex-col gap-2 text-[0.92rem] text-blue-900/70">
                {sections.map((s, i) => {
                  const id = `s${i + 1}`;
                  return (
                    <li key={id}>
                      <a
                        className="group flex items-baseline gap-3 transition-colors hover:text-blue-900"
                        href={`#${id}`}
                      >
                        <span className="font-display text-[0.86rem] tabular-nums text-blue-700">
                          {`0${i + 1}`.slice(-2)}
                        </span>
                        <span className="border-b border-transparent group-hover:border-blue-300">
                          {s.title}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ol>
              <p className="mt-8 text-[0.78rem] uppercase tracking-[0.18em] text-blue-900/50">
                Effective {effective}
              </p>
            </div>
          </aside>

          {/* Body */}
          <article className="order-1 max-w-3xl space-y-12 lg:order-2">
            {sections.map((s, i) => (
              <section key={i} id={`s${i + 1}`} className="scroll-mt-28">
                <span className="font-display text-[0.86rem] tabular-nums text-blue-700">
                  {`0${i + 1}`.slice(-2)}
                </span>
                <h2 className="mt-2 font-display text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold leading-tight tracking-[-0.01em] text-blue-900">
                  {s.title}
                </h2>
                <div className="mt-5 space-y-4 text-[1rem] leading-relaxed text-blue-900/75">
                  {s.body}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
};
