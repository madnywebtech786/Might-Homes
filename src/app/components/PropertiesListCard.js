import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Bed, Bath, ArrowRight } from "lucide-react";

export default function PropertiesListCard({ cardData, index }) {
  return (
    <div className="bg-white w-full group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col" key={index}>
      {/* Image */}
      <div className="relative overflow-hidden h-[220px]">
        <Image
          src={cardData.cardImageSrc}
          fill
          alt={cardData.cardTitle}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href={`/home/${cardData.slug}`}
            className="bg-primary text-white text-sm px-6 py-2.5 tracking-wider font-semibold rounded-xl"
          >
            VIEW HOME
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 border-b-2 border-primary">
        {[
          { icon: Home, label: "Area", value: cardData.area },
          { icon: Bed, label: "Beds", value: `${cardData.bedrooms} Beds` },
          { icon: Bath, label: "Baths", value: `${cardData.bathrooms} Baths` },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex flex-col items-center justify-center py-3 gap-1 bg-gray-50 border-r last:border-r-0 border-gray-200">
            <Icon size={15} className="text-primary" />
            <p className="text-[11px] text-gray-400 uppercase tracking-wide leading-none">{label}</p>
            <p className="text-xs font-bold text-gray-700">{value}</p>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {cardData.cardTitle}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {cardData.cardDescription.length > 120
            ? cardData.cardDescription.slice(0, 120).trimEnd() + "..."
            : cardData.cardDescription}
        </p>
        <Link
          href={`/home/${cardData.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
        >
          View Home <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
