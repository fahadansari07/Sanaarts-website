// Single source of truth for portfolio content.
// Views/likes/saves/shares come from Instagram Insights (owner's brief, 21 Nov 2026). Never invent numbers:
// leave a field out when it is unknown. To add a design: drop the image in src/assets/work/<code>.jpg
// and add an entry below.

export type CategorySlug =
  | 'bridal' | 'engagement' | 'feet-legs' | 'gulf' | 'kashmiri'
  | 'floral' | 'patchwork' | 'minimal' | 'festive' | 'stain';

export interface Category {
  slug: CategorySlug;
  name: string;
  short: string;
  intro: string;
  question: string;
}

export const categories: Category[] = [
  {
    slug: 'bridal', name: 'Bridal Mehandi', short: 'Bridal',
    question: 'What does Sana’s bridal mehandi look like?',
    intro: 'Full bridal sets covering hands and arms (often up to the elbow) with dense floral panels, lattice bands, palace and figure motifs, and calligraphy such as the couple’s names worked into the palm. Bridal is the most requested booking on the Sanaarts page.',
  },
  {
    slug: 'engagement', name: 'Engagement Mehandi', short: 'Engagement',
    question: 'What is engagement mehandi?',
    intro: 'Lighter than a full bridal set but still detailed: rose motifs, lattice cuffs and personal touches such as interlocked rings drawn on the palm, designed for engagement and nikah ceremonies.',
  },
  {
    slug: 'feet-legs', name: 'Feet & Legs Mehandi', short: 'Feet & Legs',
    question: 'Does Sana do bridal feet and leg mehandi?',
    intro: 'Yes. Bridal feet and leg designs with large shaded flowers, leafy vines and solid toe tips — one of the most saved photo posts on the page is a trending feet design.',
  },
  {
    slug: 'gulf', name: 'Gulf & Doha Pattern Mehandi', short: 'Gulf / Doha',
    question: 'What is Gulf (Doha) pattern mehandi?',
    intro: 'Gulf or Doha-style mehandi uses bold, open flowers and leaves with clear skin between motifs, so each element reads strongly in photos. Sana pairs it with heavy and newer patterns on request.',
  },
  {
    slug: 'kashmiri', name: 'Kashmiri Mehandi', short: 'Kashmiri',
    question: 'What is Kashmiri-style mehandi?',
    intro: 'Kashmiri designs build the hand out of dense, structured panels — lattice, bands and repeated small motifs — for a rich, filled-in look. Several of these were made on client request.',
  },
  {
    slug: 'floral', name: 'Floral Mehandi', short: 'Floral',
    question: 'What is floral mehandi?',
    intro: 'Shaded roses, open blooms and trailing leaves. Floral work is behind Sana’s best-performing photo post (366K views, 8K saves on Instagram).',
  },
  {
    slug: 'patchwork', name: 'Patchwork & Heavy Mehandi', short: 'Patchwork',
    question: 'What is patchwork mehandi?',
    intro: 'Patchwork splits the arm into separate panels divided by vines or bands, each filled with a different pattern. Sana creates heavy elbow-length patchwork sets on client demand.',
  },
  {
    slug: 'minimal', name: 'Simple & Minimal Mehandi', short: 'Minimal',
    question: 'Can I book a simple or minimal mehandi design?',
    intro: 'Yes. Simple palm motifs and fingertip detailing for guests, parties and anyone who wants a quick, clean look.',
  },
  {
    slug: 'festive', name: 'Eid & Festive Mehandi', short: 'Eid & Festive',
    question: 'Does Sana take Eid and festival bookings?',
    intro: 'Eid, Bakra Eid and Teej specials — festive reels on the page reached over 200K views each during the 2026 Eid season.',
  },
  {
    slug: 'stain', name: 'Mehandi Stain Results', short: 'Stain Results',
    question: 'How dark does the mehandi stain get?',
    intro: 'Real stain-reveal posts from clients, shown after the paste comes off. Sana’s dark stain-reveal reel is her second most-viewed reel (1.8M views). Stain colour varies from person to person.',
  },
];

export interface Design {
  code: string;              // Instagram shortcode
  kind: 'reel' | 'photo';
  label: string;
  note: string;              // caption / theme in Sana's words, trimmed
  posted: string;            // YYYY-MM-DD
  categories: CategorySlug[];
  views?: number;
  viewsApprox?: boolean;
  likes?: number;
  saves?: number;
  shares?: number;
  collab?: string;
  image?: string;            // filename in src/assets/work
  alt?: string;
}

