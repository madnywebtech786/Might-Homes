import Image from "next/image";
import React from "react";

export default function CityCard({ imgPath, noOfProperties, cityName }) {
  return (
    <div className="flex flex-col gap-2 relative">
      <div className="relative">
        <Image
          src={`/images/cities/${imgPath}`}
          alt={`${cityName} city`}
          width={200}
          height={200}
          className="rounded-3xl w-full"
        />
        <div className="bg-black/30 absolute top-0 left-0 rounded-3xl  h-full w-full"></div>
      </div>

      <div className="absolute left-5 bottom-5 text-white flex flex-col gap-1">
        <p className="text-xl font-bold ">{cityName}</p>
        <p className="text-xs text-gray-200">{noOfProperties} PROPERTIES</p>
      </div>
    </div>
  );
}
