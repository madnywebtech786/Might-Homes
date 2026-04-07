import Image from "next/image";
import Link from "next/link";
import React from "react";

const stats = [
  { value: "15+", label: "Years Building" },
  { value: "7+", label: "Communities" },
];

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
              alt="Mighty Homes custom home builders Alberta"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full flex justify-center lg:w-1/2">
          <div className="mt-20 lg:mt-12 max-w-lg">
            <p className="text-md font-bold tracking-wider text-primary">
              Mighty Homes
            </p>
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-3xl px-4 font-semibold headFont mt-2 text-[#0a1e40]">
              Alberta's Trusted Custom Home
            </p>
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-3xl px-4 font-semibold headFont mt-2">
              Builder Since 2010.
            </p>
            <div className="px-4 sm:px-6">
              <p className="mt-6 text-sm text-gray-500 paraFont leading-relaxed">
                For over 15 years, Mighty Homes has been turning the dream of
                homeownership into reality for Alberta families. We build more
                than houses. We create spaces where milestones happen, children
                grow, and memories are made to last a lifetime. Every home we
                deliver meets our Mighty Standard: the highest benchmark for
                craftsmanship, materials, and care.
              </p>
              <p className="mt-4 text-sm text-gray-500 paraFont leading-relaxed">
                From Calgary to Cochrane, Airdrie to Okotoks, our homes are
                woven into the fabric of Alberta's most sought-after
                neighbourhoods. We don't just hand over keys. We stay with
                you from the first design conversation through to move-in day
                and beyond.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map(({ value, label }) => (
                  <div key={label} className="bg-gray-50 rounded-xl px-4 py-4 border border-gray-100">
                    <p className="text-2xl font-extrabold text-primary">{value}</p>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <Link href="/about-us" className="bg-transparent py-2 font-bold border-b-2 border-primary text-primary hover:scale-95 transition-transform text-sm">
                  Our Story
                </Link>
                <Link href="/gallery" className="bg-transparent py-2 font-bold border-b-2 border-primary text-primary hover:scale-95 transition-transform text-sm">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
