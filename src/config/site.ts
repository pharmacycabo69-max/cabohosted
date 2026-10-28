/**
 * Single source of truth for contact data, prices and WhatsApp messages.
 * Edit this file only - components never hardcode these values.
 * Photo paths are relative to /public/photos/ (see README for the full list).
 */

export const site = {
  name: 'Cabo Hosted',
  domain: 'cabohosted.com',
  url: 'https://cabohosted.com',
  tagline: 'Your Cabo stay, hosted.',
  description:
    'Villa concierge for Los Cabos: pharmacy delivery, IV therapy, celebrations, private chefs, proposals and ranch events - delivered to your door.',
  // Digits only, with country code.
  whatsappNumber: '526242261023',
  phoneDisplay: '+52 624 226 1023',
  email: 'hello@cabohosted.com',
  hours: 'Daily, 8:00 AM - 10:00 PM (Los Cabos time)',
  responseTime: '20-60 min',
  locale: 'en',
} as const;

export type Service = {
  id: string;
  title: string;
  desc: string;
  price: string;
  duration?: string;
  photo: string;
  wa: string;
  cta?: string;
};

export const stats = [
  { value: '20-60 min', label: 'Average response' },
  { value: 'Cabo · San José · Corridor', label: 'Where we deliver' },
  { value: 'EN / ES', label: 'Bilingual team' },
  { value: 'USD', label: 'Priced up front' },
];

export const defaultWaMessage =
  "Hi Cabo Hosted! I'm staying in Los Cabos and would like help with a request.";
export const planStayWaMessage =
  "Hi Cabo Hosted! I'd like to plan my stay. Dates: __ / Location: __ / Guests: __ / What I need: __";

/* ---------------------------------- Health --------------------------------- */

export const healthServices: Service[] = [
  {
    id: 'pharmacy',
    title: 'Pharmacy Delivery',
    desc: 'Over-the-counter and prescription medicine from a bilingual pharmacy, brought straight to your villa, condo or resort.',
    price: 'From $25 delivery fee',
    duration: 'Typically within 60-90 min',
    photo: 'health-pharmacy.jpg',
    wa: "Hi Cabo Hosted! I'd like a pharmacy delivery. Location: __ / What I need: __",
  },
  {
    id: 'iv-therapy',
    title: 'IV Therapy & Hydration',
    desc: 'Recover from sun, travel or a big night. A registered nurse administers your IV in the comfort of your room. Group pricing available.',
    price: 'From $129',
    duration: '45-75 min',
    photo: 'health-iv.jpg',
    wa: "Hi Cabo Hosted! I'd like IV therapy at my villa. Location: __ / Number of guests: __ / Preferred time: __",
  },
  {
    id: 'doctor',
    title: 'Doctor at Your Villa',
    desc: 'A bilingual physician visits you for non-emergency care: fevers, stomach trouble, sunburn, infections and more.',
    price: 'From $200',
    duration: '30-60 min visit',
    photo: 'health-doctor.jpg',
    wa: "Hi Cabo Hosted! I'd like a doctor to visit me. Location: __ / Symptoms: __ / Number of patients: __",
  },
  {
    id: 'video-consult',
    title: 'Video Consultation',
    desc: 'Talk to a physician by video from wherever you are. Quick, private and ideal when you do not need a visit.',
    price: 'From $49',
    duration: '15-30 min',
    photo: 'health-video.jpg',
    wa: "Hi Cabo Hosted! I'd like a video consultation with a doctor. Preferred time: __ / Reason: __",
  },
  {
    id: 'labs',
    title: 'Labs at Your Villa',
    desc: 'Blood draw and common tests collected by a nurse at your door, with results shared digitally.',
    price: 'From $59',
    duration: '20-30 min',
    photo: 'health-labs.jpg',
    wa: "Hi Cabo Hosted! I'd like lab tests at my villa. Location: __ / Tests needed: __",
  },
];

export const healthDisclaimer = 'Not for medical emergencies - call 911.';

/* ------------------------------- Celebrations ------------------------------ */

