import { BrandMark } from "@/components/decor/brand-mark";

const COL_CLAIMS = [
  { label: "Mis-sold motor finance", href: "/mis-sold-motor-finance" },
  { label: "Unaffordable lending claims", href: "/unaffordable-lending-claims" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Cases we recover", href: "/#claims" },
  { label: "FAQs", href: "/#faqs" },
];

const COL_FIRM = [
  { label: "About us", href: "/about" },
  { label: "Coby Benson", href: "/about#coby" },
  { label: "David Goldstein", href: "/about#david" },
  { label: "Contact", href: "#contact" },
];

const COL_HELP = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Complaints procedure", href: "/complaints-procedure" },
  { label: "Terms of use", href: "/privacy-policy" },
  { label: "info@bensongoldstein.com", href: "mailto:info@bensongoldstein.com" },
];

export const SiteFooter = () => {
  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden bg-[#06081a] pt-20"
    >
      {/* Top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <BrandMark />
            <p className="mt-5 max-w-xs text-[0.92rem] leading-relaxed text-foreground/65">
              Benson Goldstein is a regulated UK law firm specialising in mis-sold car finance
              recovery. Our service is run with the discretion of a private chambers and the speed
              of a service built for you.
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
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-foreground/65 transition-all hover:border-magenta-400/50 hover:bg-magenta-500/10 hover:text-foreground"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[0.82rem] font-medium uppercase tracking-[0.18em] text-gold-300">
              Claim with confidence
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-[0.92rem] text-foreground/72">
              {COL_CLAIMS.map((l) => (
                <li key={l.label}>
                  <a className="transition-colors hover:text-foreground" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-[0.82rem] font-medium uppercase tracking-[0.18em] text-gold-300">
              About us
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-[0.92rem] text-foreground/72">
              {COL_FIRM.map((l) => (
                <li key={l.label}>
                  <a className="transition-colors hover:text-foreground" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-[0.82rem] font-medium uppercase tracking-[0.18em] text-gold-300">
              Help & support
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-[0.92rem] text-foreground/72">
              {COL_HELP.map((l) => (
                <li key={l.label}>
                  <a className="transition-colors hover:text-foreground" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SRA badge */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gold-400/25 bg-gradient-to-br from-[#0d1234] to-[#0a0e27] p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-cream-50 to-cream-200 font-display text-[0.78rem] font-bold tracking-wider text-ink-900">
                  SRA
                </div>
                <div className="text-[0.78rem] leading-snug text-foreground/72">
                  Regulated by the
                  <br />
                  <span className="text-foreground/90">Solicitors Regulation Authority</span>
                </div>
              </div>
              <div className="mt-3 text-[0.74rem] text-foreground/55">SRA No. 8003245</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] py-7 text-[0.78rem] leading-relaxed text-foreground/55 sm:flex sm:items-start sm:justify-between sm:gap-8">
          <p className="max-w-3xl">
            Benson Goldstein is a trading name of Benson Goldstein Ltd, a company registered in
            England &amp; Wales (No. 14417365). Registered office: 3rd Floor, 86–90 Paul Street,
            London EC2A 4NE. Authorised and regulated by the Solicitors Regulation Authority (SRA
            No. 8003245). VAT registration GB507539384.
          </p>
          <p className="mt-3 sm:mt-0">© {new Date().getFullYear()} Benson Goldstein</p>
        </div>
      </div>
    </footer>
  );
};
