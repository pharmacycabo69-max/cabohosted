import Link from 'next/link';
import { nav, site } from '@/config/site';
import { t } from '@/i18n/en';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-white">{site.name}</p>
          <p className="mt-2 text-sm">{t.footerNote}</p>
        </div>
        <div className="text-sm">
          <p className="mb-2 font-semibold text-white">Explore</p>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="block py-0.5 hover:text-white">
              {n.label}
            </Link>
          ))}
          <Link href="/legal" className="block py-0.5 hover:text-white">Terms & Privacy</Link>
        </div>
        <div className="text-sm">
          <p className="mb-2 font-semibold text-white">Contact</p>
          <p>{site.phoneDisplay}</p>
          <p>{site.email}</p>
          <p>{site.hours}</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
