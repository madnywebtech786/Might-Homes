"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Bell, ArrowRight } from "lucide-react";

export default function ComingSoon({ title = "Coming Soon", subtitle = "Something Amazing is Being Built" }) {



  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-30 md:py-26">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(10,15,30,0.92) 60%, rgba(177,139,55,0.18) 100%), url('/images/buildSlide1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative gold rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary opacity-[0.07] z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary opacity-[0.12] z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-primary opacity-[0.18] z-0 pointer-events-none" />

      {/* Subtle top-right glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary opacity-[0.05] blur-3xl z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 md:px-8 text-center max-w-3xl mx-auto w-full">

     

        {/* Section label */}
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-primary" />
          <span className="text-primary text-xs font-semibold tracking-[5px] uppercase">{title}</span>
          <div className="h-px w-10 bg-primary" />
        </div>

        {/* Big "Coming Soon" text */}
        <div className="flex flex-col gap-2">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-white leading-none tracking-tight">
            Coming
          </h1>
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight"
            style={{ WebkitTextStroke: "2px #e1c08e", color: "transparent" }}
          >
            Soon
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
          {subtitle}. We're putting the final touches on something
          extraordinary. Be the first to know when we launch.
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-sm">
          <div className="flex-1 h-px bg-white/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <div className="flex-1 h-px bg-white/10" />
        </div>


        {/* Action links */}
        <div className="flex flex-row gap-3 items-center">
          <Link
            href="/#contact"
            className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-xl text-sm hover:border-primary hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl text-sm hover:bg-yellow-600 transition-colors duration-300 shadow-lg shadow-primary/30"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <a
            href="mailto:info@mightyhomesinc.ca"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 group"
          >
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
              <Mail className="w-3 h-3 text-primary group-hover:text-white transition-colors duration-200" />
            </div>
            <span className="text-gray-400 text-xs group-hover:text-primary transition-colors duration-200">
              info@mightyhomesinc.ca
            </span>
          </a>

          <div className="hidden sm:flex w-1 h-1 rounded-full bg-white/20" />

          <a
            href="tel:5874357924"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 group"
          >
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
              <svg className="w-3 h-3 text-primary group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
              </svg>
            </div>
            <span className="text-gray-400 text-xs group-hover:text-primary transition-colors duration-200">
              587-435-7924
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
