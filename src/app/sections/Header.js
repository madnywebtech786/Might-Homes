"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "./styles/Header.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    bg: "slide1Bg",
    tag: "New Home Models Available",
    heading: ["Custom Homes", "Built to Inspire"],
    description:
      "From foundation to finishing touch, we craft homes tailored precisely to your lifestyle and vision.",
    primary: { label: "Explore Models", href: "/#properties" },
    secondary: { label: "Book a Showing", href: "/#contact" },
  },
  {
    bg: "slide2Bg",
    tag: "Quality You Can See",
    heading: ["Premium Build,", "Lasting Value"],
    description:
      "Every home we build meets the highest standards of craftsmanship designed to stand the test of time.",
    primary: { label: "View Our Work", href: "/gallery" },
    secondary: { label: "Learn More", href: "/about-us" },
  },
  {
    bg: "slide3Bg",
    tag: "Stress-Free Process",
    heading: ["Turnkey Homes,", "Zero Hassle"],
    description:
      "We manage every detail from design to delivery, so you can focus on what matters moving in.",
    primary: { label: "Book Consultation", href: "/#contact" },
    secondary: { label: "Our Process", href: "/about-us" },
  },
];

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
        className="h-[100svh] z-10"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className={`w-full h-full flex items-center ${slide.bg}`}>
              {/* Dark gradient left overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />

              <div className="relative z-20 w-full px-6 sm:px-10 lg:px-20 xl:px-28 pt-24">
                <div className="max-w-2xl flex flex-col gap-5">
                  {/* Tag */}
                  <div className="flex items-center gap-2">
                    <div className="h-px w-8 bg-primary" />
                    <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Heading */}
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight uppercase">
                    {slide.heading[0]}{" "}
                    <span
                      style={{
                        WebkitTextStroke: "2px #e1c08e",
                        color: "transparent",
                      }}
                    >
                      {slide.heading[1]}
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-sm">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-row gap-3 flex-wrap">
                    <Link
                      href={slide.primary.href}
                      className="flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-primary/90 transition-all duration-200"
                    >
                      {slide.primary.label}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={slide.secondary.href}
                      className="flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:border-primary hover:text-primary transition-all duration-200"
                    >
                      {slide.secondary.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-next !hidden md:!block" />
        <div className="swiper-button-prev !hidden md:!block" />
      </Swiper>
    </div>
  );
}
