export const homesData = [
  {
    slug: "aurora",
    name: "The Aurora",
    bedrooms: 5,
    baths: 4,
    area: "3,219 SQFT",
    heroImage: "/images/buildSlide3.png",
    floorPlan: {
      img1: "/images/floor-plans/aurora/img1.JPG",
      img2: "/images/floor-plans/aurora/img2.JPG",
    },
    galleryImages: [
      "/images/buildSlide1.png",
      "/images/buildSlide3.png",
      "/images/buildSlide2.png",
      "/images/buildSlide1.png",
      "/images/buildSlide3.png",
      "/images/buildSlide2.png",
    ],
    description: `The Aurora is where architectural elegance meets purposeful living. Spanning 3,219 square feet, this model offers five spacious bedrooms and four full bathrooms, crafted for families who refuse to compromise on style or comfort.

Step inside to a grand double open-to-below design that floods the home with natural light. Two expansive living rooms serve both intimate family evenings and large-scale entertaining, while a formal dining area and premium spice kitchen keep every space spotless and guest-ready.

Upstairs, the bonus room offers endless possibilities as a home theatre, playroom, or office. The primary suite features a spa-inspired ensuite and generous walk-in closet. A triple-car garage and premium finishes throughout complete this truly inspiring home.`,
  },
  {
    slug: "luxe",
    name: "The Luxe",
    bedrooms: 4,
    baths: 3.5,
    area: "3,046 SQFT",
    heroImage: "/images/buildSlide3.png",
    floorPlan: {
      img1: "/images/floor-plans/luxe/img1.JPG",
      img2: "/images/floor-plans/luxe/img2.JPG",
    },
    galleryImages: [
      "/images/buildSlide1.png",
      "/images/buildSlide3.png",
      "/images/buildSlide2.png",
      "/images/buildSlide1.png",
      "/images/buildSlide3.png",
      "/images/buildSlide2.png",
    ],
    description: `The Luxe is a statement in refined living across 3,046 beautifully appointed square feet. With four generous bedrooms and 3.5 washrooms, every detail delivers a lifestyle that feels effortlessly elevated every single day.

The main floor offers a warm living area flowing into a formal dining room and a cozy breakfast nook. The walk-through spice kitchen keeps aromas and prep work tucked away while your main kitchen stays magazine-ready for guests, with premium cabinetry throughout.

Upstairs, a spacious bonus room and a clever Jack and Jill bathroom serve growing families perfectly. The triple-car garage and grand curb appeal make The Luxe not just a home, but a destination you'll be proud to arrive at every day.`,
  },
  {
    slug: "legacy",
    name: "The Legacy",
    bedrooms: 5,
    baths: 4,
    area: "3,182 SQFT",
    heroImage: "/images/buildSlide3.png",
    floorPlan: {
      img1: "/images/floor-plans/legacy/img1.JPG",
      img2: "/images/floor-plans/legacy/img2.JPG",
    },
    galleryImages: [
      "/images/buildSlide1.png",
      "/images/buildSlide3.png",
      "/images/buildSlide2.png",
      "/images/buildSlide1.png",
      "/images/buildSlide3.png",
      "/images/buildSlide2.png",
    ],
    description: `The Legacy is a lasting statement of how thoughtful design transforms everyday living. At 3,182 square feet, it balances standout architectural style with the smart practicality that growing families need.

A striking open-to-below entry creates a breathtaking first impression. Two full living rooms, a separate dining area, and a premium spice kitchen give your family the space and flexibility to live, entertain, and thrive without compromise.

A main-floor flex room with a full bath is a thoughtful solution for guests or family members who prefer to avoid stairs. Add a bonus room, five bedrooms, three upper bathrooms, and a triple-car garage, and The Legacy truly becomes a home built for generations.`,
  },
  {
    slug: "bayview",
    name: "The Bayview",
    bedrooms: 5,
    baths: 4,
    area: "2,960 SQFT",
    heroImage: "/images/buildSlide3.png",
    floorPlan: {
      img1: "/images/floor-plans/bayview/img1.JPG",
      img2: "/images/floor-plans/bayview/img2.JPG",
    },
    galleryImages: [
      "/images/buildSlide1.png",
      "/images/buildSlide3.png",
      "/images/buildSlide2.png",
      "/images/buildSlide1.png",
      "/images/buildSlide3.png",
      "/images/buildSlide2.png",
    ],
    description: `The Bayview is built around the idea that a great home should feel as grand and welcoming as possible. At 2,960 square feet, its dramatically large open-to-below area transforms the main living space into something bright, airy, and impossible to forget.

A large living room flows from the open-to-below centrepiece, drawing family and friends together naturally. A separate dining area and spacious kitchen with premium cabinetry provide everything a busy family needs day in, day out.

Five bedrooms, a main-floor flex room with full bath, three upper bathrooms, a bonus room, and a triple-car garage round out this perfectly balanced home. The Bayview is spacious enough for your whole family and grand enough to leave a lasting impression.`,
  },
  {
    slug: "willow",
    name: "The Willow",
    bedrooms: 4,
    baths: 4.5,
    area: "2,800 SQFT",
    heroImage: "/images/buildSlide3.png",
    floorPlan: {
      img1: "/images/floor-plans/willow/img1.JPG",
      img2: "/images/floor-plans/willow/img2.JPG",
    },
    galleryImages: [
      "/images/buildSlide1.png",
      "/images/buildSlide3.png",
      "/images/buildSlide2.png",
      "/images/buildSlide1.png",
      "/images/buildSlide3.png",
      "/images/buildSlide2.png",
    ],
    description: `The Willow proves that exceptional design and efficiency are the perfect partners. Across 2,800 optimized square feet, every inch has been crafted to feel intentional, spacious, and genuinely livable for families of all sizes.

Four generous bedrooms and an impressive 4.5 bathrooms, including four full baths upstairs and a convenient main-floor half bath, ensure that daily routines stay smooth and stress-free. Two distinct living rooms offer flexibility for both lively family life and quiet relaxation.

A large kitchen paired with a functional spice kitchen keeps cooking effortless, while dual open-to-below areas draw natural light deep into the home and create an elegant, airy atmosphere throughout. Smart, stunning, and built for the way families actually live.`,
  },
];

export function getHomeBySlug(slug) {
  return homesData.find((home) => home.slug === slug.toLowerCase()) || null;
}
