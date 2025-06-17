import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row justify-center p-4 py-10 md:p-8 lg:p-12 2xl:p-20">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-4/5">
            <Image
              src="/images/aboutSideImg.png"
              width={500}
              height={500}
              alt="About-us Image"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full flex justify-center lg:w-1/2">
          <div className="mt-20 lg:mt-12">
            <p className="text-md font-bold tracking-wider text-primary">
              Mighty HOMES
            </p>
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-3xl px-4 font-semibold headFont mt-2 text-[#0a1e40]">
              High-quality Custom home
            </p>
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-3xl px-4 font-semibold headFont mt-2">
              builder in Edmonton.
            </p>
            <div className="px-6 sm:px-16">
              <p className="mt-10 text-sm text-gray-500 paraFont">
                Sidhu Homes has been helping people from all walks of life
                experience the lifestyle of their dreams for over two decades.
                We always do our best to ensure that your home suits you and
                your family perfectly and that every home we build holds up to
                our Sidhu Seal—the highest quality of construction and
                materials.
              </p>
              <div className="flex gap-5">
                <button className="bg-transparent mt-10 py-2 font-bold border-b-2 border-primary text-primary hover:cursor-pointer hover:scale-95">
                  Learn More
                </button>
                <button className="bg-transparent mt-10 py-2 font-bold border-b-2 border-primary text-primary hover:cursor-pointer hover:scale-95">
                  Explore Our Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
