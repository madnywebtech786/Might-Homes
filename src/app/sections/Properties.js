import React from "react";
import Link from "next/link";
import PropertiesListCard from "../components/PropertiesListCard";
import { homesData } from "../data/homes";

const cardImages = [
  "/images/buildSlide1.png",
  "/images/buildSlide2.png",
  "/images/buildSlide3.png",
  "/images/buildSlide1.png",
  "/images/buildSlide2.png",
];

export default function Properties() {
  return (
    <div className="bg-gray-50 p-4 py-10 md:p-8 lg:p-12 2xl:p-20">
      <div>
        <h1 className="text-center text-2xl font-bold">NEW PROPERTIES LIST</h1>
        <p className="text-center text-sm text-gray-400 mt-3">
          Discover our latest home models, thoughtfully designed for modern families seeking style, comfort, and lasting quality.
        </p>
      </div>

      <div className="flex justify-center mt-12">
        <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {homesData.map((home, index) => (
            <PropertiesListCard
              key={home.slug}
              cardData={{
                cardImageSrc: cardImages[index % cardImages.length],
                area: home.area,
                bedrooms: home.bedrooms,
                bathrooms: home.baths,
                cardTitle: home.name,
                cardDescription: home.description.split("\n\n")[0],
                slug: home.slug,
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
