import { getHomeBySlug } from "@/app/data/homes";
import HomeDetailContent from "./HomeDetailContent";

export async function generateMetadata({ params }) {
  const { homeName } = await params;
  const home = getHomeBySlug(homeName);

  if (!home) {
    return {
      title: "Home Not Found | Mighty Homes",
      description: "The home model you are looking for could not be found.",
    };
  }

  return {
    title: `${home.name} | ${home.bedrooms} Bed, ${home.area} Custom Home — Mighty Homes`,
    description: `Explore ${home.name} by Mighty Homes — a ${home.area}, ${home.bedrooms}-bedroom, ${home.baths}-bathroom custom home in Alberta. View the floor plan, gallery, and book a showing today.`,
    alternates: {
      canonical: `https://mightyhomes.ca/home/${homeName}`,
    },
    openGraph: {
      title: `${home.name} | ${home.bedrooms} Bed Custom Home — Mighty Homes`,
      description: `${home.name}: ${home.area} of premium living space. ${home.bedrooms} bedrooms, ${home.baths} bathrooms, triple-car garage, and premium finishes throughout.`,
      url: `https://mightyhomes.ca/home/${homeName}`,
      images: [{ url: home.heroImage, width: 1200, height: 630, alt: `${home.name} by Mighty Homes` }],
    },
  };
}

export default function HomeDetailPage({ params }) {
  return <HomeDetailContent params={params} />;
}
