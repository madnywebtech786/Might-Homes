"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/images/buildSlide1.png", title: "Modern Living", category: "Interior", span: "col-span-2 row-span-2" },
  { src: "/images/buildSlide2.png", title: "Elegant Kitchen", category: "Interior", span: "col-span-1 row-span-1" },
  { src: "/images/buildSlide3.png", title: "Master Suite", category: "Interior", span: "col-span-1 row-span-1" },
  { src: "/images/whychooseus.png", title: "Exterior View", category: "Exterior", span: "col-span-1 row-span-2" },
  { src: "/images/aboutSideImg.png", title: "Open Concept", category: "Interior", span: "col-span-2 row-span-1" },
  { src: "/images/buildSlide1.png", title: "Luxury Bath", category: "Interior", span: "col-span-1 row-span-1" },
  { src: "/images/buildSlide2.png", title: "Dream Home", category: "Exterior", span: "col-span-1 row-span-1" },
  { src: "/images/buildSlide3.png", title: "Community View", category: "Community", span: "col-span-2 row-span-1" },
  { src: "/images/whychooseus.png", title: "Front Entrance", category: "Exterior", span: "col-span-1 row-span-1" },
  { src: "/images/aboutSideImg.png", title: "Dining Area", category: "Interior", span: "col-span-1 row-span-2" },
  { src: "/images/buildSlide1.png", title: "Backyard", category: "Exterior", span: "col-span-1 row-span-1" },
  { src: "/images/buildSlide2.png", title: "Neighbourhood", category: "Community", span: "col-span-1 row-span-1" },
];

const categories = ["All", "Interior", "Exterior", "Community"];

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div
        className="relative h-[420px] md:h-[520px] flex items-end pb-16"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%), url('/images/buildSlide3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-8 lg:px-12 2xl:px-20 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-[4px] uppercase">Our Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-3xl">
            Crafted with<br />
            <span className="text-primary">Passion</span> & Precision
          </h1>
        </div>

        {/* Logo watermark */}
        <div className="absolute bottom-8 right-8 md:right-16 opacity-20">
          <Image src="/images/logoRounded.png" alt="Mighty Homes" width={80} height={80} />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="px-4 md:px-8 lg:px-12 2xl:px-20 py-4 flex items-center gap-3 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-gray-400 text-sm whitespace-nowrap">
            {filtered.length} photos
          </span>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-4 md:px-8 lg:px-12 2xl:px-20 py-12">
        {/* Feature row: 1 large + 2 stacked */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div
            className="md:col-span-2 relative overflow-hidden rounded-3xl cursor-pointer group"
            style={{ minHeight: "400px" }}
            onClick={() => setLightbox(filtered[0] || galleryImages[0])}
          >
            <Image
              src={(filtered[0] || galleryImages[0]).src}
              fill
              alt={(filtered[0] || galleryImages[0]).title}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">{(filtered[0] || galleryImages[0]).category}</span>
              <h3 className="text-white text-2xl font-bold mt-1">{(filtered[0] || galleryImages[0]).title}</h3>
            </div>
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[1, 2].map((i) => {
              const img = filtered[i] || galleryImages[i];
              return (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group flex-1"
                  style={{ minHeight: "192px" }}
                  onClick={() => setLightbox(img)}
                >
                  <Image src={img.src} fill alt={img.title} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-primary text-xs font-semibold tracking-widest uppercase">{img.category}</span>
                    <h3 className="text-white text-base font-bold">{img.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Middle mosaic row: 3 equal + 1 wide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {[3, 4, 5].map((i) => {
            const img = filtered[i] || galleryImages[i];
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ minHeight: "240px" }}
                onClick={() => setLightbox(img)}
              >
                <Image src={img.src} fill alt={img.title} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-primary text-xs font-semibold tracking-widest uppercase">{img.category}</span>
                  <h3 className="text-white text-sm font-bold">{img.title}</h3>
                </div>
                {/* Gold border accent on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}

          {/* Wide feature card */}
          {filtered[6] && (
            <div
              className="relative overflow-hidden rounded-2xl cursor-pointer group sm:col-span-2 lg:col-span-1"
              style={{ minHeight: "240px" }}
              onClick={() => setLightbox(filtered[6])}
            >
              <Image src={filtered[6].src} fill alt={filtered[6].title} className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-primary text-xs font-semibold tracking-widest uppercase">{filtered[6].category}</span>
                <h3 className="text-white text-sm font-bold">{filtered[6].title}</h3>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          )}
        </div>

        {/* Bottom bento-style row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* Tall left card */}
          {filtered[7] && (
            <div
              className="relative overflow-hidden rounded-2xl cursor-pointer group sm:row-span-2"
              style={{ minHeight: "320px" }}
              onClick={() => setLightbox(filtered[7])}
            >
              <Image src={filtered[7].src} fill alt={filtered[7].title} className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-primary text-xs font-semibold tracking-widest uppercase">{filtered[7].category}</span>
                <h3 className="text-white text-xl font-bold mt-1">{filtered[7].title}</h3>
              </div>
            </div>
          )}

          {/* Right 2x2 grid */}
          <div className="sm:col-span-1 lg:col-span-2 grid grid-cols-2 gap-4">
            {[8, 9, 10, 11].map((i) => {
              const img = filtered[i] || galleryImages[i % galleryImages.length];
              return img ? (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl cursor-pointer group"
                  style={{ minHeight: "180px" }}
                  onClick={() => setLightbox(img)}
                >
                  <Image src={img.src} fill alt={img.title} className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3">
                    <h3 className="text-white text-xs font-semibold">{img.title}</h3>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-2 left-2">
                    <span className="bg-primary/80 text-white text-xxs px-2 py-0.5 rounded-full font-semibold">{img.category}</span>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>

        {/* Logo showcase strip */}
        <div className="mt-16 mb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-gray-400 text-sm uppercase tracking-widest">Built by Mighty Homes</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-20 h-20 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300 p-3">
                  <Image
                    src="/images/logoRounded.png"
                    width={56}
                    height={56}
                    alt="Mighty Homes"
                    className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <span className="text-gray-400 text-xs text-center font-medium group-hover:text-primary transition-colors duration-300">
                  {["Air Ranch", "River Crest", "Clear Water", "South Shore", "Aspire"][i - 1]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className="relative overflow-hidden rounded-3xl mt-12 px-8 py-16 text-center"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(177,139,55,0.3) 100%), url('/images/buildSlide2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10">
            <span className="text-primary text-sm font-semibold tracking-[4px] uppercase">Start Your Journey</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">
              Love What You See?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 text-base">
              Let's design your dream home together. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="px-8 py-4 bg-primary text-white font-bold rounded-xl text-base hover:bg-yellow-600 transition-colors duration-300">
                Get a Free Quote
              </Link>
              <Link href="/#contact" className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl text-base hover:border-primary hover:text-primary transition-colors duration-300">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ paddingBottom: "60%" }}>
              <Image
                src={lightbox.src}
                fill
                alt={lightbox.title}
                className="object-cover"
              />
            </div>
            <div className="bg-black/80 p-4 flex items-center justify-between">
              <div>
                <span className="text-primary text-xs font-semibold tracking-widest uppercase">{lightbox.category}</span>
                <h3 className="text-white text-lg font-bold">{lightbox.title}</h3>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
