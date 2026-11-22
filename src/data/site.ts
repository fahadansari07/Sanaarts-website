// Brand and contact facts — sourced from the Instagram profile and the owner's brief (21 Nov 2026).
export const site = {
  name: 'Sanaarts',
  artist: 'Sana Hashmi',
  alternateNames: ['Sana Arts', 'sanaa_artsss'],
  tagline: 'Bridal & signature mehandi by Sana Hashmi',
  description:
    'Sanaarts is the mehandi (henna) studio of Sana Hashmi, a self-taught artist from Mira Road (East) with 5+ years of experience, creating bridal, engagement, floral, Gulf, Kashmiri and patchwork designs for clients across Mumbai.',
  locality: 'Mira Road (East)',
  city: 'Mumbai',
  region: 'Maharashtra',
  country: 'IN',
  serviceArea: 'all over Mumbai',
  experience: '5+ years',
  phoneDisplay: '+91 98334 61223',
  phoneE164: '+919833461223',
  email: 'sanahashmi269@gmail.com',
  instagram: 'https://www.instagram.com/sanaa_artsss/',
  instagramHandle: '@sanaa_artsss',
  youtube: 'https://www.youtube.com/channel/UChphOGzdh1sw5PcruYqWiKA',
  collaborator: { handle: '@hennabysaraa._', url: 'https://www.instagram.com/hennabysaraa._/' },
  dua: "Allahumma ja'alna muflihin",
} as const;

export const whatsappLink = (text = 'Hi Sana, I would like to enquire about a mehandi booking.') =>
  `https://wa.me/${site.phoneE164.replace('+', '')}?text=${encodeURIComponent(text)}`;

// Figures from Instagram Professional Dashboard (Insights), collected 21 Nov 2026 — see the brief.
export const stats = {
  source: 'Instagram Insights, 21 November 2026',
  totalReelViews: '8.7M+',
  reelCount: 340,
  reelsOver100k: 10,
  reelsOver10k: 37,
  topSaves: '16K+',
  newViewerShare: '95%+',
} as const;
