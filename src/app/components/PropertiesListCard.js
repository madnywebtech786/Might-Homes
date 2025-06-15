import React from "react";
import Image from "next/image";
import { Home, Bed, ShowerHead, LocateFixed } from "lucide-react";

export default function PropertiesListCard({ cardData, index }) {
  return (
    <div className="bg-white w-full pb-4 group" key={index}>
      <div className="relative overflow-hidden">
        <div className="flex justify-center">
          <Image
            src={cardData.cardImageSrc}
            width={500}
            height={500}
            alt="Properties-List Image"
            className="w-full max-h-[300px]"
          />
        </div>
        <div className="absolute top-full left-0 group-hover:top-0 duration-600 bg-white/20 flex items-center justify-center w-full h-full">
          <button className="bg-primary text-white text-sm px-5 py-2 tracking-wider font-semibold rounded-2xl hover:cursor-pointer">
            MORE DETAILS
          </button>
        </div>
      </div>
      <div className="bg-gray-200 flex gap-1 justify-around py-2 px-2 border-b-3 border-b-primary">
        <div className="flex items-center gap-1">
          <Home size={16} color="gray" />
          <p className="text-sm md:text-xs text-gray-500">
            {cardData.acres} Acres
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Bed size={16} color="gray" />
          <p className="text-sm md:text-xs text-gray-500">
            {cardData.bedrooms} Bedrooms
          </p>
        </div>
        <div className="flex items-center gap-1">
          <ShowerHead size={18} color="gray" />
          <p className="text-sm md:text-xs text-gray-500">
            {cardData.bathrooms} Bathrooms
          </p>
        </div>
      </div>
      <div className="w-full p-5 px-4 lg:px-8">
        <h1 className="text-2xl md:text-sm lg:text-lg font-bold mb-3 group-hover:text-primary duration-300">
          {cardData.cardTitle}
        </h1>
        <div className="w-full flex items-center gap-3 mb-3">
          <LocateFixed size={19} color="gray" />
          <p className="text-gray-400 text-md md:text-sm">
            {cardData.cardLocation}
          </p>
        </div>
        <p className="text-gray-400 text-md md:text-sm border-b border-gray-300 pb-3">
          {cardData.cardDescription}
        </p>
      </div>
    </div>
  );
}
