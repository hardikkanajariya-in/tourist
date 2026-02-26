export interface Service {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Pilgrimage Tour Packages",
    shortDescription: "Sacred journeys to India's holy destinations with complete spiritual travel arrangements",
    longDescription: "Embark on a transformative spiritual journey to India's most revered temples, shrines, and sacred sites. Our pilgrimage packages are meticulously crafted to blend devotion with comfort, ensuring every yatri experiences divine blessings without the hassle of logistics. From Vaishno Devi to Char Dham, Tirupati to Amarnath — we handle all permits, stays, guides, and rituals so you can focus on your prayers.",
    icon: "Compass",
    features: [
      "Expert pandit & guide for rituals",
      "Comfortable stays near temple premises",
      "Special darshan arrangements where possible",
      "Group & family-friendly packages",
      "Vegetarian meals throughout",
      "Medical & emergency support on treks"
    ]
  },
  {
    id: 2,
    title: "Honeymoon Packages",
    shortDescription: "Romantic getaways crafted with love, surprise moments, and luxury stays",
    longDescription: "Begin your happily ever after with a honeymoon that sweeps you off your feet. Our handcrafted honeymoon packages include dreamy destinations, luxury accommodations, surprise romantic setups, candlelight dinners, and private excursions. Whether it's the snow-capped valleys of Kashmir, the tropical bliss of Maldives, or the serene backwaters of Kerala — we make every moment magical.",
    icon: "Heart",
    features: [
      "Flower-decorated rooms & welcome cakes",
      "Private candlelight dinner arrangements",
      "Couple spa & wellness sessions",
      "Scenic & luxury resort stays",
      "Personalized itinerary planning",
      "24/7 concierge support"
    ]
  },
  {
    id: 3,
    title: "Adventure & Trekking Tours",
    shortDescription: "Heart-pumping treks through Himalayas, forests, and valleys",
    longDescription: "Feel the rush of adrenaline as you conquer mountain peaks, navigate river rapids, and explore untamed wilderness. Our adventure tours are led by certified guides with years of experience in Himalayan terrain. From beginner-friendly trails to expert-level expeditions, we ensure safety, thrill, and unforgettable memories at every altitude.",
    icon: "Mountain",
    features: [
      "Certified trek leaders & mountaineers",
      "Quality camping gear provided",
      "Acclimatization schedule included",
      "First aid & oxygen support",
      "River rafting & rock climbing options",
      "Photography-friendly itineraries"
    ]
  },
  {
    id: 4,
    title: "Wildlife Safari Tours",
    shortDescription: "Explore India's national parks with expert naturalist guides",
    longDescription: "Witness the raw beauty of India's incredible wildlife in their natural habitats. Our safari packages take you to the country's finest national parks and tiger reserves with expert naturalists who know exactly where to spot the Big Cats, exotic birds, and rare species. Stay in jungle lodges, enjoy campfire evenings, and reconnect with wild nature.",
    icon: "TreePine",
    features: [
      "Expert naturalist-guided safaris",
      "Jeep & canter safari options",
      "Jungle resort & lodge stays",
      "Bird watching sessions",
      "Night safari experiences (where available)",
      "Wildlife photography guidance"
    ]
  },
  {
    id: 5,
    title: "Leisure Holiday Packages",
    shortDescription: "Relaxing escapes to beaches, hills, and scenic retreats",
    longDescription: "Sometimes the best adventure is simply slowing down. Our leisure holiday packages are designed for those who want to unwind at beautiful destinations without the rush. From Goa's sun-kissed beaches to Shimla's misty hills, enjoy handpicked hotels, flexible sightseeing, and plenty of time to just breathe and be present.",
    icon: "Palmtree",
    features: [
      "Premium resort & hotel stays",
      "Flexible & relaxed itineraries",
      "Sightseeing at your own pace",
      "Local cuisine experiences",
      "Spa & wellness options",
      "Family-friendly activities"
    ]
  },
  {
    id: 6,
    title: "Festival Special Tours",
    shortDescription: "Celebrate India's vibrant festivals in their most authentic locations",
    longDescription: "India's festivals are legendary, and experiencing them in their birthplace is nothing short of magical. Join our specially curated festival tours to witness Gujarat's electrifying Navratri, Rajasthan's colorful Holi, Varanasi's divine Dev Deepawali, Kerala's spectacular Onam, and many more. We take you to the heart of celebration.",
    icon: "Sparkles",
    features: [
      "VIP access to festival events",
      "Traditional outfit arrangements",
      "Expert cultural guides",
      "Authentic local cuisine included",
      "Photography-friendly schedules",
      "Safety & crowd management"
    ]
  },
  {
    id: 7,
    title: "Corporate & Group Tours",
    shortDescription: "Seamlessly organized tours for offices, schools, and large groups",
    longDescription: "Whether it's an office team outing, a college trip, or a community pilgrimage — we handle large groups with precision and care. Our corporate and group tour packages include customized itineraries, bulk-booking discounts, team-building activities, and dedicated tour managers. We ensure every member of your group has a fantastic experience.",
    icon: "Users",
    features: [
      "Dedicated group tour manager",
      "Customized itineraries for groups",
      "Bulk booking discounts",
      "Team-building activity options",
      "Conference & meeting arrangements",
      "Special dietary accommodations"
    ]
  },
  {
    id: 8,
    title: "Charter Bus & Vehicle Services",
    shortDescription: "Comfortable, air-conditioned transport for all group sizes",
    longDescription: "Travel in comfort and style with our fleet of well-maintained vehicles. From luxury sedans for couples to full-size AC coaches for large groups, we provide reliable transport solutions for pilgrimages, weddings, corporate events, and family tours. All vehicles come with experienced drivers who know the routes inside out.",
    icon: "Bus",
    features: [
      "AC & Non-AC vehicle options",
      "Sedan, SUV, Tempo Traveller & Bus fleet",
      "Experienced & licensed drivers",
      "GPS tracking on all vehicles",
      "24/7 roadside assistance",
      "Flexible pickup & drop locations"
    ]
  }
];
