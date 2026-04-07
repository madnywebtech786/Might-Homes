import Navbar from "@/app/components/Navbar";
import ComingSoon from "@/app/components/ComingSoon";
import Footer from "@/app/sections/Footer";

export const metadata = {
  title: "Town Houses | Mighty Homes",
  description: "Discover our beautiful townhouse communities. Coming soon to Alberta.",
};

export default function TownHousesPage() {
  return (
    <>
      <Navbar />
      <ComingSoon
        title="Town Houses"
        subtitle="Luxury Townhomes Designed for Modern Living"
      />
      <Footer />
    </>
  );
}