// Top reels, ranked by Insights views. Brief items #14 and #20 (owned by @hennabysaraa._, not Sana's own
// work) were swapped for the brief's suggested replacements DY1h62FPrv- and DVeJjpBjE7j.
export const topReels: Design[] = [
  { code: 'DUL6pMKDS2x', kind: 'reel', label: 'Signature viral bridal', note: 'Mera piya ghar aaya 🌹', posted: '2026-02-01', views: 2431228, likes: 96283, saves: 11898, shares: 39141, categories: ['bridal'] },
  { code: 'DUFasoSDbl_', kind: 'reel', label: 'Dark stain reveal', note: 'Ab aajayega 😎', posted: '2026-01-29', views: 1818903, likes: 46328, saves: 12786, shares: 9750, categories: ['stain'] },
  { code: 'DfXHEwaNakz', kind: 'reel', label: 'Latest viral', note: 'Collab with @_shifffu._0909', posted: '2026-11-05', views: 1257909, likes: 50474, saves: 3285, shares: 6574, categories: [], collab: '@_shifffu._0909' },
  { code: 'DZXOuMjPCRz', kind: 'reel', label: 'Fan favourite', note: 'Mention your favorite Mehandi artist ❤️', posted: '2026-06-09', views: 836632, likes: 22043, saves: 16316, shares: 13083, categories: [] },
  { code: 'DYzvE9bNKld', kind: 'reel', label: 'Bakra Eid special', note: 'Customer demand 💫', posted: '2026-05-26', views: 231450, likes: 4096, saves: 2599, shares: 1533, categories: ['festive'] },
  { code: 'DYo1M1EP30o', kind: 'reel', label: 'Eid story', note: 'Not ready for 28th May 🥹', posted: '2026-05-22', views: 224938, likes: 10572, saves: 694, shares: 885, categories: ['festive'], collab: '@sxnnaaaaah' },
  { code: 'DBpvUvBoT5O', kind: 'reel', label: 'The artist’s own engagement', note: 'Alhamdulillah', posted: '2024-10-28', views: 205909, likes: 7789, saves: 2051, shares: 1571, categories: ['engagement'] },
  { code: 'DfHYNp6NgtR', kind: 'reel', label: 'Trending design 2026', note: 'DM for more details 📥', posted: '2026-10-30', views: 180566, likes: 6104, saves: 6143, shares: 2432, categories: [] },
  { code: 'DdJKc5QNSY7', kind: 'reel', label: 'Retro 80s concept', note: 'Gulf, Kashmiri and Pakistani patterns', posted: '2026-09-11', views: 116662, likes: 1771, saves: 1137, shares: 474, categories: ['gulf', 'kashmiri'] },
  { code: 'DYPUJH-t3oZ', kind: 'reel', label: 'Bridal floral', note: 'Mai tera ❤️', posted: '2026-05-12', views: 103107, likes: 4088, saves: 1242, shares: 795, categories: ['bridal', 'floral'] },
  { code: 'DY9bbBINTcM', kind: 'reel', label: 'Gulf pattern', note: 'Gulf/Doha heavy & new pattern', posted: '2026-05-30', views: 92463, likes: 2459, saves: 1858, shares: 634, categories: ['gulf'] },
  { code: 'DP9hXgQk6it', kind: 'reel', label: 'Behind the scenes', note: 'My partner 💖', posted: '2025-10-19', views: 78589, likes: 8278, saves: 392, shares: 584, categories: [] },
  { code: 'DdRVQ1wP31d', kind: 'reel', label: 'Teej special', note: 'Mehandi mehngi hogayi h??', posted: '2026-09-14', views: 56806, likes: 534, saves: 389, shares: 231, categories: ['festive'] },
  { code: 'DfjRMDgvoql', kind: 'reel', label: 'Aesthetic transition', note: 'DM for more details 📥', posted: '2026-11-10', views: 45174, likes: 658, saves: 275, shares: 237, categories: ['minimal'], collab: '@nehas.hennabliss', image: 'DfjRMDgvoql.jpg', alt: 'Simple palm mehandi with a square centre motif and fingertip detailing on both hands' },
  { code: 'DXHME3tD7Ka', kind: 'reel', label: 'Client compliment', note: 'Compliment ho toh aisa ho 😌', posted: '2026-04-14', views: 42240, likes: 1444, saves: 647, shares: 348, categories: ['bridal'] },
  { code: 'DasOnR-vlYt', kind: 'reel', label: 'Stain results', note: 'Wait for stain ❤️', posted: '2026-07-12', views: 40090, likes: 1025, saves: 429, shares: 198, categories: ['stain'] },
  { code: 'DZGGUf8zfRG', kind: 'reel', label: 'Fun reel', note: 'Leg mehandi', posted: '2026-06-03', views: 26034, likes: 425, saves: 389, shares: 116, categories: ['feet-legs'] },
  { code: 'DXjbIxujcjK', kind: 'reel', label: 'Aesthetic', note: 'Aao tumko bhi lagadu 😌', posted: '2026-04-25', views: 25401, likes: 962, saves: 452, shares: 379, categories: [] },
  { code: 'DY1h62FPrv-', kind: 'reel', label: 'From the reel archive', note: 'Reel by @sanaa_artsss', posted: '2026-05-27', views: 21300, viewsApprox: true, categories: [] },
  { code: 'DVeJjpBjE7j', kind: 'reel', label: 'From the reel archive', note: 'Reel by @sanaa_artsss', posted: '2026-03-04', views: 20300, viewsApprox: true, categories: [] },
];

