"use client";
import React from "react";
import TestimonialCard from "../components/TestimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export default function Testimonials() {
  const testimonials = [
    {
      name: "Lora Momen Smith",
      designation: "CEO, Momens Group",
      message:
        "We were extremely happy with the quality of work and professionalism. The team went above and beyond our expectations!",
      image: "/images/client1.png",
    },
    {
      name: "Daniel Robertson",
      designation: "Homeowner, Calgary",
      message:
        "Mighty Homes delivered on time and exceeded our expectations. Highly recommended for any exterior project!",
      image: "/images/client2.png",
    },
    {
      name: "Samantha Lee",
      designation: "Real Estate Investor",
      message:
        "The team was incredibly responsive and the results were stunning. Our curb appeal is on another level now!",
      image: "/images/client3.png",
    },
  ];
  return (
    <div className="bg-gray-50 py-10">
      <h1 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-3xl font-bold">
        What our Clients Say!
      </h1>
      <div className="w-full flex justify-center mt-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className="pb-10 ">
              <TestimonialCard
                key={index}
                name={testimonial.name}
                designation={testimonial.designation}
                message={testimonial.message}
                image={testimonial.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
