// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// shortcut: placeholder domain until the TLD is chosen — set SITE_URL (or edit here) before deploying,
// canonicals, Open Graph URLs, robots.txt and the sitemap all derive from it.
const site = process.env.SITE_URL ?? 'https://www.sanaarts.example';

export default defineConfig({
  site,
  trailingSlash: 'never',
  // 4321 = dev-projectsiq, 4322 = FusionmindIQ; Sanaarts gets its own port so they never collide
  server: { port: 4375 },
  // Astro's server type has no strictPort; Vite's does — fail instead of silently switching ports
  vite: { server: { strictPort: true } },
  build: { format: 'file' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-serif',
      weights: [400, 500, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Jost',
      cssVariable: '--font-sans',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
