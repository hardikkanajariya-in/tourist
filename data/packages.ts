export interface TourPackage {
  slug: string;
  image: string;
  title: string;
  category: "Pilgrimage" | "Honeymoon" | "Adventure" | "Wildlife" | "Leisure" | "Festival";
  duration: string;
  destinations: string[];
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: "Best Seller" | "Trending" | "New" | "Limited Seats" | null;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string; description: string }[];
  groupSize: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  description: string;
  faqs: { question: string; answer: string }[];
}

export const packages: TourPackage[] = [
  {
    slug: "maa-vaishno-devi-yatra",
    image: "https://images.unsplash.com/photo-1585135497273-1a86d9d9108e?w=800&h=600&fit=crop&q=80",
    title: "Maa Vaishno Devi Yatra",
    category: "Pilgrimage",
    duration: "4 Days / 3 Nights",
    destinations: ["Katra", "Vaishno Devi", "Jammu"],
    price: 8999,
    originalPrice: 12999,
    rating: 4.8,
    reviews: 312,
    badge: "Best Seller",
    highlights: [
      "Comfortable stay near Katra base camp",
      "Helicopter booking assistance available",
      "Guided trek with experienced local guide",
      "Darshan VIP pass coordination",
      "All meals included during the yatra"
    ],
    inclusions: [
      "3 Nights hotel accommodation",
      "Daily breakfast, lunch & dinner",
      "Katra to Katra transfers",
      "Experienced tour guide",
      "Pony/Palki booking assistance",
      "All applicable taxes"
    ],
    exclusions: [
      "Helicopter tickets (extra cost)",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Katra", description: "Arrive at Jammu and transfer to Katra. Check in to the hotel and rest. Evening aarti at the base temple. Overnight stay in Katra." },
      { day: 2, title: "Trek to Vaishno Devi", description: "Early morning start for the 13 km trek to the holy shrine. Options for pony, palki, or helicopter available. Darshan at the sacred cave temple. Begin descent or overnight at Bhawan." },
      { day: 3, title: "Return to Katra & Sightseeing", description: "Complete the descent to Katra. Visit Bhairav Nath Temple. Afternoon explore local markets. Evening rest at hotel." },
      { day: 4, title: "Departure", description: "After breakfast, check out and transfer to Jammu Railway Station/Airport. Tour ends with divine memories." }
    ],
    groupSize: "2–40 Persons",
    difficulty: "Moderate",
    description: "Embark on a divine journey to the sacred shrine of Maa Vaishno Devi, nestled in the Trikuta Mountains. This carefully planned yatra ensures a comfortable and spiritually enriching experience with guided treks, comfortable stays, and all-inclusive meals.",
    faqs: [
      { question: "Is the trek difficult for elderly people?", answer: "Pony, palki, and helicopter options are available for those who cannot trek. We assist with all bookings." },
      { question: "What should I carry for the yatra?", answer: "Warm clothes, comfortable shoes, raincoat, torch, and personal medications. We provide a detailed packing list upon booking." },
      { question: "Is food available during the trek?", answer: "Yes, there are multiple refreshment stalls along the route. We also provide packed snacks." }
    ]
  },
  {
    slug: "kashmir-honeymoon-delight",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop&q=80",
    title: "Kashmir Honeymoon Delight",
    category: "Honeymoon",
    duration: "6 Days / 5 Nights",
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Dal Lake"],
    price: 24999,
    originalPrice: 34999,
    rating: 4.9,
    reviews: 189,
    badge: "Trending",
    highlights: [
      "Romantic shikara ride on Dal Lake",
      "Stay in premium houseboat",
      "Gondola ride in Gulmarg",
      "Private candlelight dinner arrangement",
      "Flower-decorated room on arrival"
    ],
    inclusions: [
      "5 Nights deluxe accommodation",
      "Daily breakfast & dinner",
      "Airport transfers & sightseeing",
      "Shikara ride on Dal Lake",
      "Gondola Phase-1 ticket",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare to/from Srinagar",
      "Lunch and snacks",
      "Adventure activities",
      "Personal shopping expenses"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", description: "Welcome at Srinagar Airport. Transfer to houseboat on Dal Lake. Evening shikara ride with snacks. Romantic dinner on the houseboat." },
      { day: 2, title: "Gulmarg Excursion", description: "Drive to Gulmarg — the 'Meadow of Flowers'. Enjoy Gondola ride with stunning mountain views. Optional skiing or horse riding. Return to Srinagar." },
      { day: 3, title: "Pahalgam Day Trip", description: "Drive to Pahalgam along scenic Lidder Valley. Visit Betaab Valley and Aru Valley. Enjoy riverside walks. Return to hotel in evening." },
      { day: 4, title: "Srinagar Local Sightseeing", description: "Visit Mughal Gardens — Nishat Bagh, Shalimar Bagh, and Chashme Shahi. Explore local handicraft markets. Evening free for shopping." },
      { day: 5, title: "Sonmarg Day Trip", description: "Full day excursion to Sonmarg — 'Meadow of Gold'. Visit Thajiwas Glacier. Enjoy pony rides. Candlelight dinner at hotel." },
      { day: 6, title: "Departure", description: "After a leisurely breakfast, transfer to Srinagar Airport. Depart with beautiful memories of paradise." }
    ],
    groupSize: "2 Persons",
    difficulty: "Easy",
    description: "Experience the paradise on earth with your soulmate. This dreamy Kashmir honeymoon package includes stays in luxurious houseboats, romantic shikara rides, breathtaking mountain views, and private dining experiences that will make your honeymoon unforgettable.",
    faqs: [
      { question: "Is Kashmir safe for honeymooners?", answer: "Absolutely! Kashmir is one of India's most popular honeymoon destinations. Tourist areas are well-maintained and safe year-round." },
      { question: "Best time to visit Kashmir?", answer: "March to October for pleasant weather. December to February for snowfall experiences." },
      { question: "Can we customize the itinerary?", answer: "Yes, we offer fully customizable packages. Contact our team for personalized planning." }
    ]
  },
  {
    slug: "ladakh-bike-trek-expedition",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
    title: "Ladakh Bike & Trek Expedition",
    category: "Adventure",
    duration: "8 Days / 7 Nights",
    destinations: ["Leh", "Nubra Valley", "Pangong Lake", "Khardung La"],
    price: 29999,
    originalPrice: 42999,
    rating: 4.7,
    reviews: 156,
    badge: "Trending",
    highlights: [
      "Ride through world's highest motorable pass",
      "Camp under stars at Pangong Lake",
      "Double-humped camel ride in Nubra Valley",
      "Visit ancient monasteries",
      "Acclimatization day included"
    ],
    inclusions: [
      "7 Nights accommodation (hotel + camps)",
      "All meals during the trip",
      "Royal Enfield bike with fuel",
      "Mechanic support vehicle",
      "Inner line permits",
      "First aid & oxygen cylinders"
    ],
    exclusions: [
      "Flight tickets to Leh",
      "Personal riding gear",
      "Alcoholic beverages",
      "Travel insurance (recommended)"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Leh", description: "Arrive at Leh Airport. Transfer to hotel. Complete rest for acclimatization. Light walks around Leh Market in evening." },
      { day: 2, title: "Leh Acclimatization & Local Sightseeing", description: "Visit Shanti Stupa, Leh Palace, and local markets. Body acclimatization day. Stay hydrated and rest well." },
      { day: 3, title: "Leh to Nubra Valley via Khardung La", description: "Ride across Khardung La Pass (18,380 ft). Descend to Nubra Valley. Camel ride on sand dunes. Camp overnight." },
      { day: 4, title: "Nubra Valley Exploration", description: "Visit Diskit Monastery and Hunder village. Explore the cold desert landscape. Enjoy the starlit night at camp." },
      { day: 5, title: "Nubra to Pangong Lake", description: "Ride through Shyok route to Pangong Lake. Witness the magical color-changing lake. Overnight in lakeside camps." },
      { day: 6, title: "Pangong to Leh via Chang La", description: "Morning at Pangong Lake. Ride back to Leh via Chang La Pass. Evening rest and bonfire." },
      { day: 7, title: "Leh Local & Departure Prep", description: "Visit Hemis Monastery, Thiksey Monastery. Shopping for souvenirs. Farewell dinner." },
      { day: 8, title: "Departure", description: "Early morning transfer to Leh Airport. Depart with thrilling memories of Ladakh." }
    ],
    groupSize: "4–20 Persons",
    difficulty: "Challenging",
    description: "Conquer the mighty Himalayas on two wheels! This epic Ladakh expedition takes you through the highest motorable passes, pristine lakes, ancient monasteries, and cold deserts. A perfect blend of adrenaline and soul-stirring beauty.",
    faqs: [
      { question: "Do I need riding experience?", answer: "Basic motorcycle riding experience is required. We also offer backup vehicle option for non-riders." },
      { question: "What about altitude sickness?", answer: "We include a dedicated acclimatization day and carry oxygen cylinders. Our guides are trained in high-altitude first aid." },
      { question: "What bikes are provided?", answer: "Royal Enfield Himalayan 411cc bikes, fully serviced and equipped for mountain terrain." }
    ]
  },
  {
    slug: "jim-corbett-wildlife-safari",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop&q=80",
    title: "Jim Corbett Wildlife Safari",
    category: "Wildlife",
    duration: "3 Days / 2 Nights",
    destinations: ["Jim Corbett National Park", "Ramnagar"],
    price: 11999,
    originalPrice: 16999,
    rating: 4.6,
    reviews: 98,
    badge: null,
    highlights: [
      "2 Jeep safaris in core tiger zone",
      "Expert naturalist guide",
      "Stay in jungle resort",
      "Bird watching sessions",
      "Bonfire & cultural evening"
    ],
    inclusions: [
      "2 Nights resort accommodation",
      "All meals (breakfast, lunch, dinner)",
      "2 Jeep safari rides",
      "Naturalist guide for safaris",
      "Park entry & permit fees",
      "Campfire & evening entertainment"
    ],
    exclusions: [
      "Transportation to Ramnagar",
      "Camera fees inside park",
      "Personal expenses",
      "Travel insurance"
    ],
    itinerary: [
      { day: 1, title: "Arrival & Afternoon Safari", description: "Arrive at Ramnagar. Check into jungle resort. Afternoon jeep safari in Bijrani/Dhikala zone. Bonfire dinner." },
      { day: 2, title: "Morning & Evening Safari", description: "Early morning safari for best tiger sighting chances. Breakfast and rest. Afternoon bird watching. Evening safari." },
      { day: 3, title: "Morning Safari & Departure", description: "Final morning safari. Breakfast at resort. Check out and depart with wildlife memories." }
    ],
    groupSize: "2–12 Persons",
    difficulty: "Easy",
    description: "Get up close with the majestic Royal Bengal Tiger in India's oldest national park. Our expert naturalists ensure the best safari experience with comfortable jungle resort stays and thrilling wildlife encounters.",
    faqs: [
      { question: "Will we definitely see a tiger?", answer: "Tiger sightings depend on luck and season. Our expert guides maximize your chances by choosing the best zones and timing." },
      { question: "Is it safe for children?", answer: "Yes, jeep safaris are safe for children above 5 years. The resort is family-friendly." },
      { question: "Best time to visit?", answer: "November to June. Peak tiger sighting season is March to May." }
    ]
  },
  {
    slug: "goa-beach-bliss-holiday",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop&q=80",
    title: "Goa Beach Bliss Holiday",
    category: "Leisure",
    duration: "4 Days / 3 Nights",
    destinations: ["North Goa", "South Goa", "Old Goa"],
    price: 13999,
    originalPrice: 19999,
    rating: 4.5,
    reviews: 234,
    badge: "Best Seller",
    highlights: [
      "Stay in beachfront resort",
      "North & South Goa sightseeing",
      "Cruise with dinner & entertainment",
      "Water sports package included",
      "Visit historic churches of Old Goa"
    ],
    inclusions: [
      "3 Nights beachfront resort stay",
      "Daily breakfast",
      "Airport/station transfers",
      "North & South Goa sightseeing",
      "Sunset cruise with snacks",
      "Water sports (3 activities)"
    ],
    exclusions: [
      "Flight/train tickets",
      "Lunch and dinner",
      "Nightlife expenses",
      "Personal shopping"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Goa", description: "Arrive at Goa Airport/Station. Transfer to beachfront resort. Relax at the beach. Evening sunset walk on Calangute Beach." },
      { day: 2, title: "North Goa Tour", description: "Visit Fort Aguada, Baga Beach, Anjuna Flea Market. Water sports at Calangute. Evening sunset cruise on Mandovi River." },
      { day: 3, title: "South Goa & Old Goa Tour", description: "Visit Basilica of Bom Jesus, Se Cathedral. Explore Colva and Palolem beaches. Spice plantation visit with lunch." },
      { day: 4, title: "Departure", description: "Morning beach time and shopping. Transfer to airport/station. Depart with beach vibes." }
    ],
    groupSize: "2–30 Persons",
    difficulty: "Easy",
    description: "Sun, sand, and serenity! Immerse yourself in Goa's vibrant beach culture with this perfectly balanced holiday. From thrilling water sports to historic churches, sunset cruises to spice plantations — Goa has it all.",
    faqs: [
      { question: "Best time to visit Goa?", answer: "October to March for pleasant weather. Monsoon season (June-September) has its own charm with lush greenery." },
      { question: "Are water sports safe?", answer: "All our water sports activities are conducted by certified operators with proper safety equipment." },
      { question: "Can we extend the trip?", answer: "Absolutely! We can customize the duration and add more experiences." }
    ]
  },
  {
    slug: "rajasthan-royal-heritage-tour",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop&q=80",
    title: "Rajasthan Royal Heritage Tour",
    category: "Leisure",
    duration: "7 Days / 6 Nights",
    destinations: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
    price: 27999,
    originalPrice: 38999,
    rating: 4.8,
    reviews: 167,
    badge: "Trending",
    highlights: [
      "Stay in heritage havelis & palaces",
      "Camel safari in Thar Desert",
      "Sunset at Jaisalmer sand dunes",
      "Lake Palace boat ride in Udaipur",
      "Elephant ride at Amber Fort"
    ],
    inclusions: [
      "6 Nights heritage hotel stays",
      "Daily breakfast & dinner",
      "AC vehicle for all transfers",
      "Expert local guide at monuments",
      "Camel safari in Jaisalmer",
      "All monument entry tickets"
    ],
    exclusions: [
      "Flight/train tickets",
      "Lunch and snacks",
      "Camera charges at monuments",
      "Personal expenses & tips"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Jaipur", description: "Welcome to the Pink City! Transfer to heritage hotel. Evening visit to Birla Temple and local bazaar. Welcome dinner." },
      { day: 2, title: "Jaipur Sightseeing", description: "Visit Amber Fort, Hawa Mahal, City Palace, Jantar Mantar. Evening at Chokhi Dhani for Rajasthani culture experience." },
      { day: 3, title: "Jaipur to Jodhpur", description: "Drive to Jodhpur — the Blue City. Visit Mehrangarh Fort and Jaswant Thada. Evening explore clock tower market." },
      { day: 4, title: "Jodhpur to Jaisalmer", description: "Drive to the Golden City. Visit Patwon ki Haveli and Jaisalmer Fort. Evening camel safari and sunset at Sam Sand Dunes. Cultural dinner in desert camp." },
      { day: 5, title: "Jaisalmer to Udaipur", description: "Drive to the City of Lakes. En route visit Ranakpur Jain Temple. Evening boat ride on Lake Pichola." },
      { day: 6, title: "Udaipur Sightseeing", description: "Visit City Palace, Saheliyon ki Bari, Jagdish Temple. Evening free for shopping and lakeside dining." },
      { day: 7, title: "Departure from Udaipur", description: "After breakfast, transfer to Udaipur Airport/Station. Royal Rajasthan tour concludes." }
    ],
    groupSize: "2–30 Persons",
    difficulty: "Easy",
    description: "Step into a world of royal grandeur, desert mystique, and timeless beauty. This Rajasthan heritage tour takes you through majestic forts, ornate palaces, vast deserts, and serene lakes — the essence of India's royal legacy.",
    faqs: [
      { question: "Is this tour suitable for families?", answer: "Absolutely! The tour is designed for all age groups. We can adjust activities for families with children." },
      { question: "What about summer heat?", answer: "We recommend October to March for the best weather. AC vehicles and comfortable hotels ensure comfort year-round." },
      { question: "Can we add Pushkar to the itinerary?", answer: "Yes! We can customize the route to include Pushkar, Mount Abu, or any other destination." }
    ]
  },
  {
    slug: "kerala-backwaters-retreat",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop&q=80",
    title: "Kerala Backwaters Retreat",
    category: "Leisure",
    duration: "5 Days / 4 Nights",
    destinations: ["Munnar", "Alleppey", "Kochi"],
    price: 19999,
    originalPrice: 28999,
    rating: 4.7,
    reviews: 145,
    badge: "New",
    highlights: [
      "Houseboat cruise in Alleppey backwaters",
      "Tea plantation visit in Munnar",
      "Kathakali dance show",
      "Ayurvedic spa experience",
      "Spice garden tour"
    ],
    inclusions: [
      "4 Nights accommodation (resort + houseboat)",
      "Daily breakfast & dinner",
      "Houseboat with all meals",
      "Sightseeing by AC vehicle",
      "Kathakali show tickets",
      "All applicable taxes"
    ],
    exclusions: [
      "Flight/train tickets",
      "Lunch (except houseboat)",
      "Ayurvedic spa (optional)",
      "Personal expenses"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kochi", description: "Arrive at Kochi Airport. Visit Fort Kochi, Chinese Fishing Nets, and St. Francis Church. Evening Kathakali show. Overnight in Kochi." },
      { day: 2, title: "Kochi to Munnar", description: "Scenic drive to Munnar through tea plantations. Visit Cheeyappara Waterfalls en route. Evening at leisure in the hill station." },
      { day: 3, title: "Munnar Sightseeing", description: "Visit Tea Museum, Eravikulam National Park, Mattupetty Dam. Spice garden tour. Evening bonfire at resort." },
      { day: 4, title: "Munnar to Alleppey Houseboat", description: "Drive to Alleppey. Board premium houseboat for backwater cruise. Enjoy Kerala cuisine on board. Overnight on houseboat." },
      { day: 5, title: "Departure from Kochi", description: "Disembark from houseboat. Transfer to Kochi Airport/Station. Depart with memories of God's Own Country." }
    ],
    groupSize: "2–20 Persons",
    difficulty: "Easy",
    description: "Discover why Kerala is called God's Own Country. Cruise through serene backwaters, explore lush tea plantations, witness traditional art forms, and rejuvenate with Ayurvedic wellness — a retreat for mind, body, and soul.",
    faqs: [
      { question: "When is the best time to visit Kerala?", answer: "September to March for pleasant weather. June-August is monsoon season with its own magical charm." },
      { question: "Is the houseboat experience comfortable?", answer: "Our premium houseboats have AC bedrooms, attached bathrooms, dining area, and a sundeck. A dedicated crew and chef are on board." },
      { question: "Can we add Thekkady to the tour?", answer: "Yes, we can customize the itinerary to include Thekkady's Periyar Wildlife Sanctuary." }
    ]
  },
  {
    slug: "char-dham-yatra-package",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&h=600&fit=crop&q=80",
    title: "Char Dham Yatra Package",
    category: "Pilgrimage",
    duration: "10 Days / 9 Nights",
    destinations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    price: 32999,
    originalPrice: 45999,
    rating: 4.9,
    reviews: 267,
    badge: "Best Seller",
    highlights: [
      "Complete Char Dham circuit covered",
      "Helicopter option for Kedarnath",
      "Comfortable stays at each dham",
      "Experienced pandit for rituals",
      "Medical support throughout"
    ],
    inclusions: [
      "9 Nights hotel accommodation",
      "All meals during the yatra",
      "AC Tempo Traveller for transfers",
      "Local guide & pandit services",
      "All toll and parking charges",
      "First aid & oxygen support"
    ],
    exclusions: [
      "Kedarnath helicopter tickets",
      "Personal expenses",
      "Pony/Doli charges at temples",
      "Travel insurance"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Haridwar", description: "Arrive in Haridwar. Visit Har Ki Pauri for Ganga Aarti. Overnight stay." },
      { day: 2, title: "Haridwar to Barkot", description: "Drive to Barkot, gateway to Yamunotri. En route visit Kempty Falls. Rest and prepare for next day trek." },
      { day: 3, title: "Yamunotri Darshan", description: "Trek to Yamunotri temple (6 km). Holy dip in Surya Kund. Darshan and puja. Return to Barkot." },
      { day: 4, title: "Barkot to Uttarkashi", description: "Drive to Uttarkashi. Visit Vishwanath Temple. Rest and overnight stay." },
      { day: 5, title: "Gangotri Darshan", description: "Drive to Gangotri. Holy dip in Ganges. Temple darshan and rituals. Return to Uttarkashi." },
      { day: 6, title: "Uttarkashi to Guptkashi", description: "Scenic drive to Guptkashi. Visit Ardh Narishwar Temple. Prepare for Kedarnath." },
      { day: 7, title: "Kedarnath Darshan", description: "Trek to Kedarnath (16 km) or helicopter ride. Darshan and puja at the ancient Shiva temple. Overnight near Kedarnath." },
      { day: 8, title: "Kedarnath to Pipalkoti", description: "Return from Kedarnath. Drive to Pipalkoti. Rest and prepare for Badrinath." },
      { day: 9, title: "Badrinath Darshan", description: "Visit Badrinath Temple. Holy dip in Tapt Kund. Visit Mana Village — last Indian village. Drive to Rudraprayag." },
      { day: 10, title: "Departure from Haridwar", description: "Drive to Haridwar. Tour concludes. Transfer to station/airport with divine blessings." }
    ],
    groupSize: "4–40 Persons",
    difficulty: "Challenging",
    description: "Undertake the holiest pilgrimage in Hinduism — the sacred Char Dham Yatra. Visit all four divine abodes: Yamunotri, Gangotri, Kedarnath, and Badrinath. A spiritually transformative journey through the magnificent Uttarakhand Himalayas.",
    faqs: [
      { question: "What is the best time for Char Dham Yatra?", answer: "May to June and September to October. The temples close during winter (November-April)." },
      { question: "How physically demanding is the yatra?", answer: "Moderate to challenging. Kedarnath and Yamunotri require trekking. Pony and helicopter options are available." },
      { question: "Is medical support available?", answer: "Yes, we carry first aid kits and oxygen cylinders. Medical facilities are available at major stops." }
    ]
  },
  {
    slug: "andaman-island-escape",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop&q=80",
    title: "Andaman Island Escape",
    category: "Leisure",
    duration: "5 Days / 4 Nights",
    destinations: ["Port Blair", "Havelock Island", "Neil Island"],
    price: 22999,
    originalPrice: 32999,
    rating: 4.6,
    reviews: 112,
    badge: "New",
    highlights: [
      "Scuba diving at Havelock Island",
      "Visit the famous Radhanagar Beach",
      "Glass-bottom boat ride",
      "Cellular Jail light & sound show",
      "Snorkeling at coral reefs"
    ],
    inclusions: [
      "4 Nights hotel accommodation",
      "Daily breakfast",
      "Ferry tickets (Port Blair-Havelock-Neil)",
      "Sightseeing as per itinerary",
      "Airport & jetty transfers",
      "All applicable taxes"
    ],
    exclusions: [
      "Flight tickets to Port Blair",
      "Lunch and dinner",
      "Water sports (optional)",
      "Personal expenses"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Port Blair", description: "Arrive at Port Blair Airport. Visit Cellular Jail and attend the Light & Sound show. Explore Aberdeen Bazaar." },
      { day: 2, title: "Port Blair to Havelock Island", description: "Ferry to Havelock Island. Visit world-famous Radhanagar Beach (Asia's best beach). Sunset on the beach." },
      { day: 3, title: "Havelock Water Activities", description: "Scuba diving or snorkeling at Elephant Beach. Glass-bottom boat ride to view coral reefs. Beach relaxation." },
      { day: 4, title: "Havelock to Neil Island", description: "Ferry to Neil Island. Visit Natural Bridge, Bharatpur Beach, and Laxmanpur Beach. Sunset at Laxmanpur." },
      { day: 5, title: "Departure", description: "Ferry back to Port Blair. Airport transfer. Depart with island memories." }
    ],
    groupSize: "2–20 Persons",
    difficulty: "Easy",
    description: "Escape to the pristine islands of Andaman — where turquoise waters meet white sandy beaches. Dive into coral reefs, explore historic sites, and unwind on some of Asia's most beautiful beaches.",
    faqs: [
      { question: "Do I need a permit to visit Andaman?", answer: "Indian nationals don't need a special permit for Port Blair, Havelock, and Neil Island. Foreign nationals get a permit on arrival." },
      { question: "Is scuba diving safe for beginners?", answer: "Yes! Our certified PADI instructors provide training before the dive. No prior experience needed." },
      { question: "Best time to visit Andaman?", answer: "October to May for best weather and water clarity." }
    ]
  },
  {
    slug: "uttarakhand-trekking-adventure",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop&q=80",
    title: "Uttarakhand Trekking Adventure",
    category: "Adventure",
    duration: "6 Days / 5 Nights",
    destinations: ["Rishikesh", "Chopta", "Tungnath", "Chandrashila"],
    price: 15999,
    originalPrice: 22999,
    rating: 4.7,
    reviews: 89,
    badge: "Limited Seats",
    highlights: [
      "Summit Chandrashila Peak (4,000m)",
      "Visit world's highest Shiva temple — Tungnath",
      "Camp under Himalayan stars",
      "River rafting in Rishikesh",
      "Sunrise from Chandrashila summit"
    ],
    inclusions: [
      "5 Nights accommodation (hotel + camps)",
      "All meals during the trek",
      "Experienced trek leader & guide",
      "Camping equipment & gear",
      "Rishikesh rafting session",
      "First aid & safety equipment"
    ],
    exclusions: [
      "Travel to/from Rishikesh",
      "Personal trekking gear",
      "Travel insurance",
      "Porter charges (optional)"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Rishikesh", description: "Arrive in Rishikesh. Team briefing and gear check. Visit Lakshman Jhula and Ram Jhula. Overnight at camp." },
      { day: 2, title: "Rishikesh Rafting & Drive to Chopta", description: "Morning river rafting session (16 km). Drive to Chopta — the mini Switzerland of India. Overnight at camp." },
      { day: 3, title: "Chopta to Tungnath Trek", description: "Trek from Chopta to Tungnath (3.5 km). Visit the ancient Tungnath Shiva Temple. Camp near Tungnath." },
      { day: 4, title: "Chandrashila Summit", description: "Early morning summit push to Chandrashila (1.5 km from Tungnath). Witness breathtaking 360° Himalayan sunrise. Descend to Chopta." },
      { day: 5, title: "Chopta to Rishikesh", description: "Drive back to Rishikesh. Visit ashrams and cafes. Evening Ganga Aarti at Triveni Ghat." },
      { day: 6, title: "Departure", description: "After breakfast, depart from Rishikesh with mountain memories and new friendships." }
    ],
    groupSize: "6–20 Persons",
    difficulty: "Moderate",
    description: "Challenge yourself with this thrilling Uttarakhand trek to the majestic Chandrashila summit. Trek through rhododendron forests, visit the world's highest Shiva temple, and witness unforgettable Himalayan sunrises.",
    faqs: [
      { question: "What fitness level is required?", answer: "Moderate fitness is needed. Regular walking/jogging for 2-3 weeks before the trek is recommended." },
      { question: "What should I carry?", answer: "We provide a detailed packing list. Essentials include trekking shoes, warm layers, rain jacket, and personal medications." },
      { question: "Is prior trekking experience required?", answer: "Not mandatory but helpful. This trek is suitable for beginners with reasonable fitness." }
    ]
  },
  {
    slug: "navratri-gujarat-festival-tour",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&h=600&fit=crop&q=80",
    title: "Navratri Gujarat Festival Tour",
    category: "Festival",
    duration: "4 Days / 3 Nights",
    destinations: ["Ahmedabad", "Vadodara", "Ambaji"],
    price: 12999,
    originalPrice: 17999,
    rating: 4.5,
    reviews: 76,
    badge: "Limited Seats",
    highlights: [
      "VIP Garba pass at premium venues",
      "Traditional Navratri attire arrangement",
      "Ambaji Temple darshan",
      "Authentic Gujarati food trail",
      "Folk music & dance performances"
    ],
    inclusions: [
      "3 Nights hotel accommodation",
      "Daily breakfast & dinner",
      "VIP Garba event passes",
      "Sightseeing by AC vehicle",
      "Ambaji Temple visit",
      "All applicable taxes"
    ],
    exclusions: [
      "Travel to/from Gujarat",
      "Lunch and snacks",
      "Navratri outfits & accessories",
      "Personal expenses"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Ahmedabad", description: "Arrive in Ahmedabad. Visit Sabarmati Ashram and local markets. Evening premier Garba event at United Way venue. Overnight stay." },
      { day: 2, title: "Ahmedabad to Vadodara", description: "Drive to Vadodara. Visit Laxmi Vilas Palace. Evening attend the famous Vadodara Navratri Garba celebrations." },
      { day: 3, title: "Vadodara & Ambaji", description: "Day trip to Ambaji Temple for darshan. Return for evening Garba festival. Traditional Gujarati dinner." },
      { day: 4, title: "Departure", description: "Morning heritage walk in Ahmedabad old city. Depart with festive memories." }
    ],
    groupSize: "4–40 Persons",
    difficulty: "Easy",
    description: "Experience the electrifying Navratri festival in its birthplace — Gujarat! Dance the night away at world-famous Garba events, savor authentic cuisine, and feel the divine energy of nine nights of celebration.",
    faqs: [
      { question: "When does Navratri happen?", answer: "Navratri usually falls in September/October. Exact dates vary each year based on the Hindu calendar." },
      { question: "Do you provide Navratri outfits?", answer: "We can arrange traditional chaniya choli and kediyu through our local partners at reasonable prices." },
      { question: "Is this suitable for non-Gujaratis?", answer: "Absolutely! Navratri is a celebration for everyone. Our guides help you with dance steps and cultural understanding." }
    ]
  },
  {
    slug: "honeymoon-in-maldives",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=80",
    title: "Honeymoon in Maldives",
    category: "Honeymoon",
    duration: "5 Days / 4 Nights",
    destinations: ["Malé", "Maafushi", "Maldives Islands"],
    price: 54999,
    originalPrice: 74999,
    rating: 4.9,
    reviews: 203,
    badge: "Trending",
    highlights: [
      "Overwater villa experience",
      "Private sunset dolphin cruise",
      "Underwater snorkeling safari",
      "Romantic beach dinner setup",
      "Couple spa & wellness session"
    ],
    inclusions: [
      "4 Nights overwater/beach villa",
      "Full board meal plan",
      "Speedboat airport transfers",
      "Sunset dolphin cruise",
      "Snorkeling excursion",
      "Honeymoon cake & room decoration"
    ],
    exclusions: [
      "International flight tickets",
      "Visa fees (if applicable)",
      "Premium alcohol & beverages",
      "Scuba diving (optional add-on)"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Malé & Resort Transfer", description: "Arrive at Velana International Airport. Speedboat transfer to resort. Welcome with garlands and cocktails. Evening beach dinner." },
      { day: 2, title: "Water Activities Day", description: "Morning snorkeling safari to coral gardens. Afternoon kayaking and paddleboarding. Sunset dolphin cruise with champagne." },
      { day: 3, title: "Island Hopping & Spa", description: "Visit local island for cultural experience. Afternoon couple spa & wellness treatment. Evening romantic sandbank dinner." },
      { day: 4, title: "Leisure & Romance", description: "Full day at leisure. Private beach breakfast. Explore the house reef. Night fishing experience. Farewell dinner." },
      { day: 5, title: "Departure", description: "Late checkout. Speedboat to Malé Airport. Depart with unforgettable memories of paradise." }
    ],
    groupSize: "2 Persons",
    difficulty: "Easy",
    description: "The ultimate romantic escape to the Maldives — crystal clear waters, pristine white beaches, and luxurious overwater villas. Create forever memories with private dining, dolphin cruises, and world-class spa experiences in paradise.",
    faqs: [
      { question: "Do Indians need a visa for Maldives?", answer: "No, Indian passport holders get a 90-day free visa on arrival in the Maldives." },
      { question: "Best time to visit Maldives?", answer: "November to April for dry season. Year-round destination with water temperatures around 27°C." },
      { question: "Can we upgrade to a water villa?", answer: "Yes, overwater villas and pool villas are available at additional cost. Contact us for premium upgrade options." }
    ]
  }
];

export const categoryGradients: Record<string, string> = {
  Pilgrimage: "from-purple-900 to-indigo-600",
  Honeymoon: "from-pink-600 to-rose-400",
  Adventure: "from-green-800 to-emerald-500",
  Wildlife: "from-yellow-800 to-orange-500",
  Leisure: "from-blue-700 to-cyan-500",
  Festival: "from-red-700 to-orange-400",
};
