import type { Destination, Category } from './types';

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Adventure',
    description: 'Trekking, camping, and high-energy thrills',
  },
  {
    id: 2,
    name: 'Relaxation',
    description: 'Beaches, luxury villas, and quiet nature retreats',
  },
  {
    id: 3,
    name: 'Sightseeing',
    description: 'Historical forts and scenic viewpoints',
  },
  {
    id: 4,
    name: 'Health',
    description: 'Ayurvedic spas and holistic wellness',
  },
];

export const MOCK_DESTINATIONS: Destination[] = [
  {
    id: 1,
    name: 'Lonavala & Khandala',
    tagline: 'The classic twin hill stations of mist and waterfalls.',
    description:
      'Famous for caves, lush green valleys, and famous chikki. Perfect for a quick weekend drive.',
    category_id: 3,
    drive_time_hours: 2.0,
    distance_km: 83.0,
    image_url:
      'https://images.unsplash.com/photo-1621682372441-498471447547?auto=format&fit=crop&w=900&q=85',
    wiki_url: 'https://en.wikivoyage.org/wiki/Lonavala',
    location: { type: 'Point', coordinates: [73.4072, 18.7533] },
  },
  {
    id: 2,
    name: 'Alibaug',
    tagline: 'Coastal serenity, sandy shores, and historic sea forts.',
    description:
      'A coastal town just a ferry ride or drive away, known for beaches like Nagaon and Kolaba Fort.',
    category_id: 2,
    drive_time_hours: 2.5,
    distance_km: 95.0,
    image_url:
      'https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill%2Cf_auto%2Cfl_progressive.strip_profile%2Cg_center%2Ch_400%2Cq_auto%2Cw_700/v1720250352/banbanjara/qhglnukmhpgaijgjqgox.jpg',
    wiki_url: 'https://en.wikivoyage.org/wiki/Alibaug',
    location: { type: 'Point', coordinates: [72.8777, 18.6414] },
  },
  {
    id: 3,
    name: 'Matheran',
    tagline: 'Asia’s only automobile-free hill station.',
    description:
      'Step back in time with red dirt trails, panoramic viewpoints, and total peace away from honking traffic.',
    category_id: 1,
    drive_time_hours: 2.5,
    distance_km: 80.0,
    image_url: 'https://img0.oastatic.com/img2/57690866/max/variant.jpg',
    wiki_url: 'https://en.wikivoyage.org/wiki/Matheran',
    location: { type: 'Point', coordinates: [73.3665, 18.985] },
  },
];
