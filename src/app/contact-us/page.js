import Navbar from "@/app/components/Navbar";
import Footer from "@/app/sections/Footer";
import ContactPageContent from "./ContactPageContent";

export const metadata = {
  title: "Contact Us | Mighty Homes",
  description: "Get in touch with Mighty Homes. We're here to help you build your dream home.",
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <ContactPageContent />
      <Footer />
    </>
  );
}
