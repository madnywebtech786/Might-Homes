import Image from "next/image";
import React from "react";

const rowLayouts = [
  ["lg:w-[22%]", "lg:w-[45%]", "lg:w-[33%]"],
  ["lg:w-[45%]", "lg:w-[33%]", "lg:w-[22%]"],
];

export default function Gallery({ title = "Our Amazing Work Gallery", images = [], homeName = "" }) {
  if (!images || images.length === 0) return null;

  const rows = [images.slice(0, 3), images.slice(3, 6)];

  return (
    <div className="p-4 py-10 md:p-8 lg:p-12 2xl:p-20">
      <h1 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-3xl font-bold capitalize">
        {title}
      </h1>

      <div className="w-full flex justify-center">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-3 rounded-lg lg:px-5 py-6">
            {rows.map((row, ri) => (
              <div key={ri} className="w-full flex flex-col md:flex-row gap-3">
                {row.map((src, ci) => (
                  <div key={ci} className={`w-full ${rowLayouts[ri][ci]} relative overflow-hidden rounded-lg`}>
                    <Image
                      src={src}
                      width={600}
                      height={400}
                      loading="lazy"
                      alt={`${homeName || "Mighty Homes"} gallery image ${ri * 3 + ci + 1}`}
                      className="w-full h-[260px] object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
