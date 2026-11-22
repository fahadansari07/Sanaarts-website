export interface FaqItem { q: string; a: string }
import { categories } from './designs';
import { site } from './site';

export const homeFaqs: FaqItem[] = [
  {
    q: 'Where is Sana based, and which areas does she cover?',
    a: `Sana Hashmi is based in ${site.locality}, ${site.city}, and takes mehandi bookings all over Mumbai. Mention your location when you enquire so she can confirm the appointment.`,
  },
  {
    q: 'How do I book a mehandi appointment?',
    a: `Message Sana on WhatsApp at ${site.phoneDisplay}, send a DM to ${site.instagramHandle} on Instagram, or use the enquiry form on the Contact page. Include your event date, event type (bridal, engagement, party or Eid), location and the number of people who need mehandi.`,
  },
  {
    q: 'Which mehandi styles does Sana offer?',
    a: `Her work covers ${categories.map((c) => c.short).join(', ')} designs, plus sider (side) mehandi, Pakistani designs, party mehandi and Teej specials.`,
  },
  {
    q: 'Can I ask for a design I saw on her Instagram?',
    a: 'Yes. Send the link or a screenshot of the reel or post on WhatsApp or Instagram and mention any changes you want, such as names or initials in the palm.',
  },
  {
    q: 'What kind of cone does Sana use?',
    a: 'Sana offers organic (natural) cone mehandi. Stain colour differs from person to person, so look at the Stain Results page to see real results from clients.',
  },
];
