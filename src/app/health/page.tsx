import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import FinalCta from '@/components/FinalCta';
import { healthDisclaimer, healthServices } from '@/config/site';
import { pageMeta } from '@/lib/seo';
import { t } from '@/i18n/en';

export const metadata = pageMeta(
  'Health & Pharmacy at Your Villa',
  'Pharmacy delivery, IV therapy, doctor visits, video consultations and labs delivered to your Cabo villa by a bilingual clinical team.',
  '/health',
  ['iv therapy cabo villa', 'cabo villa services', 'cabo pharmacy delivery'],
);

export default function Health() {
  return (
    <>
      <PageHero
        eyebrow="Health & Pharmacy"
        title="Care that comes to your villa"
        intro="Registered nurses and physicians, a bilingual clinical team and pharmacy delivery, all by one WhatsApp message."
      />
      <section className="section">
        <p className="mb-8 rounded-2xl border border-terracotta/40 bg-white p-4 text-sm font-semibold text-terracotta">{healthDisclaimer}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {healthServices.map((s) => (
            <ServiceCard key={s.id} s={s} cta={t.book} />
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
