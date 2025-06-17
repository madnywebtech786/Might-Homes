import React from "react";
import PropertiesListCard from "../components/PropertiesListCard";

export default function Properties() {
  const propertiesListsData = [
    {
      cardImageSrc: "/images/buildSlide1.png",
      acres: "20,000",
      bedrooms: "3",
      bathrooms: "3",
      cardTitle: "SWEET HOME FOR SMALL FAMILY",
      cardLocation: "Boston, USA",
      cardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor sapiente obcaecati ullam.",
    },
    {
      cardImageSrc: "/images/buildSlide2.png",
      acres: "20,000",
      bedrooms: "3",
      bathrooms: "3",
      cardTitle: "SWEET HOME FOR SMALL FAMILY",
      cardLocation: "Boston, USA",
      cardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor sapiente obcaecati ullam.",
    },
    {
      cardImageSrc: "/images/buildSlide3.png",
      acres: "20,000",
      bedrooms: "3",
      bathrooms: "3",
      cardTitle: "SWEET HOME FOR SMALL FAMILY",
      cardLocation: "Boston, USA",
      cardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor sapiente obcaecati ullam.",
    },
    {
      cardImageSrc: "/images/buildSlide3.png",
      acres: "20,000",
      bedrooms: "3",
      bathrooms: "3",
      cardTitle: "SWEET HOME FOR SMALL FAMILY",
      cardLocation: "Boston, USA",
      cardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor sapiente obcaecati ullam.",
    },
    {
      cardImageSrc: "/images/buildSlide1.png",
      acres: "20,000",
      bedrooms: "3",
      bathrooms: "3",
      cardTitle: "SWEET HOME FOR SMALL FAMILY",
      cardLocation: "Boston, USA",
      cardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor sapiente obcaecati ullam.",
    },
    {
      cardImageSrc: "/images/buildSlide2.png",
      acres: "20,000",
      bedrooms: "3",
      bathrooms: "3",
      cardTitle: "SWEET HOME FOR SMALL FAMILY",
      cardLocation: "Boston, USA",
      cardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor sapiente obcaecati ullam.",
    },
  ];
  return (
    <div className="bg-gray-50 p-4 py-10 md:p-8 lg:p-12 2xl:p-20">
      <div>
        <h1 className="text-center text-2xl font-bold">NEW PROPERTIES LIST</h1>
        <p className="text-center text-sm text-gray-400 mt-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          voluptatibus deleniti voluptate voluptatem aperiam quae.
        </p>
        <p className="text-center text-sm text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
          numquam?
        </p>
      </div>

      <div className="flex justify-center mt-12">
        <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {propertiesListsData.map((cardData, index) => (
            <PropertiesListCard key={index} cardData={cardData} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
