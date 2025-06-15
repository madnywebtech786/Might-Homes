"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "./styles/Header.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
export default function Header() {
  return (
    <div className="w-full relative">
      <Navbar />

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        draggable
        autoplay={{ delay: 5000 }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="h-[550px] lg:h-screen z-10"
      >
        <SwiperSlide>
          <div className="w-full h-full flex items-center slide1Bg">
            <div className="w-full xl:w-2/3 h-full flex py-32 xl:py-0 xl:items-center justify-center px-4">
              <div className="flex flex-col justify-center gap-3 md:gap-4 lg:gap-6 z-20 md:w-11/12 lg:w-4/5">
                <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
                  <h3 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white leading-snug uppercase">
                    Custom Homes Built to Inspire
                  </h3>
                  <p className="text-white text-xs lg:text-lg w-4/5 md:w-2/3">
                    From foundation to finishing, we craft unique homes tailored
                    to your lifestyle and vision.
                  </p>
                </div>
                <button className="bg-white rounded-full p-2 lg:p-3 px-4 lg:px-6 w-max text-xxs lg:text-sm font-semibold uppercase">
                  Start Building
                </button>
              </div>
            </div>
            <div className="hidden xl:w-1/3"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full flex items-center slide2Bg">
            <div className="w-full xl:w-2/3 h-full flex py-32 xl:py-0 xl:items-center justify-center px-4">
              <div className="flex flex-col justify-center gap-3 md:gap-4 lg:gap-6 z-20 md:w-11/12 lg:w-4/5">
                <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
                  <h3 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white leading-snug uppercase">
                    Residential & Commercial Projects
                  </h3>
                  <p className="text-white text-xs lg:text-lg w-4/5 md:w-2/3">
                    We deliver high-quality construction for both homes and
                    commercial spaces with unmatched precision.
                  </p>
                </div>
                <button className="bg-white rounded-full p-2 lg:p-3 px-4 lg:px-6 w-max text-xxs lg:text-sm font-semibold uppercase">
                  View Our Work
                </button>
              </div>
            </div>
            <div className="hidden xl:w-1/3"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full flex items-center slide3Bg">
            <div className="w-full xl:w-2/3 h-full flex py-32 xl:py-0 xl:items-center justify-center px-4">
              <div className="flex flex-col justify-center gap-3 md:gap-4 lg:gap-6 z-20 md:w-11/12 lg:w-4/5">
                <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
                  <h3 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white leading-snug uppercase">
                    Turnkey Construction Management
                  </h3>
                  <p className="text-white text-xs lg:text-lg w-4/5 md:w-2/3">
                    From design to delivery, we handle every detail with expert
                    care and on-time execution.
                  </p>
                </div>
                <button className="bg-white rounded-full p-2 lg:p-3 px-4 lg:px-6 w-max !text-xxs lg:text-sm font-semibold uppercase">
                  Book Consultation
                </button>
              </div>
            </div>
            <div className="hidden xl:w-1/3"></div>
          </div>
        </SwiperSlide>

        <div className="swiper-button-next !hidden md:!block"></div>
        <div className="swiper-button-prev !hidden md:!block"></div>
      </Swiper>
    </div>
  );
}
