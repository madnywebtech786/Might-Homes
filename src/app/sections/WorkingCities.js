"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CityCard from "../components/CityCard";
import StatsSection from "./StatsSection";
export default function WorkingCities() {
  const citiesData = [
    {
      imgPath: "Airdrie.png",
      noOfProperties: "12",
      cityName: "Airdrie",
    },
    {
      imgPath: "Calgary.png",
      noOfProperties: "13",
      cityName: "Calgary",
    },
    {
      imgPath: "Chesteremere.png",
      noOfProperties: "1",
      cityName: "Chesteremere",
    },
    {
      imgPath: "Cochrane.png",
      noOfProperties: "5",
      cityName: "Cochrane",
    },
    {
      imgPath: "okotoks.jpg",
      noOfProperties: "6",
      cityName: "okotoks",
    },
  ];
  return (
    <div className="bg-gray-50 p-4 py-10 md:p-8 lg:p-12 2xl:p-20 lg:!pb-40 relative">
      <p className="text-xl sm:text-2xl md:text-4xl lg:text-3xl px-4 font-semibold headFont mt-2 text-center">
        Our Working Areas
      </p>

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
          {citiesData.map((city) => (
            <SwiperSlide className="pb-10 ">
              <CityCard
                noOfProperties={city.noOfProperties}
                imgPath={city.imgPath}
                cityName={city.cityName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <StatsSection />
    </div>
  );
}