export const celebrationServices: Service[] = [
  {
    id: 'flowers',
    title: 'Fresh Flowers',
    desc: 'Hand-tied bouquets and arrangements, delivered and placed in your villa.',
    price: 'From $65',
    photo: 'celebrations-flowers.jpg',
    wa: "Hi Cabo Hosted! I'd like flowers delivered. Location: __ / Date & time: __ / Occasion: __",
  },
  {
    id: 'cakes',
    title: 'Custom Cakes',
    desc: 'Birthday, anniversary or just-because cakes, made to order and personalized.',
    price: 'From $75',
    photo: 'celebrations-cake.jpg',
    wa: "Hi Cabo Hosted! I'd like a custom cake. Date: __ / Servings: __ / Message on cake: __",
  },
  {
    id: 'balloons',
    title: 'Balloons & Room Decor',
    desc: 'Arrive to a decorated room: balloons, banners, petals and styling for any occasion.',
    price: 'From $120',
    photo: 'celebrations-decor.jpg',
    wa: "Hi Cabo Hosted! I'd like balloons & room decor. Location: __ / Date: __ / Occasion & colors: __",
  },
  {
    id: 'surprise',
    title: 'Surprise Setups',
    desc: 'Anniversaries, birthdays and welcome surprises, set up while you are out.',
    price: 'From $180',
    photo: 'celebrations-surprise.jpg',
    wa: "Hi Cabo Hosted! I'd like a surprise setup. Location: __ / Date: __ / Occasion: __",
  },
];

export const proposalPackages: Service[] = [
  {
    id: 'proposal-villa',
    title: 'Villa Proposal',
    desc: 'Rose petals, candles, flowers and a hidden photographer, staged privately at your villa.',
    price: 'From $450',
    photo: 'proposal-villa.jpg',
    wa: "Hi Cabo Hosted! I'm planning a proposal at our villa. Date: __ / Location: __ / Budget: __",
  },
  {
    id: 'proposal-beach',
    title: 'Beach Proposal',
    desc: 'A styled setup on a quiet beach with a photographer capturing the moment.',
    price: 'From $650',
    photo: 'proposal-beach.jpg',
    wa: "Hi Cabo Hosted! I'm planning a beach proposal. Date: __ / Preferred beach: __ / Budget: __",
  },
  {
    id: 'proposal-ranch',
    title: 'Ranch at Sunset',
    desc: 'Golden-hour proposal at a private ranch with a viewpoint, styled decor, photographer and drinks.',
    price: 'From $950',
    photo: 'proposal-ranch.jpg',
    wa: "Hi Cabo Hosted! I'm planning a proposal at the ranch at sunset. Date: __ / Budget: __",
  },
];

/* -------------------------------- Experiences ------------------------------ */

export const experienceServices: Service[] = [
  {
    id: 'chef',
    title: 'Private Chef',
    desc: 'A chef shops, cooks and cleans up in your villa kitchen. Tasting menus, tacos, seafood and more.',
    price: 'From $95 per person',
    photo: 'experiences-chef.jpg',
    wa: "Hi Cabo Hosted! I'd like a private chef. Date: __ / Guests: __ / Location: __ / Dietary needs: __",
  },
  {
    id: 'bartender',
    title: 'Bartender & Mixology',
    desc: 'A professional bartender, signature cocktails and all the setup for your gathering.',
    price: 'From $250',
    photo: 'experiences-bartender.jpg',
    wa: "Hi Cabo Hosted! I'd like a bartender. Date: __ / Guests: __ / Location: __",
  },
  {
    id: 'music',
    title: 'Mariachi, Trio or DJ',
    desc: 'Live mariachi, romantic trio or a DJ to set the mood for your night.',
    price: 'From $300',
    photo: 'experiences-mariachi.jpg',
    wa: "Hi Cabo Hosted! I'd like live music (mariachi / trio / DJ). Date: __ / Location: __ / Guests: __",
  },
  {
    id: 'massage',
    title: 'In-Villa Massage',
    desc: 'Professional therapists bring the table, oils and calm to your terrace or room.',
    price: 'From $120',
    photo: 'experiences-massage.jpg',
    wa: "Hi Cabo Hosted! I'd like an in-villa massage. Location: __ / Guests: __ / Preferred time: __",
  },
  {
    id: 'photographer',
    title: 'Photographer',
    desc: 'Family, couples, group trips and surprise moments, with edited photos delivered digitally.',
    price: 'From $250',
    duration: '1 hour session',
    photo: 'experiences-photographer.jpg',
    wa: "Hi Cabo Hosted! I'd like a photographer. Date: __ / Location: __ / Occasion: __",
  },
  {
    id: 'kids',
    title: 'Magician & Kids Entertainer',
    desc: 'Magic shows, games and party entertainment that keeps the little ones busy.',
    price: 'From $200',
    photo: 'experiences-kids.jpg',
    wa: "Hi Cabo Hosted! I'd like a kids entertainer. Date: __ / Number of kids & ages: __ / Location: __",
  },
  {
    id: 'nurse-standby',
    title: 'Nurse on Standby',
    desc: 'A registered nurse on site for weddings, parties and events, for peace of mind.',
    price: 'From $150',
    duration: 'Per event block',
    photo: 'experiences-nurse.jpg',
    wa: "Hi Cabo Hosted! I'd like a nurse on standby for an event. Date: __ / Location: __ / Guests: __ / Hours: __",
  },
];

