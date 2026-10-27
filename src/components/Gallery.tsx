import Photo from './Photo';

export default function Gallery({ items }: { items: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {items.map((p) => (
        <Photo key={p.src} src={p.src} alt={p.alt} sizes="(min-width: 768px) 33vw, 50vw" className="aspect-[4/5] rounded-2xl" />
      ))}
    </div>
  );
}
