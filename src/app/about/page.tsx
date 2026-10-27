import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import { aboutPoints } from '@/config/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta(
  'About Cabo Hosted',
  'A local, bilingual team that connects visitors in Los Cabos with verified providers for health, celebrations, experiences and events.',
  '/about',
);

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Locals who host you like family"
        intro="We are a small bilingual team based in Los Cabos. We built Cabo Hosted so visitors never have to figure out who to call."
      />
      <section className="section">
        <div className="grid gap-8 sm:grid-cols-2">
          {aboutPoints.map((p) => (
            <div key={p.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl">{p.title}</h3>
              <p className="mt-2 text-navy/75">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