// Top photo posts, ranked by Insights views (later items by likes, no views available).
export const topPhotos: Design[] = [
  { code: 'DdoXTPqD8Pp', kind: 'photo', label: 'Floral — best photo', note: '#floral mehndi', posted: '2026-09-23', views: 366498, likes: 8020, saves: 8008, shares: 3859, categories: ['floral'], image: 'DdoXTPqD8Pp.jpg', alt: 'Floral mehandi on both hands with large shaded roses and fine filler work on the fingers' },
  { code: 'DdgHpWojRqM', kind: 'photo', label: 'Trending bridal feet', note: 'Trending feet design', posted: '2026-09-20', views: 70828, likes: 2184, saves: 1852, shares: 1474, categories: ['feet-legs', 'floral'], image: 'DdgHpWojRqM.jpg', alt: 'Bridal feet mehandi with bold roses, leafy vines and solid toe tips' },
  { code: 'DZCm9ykDTzf', kind: 'photo', label: 'Engagement', note: 'Engagement Mehandi design', posted: '2026-06-01', views: 49520, likes: 2474, saves: 1802, shares: 943, categories: ['engagement'], image: 'DZCm9ykDTzf.jpg', alt: 'Engagement mehandi on both arms with rose motifs, lattice bands and detailed fingers' },
  { code: 'DcQ_GkqDcDN', kind: 'photo', label: 'Kashmiri', note: 'Kashmiri Design', posted: '2026-08-20', views: 39422, likes: 1757, saves: 1120, shares: 1651, categories: ['kashmiri'], image: 'DcQ_GkqDcDN.jpg', alt: 'Kashmiri-style mehandi with dense palm panels, lattice and wrist bands on both hands' },
  { code: 'DZKPxN9jUM-', kind: 'photo', label: 'Gulf pattern', note: 'Gulf pattern', posted: '2026-06-04', views: 37025, likes: 1196, saves: 1053, shares: 626, categories: ['gulf', 'floral'], image: 'DZKPxN9jUM-.jpg', alt: 'Gulf-pattern mehandi with large open roses spread across the backs of both hands' },
  { code: 'DaxfzSANxqN', kind: 'photo', label: 'Most loved design', note: 'DM for booking ✨', posted: '2026-07-14', views: 33276, likes: 10209, saves: 4154, shares: 5430, categories: ['floral'], image: 'DaxfzSANxqN.jpg', alt: 'Bold floral palm mehandi with a central circle motif and dark fingertips' },
  { code: 'Clks5DoKmRb', kind: 'photo', label: 'Early work', note: 'Carousel', posted: '2022-11-29', likes: 726, categories: ['floral', 'minimal'], image: 'Clks5DoKmRb.webp', alt: 'Arabic-style floral trail of roses and leaves running from the fingers to the forearm' },
  { code: 'Dd0zOHHDROi', kind: 'photo', label: 'Floral back hand', note: 'Carousel', posted: '2026-09-28', likes: 552, categories: ['floral'], image: 'Dd0zOHHDROi.jpg', alt: 'Floral back-hand mehandi with roses and leaves flowing up to the wrist' },
  { code: 'DWtfwX3j4Im', kind: 'photo', label: 'Rose back hands', note: 'Carousel', posted: '2026-04-04', likes: 348, categories: ['floral', 'patchwork'], image: 'DWtfwX3j4Im.jpg', alt: 'Dark-stained rose mehandi on the backs of both hands and forearms' },
  { code: 'DQQ61sDDbRd', kind: 'photo', label: 'Ring-day stain', note: 'Carousel', posted: '2025-10-26', likes: 292, categories: ['stain', 'engagement'], image: 'DQQ61sDDbRd.webp', alt: 'Deep mehandi stain on a palm, shown beside a pair of engagement rings' },
];

