import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/health', '/celebrations', '/experiences', '/events', '/about', '/contact', '/legal'].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.7,
  }));
}