/* ---------------------------------- Events --------------------------------- */

export const venue = {
  name: 'Rancho McCoy',
  location: 'Cabo San Lucas',
  highlights: [
    { title: 'Dancing horse show', desc: 'A showstopping performance for your guests.' },
    { title: 'Cabin for two', desc: 'A private cabin for the couple or birthday star.' },
    { title: 'Viewpoint', desc: 'Sweeping golden-hour views for ceremonies and portraits.' },
    { title: 'Dinner & drinks service', desc: 'Full food and bar service on site.' },
  ],
  uses: ['Weddings', 'Elopements', 'Quinceañeras', 'Birthdays', 'Corporate events', 'Photo sessions'],
};

export const eventPackages: Service[] = [
  {
    id: 'wedding',
    title: 'Intimate Wedding / Elopement',
    desc: 'A ceremony at the viewpoint, styling, dinner and drinks for your small group.',
    price: 'Request a quote',
    photo: 'events-wedding.jpg',
    wa: "Hi Cabo Hosted! I'd like a quote for an intimate wedding / elopement at Rancho McCoy. Date: __ / Guests: __",
  },
  {
    id: 'quince',
    title: 'Quinceañera',
    desc: 'A traditional celebration with the horse show, decor, dinner and dancing.',
    price: 'Request a quote',
    photo: 'events-quince.jpg',
    wa: "Hi Cabo Hosted! I'd like a quote for a quinceañera at Rancho McCoy. Date: __ / Guests: __",
  },
  {
    id: 'birthday',
    title: 'Birthday at the Ranch',
    desc: 'Dinner, drinks, music and the dancing horse show for a birthday they will remember.',
    price: 'Request a quote',
    photo: 'events-birthday.jpg',
    wa: "Hi Cabo Hosted! I'd like a quote for a birthday at Rancho McCoy. Date: __ / Guests: __",
  },
  {
    id: 'mexican-night',
    title: 'Mexican Night for Groups',
    desc: 'An evening of food, tequila, mariachi and the horse show, built for groups and teams.',
    price: 'Request a quote',
    photo: 'events-mexican-night.jpg',
    wa: "Hi Cabo Hosted! I'd like a quote for a Mexican Night for a group. Date: __ / Guests: __",
  },
  {
    id: 'photo-session',
    title: 'Photo Session',
    desc: 'Couples, family and portrait sessions at the viewpoint and around the ranch.',
    price: 'Request a quote',
    photo: 'events-photo.jpg',
    wa: "Hi Cabo Hosted! I'd like a quote for a photo session at Rancho McCoy. Date: __ / People: __",
  },
];

/* ---------------------------------- Bundles -------------------------------- */

export const bundles = [
  {
    id: 'welcome',
    title: 'Welcome to Cabo',
    includes: 'Flowers + cake + room decor',
    price: 'From $249',
    photo: 'bundle-welcome.jpg',
    wa: "Hi Cabo Hosted! I'd like the Welcome to Cabo bundle. Arrival date: __ / Location: __ / Occasion: __",
  },
  {
    id: 'girls-trip',
    title: 'Girls Trip Recovery',
    includes: 'Room decor + next-day IV for the group',
    price: 'From $399',
    photo: 'bundle-girls-trip.jpg',
    wa: "Hi Cabo Hosted! I'd like the Girls Trip Recovery bundle. Date: __ / Location: __ / Group size: __",
  },
  {
    id: 'marry-me',
    title: 'Will You Marry Me',
    includes: 'Proposal setup + photographer',
    price: 'From $650',
    photo: 'bundle-proposal.jpg',
    wa: "Hi Cabo Hosted! I'd like the Will You Marry Me bundle. Date: __ / Location: __",
  },
];

/* --------------------------------- Pillars --------------------------------- */

export const pillars = [
  {
    id: 'health',
    href: '/health',
    title: 'Health & Pharmacy',
    items: 'Pharmacy delivery, IV therapy, doctor at your villa, video consultation',
    photo: 'pillar-health.jpg',
  },
  {
    id: 'celebrations',
    href: '/celebrations',
    title: 'Celebrations',
    items: 'Flowers, cakes, balloons & room decor, proposals',
    photo: 'pillar-celebrations.jpg',
  },
  {
    id: 'experiences',
    href: '/experiences',
    title: 'Experiences',
    items: 'Private chef, bartender, mariachi, in-villa massage, photographer',
    photo: 'pillar-experiences.jpg',
  },
  {
    id: 'events',
    href: '/events',
    title: 'Events & Venue',
    items: 'Weddings, birthdays, quinceañeras and photo shoots at a private ranch in Cabo',
    photo: 'pillar-events.jpg',
  },
];

