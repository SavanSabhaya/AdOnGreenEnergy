import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adongreenenergy.in'; // TODO: Update with real domain

  const routes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/projects',
    '/resources',
    '/subsidy-support',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const articles = [
    'what-is-cbg',
    'satat-scheme-explained',
    'mnre-subsidy-guide',
    'rcc-vs-gfs-digester-tanks',
  ].map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...articles];
}
