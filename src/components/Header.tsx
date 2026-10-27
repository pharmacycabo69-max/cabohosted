import Link from 'next/link';
import { nav, site, planStayWaMessage } from '@/config/site';
import { t } from '@/i18n/en';
import WhatsAppButton from './WhatsAppButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="font-serif text-xl font-semibold text-navy">
          {site.name}
        </Link>
        <nav className="hidden gap-6 text-sm lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-terracotta">
              {n.label}
            </Link>
          ))}
        </nav>
        <WhatsAppButton text={planStayWaMessage} className="hidden !py-2 sm:inline-flex">
          {t.planCta}
        </WhatsAppButton>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-navy px-4 py-2 text-sm">Menu</summary>
          <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white p-3 shadow-lg">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="block rounded-lg px-3 py-2 hover:bg-sand">
                {n.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
