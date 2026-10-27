'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  src: string; // filename inside /public/photos/, e.g. "hero.jpg"
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/** Reads from /public/photos/. Shows a branded placeholder until the file exists. */
export default function Photo({ src, alt, className = '', priority, sizes = '(min-width: 1024px) 33vw, 100vw' }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-navy to-terracotta ${className}`}>
      {!failed && (
        <Image
          src={`/photos/${src}`}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <span className="absolute inset-0 flex items-end p-3 text-xs text-white/70">{src}</span>
      )}
    </div>
  );
}
