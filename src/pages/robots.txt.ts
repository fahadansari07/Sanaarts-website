import type { APIRoute } from 'astro';

// All crawlers (including AI search crawlers) are allowed — the owner can restrict specific bots here.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
