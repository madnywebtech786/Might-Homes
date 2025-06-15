import Image from "next/image";
import React from "react";

export default function AboutUsCard({ CardData, index }) {
  return (
    <div key={index}>
      <h1 className="text-xl italic text-center">{CardData.main_Heading}</h1>
      <div className="bg-white">
        <div className="flex justify-center mt-4">
          <Image
            src={CardData.card_Image_Src}
            width={200}
            height={200}
            alt="Card Image"
            className="w-full max-h-[250px]"
          />
        </div>
        <div className="py-5 -mt-16">
          <div className="flex justify-center">
            <Image
              src={CardData.card_Icon_Src}
              width={80}
              height={80}
              alt="Card Image"
              className="rounded-full border-2 border-primary w-20 h-20"
            />
          </div>

          <p className="text-sm text-gray-400 paraFont text-center mt-7 px-4">
            {CardData.card_Description}
          </p>
          <button className="bg-primary text-white px-6 py-2 mt-7 block mx-auto rounded-lg hover:cursor-pointer hover:scale-95">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
