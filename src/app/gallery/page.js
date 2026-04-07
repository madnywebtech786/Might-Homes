import Navbar from "@/app/components/Navbar";
import Footer from "@/app/sections/Footer";
import GalleryPage from "./GalleryContent";

export const metadata = {
  title: "Gallery | Mighty Homes",
  description: "Browse our stunning gallery of beautiful homes built across Alberta.",
};

export default function Gallery() {
  return (
    <>
      <Navbar />
      <GalleryPage />
      <Footer />
    </>
  );
}
