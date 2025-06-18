import React from "react";
import Image from "next/image";
import PropertyLists from "./sections/PropertyLists";
import FAQs from "./sections/FAQs";
import SalesPersons from "./sections/SalesPersons";
import CommunityBreadcrumb from "@/app/components/CommunityBreadcrumb";

export default function page({ params }) {
  const name = params.communityName.replace('-'," ");
  return (
    <div>
      <CommunityBreadcrumb
        title={`${name}`}
        backgroundImage={"/images/buildSlide3.png"}
      />
      <div className="w-full flex justify-center p-4 py-10 md:p-8 lg:p-12 2xl:p-20 bg-gray-100">
        <div className="w-4/5 md:w-[75%] flex flex-col lg:flex-row gap-8">
          <div className="w-full flex justify-center">
            <Image
              src="/images/buildSlide3.png"
              width={600}
              height={500}
              alt="Community Image"
              className="w-full md:w-9/10 rounded-xl"
            />
          </div>
          <div className="w-full mt-10">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-3xl font-bold mb-5">
              Community
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt nemo, excepturi possimus reiciendis placeat libero
              impedit quidem repudiandae doloribus facilis nihil mollitia.
              Quisquam sint totam ratione aliquam. Neque inventore commodi
              incidunt quaerat quae sed saepe magni laborum dolore, a at sunt
              dicta in aperiam molestiae explicabo et velit fugit, minus nemo
              vitae blanditiis asperiores officiis? Sed corrupti quasi, vero
              dolorum maxime.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full p-4 py-10 md:p-8 lg:p-12 2xl:p-20">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-3xl font-bold text-center">
          Community Of {name}
        </h2>
        <div className="w-full flex justify-center my-10">
          <div className="w-4/5 md:w-6/10">
            <Image
              src="/images/CommunityOfSavanna.PNG"
              width={600}
              height={600}
              alt="Community Image"
              className="w-full h-[200px] sm:h-[300px] lg:h-[440px] rounded-2xl"
            />
          </div>
        </div>
      </div>
      <PropertyLists />
      <FAQs />
      <SalesPersons />
    </div>
  );
}
