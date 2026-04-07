"use client";

import Link from "next/link";
import Image from "next/image";
import { MoveLeft, Home, Bell } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Container */}
      <div className="max-w-3xl w-full text-center z-10">
        <div className="mb-12 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-primary/20 backdrop-blur-sm shadow-2xl animate-pulse">
            <Home className="w-10 h-10 text-primary" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Bay Springs <span className="text-primary">|</span> Airdrie
        </h1>
        
        <div className="h-1 w-32 bg-primary mx-auto mb-8 rounded-full" />
        
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white/90">
          Something Extraordinary is Coming
        </h2>
        
        <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
          We're currently crafting a new standard of luxury living in Airdrie. 
          Stay tuned as we unveil our latest show home that redefines elegance and comfort.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl transition-all duration-300 hover:bg-primary/80 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            <MoveLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <Link 
            href="/contact-us"
            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            <Bell className="w-5 h-5 text-primary" />
            Notify Me
          </Link>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 left-0 w-full text-center px-4">
        <p className="text-white/20 text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            Mighty Homes <span className="text-primary">✕</span> Defined Excellence
        </p>
      </div>
    </div>
  );
}
