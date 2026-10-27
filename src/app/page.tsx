import Link from 'next/link';
import Photo from '@/components/Photo';
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCta from '@/components/FinalCta';
import { bundles, coverageZones, defaultWaMessage, howItWorks, pillars, planStayWaMessage, site, stats, testimonials } from '@/config/site';
import { t } from '@/i18n/en';

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <Photo src="hero.jpg" alt="Villa terrace overlooking the Los Cabos coast" priority sizes="100vw" className="absolute inset-0 -z-10 opacity-50" />
        <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <p className="eyebrow">Villa concierge · Los Cabos</p>
          <h1 className="mt-4 max-w-3xl text-5xl sm:text-6xl">{site.tagline}</h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">One message and a local team handles the rest.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton text={defaultWaMessage}>{t.waCta}</WhatsAppButton>
            <WhatsAppButton text={planStayWaMessage} variant="light">{t.planCta}</WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-white">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-serif text-lg font-semibold sm:text-xl">{s.value}</dt>
              <dd className="text-sm text-navy/65">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Everything for your stay, at your door</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <Link key={p.id} href={p.href} className="group relative block overflow-hidden rounded-3xl">
              <Photo src={p.photo} alt={p.title} className="aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl">{p.title}</h3>
                <p className="mt-1 text-sm text-white/85">{p.items}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-white underline underline-offset-4">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="section">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Simple from the first message</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s, i) => (
              <li key={s.title}>
                <span className="font-serif text-4xl text-terracotta">{i + 1}</span>
                <h3 className="mt-2 text-xl">{s.title}</h3>
                <p className="mt-1 text-sm text-navy/75">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Bundles</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Popular combos</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {bundles.map((b) => (
            <article key={b.id} className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
              <Photo src={b.photo} alt={b.title} className="aspect-[4/3]" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl">{b.title}</h3>
                <p className="mt-1 flex-1 text-sm text-navy/75">{b.includes}</p>
                <p className="mt-3 font-semibold text-terracotta">{b.price}</p>
                <WhatsAppButton text={b.wa} className="mt-4">{t.book}</WhatsAppButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="section">
          <p className="eyebrow">Coverage</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Across Los Cabos</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {coverageZones.map((z) => (
              <li key={z} className="rounded-full border border-white/30 px-4 py-2 text-sm">{z}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Guest love</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">What guests say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((q, i) => (
            <figure key={i} className="rounded-3xl bg-white p-6 shadow-sm">
              <blockquote className="text-navy/85">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold">{q.name}</span>
                <span className="text-navy/60"> · {q.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <FinalCta title="Your villa is waiting. Let's host you." />
    </>
  );
}
