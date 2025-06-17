import AboutUsCard from "@/app/components/AboutUsCards";
import React from "react";

const aboutUsCardsData = [
  {
    main_Heading: "Communities",
    card_Description:
      "A vareity of our best selling designs are available at various posession dates throughout the year. Check back of ten for avaiablity and selection across communities.",
    card_Image_Src: "/images/buildSlide3.png",
    card_Icon_Src: "/images/client1.png",
    card_Button: "View All",
  },
  {
    main_Heading: "Show Homes",
    card_Description:
      "A vareity of our best selling designs are available at various posession dates throughout the year. Check back of ten for avaiablity and selection across communities.",
    card_Image_Src: "/images/buildSlide1.png",
    card_Icon_Src: "/images/client2.png",
    card_Button: "View All",
  },
  {
    main_Heading: "Town Houses",
    card_Description:
      "A vareity of our best selling designs are available at various posession dates throughout the year. Check back of ten for avaiablity and selection across communities.",
    card_Image_Src: "/images/buildSlide2.png",
    card_Icon_Src: "/images/client3.png",
    card_Button: "View All",
  },
];

export default function page() {
  return (
    <div className="w-full bg-gray-50 flex justify-center p-4 py-10 md:p-8 lg:p-12 2xl:p-20">
      <div className=" rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
          {aboutUsCardsData.map((CardData, index) => (
            <AboutUsCard CardData={CardData} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
