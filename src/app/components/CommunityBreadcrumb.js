import Image from "next/image";
import Navbar from "./Navbar";

export default function CommunityBreadcrumb({ title, backgroundImage }) {
  return (
    <div className="relative h-[550px] w-full">
      <Navbar />

      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Breadcrumb Background"
        layout="fill"
        objectFit="fill"
        className="z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
}
