import Image from "next/image";
import AboutUs from "./sections/AboutUs";
import AboutUsCards from "./components/AboutUsCards";
import AboutAfter from "./sections/AboutAfter";
import Header from "./sections/Header";
import Communities from "./sections/Communities";
import WorkingCities from "./sections/WorkingCities";
import Properties from "./sections/Properties";
import Steps from "./sections/Steps";
import FAQs from "./sections/FAQs";
import Gallery from "./sections/Gallery";
import WhyChooseUs from "./sections/WhyChooseUs";
import Testimonials from "./sections/Testimonials";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";

export const metadata = {
  title: "Mighty Homes | Custom Home Builder in Alberta",
  description:
    "Discover Mighty Homes — Alberta's premium custom home builder. We build stunning, energy-efficient homes across Calgary, Airdrie, Chestermere, Cochrane, Okotoks & Strathmore. 500+ homes. 15+ years. Book your free consultation today.",
  alternates: {
    canonical: "https://mightyhomes.ca",
  },
  openGraph: {
    title: "Mighty Homes | Custom Home Builder in Alberta",
    description:
      "Build the home your family deserves. Mighty Homes crafts custom, energy-efficient homes across Alberta's most sought-after communities. Get a free quote today.",
    url: "https://mightyhomes.ca",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Mighty Homes Custom Homes Alberta" }],
  },
};

export default function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <AboutAfter />
      <WhyChooseUs />
      <Properties />
      <WorkingCities />
      <Steps />
      <Communities />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
