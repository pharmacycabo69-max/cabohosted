import { defaultWaMessage } from '@/config/site';
import { t } from '@/i18n/en';
import WhatsAppButton from './WhatsAppButton';

export default function FinalCta({ title = 'Ready when you are.' }: { title?: string }) {
  return (
    <section className="bg-terracotta text-white">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl">{title}</h2>
        <p className="mt-3 text-white/90">One message and a local team handles the rest.</p>
        <WhatsAppButton text={defaultWaMessage} variant="light" className="mt-6">{t.waCta}</WhatsAppButton>
      </div>
    </section>
  );
}
