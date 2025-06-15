import Image from "next/image";
import React from "react";

export default function CommunityCard({ imgPath, name, cityName }) {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={`/images/cities/${imgPath}`}
        alt={`${cityName} city`}
        width={200}
        height={200}
        className="rounded-3xl w-full"
      />
      <div className="pl-2">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-xs text-gray-400">{cityName}</p>
      </div>
    </div>
  );
}
