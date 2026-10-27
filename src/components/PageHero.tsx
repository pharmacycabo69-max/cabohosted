export default function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-white/80">{intro}</p>
      </div>
    </section>
  );
}
