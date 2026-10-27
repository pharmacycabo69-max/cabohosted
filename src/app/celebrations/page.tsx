import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import FinalCta from '@/components/FinalCta';
import { celebrationServices, proposalPackages } from '@/config/site';
import { pageMeta } from '@/lib/seo';
import { t } from '@/i18n/en';

export const metadata = pageMeta(
  'Celebrations & Proposals in Cabo',
  'Flowers, custom cakes, balloons, room decor and unforgettable proposals in Los Cabos, delivered to your villa.',
  '/celebrations',
  ['proposal cabo', 'cabo villa services', 'cabo villa concierge'],
);

export default function Celebrations() {
  return (
    <>
      <PageHero
        eyebrow="Celebrations"
        title="Make every moment a celebration"
        intro="Flowers, cakes, decor and surprises, set up before you arrive or while you are out."
      />
      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {celebrationServices.map((s) => (
            <ServiceCard key={s.id} s={s} cta={t.book} />
          ))}
        </div>
      </section>
      <section className="bg-white">
        <div className="section">
          <p className="eyebrow">Proposals in Cabo</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Say it somewhere unforgettable</h2>
          <p className="mt-3 max-w-2xl text-navy/75">We plan every detail so you only have to ask the question.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {proposalPackages.map((s) => (
              <ServiceCard key={s.id} s={s} cta={t.book} />
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
