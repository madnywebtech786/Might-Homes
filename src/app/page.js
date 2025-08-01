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
