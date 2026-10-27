import type { Metadata } from 'next';
import { site } from '@/config/site';

export function pageMeta(title: string, description: string, path: string, keywords?: string[]): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: `${site.url}${path}`,
      siteName: site.name,
      type: 'website',
      images: [{ url: '/photos/og.jpg', width: 1200, height: 630 }],
    },
  };
}