export const howItWorks = [
  { title: 'Message us', desc: 'Tell us where you are staying and what you need on WhatsApp.' },
  { title: 'We confirm', desc: 'Availability and a clear USD price, usually within an hour.' },
  { title: 'Delivered to your villa', desc: 'Our local team and verified partners show up on time.' },
  { title: 'Follow-up', desc: 'We check in afterwards to make sure everything was perfect.' },
];

export const coverageZones = [
  'Cabo San Lucas',
  'San José del Cabo',
  'The Corridor',
  'Pedregal',
  'Diamante',
  'Puerto Los Cabos',
  'East Cape',
  'Yachts',
];

export const testimonials = [
  {
    quote: 'Placeholder testimonial: we arrived to flowers and a cake already waiting in the villa. Effortless.',
    name: 'Guest name',
    detail: 'Villa stay, Pedregal',
  },
  {
    quote: 'Placeholder testimonial: IV therapy at the villa saved our last day. The nurse was kind and on time.',
    name: 'Guest name',
    detail: 'Group trip, Cabo San Lucas',
  },
  {
    quote: 'Placeholder testimonial: the proposal setup was perfect and the photos were incredible.',
    name: 'Guest name',
    detail: 'Couple, San José del Cabo',
  },
];

export const aboutPoints = [
  { title: 'Local and bilingual', desc: 'Our team lives in Los Cabos and speaks English and Spanish.' },
  { title: 'Verified providers', desc: 'We work only with providers we know, have vetted and rely on ourselves.' },
  { title: 'Clear pricing', desc: 'You get a USD price up front. No surprises at the door.' },
  { title: 'One point of contact', desc: 'One WhatsApp thread for everything, from first message to follow-up.' },
];

export const nav = [
  { href: '/health', label: 'Health' },
  { href: '/celebrations', label: 'Celebrations' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

/* --------------------------- Cabo adventures & galleries ------------------- */

export const adventures: Service[] = [
  {
    id: 'catamaran',
    title: 'Catamaran Cruise',
    desc: 'Sail past El Arco with snorkeling, drinks and room for the whole group.',
    price: 'Request a quote',
    photo: 'experiences-catamaran.jpg',
    wa: "Hi Cabo Hosted! I'd like a catamaran cruise. Date: __ / Guests: __ / Pickup location: __",
  },
  {
    id: 'yacht-dinner',
    title: 'Private Yacht Dinner',
    desc: 'Sunset dinner on a private yacht for couples, celebrations and small groups.',
    price: 'Request a quote',
    photo: 'experiences-yacht-dinner.jpg',
    wa: "Hi Cabo Hosted! I'd like a private yacht dinner. Date: __ / Guests: __ / Occasion: __",
  },
  {
    id: 'whales',
    title: 'Whale Watching',
    desc: 'Seasonal whale-watching trips off the Los Cabos coast.',
    price: 'Request a quote',
    photo: 'experiences-whales.jpg',
    wa: "Hi Cabo Hosted! I'd like to go whale watching. Date: __ / Guests: __",
  },
  {
    id: 'fishing',
    title: 'Sport Fishing',
    desc: 'Half-day and full-day charters, gear and crew included.',
    price: 'Request a quote',
    photo: 'experiences-fishing.jpg',
    wa: "Hi Cabo Hosted! I'd like a sport fishing charter. Date: __ / Guests: __ / Half or full day: __",
  },
  {
    id: 'horseback',
    title: 'Horseback Beach Ride',
    desc: 'A guided ride along the beach at golden hour.',
    price: 'Request a quote',
    photo: 'experiences-horseback.jpg',
    wa: "Hi Cabo Hosted! I'd like a horseback ride. Date: __ / Riders: __ / Location: __",
  },
];

const gallery = (prefix: string, n: number, alt: string) =>
  Array.from({ length: n }, (_, i) => ({ src: `${prefix}-${String(i + 1).padStart(2, '0')}.jpg`, alt }));

export const ranchGallery = gallery('gallery-ranch', 9, 'Moments at Rancho McCoy');
export const venueGallery = gallery('gallery-venue', 6, 'Tables and setup at Rancho McCoy');
export const photoGallery = gallery('gallery-photo', 6, 'Photo session at Rancho McCoy');
