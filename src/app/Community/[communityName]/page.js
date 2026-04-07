import React from "react";
import Image from "next/image";
import PropertyLists from "./sections/PropertyLists";
import FAQs from "./sections/FAQs";
import SalesPersons from "./sections/SalesPersons";
import CommunityBreadcrumb from "@/app/components/CommunityBreadcrumb";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/sections/Footer";

function formatName(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({ params }) {
  const { communityName } = await params;
  const name = formatName(communityName);
  return {
    title: `${name} Community | New Homes by Mighty Homes`,
    description: `Explore new homes in ${name}, Alberta. Mighty Homes offers premium custom homes, quick possession options, and flexible floor plans in the ${name} community. Book a showing today.`,
    alternates: {
      canonical: `https://mightyhomes.ca/Community/${communityName}`,
    },
    openGraph: {
      title: `${name} Community | New Homes by Mighty Homes`,
      description: `Discover Mighty Homes in ${name}. Browse available models, floor plans, and quick possession homes. Get a free quote today.`,
      url: `https://mightyhomes.ca/Community/${communityName}`,
      images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: `${name} Community — Mighty Homes` }],
    },
  };
}

export default async function CommunityPage({ params }) {
  const { communityName } = await params;
  const name = formatName(communityName);

  return (
    <>
      <Navbar />
      <div>
        <CommunityBreadcrumb
          title={name}
          backgroundImage={"/images/buildSlide3.png"}
        />
        <div className="w-full flex justify-center p-4 py-10 md:p-8 lg:p-12 2xl:p-20 bg-gray-100">
          <div className="w-4/5 md:w-[75%] flex flex-col lg:flex-row gap-8">
            <div className="w-full flex justify-center">
              <Image
                src="/images/buildSlide3.png"
                width={600}
                height={500}
                alt={`${name} community homes — Mighty Homes`}
                className="w-full md:w-9/10 rounded-xl"
              />
            </div>
            <div className="w-full mt-10">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-3xl font-bold mb-5">
                Welcome to {name}
              </h1>
              <p className="text-gray-500 leading-relaxed">
                {name} is one of Alberta's most sought-after communities, and
                Mighty Homes is proud to be building here. Whether you're a
                growing family looking for more space, a first-time buyer
                stepping into homeownership, or simply ready to upgrade your
                lifestyle, {name} offers the perfect blend of amenity-rich living
                and community warmth. Explore our available models, connect with
                our sales team, and take the first step toward calling {name} home.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full p-4 py-10 md:p-8 lg:p-12 2xl:p-20">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-3xl font-bold text-center">
            Homes in {name}
          </h2>
          <div className="w-full flex justify-center my-10">
            <div className="w-4/5 md:w-6/10">
              <Image
                src="/images/CommunityOfSavanna.png"
                width={600}
                height={600}
                alt={`${name} community map — Mighty Homes`}
                className="w-full h-[200px] sm:h-[300px] lg:h-[440px] rounded-2xl"
              />
            </div>
          </div>
        </div>
        <PropertyLists />
        <FAQs />
        <SalesPersons />
      </div>
      <Footer />
    </>
  );
}
