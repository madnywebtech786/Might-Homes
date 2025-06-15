import Image from "next/image";
import React from "react";

export default function TestimonialCard({ image, name, designation, message }) {
  return (
    <div className="bg-white  w-4/5 mx-auto px-10 py-10 mt-20 rounded-xl">
      <div className="flex gap-3 items-center mb-5">
        <div className="mt-[-80px] md:mt-[-100px]">
          <Image
            src={image}
            width={150}
            height={200}
            alt={`${name} Image`}
            className="w-[100px] h-[110px] sm:w-[120px] sm:h-[120px] rounded-lg"
          />
        </div>
        <div className="mt-[-30px]">
          <p className="text-md lg:text-lg font-semibold">{name}</p>
          <p className="text-gray-500 text-sm">{designation}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-700 text-sm lg:text-base">{message}</p>
      </div>
    </div>
  );
}
