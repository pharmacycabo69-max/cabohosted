import RequestForm from '@/components/RequestForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { defaultWaMessage, site } from '@/config/site';
import { pageMeta } from '@/lib/seo';
import { t } from '@/i18n/en';

export const metadata = pageMeta(
  'Contact & Start My Request',
  'Message Cabo Hosted on WhatsApp or send a request. We reply in 20-60 minutes, daily 8:00 AM to 10:00 PM.',
  '/contact',
);

export default function Contact() {
  return (
    <section className="section grid gap-12 lg:grid-cols-2">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-2 text-4xl">Start my request</h1>
        <p className="mt-4 text-navy/75">Fastest is WhatsApp. Prefer a form? Send it and we will reply by email or WhatsApp.</p>
        <WhatsAppButton text={defaultWaMessage} className="mt-6">{t.waCta}</WhatsAppButton>
        <ul className="mt-8 space-y-2 text-sm">
          <li><strong>Phone / WhatsApp:</strong> {site.phoneDisplay}</li>
          <li><strong>Email:</strong> <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><strong>Hours:</strong> {site.hours}</li>
        </ul>
      </div>
      <RequestForm />
    </section>
  );
}
