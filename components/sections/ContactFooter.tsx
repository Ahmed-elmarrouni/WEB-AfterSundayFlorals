import Image from "next/image";
import Link from "next/link";

export default function ContactFooter() {
  return (
    <footer className="relative py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[var(--sage)]/10 text-[var(--charcoal)] border-t border-[var(--charcoal)]/5 overflow-hidden">
      {/* Hanging Amaranthus Accent */}
      <div className="absolute top-0 right-0 md:right-12 w-[30vw] h-[60vw] md:w-[15vw] md:h-[30vw] opacity-60 mix-blend-multiply pointer-events-none -translate-y-1/4">
        <Image
          src="/assets/floral-layers/Hanging_Amaranthus-.png"
          alt="Hanging Amaranthus"
          fill
          className="object-contain object-top"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <div className="flex flex-col gap-8 max-w-2xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--charcoal)]/50">
            After Sunday Florals
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-none">
            Studio visits <br />
            <span className="italic">by appointment.</span>
          </h2>

          <Link
            href="/inquire"
            className="group mt-4 inline-flex w-fit items-center gap-3 rounded-full border border-[var(--charcoal)]/15 bg-white/70 px-7 py-3 text-[10px] uppercase tracking-[0.28em] text-[var(--charcoal)] shadow-[0_18px_45px_rgba(26,26,26,0.06)] backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--charcoal)]/35 hover:bg-[var(--charcoal)] hover:text-[var(--ivory)] hover:shadow-[0_22px_60px_rgba(26,26,26,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--charcoal)]"
          >
            <span>Start an inquiry</span>
            <span
              aria-hidden="true"
              className="h-[1px] w-6 bg-current transition-all duration-500 group-hover:w-9"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-8 text-[10px] tracking-widest uppercase md:text-right">
          {/* Quick Links */}
          <div className="flex flex-wrap md:justify-end gap-x-6 gap-y-4 max-w-[280px] md:max-w-none text-[var(--charcoal)]/60">
            <Link
              href="/"
              className="hover:text-[var(--charcoal)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#bouquets"
              className="hover:text-[var(--charcoal)] transition-colors"
            >
              Bouquets
            </Link>
            <Link
              href="/#services"
              className="hover:text-[var(--charcoal)] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="hover:text-[var(--charcoal)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/inquire"
              className="hover:text-[var(--charcoal)] transition-colors"
            >
              Inquire
            </Link>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 text-xs font-light">
            <a
              href="mailto:ahmedelmarrouni1@gmail.com"
              className="group relative pb-1 w-fit md:ml-auto text-[var(--charcoal)]/80 hover:text-[var(--charcoal)] transition-colors"
            >
              ahmedelmarrouni1@gmail.com
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--charcoal)]/20 group-hover:bg-[var(--charcoal)] transition-colors duration-300" />
            </a>

            <a
              href="tel:+212710452650"
              className="group relative pb-1 w-fit md:ml-auto text-[var(--charcoal)]/80 hover:text-[var(--charcoal)] transition-colors"
            >
              +212 710 452 650
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--charcoal)]/20 group-hover:bg-[var(--charcoal)] transition-colors duration-300" />
            </a>

            <a
              href="https://www.instagram.com/aftersundayflorals/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="After Sunday Florals on Instagram"
              className="group relative inline-flex w-fit items-center gap-2 pb-1 md:ml-auto text-[var(--charcoal)]/80 hover:text-[var(--charcoal)] transition-colors"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.75"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>

              <span>@aftersundayflorals</span>

              <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[var(--charcoal)]/20 group-hover:bg-[var(--charcoal)] transition-colors duration-300" />
            </a>

            <p className="text-[var(--charcoal)]/50 mt-2">Tetouan, MA</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-24 md:mt-32 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] tracking-widest uppercase text-[var(--charcoal)]/40 border-t border-[var(--charcoal)]/10 pt-8">
        <p>© {new Date().getFullYear()} After Sunday Florals</p>

        <a
          href="https://www.linkedin.com/in/elmarrouni/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ahmed El Marrouni on LinkedIn"
          className="inline-flex items-center gap-2 hover:text-[var(--charcoal)] transition-colors"
        >
          <span>Design & Code by Ahmed El Marrouni</span>
        </a>
      </div>
    </footer>
  );
}
