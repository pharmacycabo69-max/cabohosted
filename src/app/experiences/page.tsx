import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import FinalCta from '@/components/FinalCta';
import { experienceServices } from '@/config/site';
import { pageMeta } from '@/lib/seo';
import { t } from '@/i18n/en';

export const metadata = pageMeta(
  'Private Chef, Mariachi & Experiences in Cabo',
  'Private chefs, bartenders, mariachi, in-villa massage, photographers and more, brought to your Los Cabos villa.',
  '/experiences',
  ['cabo private chef', 'cabo villa services', 'cabo villa concierge'],
);

export default function Experiences() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Bring the best of Cabo home"
        intro="Chefs, music, massage and more, hosted right where you are staying."
      />
      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experienceServices.map((s) => (
            <ServiceCard key={s.id} s={s} cta={t.request} />
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
