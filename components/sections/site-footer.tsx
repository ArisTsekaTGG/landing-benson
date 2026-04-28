import { BrandMark } from "@/components/decor/brand-mark";

const COL_CLAIMS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Eligibility", href: "/#hero" },
  { label: "Car finance claims", href: "/mis-sold-motor-finance" },
  { label: "No win, no fee", href: "/#hero" },
  { label: "FAQs", href: "/#faqs" },
];

const COL_FIRM = [
  { label: "Why Benson Goldstein", href: "/about" },
  { label: "Our legal team", href: "/about" },
  { label: "Success stories", href: "/#claims" },
  { label: "News & updates", href: "/about" },
];

const COL_HELP = [
  { label: "Contact", href: "#contact" },
  { label: "Terms of use", href: "/privacy-policy" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Complaints", href: "/complaints-procedure" },
];

export const SiteFooter = () => {
  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden bg-blue-900 pt-20 text-cream-50"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <BrandMark variant="light" />
            <p className="mt-5 max-w-xs text-[0.92rem] leading-relaxed text-cream-50/65">
              Benson Goldstein is a regulated UK law firm specialising in mis-sold car finance
              recovery. Specialist solicitors with years of experience in financial mis-selling
              claims.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { label: "Facebook", path: "M9 8H7v3h2v8h3v-8h2.5l.4-3H12V6.5c0-.7.4-1 .9-1H15V3h-2c-2.4 0-4 1.5-4 3.5V8z" },
                { label: "X", path: "M16.5 3h2.7l-5.9 6.7L20.5 21h-5.5l-4.3-5.6L5.4 21H2.7l6.3-7.2L2.4 3h5.6l3.9 5.1L16.5 3z" },
                { label: "Instagram", path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
                { label: "LinkedIn", path: "M5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-1 6h2v10H4V10zm5 0h2v1.4c.6-.9 1.7-1.6 3-1.6 2.5 0 3 1.7 3 3.7V20h-2v-5.4c0-1.4-.5-2.1-1.6-2.1-1.2 0-1.9.8-1.9 2.1V20H9V10z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-cream-50/70 transition-all hover:border-blue-300 hover:bg-white/10 hover:text-cream-50"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[0.82rem] font-semibold tracking-tight text-cream-50">
              Claim with confidence
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-[0.92rem] text-cream-50/72">
              {COL_CLAIMS.map((l) => (
                <li key={l.label}>
                  <a className="transition-colors hover:text-cream-50" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-[0.82rem] font-semibold tracking-tight text-cream-50">
              About us
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-[0.92rem] text-cream-50/72">
              {COL_FIRM.map((l) => (
                <li key={l.label}>
                  <a className="transition-colors hover:text-cream-50" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-[0.82rem] font-semibold tracking-tight text-cream-50">
              Help &amp; support
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-[0.92rem] text-cream-50/72">
              {COL_HELP.map((l) => (
                <li key={l.label}>
                  <a className="transition-colors hover:text-cream-50" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SRA badge */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-cream-50 font-display text-[0.78rem] font-bold tracking-wider text-blue-900">
                  SRA
                </div>
                <div className="text-[0.78rem] leading-snug text-cream-50/72">
                  Regulated by the
                  <br />
                  <span className="text-cream-50/90">Solicitors Regulation Authority</span>
                </div>
              </div>
              <div className="mt-3 text-[0.74rem] text-cream-50/55">SRA No. 8003245</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-7 text-[0.78rem] leading-relaxed text-cream-50/55 sm:flex sm:items-start sm:justify-between sm:gap-8">
          <p className="max-w-3xl">
            Benson Goldstein is a trading name of Benson Goldstein Ltd, a company registered in
            England &amp; Wales (No. 14417365). Registered office: 3rd Floor, 86–90 Paul Street,
            London EC2A 4NE. Authorised and regulated by the Solicitors Regulation Authority
            (SRA No. 8003245). VAT registration GB507539384. We are solicitors.
          </p>
          <p className="mt-3 sm:mt-0">© {new Date().getFullYear()} Benson Goldstein</p>
        </div>
      </div>
    </footer>
  );
};
