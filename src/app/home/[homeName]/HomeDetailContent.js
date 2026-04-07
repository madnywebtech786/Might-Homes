"use client";

import Image from "next/image";
import { Home, Bed, Bath, Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";
import Gallery from "@/app/sections/Gallery";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/sections/Footer";
import Link from "next/link";
import { getHomeBySlug } from "@/app/data/homes";
import { use } from "react";

export default function HomeDetailContent({ params }) {
  const { homeName } = use(params);
  const home = getHomeBySlug(homeName);

  if (!home) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Home Not Found</h1>
          <p className="text-gray-500 mb-8">We couldn't find a home model matching "{homeName}".</p>
          <Link href="/" className="bg-primary text-white px-8 py-3 rounded-xl font-semibold">
            Back to Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const features = [
    { icon: Home, label: "Area", value: home.area },
    { icon: Bed, label: "Bedrooms", value: `${home.bedrooms} Bedrooms` },
    { icon: Bath, label: "Bathrooms", value: `${home.baths} Bathrooms` },
  ];

  const highlights = [
    "Premium spice kitchen included",
    "Triple-car garage",
    "Open-to-below design",
    "Bonus room on upper level",
    "High-end finishes throughout",
    "Energy-efficient construction",
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative lg:min-h-screen w-full">
        <Navbar />
        <div className="absolute inset-0 z-0">
          <Image
            src={home.heroImage}
            alt={`${home.name} custom home by Mighty Homes`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-20 text-white pt-32 pb-10">
          <div className="mb-6 max-w-2xl">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
              Mighty Homes | New Model
            </p>
            <h1
              className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight uppercase"
              style={{ fontFamily: "inherit" }}
            >
              {home.name.split(" ")[0]}{" "}
              <span
                style={{
                  WebkitTextStroke: "2px #e1c08e",
                  color: "transparent",
                }}
              >
                {home.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </div>

          {/* Stat cards */}
          <div className="flex flex-row justify-between gap-2 sm:gap-4 max-w-[600px]">
            {features.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row items-center sm:items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-3 sm:px-6 sm:py-4 gap-1 sm:gap-4 text-center sm:text-left"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-wider leading-none">{label}</p>
                  <p className="font-bold text-white text-xs sm:text-sm mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all"
            >
              <Phone className="w-4 h-4" /> Book a Showing
            </Link>
            <a
              href="#floor-plan"
              className="flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:border-primary hover:text-primary transition-all"
            >
              View Floor Plan <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section className="w-full py-16 lg:py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
              About This Model
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
              {home.name}
            </h2>
            <div className="space-y-5">
              {home.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  {para.trim()}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-row gap-4">
              <Link
                href="/#contact"
                className="flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all"
              >
                <Mail className="w-4 h-4" /> Schedule a Call
              </Link>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Home Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Quick specs */}
            <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-black text-primary">{home.bedrooms}</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Bedrooms</p>
              </div>
              <div>
                <p className="text-3xl font-black text-primary">{home.baths}</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Bathrooms</p>
              </div>
              <div>
                <p className="text-2xl font-black text-primary leading-tight">
                  {home.area.replace(" SQFT", "")}
                </p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Sq Ft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLOOR PLAN ── */}
      <section
        id="floor-plan"
        className="w-full py-16 lg:py-24 px-6 lg:px-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">
              Layout & Design
            </p>
            <h2 className="text-4xl font-black text-gray-900">{home.name} Floor Plan</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <Image
                src={home.floorPlan.img1}
                alt={`${home.name} floor plan — main floor`}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-sm">
                Main Floor
              </div>
            </div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <Image
                src={home.floorPlan.img2}
                alt={`${home.name} floor plan — second floor`}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-sm">
                Second Floor
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            Floor plans are for illustration purposes. Actual layout may vary slightly.
          </p>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <Gallery title={`${home.name} Gallery`} />

      {/* ── CTA BANNER ── */}
      <section
        className="relative w-full py-20 px-6 lg:px-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1117 0%, #0a0f1e 60%, #100d05 100%)" }}
      >
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 pointer-events-none">
          {[280, 360, 440, 520].map((size) => (
            <div
              key={size}
              className="absolute rounded-full border border-primary/10"
              style={{
                width: size,
                height: size,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Interested in {home.name}?
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Let's Build Your Dream Home Together
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Our team is ready to walk you through every detail of this model, answer your questions, and help you take the next step toward owning your perfect home.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all"
            >
              <Phone className="w-4 h-4" /> Get in Touch
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:border-primary hover:text-primary transition-all"
            >
              View All Models <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
