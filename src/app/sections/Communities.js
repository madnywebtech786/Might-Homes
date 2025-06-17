"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CommunityCard from "../components/CommunityCard";

export default function Communities() {
  const communitiesData = [
    {
      imgPath: "Airdrie.png",
      name: "Stony Plain",
      cityName: "Airdrie",
    },
    {
      imgPath: "Calgary.png",
      name: "Maple Crest",
      cityName: "Calgary",
    },
    {
      imgPath: "Chesteremere.png",
      name: "Lurel",
      cityName: "Chesteremere",
    },
    {
      imgPath: "Cochrane.png",
      name: "Stony Plain",
      cityName: "Cochrane",
    },
    {
      imgPath: "okotoks.jpg",
      name: "Lurel",
      cityName: "okotoks",
    },
  ];
  return (
    <div className="bg-white p-4 md:p-8 lg:p-12 2xl:p-20">
      <div className="flex justify-between items-center">
        <p className="text-xl sm:text-2xl md:text-4xl lg:text-3xl px-4 font-semibold headFont mt-2 text-[#0a1e40]">
          Communities
        </p>
        <button className="bg-transparent text-base py-2 font-bold border-b-2 border-primary text-primary hover:cursor-pointer hover:scale-95">
          View Communities
        </button>
      </div>

      <div className="mt-12 w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {communitiesData.map((city) => (
            <SwiperSlide className="pb-10 ">
              <CommunityCard
                name={city.name}
                imgPath={city.imgPath}
                cityName={city.cityName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
