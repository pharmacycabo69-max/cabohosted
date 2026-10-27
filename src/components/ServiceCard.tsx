import type { Service } from '@/config/site';
import Photo from './Photo';
import WhatsAppButton from './WhatsAppButton';

export default function ServiceCard({ s, cta }: { s: Service; cta: string }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
      <Photo src={s.photo} alt={s.title} className="aspect-[4/3]" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold">{s.title}</h3>
        <p className="mt-2 flex-1 text-sm text-navy/75">{s.desc}</p>
        <p className="mt-4 text-sm">
          <span className="font-semibold text-terracotta">{s.price}</span>
          {s.duration && <span className="text-navy/60"> · {s.duration}</span>}
        </p>
        <WhatsAppButton text={s.wa} className="mt-4">{cta}</WhatsAppButton>
      </div>
    </article>
  );
}
