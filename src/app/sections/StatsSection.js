"use client";
import React, { useEffect, useRef, useState } from "react";
import Counter from "./CounterPart"; // Import the Counter component
import Image from "next/image";

const StatsSection = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const stats = [
    {
      value: 15,
      label: "Years of Experience",
      symbol: "+",
      animation: "fade-up",
    },
    {
      value: 120,
      label: "The Best Property",
      symbol: "k",
      animation: "fade-down",
    },
    {
      value: 50,
      label: "Partners Worked",
      animation: "fade-up",
    },
    {
      value: 50,
      label: "World Clients",
      symbol: "k",
      animation: "fade-down",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="my-20 py-10 mx-4 md:mx-8 lg:mx-12 xl:mx-20 bg-white rounded-lg shadow-xl block lg:absolute -bottom-1/4 left-1/8"
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 ">
        {stats.map((stat, index) => (
          <div
            className={`flex justify-center lg:justify-center px-8 py-5 w-full gap-10  ${
              index != 3 ? "lg:border-r-2" : ""
            } border-gray-300`}
          >
            <div
              key={index}
              className={` flex flex-col items-center text-center border-gray-200 ${
                index === 0 ? "rounded-tl-xl rounded-bl-xl" : ""
              } ${
                index === stats.length - 1
                  ? "rounded-tr-xl rounded-br-xl  !border-r-0"
                  : ""
              }`}
              data-aos={stat.animation}
              data-aos-delay={index * 100}
            >
              <h3 className="text-3xl lg:text-5xl font-bold text-primary">
                {stat.prefix || ""}
                <Counter endValue={stat.value} start={startCounting} />
                {stat.symbol || ""}
              </h3>
              <p className="mt-2 text-xl text-black font-bold">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