// Recent work (Nov 2026) — shown in gallery and categories, no ranking numbers displayed.
export const recentWork: Design[] = [
  { code: 'Df_251ljTaI', kind: 'photo', label: 'Heavy elbow-length patchwork', note: 'Heavy elbow length patchwork', posted: '2026-11-21', categories: ['patchwork', 'bridal'], collab: '@nehas.hennabliss', image: 'Df_251ljTaI.jpg', alt: 'Heavy elbow-length patchwork mehandi with calligraphy on the palm and vine dividers up both arms' },
  { code: 'Df_19b-NOwt', kind: 'reel', label: 'Kashmiri on client demand', note: 'Kashmiri design on client demand ❤️', posted: '2026-11-21', categories: ['kashmiri', 'bridal'], image: 'Df_19b-NOwt.jpg', alt: 'Kashmiri mehandi with heavy arm bands and lattice palms on both hands' },
  { code: 'Df761khjWbt', kind: 'photo', label: 'Traditional Indian bridal', note: 'Traditional Indian design', posted: '2026-11-19', categories: ['bridal'], image: 'Df761khjWbt.jpg', alt: 'Traditional Indian bridal mehandi with palace domes, figures and patterned bands up both arms' },
  { code: 'Df758KEvV_D', kind: 'reel', label: 'Bridal legs', note: 'Bridal legs design 💗', posted: '2026-11-19', categories: ['feet-legs', 'bridal'], collab: '@ibti_patel', image: 'Df758KEvV_D.jpg', alt: 'Bridal leg mehandi with large shaded flowers and leaves' },
  { code: 'Df2Cu7bNlhr', kind: 'reel', label: 'Client demand patchwork', note: 'Client demand patchwork ❤️', posted: '2026-11-17', categories: ['patchwork'], collab: '@nehas.hennabliss', image: 'Df2Cu7bNlhr.jpg', alt: 'Patchwork mehandi with vine dividers and calligraphy on the palm' },
  { code: 'Df0BNAJO-a7', kind: 'reel', label: 'Bridal arm', note: 'DM for Bridal Booking 📥', posted: '2026-11-16', categories: ['bridal', 'floral'], collab: '@ibti_patel', image: 'Df0BNAJO-a7.jpg', alt: 'Bridal arm mehandi with a central hibiscus flower and lattice panels' },
  { code: 'Dfv9npvDY2x', kind: 'photo', label: 'Bridal stain', note: 'Stain 🙌❤️', posted: '2026-11-14', categories: ['stain', 'bridal'], image: 'Dfv9npvDY2x.jpg', alt: 'Rich red-brown mehandi stain on a bride’s hands beside a “She said yes” cake' },
  { code: 'DfjTG-3j9aL', kind: 'photo', label: 'Full-arm bridal', note: 'DM for Bridal Booking 📥', posted: '2026-11-09', categories: ['bridal', 'floral'], image: 'DfjTG-3j9aL.jpg', alt: 'Full-arm bridal mehandi of dense roses and lace bands, shown with fresh paste' },
  { code: 'DfcVd_3jV2Y', kind: 'photo', label: 'Engagement bride', note: 'Engagement Bride 💍❤️', posted: '2026-11-07', categories: ['engagement', 'bridal'], image: 'DfcVd_3jV2Y.jpg', alt: 'Engagement bride mehandi with interlocked rings drawn on the palm and lattice details' },
];

export const allDesigns: Design[] = [...topReels, ...topPhotos, ...recentWork];

export const postUrl = (d: Design) => `https://www.instagram.com/${d.kind === 'reel' ? 'reel' : 'p'}/${d.code}/`;

export function formatCount(n: number, approx = false): string {
  const s = n >= 1e6 ? `${(n / 1e6).toFixed(1).replace(/\.0$/, '')}M`
    : n >= 1e3 ? `${Math.round(n / 1e3)}K` : String(n);
  return approx ? `~${s}` : s;
}

// Images first (so pages lead with visible work), then by views, then newest.
export function byPopularity(a: Design, b: Design): number {
  return Number(!!b.image) - Number(!!a.image) || (b.views ?? -1) - (a.views ?? -1) || b.posted.localeCompare(a.posted);
}

export const designsIn = (slug: CategorySlug) => allDesigns.filter((d) => d.categories.includes(slug)).sort(byPopularity);

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
