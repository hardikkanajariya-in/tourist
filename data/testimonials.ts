export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  tourType: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh & Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    review: "Our Kashmir honeymoon with WanderNest was absolutely magical! The houseboat stay on Dal Lake, the shikara ride under the stars, and the surprise candlelight dinner — everything was beyond our expectations. The team took care of every little detail. We will treasure these memories forever!",
    tourType: "Kashmir Honeymoon",
    initials: "RS"
  },
  {
    id: 2,
    name: "Meena Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    review: "I took my parents on the Vaishno Devi Yatra and it was seamless from start to finish. The hotel in Katra was clean and close to the base camp. The guide was very knowledgeable and patient with my elderly parents. The pony booking was arranged perfectly. Highly recommended for family pilgrimages!",
    tourType: "Vaishno Devi Yatra",
    initials: "MP"
  },
  {
    id: 3,
    name: "Arjun Nair",
    location: "Kochi, Kerala",
    rating: 4,
    review: "The Ladakh Bike Expedition was the trip of a lifetime! Riding through Khardung La, camping at Pangong — every moment was surreal. The support team and mechanic were always available. The acclimatization day was a smart addition. Only wish was one more day at Pangong. Will definitely do this again!",
    tourType: "Ladakh Expedition",
    initials: "AN"
  },
  {
    id: 4,
    name: "Deepika & Rahul Verma",
    location: "New Delhi",
    rating: 5,
    review: "We booked the Rajasthan Heritage Tour for our anniversary and it exceeded all expectations. The heritage havelis were stunning, the camel safari sunset was breathtaking, and the cultural dinner at Chokhi Dhani was an experience in itself. WanderNest truly understands how to create royal experiences!",
    tourType: "Rajasthan Heritage Tour",
    initials: "DV"
  },
  {
    id: 5,
    name: "Sanjay Gupta",
    location: "Lucknow, Uttar Pradesh",
    rating: 5,
    review: "Organized a corporate retreat to Goa through WanderNest for 35 employees. Everything from hotel bookings to water sports to the sunset cruise was perfectly coordinated. Our team had an incredible bonding experience. The dedicated tour manager made everything effortless. Already planning next year's trip!",
    tourType: "Corporate Goa Tour",
    initials: "SG"
  }
];
