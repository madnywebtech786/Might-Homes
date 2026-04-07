import Navbar from "@/app/components/Navbar";
import ComingSoon from "@/app/components/ComingSoon";
import Footer from "@/app/sections/Footer";

export const metadata = {
  title: "Communities | Mighty Homes",
  description: "Explore our thriving communities across Alberta. New communities coming soon.",
};

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <ComingSoon
        title="Communities"
        subtitle="Where Great Neighbourhoods Come to Life"
      />
      <Footer />
    </>
  );
}
