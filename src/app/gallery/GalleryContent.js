"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  { src: "/images/decore-imgs/gallery1.webp", title: "Modern Living", category: "Interior", span: "col-span-2 row-span-2" },
  { src: "/images/decore-imgs/gallery2.webp", title: "Elegant Kitchen", category: "Interior", span: "col-span-1 row-span-1" },
  { src: "/images/decore-imgs/gallery3.webp", title: "Master Suite", category: "Interior", span: "col-span-1 row-span-1" },
  { src: "/images/decore-imgs/gallery4.webp", title: "Exterior View", category: "Exterior", span: "col-span-1 row-span-2" },
  { src: "/images/decore-imgs/gallery5.webp", title: "Open Concept", category: "Interior", span: "col-span-2 row-span-1" },
  { src: "/images/decore-imgs/gallery6.webp", title: "Luxury Bath", category: "Interior", span: "col-span-1 row-span-1" },
  { src: "/images/decore-imgs/gallery7.webp", title: "Dream Home", category: "Exterior", span: "col-span-1 row-span-1" },
  { src: "/images/decore-imgs/gallery8.webp", title: "Community View", category: "Community", span: "col-span-2 row-span-1" },
  { src: "/images/decore-imgs/gallery9.webp", title: "Front Entrance", category: "Exterior", span: "col-span-1 row-span-1" },
  { src: "/images/decore-imgs/gallery10.webp", title: "Dining Area", category: "Interior", span: "col-span-1 row-span-2" },
  { src: "/images/decore-imgs/gallery11.webp", title: "Backyard", category: "Exterior", span: "col-span-1 row-span-1" },
  { src: "/images/decore-imgs/gallery12.webp", title: "Neighbourhood", category: "Community", span: "col-span-1 row-span-1" },
];

export default function GalleryContent() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((img) => {
    const idx = galleryImages.findIndex((g) => g.src === img.src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prev, next, closeLightbox]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div
        className="relative h-[420px] md:h-[520px] flex items-end pb-16"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%), url('/images/decore-imgs/townhouse.webp')",
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
          <Image src="/images/logoRounded.png" loading="lazy" alt="Mighty Homes" width={80} height={80} />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-4 md:px-8 lg:px-12 2xl:px-20 py-12">
        {/* Feature row: 1 large + 2 stacked */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div
            className="md:col-span-2 relative overflow-hidden rounded-3xl cursor-pointer group"
            style={{ minHeight: "400px" }}
            onClick={() => openLightbox(galleryImages[0] || galleryImages[0])}
          >
            <Image
              src={(galleryImages[0] || galleryImages[0]).src}
              fill
              loading="lazy"
              alt={(galleryImages[0] || galleryImages[0]).title}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
  
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[1, 2].map((i) => {
              const img = galleryImages[i] || galleryImages[i];
              return (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group flex-1"
                  style={{ minHeight: "192px" }}
                  onClick={() => openLightbox(img)}
                >
                  <Image src={img.src} fill alt={img.title} loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                </div>
              );
            })}
          </div>
        </div>

        {/* Middle mosaic row: 3 equal + 1 wide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {[3, 4, 5].map((i) => {
            const img = galleryImages[i] || galleryImages[i];
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ minHeight: "240px" }}
                onClick={() => openLightbox(img)}
              >
                <Image src={img.src} fill alt={img.title} loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
           
                {/* Gold border accent on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}

          {/* Wide feature card */}
          {galleryImages[6] && (
            <div
              className="relative overflow-hidden rounded-2xl cursor-pointer group sm:col-span-2 lg:col-span-1"
              style={{ minHeight: "240px" }}
              onClick={() => openLightbox(galleryImages[6])}
            >
              <Image src={galleryImages[6].src} loading="lazy" fill alt={galleryImages[6].title} className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          )}
        </div>

        {/* Bottom bento-style row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* Tall left card */}
          {galleryImages[7] && (
            <div
              className="relative overflow-hidden rounded-2xl cursor-pointer group sm:row-span-2"
              style={{ minHeight: "320px" }}
              onClick={() => openLightbox(galleryImages[7])}
            >
              <Image src={galleryImages[7].src} loading="lazy" fill alt={galleryImages[7].title} className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        
            </div>
          )}

          {/* Right 2x2 grid */}
          <div className="sm:col-span-1 lg:col-span-2 grid grid-cols-2 gap-4">
            {[8, 9, 10, 11].map((i) => {
              const img = galleryImages[i] || galleryImages[i % galleryImages.length];
              return img ? (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl cursor-pointer group"
                  style={{ minHeight: "180px" }}
                  onClick={() => openLightbox(img)}
                >
                  <Image src={img.src} fill alt={img.title} loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            
                </div>
              ) : null;
            })}
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

      {/* Lightbox slider */}
      {lightboxIndex !== null && (() => {
        const current = galleryImages[lightboxIndex];
        return (
          <div
            className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>

            {/* Main image + nav */}
            <div
              className="relative w-full max-w-5xl px-14 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prev}
                className="absolute left-2 w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full" style={{ paddingBottom: "62%" }}>
                <Image
                  key={current.src}
                  src={current.src}
                  loading="lazy"
                  fill
                  alt={current.title}
                  className="object-contain"
                  
                />
              </div>

              <button
                onClick={next}
                className="absolute right-2 w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

         

            {/* Thumbnail strip */}
            <div
              className="flex gap-2 mt-5 overflow-x-auto max-w-2xl px-4 pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setLightboxIndex(i)}
                  className={`relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${i === lightboxIndex ? "border-primary scale-110" : "border-transparent opacity-50 hover:opacity-80"}`}
                >
                  <Image src={img.src} fill alt={img.title} loading="lazy" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        );
      })()}
    </div>
  );
}
