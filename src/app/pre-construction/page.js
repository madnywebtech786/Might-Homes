import Navbar from "@/app/components/Navbar";
import ComingSoon from "@/app/components/ComingSoon";
import Footer from "@/app/sections/Footer";

export const metadata = {
  title: "Pre Construction Projects | Mighty Homes",
  description: "Explore our upcoming pre-construction projects. Amazing new homes coming soon.",
};

export default function PreConstructionPage() {
  return (
    <>
      <Navbar />
      <ComingSoon
        title="Pre Construction Projects"
        subtitle="Future Homes Being Built for You"
      />
      <Footer />
    </>
  );
}
