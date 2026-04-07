"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { ChevronDown, X, Menu, Home, Users, MapPin, Building2, Image as ImageIcon, Hammer, Phone } from "lucide-react";

function MobileAccordion({ label, icon: Icon, children, isOpen, onToggle }) {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.07)" }}>
            <Icon className="w-4 h-4 text-primary" />
          </div>
          <span className="font-semibold text-sm">{label}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-white/40 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="ml-4 pl-4 border-l border-primary/20 flex flex-col gap-0.5 py-1 mb-1">
          {children}
        </div>
      </div>
    </div>
  );
}

function MobileLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2.5 text-sm text-white/60 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
    >
      {children}
    </Link>
  );
}

function MobileSubAccordion({ label, children, isOpen, onToggle }) {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-2 text-sm text-white/60 hover:text-primary transition-all duration-200"
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="ml-4 flex flex-col gap-1 py-1">
          {children}
        </div>
      </div>
    </div>
  );
}

function MobileNavLink({ href, label, icon: Icon, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
    >
      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.07)" }}>
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <span className="font-semibold text-sm">{label}</span>
    </Link>
  );
}

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeSubAccordion, setActiveSubAccordion] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = isMobileNavOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileNavOpen]);

  const toggleAccordion = (i) => {
    setActiveAccordion((prev) => (prev === i ? null : i));
    setActiveSubAccordion(null);
  };
  const toggleSubAccordion = (i) => setActiveSubAccordion((prev) => (prev === i ? null : i));
  const closeMobileNav = () => { setActiveAccordion(null); setActiveSubAccordion(null); setIsMobileNavOpen(false); };

  return (
    <>
      <nav className={`w-full top-0 z-50 px-4 md:px-8 lg:px-12 2xl:px-10 py-5 transition-all duration-300 text-white ${isSticky ? "fixed bg-black/90 backdrop-blur-md shadow-lg py-3" : "absolute"}`}>
        <div className="container mx-auto lg:px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <Image src="/images/logoRounded.png" width={100} height={100} alt="Mighty Homes Logo" className="w-20 h-20" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-8 text-base">
            <Link href="/about-us" className="py-3 underline-animation">About Us</Link>

            <div className="relative group menu">
              <span className="flex items-center py-3 cursor-default">
                Show Homes
                <span className="ml-2 transition-transform transform group-hover:rotate-180">
                  <Image src="/images/icons/ArrowDownWhite.svg" alt="arrow" width={13} height={13} />
                </span>
              </span>
              <div className="dropdown-menu text-sm">
                <div className="relative group/sub submenu-parent">
                  <span className="block px-4 py-2 capitalize rounded-t-md border-b border-primary cursor-default w-full">South Shore | Chestermere</span>
                  <div className="submenu">
                    <Link href="/home/aurora" className="block px-4 py-2 capitalize">The Aurora</Link>
                  </div>
                </div>

                <div className="relative group/sub submenu-parent">
                  <span className="block px-4 py-2 capitalize border-b border-primary cursor-default w-full">Bay Springs | Airdrie</span>
                  <div className="submenu">
                    <Link href="/coming-soon" className="block px-4 py-2 capitalize">Coming Soon</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group menu">
              <span className="flex items-center py-3 cursor-default">
                Homes
                <span className="ml-2 transition-transform transform group-hover:rotate-180">
                  <Image src="/images/icons/ArrowDownWhite.svg" alt="arrow" width={13} height={13} />
                </span>
              </span>
              <div className="dropdown-menu text-sm">
                <Link href="/home/aurora" className="block px-4 py-2 capitalize rounded-t-md border-b border-primary">The Aurora</Link>
                <Link href="/home/luxe" className="block px-4 py-2 capitalize border-b border-primary">The Luxe</Link>
                <Link href="/home/legacy" className="block px-4 py-2 capitalize border-b border-primary">The Legacy</Link>
                <Link href="/home/bayview" className="block px-4 py-2 capitalize border-b border-primary">The Bayview</Link>
                <Link href="/home/willow" className="block px-4 py-2 capitalize rounded-b-md">The Willow</Link>
              </div>
            </div>

            <Link href="/community" className="py-3 underline-animation">Communities</Link>
            <Link href="/town-houses" className="py-3 underline-animation">Town Houses</Link>
            <Link href="/gallery" className="py-3 underline-animation">Gallery</Link>
            <Link href="/pre-construction" className="py-3 underline-animation">Pre Construction</Link>
            <Link href="/contact-us" className="py-3 underline-animation">Contact Us</Link>
            <Link href="/contact-us">
              <Button text="Book Now" className="cursor-pointer px-4 py-3 bg-primary rounded-lg" isSticky={isSticky} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileNavOpen(true)}
            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-primary hover:bg-primary/15 transition-colors duration-200 backdrop-blur-sm"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer — backdrop */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 xl:hidden ${isMobileNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        onClick={closeMobileNav}
      />

      {/* Mobile Drawer — panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] sm:w-[340px] z-[70] flex flex-col transition-transform duration-300 ease-in-out xl:hidden ${isMobileNavOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ background: "linear-gradient(160deg, #0d1117 0%, #0a0f1e 60%, #100d05 100%)" }}
      >
        {/* Gold left border accent */}
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-primary/0 via-primary/60 to-primary/0" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/8" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <Link href="/" onClick={closeMobileNav}>
            <Image src="/images/logoRounded.png" width={52} height={52} alt="Mighty Homes" />
          </Link>
          <button
            onClick={closeMobileNav}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/8 transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav items — scrollable */}
        <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-0.5">

          <MobileNavLink href="/about-us" label="About Us" icon={Users} onClick={closeMobileNav} />

          <MobileAccordion
            label="Show Homes"
            icon={Home}
            isOpen={activeAccordion === 1}
            onToggle={() => toggleAccordion(1)}
          >
            <MobileSubAccordion
              label="South Shore | Chestermere"
              isOpen={activeSubAccordion === 1.1}
              onToggle={() => toggleSubAccordion(1.1)}
            >
              <MobileLink href="/home/aurora" onClick={closeMobileNav}>The Aurora</MobileLink>
            </MobileSubAccordion>

            <MobileSubAccordion
              label="Bay Springs | Airdrie"
              isOpen={activeSubAccordion === 1.2}
              onToggle={() => toggleSubAccordion(1.2)}
            >
              <MobileLink href="/coming-soon" onClick={closeMobileNav}>Coming Soon</MobileLink>
            </MobileSubAccordion>
          </MobileAccordion>

          <MobileAccordion
            label="Homes"
            icon={Building2}
            isOpen={activeAccordion === 2}
            onToggle={() => toggleAccordion(2)}
          >
            <MobileLink href="/home/aurora" onClick={closeMobileNav}>The Aurora</MobileLink>
            <MobileLink href="/home/luxe" onClick={closeMobileNav}>The Luxe</MobileLink>
            <MobileLink href="/home/legacy" onClick={closeMobileNav}>The Legacy</MobileLink>
            <MobileLink href="/home/bayview" onClick={closeMobileNav}>The Bayview</MobileLink>
            <MobileLink href="/home/willow" onClick={closeMobileNav}>The Willow</MobileLink>
          </MobileAccordion>

          <MobileNavLink href="/community" label="Communities" icon={MapPin} onClick={closeMobileNav} />
          <MobileNavLink href="/town-houses" label="Town Houses" icon={Building2} onClick={closeMobileNav} />
          <MobileNavLink href="/pre-construction" label="Pre Construction" icon={Hammer} onClick={closeMobileNav} />
          <MobileNavLink href="/gallery" label="Gallery" icon={ImageIcon} onClick={closeMobileNav} />
          <MobileNavLink href="/contact-us" label="Contact Us" icon={Phone} onClick={closeMobileNav} />

          {/* Book Now CTA */}
          <div className="px-4 pt-4">
            <Link
              href="/contact-us"
              onClick={closeMobileNav}
              className="block w-full text-center px-6 py-3.5 bg-primary text-white font-bold rounded-xl text-sm hover:bg-yellow-600 transition-colors duration-300"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>

        {/* Footer — contact + socials */}
        <div className="px-5 py-5 border-t flex flex-col gap-4" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex flex-col gap-2">
            <a href="tel:5874357924" className="flex items-center gap-2.5 text-white/50 hover:text-primary transition-colors duration-200 text-xs">
              <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Phone className="w-3 h-3 text-primary" />
              </div>
              587-435-7924
            </a>
            <a href="mailto:info@mightyhomesinc.ca" className="flex items-center gap-2.5 text-white/50 hover:text-primary transition-colors duration-200 text-xs">
              <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              info@mightyhomesinc.ca
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.06)" }}>
              <img src="/images/icons/FacebookWhite.svg" alt="Facebook" className="h-4 w-4 opacity-60" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.06)" }}>
              <img src="/images/icons/InstaWhite.svg" alt="Instagram" className="h-4 w-4 opacity-60" />
            </a>
            <p className="text-white/20 text-xxs ml-auto">© 2025 Mighty Homes</p>
          </div>
        </div>
      </div>
    </>
  );
}
