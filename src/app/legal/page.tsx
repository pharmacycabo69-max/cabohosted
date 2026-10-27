import { site } from '@/config/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Terms & Privacy', 'Terms of service and privacy notice for Cabo Hosted.', '/legal');

export default function Legal() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 [&_h2]:mt-8 [&_h2]:text-2xl [&_p]:mt-3 [&_p]:text-navy/80">
      <h1 className="text-4xl">Terms & Privacy</h1>

      <h2 id="terms">Terms of service</h2>
      <p>{site.name} coordinates services from independent third-party providers. Prices shown as “From” are starting prices; a final price in USD is confirmed with you before any service is booked.</p>
      <p>Availability depends on location, date and provider schedules. Cancellation and rescheduling terms are shared with each quote. Services are provided by the respective providers, and {site.name} acts as coordinator.</p>
      <p>Health services are for non-emergency needs only. In an emergency, call 911.</p>

      <h2 id="privacy">Privacy notice</h2>
      <p>We collect only what you share with us through WhatsApp, email or our request form, such as name, contact details, stay location and request details, to fulfill your request.</p>
      <p>We share the information strictly necessary with the providers delivering your service. We do not sell your personal information.</p>
      <p>To ask about or delete your information, contact us at {site.email}.</p>
    </article>
  );
}
