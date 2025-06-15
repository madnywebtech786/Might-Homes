import Image from "next/image";
import React from "react";
import { Diamond, Clock, Heart, Handshake } from "lucide-react";
export default function WhyChooseUs() {
  return (
    <div className=" p-4 py-10 md:p-8 lg:p-12 2xl:p-20">
      <h1 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold ">
        Why Choose Us
      </h1>
      <div className="hidden lg:block">
        <div className=" w-full flex justify-center my-10">
          <div className="mt-36 z-20 flex flex-col lg:gap-20">
            <div className="flex items-center gap-3 mr-[-35px]">
              <div className="">
                <h3 className="text-end text-primary text-xl font-semibold">
                  Placeholder
                </h3>
                <div className="flex justify-end">
                  <p className="text-right w-2/3">
                    Lorem ipsum dolor sit amet consectetur. adipisicing elit
                    Reprehenderit commodi.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Diamond
                  size={55}
                  color="white"
                  className="bg-primary px-1 py-1 rounded-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 mr-[-35px]">
              <div className="">
                <h3 className="text-end text-primary text-xl font-semibold">
                  Placeholder
                </h3>
                <div className="flex justify-end ">
                  <p className="text-right w-2/3">
                    Lorem ipsum dolor sit amet consectetur. adipisicing elit
                    Reprehenderit commodi.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Heart
                  size={55}
                  color="white"
                  className="bg-primary px-1 py-1 rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="z-10">
            <Image
              src="/images/whychooseus.png"
              width={450}
              height={450}
              alt="Why choose us Image"
              className="w-[470px] h-[500px] rounded-3xl"
            />
          </div>
          <div className="mt-36 z-20 flex flex-col lg:gap-20">
            <div className="flex items-center gap-3 ml-[-35px]">
              <div className="flex justify-center">
                <Clock
                  size={55}
                  color="white"
                  className="bg-primary px-1 py-1 rounded-full"
                />
              </div>
              <div className="">
                <h3 className=" text-primary text-xl font-semibold">
                  Placeholder
                </h3>
                <p className="text-left w-2/3">
                  Lorem ipsum dolor sit amet consectetur. adipisicing elit
                  Reprehenderit commodi.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-[-35px]">
              <div className="flex justify-center">
                <Handshake
                  size={55}
                  color="white"
                  className="bg-primary px-1 py-1 rounded-full"
                />
              </div>
              <div className="">
                <h3 className=" text-primary text-xl font-semibold">
                  Placeholder
                </h3>
                <p className="text-left w-2/3">
                  Lorem ipsum dolor sit amet consectetur. adipisicing elit
                  Reprehenderit commodi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden w-full my-5">
        <div className="flex flex-col md:flex-row justify-center px-4 md:px-12 gap-5 md:gap-5 lg:gap-20">
          <div className=" flex flex-col">
            <div className="bg-gray-50 px-5 py-5 rounded-xl flex items-center gap-3">
              <div className="flex justify-center">
                <Diamond
                  size={55}
                  color="white"
                  className="bg-primary px-1 py-1 rounded-full"
                />
              </div>
              <div>
                <h3 className=" text-primary text-xl font-semibold">
                  Placeholder
                </h3>
                <p className="md:text-center text-xs">
                  Lorem ipsum dolor sit amet consectetur. <br /> adipisicing
                  elit Reprehenderit commodi.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-5 rounded-xl flex items-center gap-3 mt-5">
              <div className="flex justify-center">
                <Heart
                  size={55}
                  color="white"
                  className="bg-primary px-1 py-1 rounded-full"
                />
              </div>
              <div>
                <h3 className=" text-primary text-xl font-semibold">
                  Placeholder
                </h3>
                <p className="md:text-center text-xs">
                  Lorem ipsum dolor sit amet consectetur. <br /> adipisicing
                  elit Reprehenderit commodi.
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col">
            <div className="bg-gray-50 px-5 py-5 rounded-xl flex items-center gap-3">
              <div className="flex justify-center">
                <Clock
                  size={55}
                  color="white"
                  className="bg-primary px-1 py-1 rounded-full"
                />
              </div>
              <div>
                <h3 className=" text-primary text-xl font-semibold">
                  Placeholder
                </h3>
                <p className="md:text-center text-xs">
                  Lorem ipsum dolor sit amet consectetur. <br /> adipisicing
                  elit Reprehenderit commodi.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-5 rounded-xl flex items-center gap-3 mt-5">
              <div className="flex justify-center">
                <Handshake
                  size={55}
                  color="white"
                  className="bg-primary px-1 py-1 rounded-full"
                />
              </div>
              <div>
                <h3 className=" text-primary text-xl font-semibold">
                  Placeholder
                </h3>
                <p className="md:text-center text-xs">
                  Lorem ipsum dolor sit amet consectetur. <br /> adipisicing
                  elit Reprehenderit commodi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
