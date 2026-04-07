import AboutUsCard from "@/app/components/AboutUsCards";
import React from "react";

const aboutUsCardsData = [
  {
    main_Heading: "Communities",
    card_Description:
      "Discover Mighty Homes communities across Alberta's most desirable neighbourhoods. From Calgary to Cochrane, find the perfect location to plant roots and build the life you envision.",
    card_Image_Src: "/images/buildSlide3.png",
    card_Icon_Src: "/images/logoRounded.png",
    card_Button: "View All",
  },
  {
    main_Heading: "Show Homes",
    card_Description:
      "Tour our stunning show homes and experience the Mighty Standard firsthand. Walk through thoughtfully designed spaces, premium finishes, and layouts crafted for real family living.",
    card_Image_Src: "/images/buildSlide1.png",
    card_Icon_Src: "/images/logoRounded.png",
    card_Button: "View All",
  },
  {
    main_Heading: "Town Houses",
    card_Description:
      "Low-maintenance luxury for the modern lifestyle. Our townhomes combine smart design, premium finishes, and unbeatable value. Perfect for first-time buyers and young families.",
    card_Image_Src: "/images/buildSlide2.png",
    card_Icon_Src: "/images/logoRounded.png",
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
