export async function GET() {
  const pages = [
    { url: '/', priority: 1.0 },
    { url: '/services', priority: 0.9 },
    { url: '/projects', priority: 0.9 },
    { url: '/about', priority: 0.8 },
    { url: '/blog', priority: 0.8 },
    { url: '/contact', priority: 0.7 },
    { url: '/legal', priority: 0.5 },
    { url: '/privacy', priority: 0.5 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>https://alaydetech.com${page.url}</loc>
      <priority>${page.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
}