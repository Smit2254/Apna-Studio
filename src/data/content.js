// ============================================================
//  APNA STUDIO — CONTENT FILE
//  ✏️  Edit this file to update website content.
//  No coding knowledge required!
//  After editing, save and re-deploy (see README).
// ============================================================

export const siteConfig = {
  studioName: 'Apna Digital Studio & Colour Lab',
  tagline: 'a name you can trust & rely upon',
  location: 'Khambhat, Gujarat, India',
  phone: '+91 9824010225',
  email: 'apnastudio1991@gmail.com',
  whatsapp: '919824010225', // country code + number, no spaces or +

  social: {
    instagram:
      'https://www.instagram.com/apna.digital.studio1991?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
    facebook:
      'https://www.facebook.com/gajjar.kishor.144?rdid=UJ4kNVxavHp3qHuJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BmVMmxAmr%2F#',
  },

  // Google Sheets form endpoint (see README for setup)
  formEndpoint: 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE',
};

// ─── HERO SLIDESHOW ──────────────────────────────────────────
// Add as many slides as you want.
// Use Unsplash or your own hosted image URLs.
export const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80',
    label: 'Weddings',
  },
  {
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1600&q=80',
    label: 'Portraits',
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80',
    label: 'Events',
  },
  {
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1600&q=80',
    label: 'Pre-Wedding',
  },
];

// ─── ABOUT SECTION ───────────────────────────────────────────
export const about = {
  heading: "We don't just click pictures.",
  subheading: 'We craft stories.',
  body: [
    "Apna Studio was born from a single belief — every family deserves photographs that feel like home. Founded in 2015, we've had the honour of capturing over 800 weddings, ceremonies, and milestones across India.",
    "Our team of 6 photographers approaches every shoot with warmth, patience, and a sharp eye for the moments that truly matter — a grandmother's proud glance, a stolen laugh between vows, the chaos of a Baraat.",
  ],
  stats: [
    { number: '800+', label: 'Events Shot' },
    { number: '9', label: 'Years Experience' },
    { number: '200+', label: 'Happy Families' },
    { number: '6', label: 'Photographers' },
  ],
  image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=900&q=80',
};

// ─── SERVICES ────────────────────────────────────────────────
export const services = [
  {
    id: 1,
    icon: '💍',
    title: 'Wedding Photography',
    description: 'Full-day coverage from mehendi to vidaai. Candid + traditional. Albums available.',
    accent: 'from-rose-400 to-rose-600',
  },
  {
    id: 2,
    icon: '🌸',
    title: 'Pre-Wedding Shoots',
    description: 'Curated concepts, outdoor & studio, Reels & cinematic film. Custom themes on request.',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    id: 3,
    icon: '👨‍👩‍👧',
    title: 'Portrait Sessions',
    description: 'Family, maternity, newborn, professional headshots, and solo portraits.',
    accent: 'from-violet-400 to-purple-600',
  },
  {
    id: 4,
    icon: '🎉',
    title: 'Events & Celebrations',
    description: 'Birthdays, corporate events, product launches, and milestone parties.',
    accent: 'from-teal-400 to-cyan-600',
  },
  {
    id: 5,
    icon: '🎬',
    title: 'Cinematic Reels',
    description: 'Short films, Instagram Reels, and wedding highlight videos with cinematic grading.',
    accent: 'from-pink-400 to-rose-600',
  },
  {
    id: 6,
    icon: '🏠',
    title: 'Product & Interior',
    description: 'E-commerce, restaurant, hotel, and real estate photography that converts.',
    accent: 'from-emerald-400 to-green-600',
  },
];

// ─── GALLERY ─────────────────────────────────────────────────
// categories: "All" | "Weddings" | "Pre-Wedding" | "Portraits" | "Events"
// Replace image URLs with your own hosted photo URLs.
export const galleryImages = [
  {
    id: 1,
    category: 'Weddings',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    alt: 'Wedding ceremony',
  },
  {
    id: 2,
    category: 'Pre-Wedding',
    src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
    alt: 'Pre-wedding shoot',
  },
  {
    id: 3,
    category: 'Portraits',
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    alt: 'Portrait session',
  },
  {
    id: 4,
    category: 'Events',
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    alt: 'Event photography',
  },
  {
    id: 5,
    category: 'Weddings',
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80',
    alt: 'Wedding reception',
  },
  {
    id: 6,
    category: 'Pre-Wedding',
    src: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=800&q=80',
    alt: 'Pre-wedding portrait',
  },
  {
    id: 7,
    category: 'Portraits',
    src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80',
    alt: 'Studio portrait',
  },
  {
    id: 8,
    category: 'Events',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    alt: 'Birthday event',
  },
  {
    id: 9,
    category: 'Weddings',
    src: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=800&q=80',
    alt: 'Couple portrait',
  },
  {
    id: 10,
    category: 'Pre-Wedding',
    src: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=800&q=80',
    alt: 'Outdoor shoot',
  },
  {
    id: 11,
    category: 'Portraits',
    src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80',
    alt: 'Lifestyle portrait',
  },
  {
    id: 12,
    category: 'Events',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    alt: 'Corporate event',
  },
];

// ─── TESTIMONIALS ────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Priya & Rohan Sharma',
    event: 'Wedding, December 2024',
    avatar: 'PR',
    avatarBg: 'bg-rose-100 text-rose-700',
    quote:
      'Apna Studio exceeded every expectation. The team was invisible during the ceremony but somehow caught every tear, every laugh. Our album is our most treasured possession.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Meera Kapoor',
    event: 'Maternity Shoot, October 2024',
    avatar: 'MK',
    avatarBg: 'bg-violet-100 text-violet-700',
    quote:
      'I was so nervous in front of the camera. Within 10 minutes they made me feel so natural and relaxed. The photos are absolutely breathtaking. Worth every rupee.',
    stars: 5,
  },
  {
    id: 3,
    name: 'Arjun & Nisha Patel',
    event: 'Pre-Wedding Shoot, August 2024',
    avatar: 'AP',
    avatarBg: 'bg-amber-100 text-amber-700',
    quote:
      'Went all the way to Udaipur for our pre-wedding shoot and it was a dream. Perfectly planned, gorgeous shots, delivered on time. Will book for the wedding too!',
    stars: 5,
  },
];
