"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Change when scrolling past 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const toggleAccordion = (accordionIndex) => {
    setActiveAccordion((prev) =>
      prev === accordionIndex ? null : accordionIndex
    );
  };

  const closeMobileNav = () => {
    if (activeAccordion === 1) {
      toggleAccordion(1);
    }
    setIsMobileNavOpen(false); // Close the mobile nav when a link is clicked
  };

  return (
    <>
      <nav
        className={`absolute w-full top-0 z-50 px-4 md:px-8 lg:px-12 2xl:px-10 py-5 transition-colors duration-300 text-white`}
      >
        <div className="container mx-auto lg:px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-base font-bold">
            <Link href="/">
              <Image
                src={
                  isSticky
                    ? "/images/logoRounded.png"
                    : "/images/logoRounded.png"
                }
                width={100}
                height={100}
                alt="Mighty Homes Logo"
                className="pt-5"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-8 text-base">
            <Link href="/about-us" className="py-3 underline-animation">
              About Us
            </Link>
            <div className="relative group menu">
              <div className="flex items-center">
                <Link href="/about-us" className=" flex items-center py-3 ">
                  Show Homes
                  <span className="ml-2 transition-transform transform group-hover:rotate-180">
                    <Image
                      src="/images/icons/ArrowDownWhite.svg"
                      alt="arrow img"
                      width={13}
                      height={13}
                    />
                  </span>
                </Link>
              </div>

              {/* Dropdown Menu */}
              <div className="dropdown-menu text-sm">
                <Link
                  href="/home/Chestermer"
                  className="block px-4 py-2 hover:bg-primary capitalize rounded-t-md border-b border-primary"
                >
                  Chestermer
                </Link>
                <Link
                  href="/home/Airdrie"
                  className="block px-4 py-2 hover:bg-primary capitalize rounded-b-md"
                >
                  Airdrie
                </Link>
              </div>
            </div>
            <div className="relative group menu">
              <div className="flex items-center">
                <Link href="/about-us" className=" flex items-center py-3 ">
                  Homes
                  <span className="ml-2 transition-transform transform group-hover:rotate-180">
                    <Image
                      src="/images/icons/ArrowDownWhite.svg"
                      alt="arrow img"
                      width={13}
                      height={13}
                    />
                  </span>
                </Link>
              </div>

              {/* Dropdown Menu */}
              <div className="dropdown-menu text-sm">
                <Link
                  href="/home/Aspire"
                  className="block px-4 py-2 hover:bg-primary capitalize rounded-t-md border-b border-primary"
                >
                  Aspire
                </Link>
                <Link
                  href="/home/Davis"
                  className="block px-4 py-2 hover:bg-primary capitalize border-b border-primary"
                >
                  Davis
                </Link>
                <Link
                  href="/home/Dean"
                  className="block px-4 py-2 hover:bg-primary capitalize border-b border-primary"
                >
                  Dean
                </Link>
                <Link
                  href="/home/Eastwood"
                  className="block px-4 py-2 hover:bg-primary capitalize rounded-b-md"
                >
                  Eastwood
                </Link>
              </div>
            </div>
            <div className="relative group menu">
              <div className="flex items-center">
                <Link href="#" className=" flex items-center py-3 ">
                  Communities
                  <span className="ml-2 transition-transform transform group-hover:rotate-180">
                    <Image
                      src="/images/icons/ArrowDownWhite.svg"
                      alt="arrow img"
                      width={13}
                      height={13}
                    />
                  </span>
                </Link>
              </div>

              {/* Dropdown Menu */}
              <div className="dropdown-menu text-sm">
                <Link
                  href="/Community/"
                  className="block px-4 py-2 hover:bg-primary capitalize rounded-t-md border-b border-primary"
                >
                  All Communities
                </Link>
                <Link
                  href="/Community/Air-Ranch"
                  className="block px-4 py-2 hover:bg-primary capitalize border-b border-primary"
                >
                  Air Ranch | Okotoksh
                </Link>
                <Link
                  href="/Community/River-Crest"
                  className="block px-4 py-2 hover:bg-primary capitalize border-b border-primary"
                >
                  River Crest | Cochrane
                </Link>
                <Link
                  href="/Community/Clear-Water"
                  className="block px-4 py-2 hover:bg-primary capitalize border-b border-primary"
                >
                  Clear Water | Chestermere
                </Link>
                <Link
                  href="/Community/South-Shore"
                  className="block px-4 py-2 hover:bg-primary capitalize border-b border-primary"
                >
                  South Shore | Chestermere
                </Link>
                <Link
                  href="/Community/Aspan"
                  className="block px-4 py-2 hover:bg-primary capitalize border-b border-primary"
                >
                  Aspan | Calagry
                </Link>
                <Link
                  href="/Community/Bonus"
                  className="block px-4 py-2 hover:bg-primary capitalize border-b border-primary"
                >
                  Bonus | Calgary
                </Link>
                <Link
                  href="/Community/Abrio"
                  className="block px-4 py-2 hover:bg-primary capitalize rounded-b-md"
                >
                  Abrio | Airdrie
                </Link>
              </div>
            </div>
            <Link href="/projects" className=" py-3 underline-animation">
              Town Houses
            </Link>
            <Link href="/projects" className=" py-3 underline-animation">
              Gallery
            </Link>
            <Link href="/contact-us" className=" py-3 underline-animation">
              Pre Construction Projects
            </Link>
            <Link href="/contact-us" className=" py-3 underline-animation">
              Contact Us
            </Link>
            <div className="hidden xl:flex">
              <Link href="/contact-us">
                <Button
                  text={"Book Now"}
                  className="px-4 py-3 bg-primary rounded-lg "
                  isSticky={isSticky}
                  cl
                />
              </Link>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="xl:hidden">
            <button onClick={toggleMobileNav}>
              <span className="text-2xl">&#9776;</span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 max-h-screen overflow-scroll ${
            isMobileNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileNav} className="text-2xl text-black">
              &times;
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col items-center text-black px-4">
            <Link
              href="/about-us"
              className="text-base font-medium border-b w-full text-start py-2"
              onClick={closeMobileNav}
            >
              About Us
            </Link>

            <div className="w-full mobile-menu">
              {/* Planning Accordion */}
              <button
                onClick={() => toggleAccordion(1)}
                className="text-base font-medium w-full text-left py-3 border-b flex justify-between items-center"
              >
                Show Homes
                <Image
                  src="/images/icons/ArrowDown.svg"
                  alt="arrow"
                  width={13}
                  height={13}
                  className={`transform transition-transform ${
                    activeAccordion === 1 ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 1 ? "max-h-80" : "max-h-0"
                }`}
                style={{
                  transitionProperty: "max-height",
                }}
              >
                <div className="flex flex-col bg-primaryExtraLight text-base rounded-lg">
                  <Link
                    href="/home/Chestermer"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    Chestermer
                  </Link>
                  <Link
                    href="/home/Airdrie"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    Airdrie
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full mobile-menu">
              {/* Planning Accordion */}
              <button
                onClick={() => toggleAccordion(2)}
                className="text-base font-medium w-full text-left py-3 border-b flex justify-between items-center "
              >
                Homes
                <Image
                  src="/images/icons/ArrowDown.svg"
                  alt="arrow"
                  width={13}
                  height={13}
                  className={`transform transition-transform ${
                    activeAccordion === 2 ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 2 ? "max-h-80" : "max-h-0"
                }`}
                style={{
                  transitionProperty: "max-height",
                }}
              >
                <div className="flex flex-col bg-primaryExtraLight text-base rounded-lg">
                  <Link
                    href="/home/Aspire"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    Aspire
                  </Link>
                  <Link
                    href="/home/Connery"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    Connery
                  </Link>
                  <Link
                    href="/home/Davis"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    Davis
                  </Link>
                  <Link
                    href="/home/Dean"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    Dean
                  </Link>
                  <Link
                    href="/home/Eastwood"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    Eastwood
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full mobile-menu">
              {/* Planning Accordion */}
              <button
                onClick={() => toggleAccordion(3)}
                className="text-base font-medium w-full text-left py-3 border-b flex justify-between items-center "
              >
                Communities
                <Image
                  src="/images/icons/ArrowDown.svg"
                  alt="arrow"
                  width={13}
                  height={13}
                  className={`transform transition-transform ${
                    activeAccordion === 3 ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 3 ? "max-h-80" : "max-h-0"
                }`}
                style={{
                  transitionProperty: "max-height",
                }}
              >
                <div className="flex flex-col bg-primaryExtraLight text-base rounded-lg">
                  <Link
                    href="/Community/all"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    All Communities
                  </Link>
                  <Link
                    href="/Community/Air-Ranch"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    Air Ranch | Okotoksh
                  </Link>
                  <Link
                    href="/Community/River-Crest"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    River Crest | Cochrane
                  </Link>
                  <Link
                    href="/Community/Clear-Water"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    Clear Water | Chestermere
                  </Link>
                  <Link
                    href="/Community/South-Shore"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    South Shore | Chestermere
                  </Link>{" "}
                  <Link
                    href="/Community/Aspan"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    Aspan | Calagry
                  </Link>{" "}
                  <Link
                    href="/Community/Bonus"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    Bonus | Calgary
                  </Link>
                  <Link
                    href="/Community/Abrio"
                    className="block px-4 py-3 "
                    onClick={closeMobileNav}
                  >
                    Abrio | Airdrie
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/services"
              className="text-base font-medium border-b w-full text-start py-2"
              onClick={closeMobileNav}
            >
              Town Houses
            </Link>
            <Link
              href="/products"
              className="text-base font-medium border-b w-full text-start py-2"
              onClick={closeMobileNav}
            >
              Pre Construction Projects
            </Link>
            <Link
              href="/projects"
              className="text-base font-medium border-b w-full text-start py-2"
              onClick={closeMobileNav}
            >
              Gallery
            </Link>
            <Link
              href="/contact-us"
              className="text-base font-medium border-b w-full text-start py-3"
              onClick={closeMobileNav}
            >
              Contact Us
            </Link>
          </div>

          {/* Social Links */}
          <div className="absolute bottom-4 w-full flex justify-center space-x-6 px-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img
                src="/images/icons/FacebookIcon.svg"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img
                src="/images/icons/XIcon.svg"
                alt="Twitter"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img
                src="/images/icons/InstaIcon.svg"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
