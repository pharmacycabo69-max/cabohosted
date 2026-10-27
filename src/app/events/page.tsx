import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import Photo from '@/components/Photo';
import Gallery from '@/components/Gallery';
import FinalCta from '@/components/FinalCta';
import { eventPackages, photoGallery, ranchGallery, venue, venueGallery } from '@/config/site';
import { pageMeta } from '@/lib/seo';
import { t } from '@/i18n/en';

export const metadata = pageMeta(
  'Weddings & Events at a Private Ranch in Cabo',
  'Rancho McCoy: a rustic-elegant ranch in Cabo San Lucas for weddings, elopements, quinceañeras, birthdays, corporate events and photo sessions.',
  '/events',
  ['cabo wedding venue', 'cabo villa concierge', 'proposal cabo'],
);

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events & Venue"
        title={`${venue.name}, Cabo San Lucas`}
        intro="A rustic-elegant private ranch for weddings, elopements, quinceañeras, birthdays, corporate events and photo sessions."
      />
      <section className="section">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Photo src="events-ranch.jpg" alt="Dancing horse show at Rancho McCoy" className="aspect-[4/3] rounded-3xl" />
          <div>
            <h2 className="text-3xl">Why the ranch</h2>
            <ul className="mt-6 space-y-4">
              {venue.highlights.map((h) => (
                <li key={h.title}>
                  <p className="font-semibold">{h.title}</p>
                  <p className="text-sm text-navy/75">{h.desc}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-navy/70">Perfect for: {venue.uses.join(' · ')}</p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="section">
          <h2 className="text-3xl sm:text-4xl">Event packages</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventPackages.map((s) => (
              <ServiceCard key={s.id} s={s} cta={t.quote} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <p className="eyebrow">Gallery</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Moments at the ranch</h2>
        <div className="mt-8"><Gallery items={ranchGallery} /></div>
        <h3 className="mt-14 text-2xl">The venue</h3>
        <div className="mt-6"><Gallery items={venueGallery} /></div>
        <h3 className="mt-14 text-2xl">Photo sessions</h3>
        <div className="mt-6"><Gallery items={photoGallery} /></div>
      </section>
      <FinalCta />
    </>
  );
}
