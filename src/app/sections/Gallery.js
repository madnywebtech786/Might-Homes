import Image from "next/image";
import React from "react";

export default function Gallery({title="Our Amaizing Work Gallery"}) {
  return (
    <div className="p-4 py-10 md:p-8 lg:p-12 2xl:p-20">
      <h1 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-3xl font-bold capitalize">
        {title}
      </h1>

      <div className="w-full flex justify-center">
        <div className="w-full">
          <div className=" grid grid-cols-1 gap-3 rounded-lg px-5 py-6">
            <div className="w-full flex flex-col md:flex-row gap-3">
              <div className="w-full lg:w-[22%] relative">
                <div>
                  <Image
                    src="/images/buildSlide1.png"
                    width={200}
                    height={200}
                    alt="Gallery Image"
                    className="w-full h-[260px] rounded-lg"
                  />
                </div>
                <div className="absolute bottom-3 left-4 text-white font-semibold">
                  Tea testing
                </div>
              </div>
              <div className="w-full lg:w-[45%] relative">
                <div>
                  <Image
                    src="/images/buildSlide3.png"
                    width={200}
                    height={200}
                    alt="Gallery Image"
                    className="w-full h-[260px] rounded-lg"
                  />
                </div>
                <div className="absolute bottom-3 left-4 text-white font-semibold">
                  Plethora of books
                </div>
              </div>
              <div className="w-full lg:w-[33%] relative">
                <div>
                  <Image
                    src="/images/buildSlide2.png"
                    width={200}
                    height={200}
                    alt="Gallery Image"
                    className="w-full h-[260px] rounded-lg"
                  />
                </div>
                <div className="absolute bottom-3 left-4 text-white font-semibold">
                  Crysanthemum farm
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-3">
              <div className="w-full lg:w-[45%] relative">
                <div>
                  <Image
                    src="/images/buildSlide1.png"
                    width={200}
                    height={200}
                    alt="Gallery Image"
                    className="w-full h-[260px] rounded-lg"
                  />
                </div>
                <div className="absolute bottom-3 left-4 text-white font-semibold">
                  Agricultural workshops
                </div>
              </div>
              <div className="w-full lg:w-[33%] relative">
                <div>
                  <Image
                    src="/images/buildSlide3.png"
                    width={200}
                    height={200}
                    alt="Gallery Image"
                    className="w-full h-[260px] rounded-lg"
                  />
                </div>
                <div className="absolute bottom-3 left-4 text-white font-semibold">
                  Performances
                </div>
              </div>
              <div className="w-full lg:w-[22%] relative">
                <div>
                  <div>
                    <Image
                      src="/images/buildSlide2.png"
                      width={200}
                      height={200}
                      alt="Gallery Image"
                      className="w-full h-[260px] rounded-lg"
                    />
                  </div>
                  <div className="absolute bottom-3 left-4 text-white font-semibold">
                    A miniature vilage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
