import Navbar from "@/app/components/Navbar";
import Footer from "@/app/sections/Footer";
import AboutUsContent from "./AboutUsContent";

export const metadata = {
  title: "About Us | Mighty Homes — Alberta's Custom Home Builder",
  description:
    "Learn about Mighty Homes — 15+ years of building premium custom homes across Alberta. Discover our story, values, 6-step build process, and the team behind every Mighty Standard home.",
  alternates: {
    canonical: "https://mightyhomes.ca/about-us",
  },
  openGraph: {
    title: "About Mighty Homes | Alberta's Trusted Custom Home Builder",
    description:
      "15+ years. 500+ homes built. 98% client satisfaction. Mighty Homes is Alberta's most trusted custom home builder.",
    url: "https://mightyhomes.ca/about-us",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "About Mighty Homes" }],
  },
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <AboutUsContent />
      <Footer />
    </>
  );
}
