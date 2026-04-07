"use client";
import Image from "next/image";
import Link from "next/link";
import { Diamond, Heart, Clock, Handshake, Award, MapPin, ArrowRight } from "lucide-react";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Homes Built" },
  { value: "7+", label: "Communities" },
  { value: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Diamond,
    title: "Premium Quality",
    description: "Every home we build is crafted with top-tier materials and meticulous attention to detail, from foundation to finishing touches.",
  },
  {
    icon: Heart,
    title: "Built with Heart",
    description: "We don't just build houses, we build homes where families grow, memories are made, and lives are lived fully.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time. Our streamlined process ensures your home is completed on schedule without compromising quality.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnership",
    description: "From your first consultation to the day you move in, we're with you every step of the way. Transparent, honest, reliable.",
  },
];

const steps = [
  { num: "01", title: "Free Consultation", desc: "We sit down with you to understand your vision, budget, and lifestyle needs — no pressure, just honest conversation." },
  { num: "02", title: "Design & Planning", desc: "Our team creates custom floor plans and selects premium materials tailored specifically to your preferences." },
  { num: "03", title: "Permits & Approvals", desc: "We handle all municipality permits, approvals, and paperwork so you don't have to worry about a thing." },
  { num: "04", title: "Construction Begins", desc: "Our skilled tradespeople break ground and build your home to the highest standards of craftsmanship and safety." },
  { num: "05", title: "Quality Inspections", desc: "At every milestone, our team conducts rigorous quality checks to ensure every detail meets the Mighty Standard." },
  { num: "06", title: "Keys in Hand", desc: "We walk you through your completed home, hand over the keys, and remain available for any post-build support." },
];

const cities = [
  { name: "Calgary", img: "/images/cities/Calgary.png" },
  { name: "Airdrie", img: "/images/cities/Airdrie.png" },
  { name: "Chestermere", img: "/images/cities/Chesteremere.png" },
  { name: "Cochrane", img: "/images/cities/Cochrane.png" },
  { name: "Okotoks", img: "/images/cities/okotoks.jpg" },
  { name: "High River", img: "/images/cities/highriver.jpg" },
];

export default function AboutUsContent() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex">
        {/* Left content — always full width on mobile, half on lg */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 pt-28 pb-16"
          style={{ background: "linear-gradient(135deg, #0d1117 0%, #0a0f1e 70%, #110e04 100%)" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">Our Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Building Dreams<br />
            Across{" "}
            <span style={{ WebkitTextStroke: "2px #e1c08e", color: "transparent" }}>Alberta</span>
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-md mb-8">
            For over 15 years, Mighty Homes has been crafting exceptional custom homes for Alberta families — built with precision, delivered with pride.
          </p>
          <div className="flex flex-row gap-3">
            <Link href="/contact-us"
              className="flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary/90 transition-all">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/gallery"
              className="flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-semibold rounded-xl text-sm hover:border-primary hover:text-primary transition-all">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Right image — hidden on mobile */}
        <div className="hidden lg:block relative lg:w-1/2">
          <Image src="/images/buildSlide2.png" fill alt="Mighty Homes" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-transparent to-transparent" />
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="bg-primary px-4 md:px-8 lg:px-12 2xl:px-20 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-4xl md:text-5xl font-extrabold text-white">{value}</span>
              <span className="text-white/75 text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Who We Are ── */}
      <div className="px-4 md:px-8 lg:px-12 2xl:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ paddingBottom: "110%" }}>
              <Image src="/images/aboutSideImg.png" fill alt="Mighty Homes Team" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:right-4 bg-white rounded-2xl shadow-xl shadow-black/10 p-5 flex items-center gap-4 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest">Recognized</p>
                <p className="text-gray-900 font-extrabold text-base leading-tight">Alberta's Top<br />Home Builder</p>
              </div>
            </div>
            <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center p-2">
              <Image src="/images/logoRounded.png" width={48} height={48} alt="Mighty Homes Logo" />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary text-xs font-semibold tracking-[4px] uppercase">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                More Than a<br />
                <span className="text-primary">Home Builder</span>
              </h2>
            </div>
            <p className="text-gray-500 leading-relaxed text-base">
              Mighty Homes has been crafting exceptional custom homes across Alberta for over 15 years.
              We believe every family deserves a home that truly reflects who they are — designed with care,
              built with precision, and delivered with pride.
            </p>
            <p className="text-gray-500 leading-relaxed text-base">
              From the rolling foothills of Okotoks to the vibrant communities of Airdrie and Chestermere,
              our homes are woven into the fabric of Alberta's most sought-after neighbourhoods.
              Every build carries our signature commitment: the Mighty Standard.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Custom floor plans", "Premium materials only", "Transparent pricing", "Post-build support", "Energy-efficient builds", "Multiple communities"].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/contact-us"
                className="flex items-center gap-2 px-7 py-4 bg-primary text-white font-bold rounded-xl text-sm hover:bg-yellow-600 transition-colors duration-300 w-max shadow-lg shadow-primary/30">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/gallery"
                className="flex items-center gap-2 px-7 py-4 border border-gray-200 text-gray-700 font-semibold rounded-xl text-sm hover:border-primary hover:text-primary transition-colors duration-300 w-max">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Our Values ── */}
      <div className="bg-gray-50 px-4 md:px-8 lg:px-12 2xl:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[4px] uppercase">Our Values</span>
              <div className="h-px w-10 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              The Principles That<span className="text-primary"> Guide Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 flex flex-col gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
                <div className="mt-auto">
                  <div className="h-0.5 w-8 bg-primary/30 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Our 6-Step Build Process ── */}
      <div className="px-4 md:px-8 lg:px-12 2xl:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[4px] uppercase">How We Work</span>
              <div className="h-px w-10 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              Our 6-Step<span className="text-primary"> Build Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 overflow-hidden">
                {/* Ghost step number */}
                <span
                  className="absolute -top-4 -right-2 text-8xl font-black leading-none select-none pointer-events-none transition-all duration-300 group-hover:opacity-100 opacity-60"
                  style={{ WebkitTextStroke: "2px #e1c08e", color: "transparent" }}
                >
                  {num}
                </span>
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-black text-sm">{num}</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Communities We Build In ── */}
      <div className="bg-gray-50 px-4 md:px-8 lg:px-12 2xl:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[4px] uppercase">Where We Build</span>
              <div className="h-px w-10 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              Communities We<span className="text-primary"> Build In</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map(({ name, img }) => (
              <div key={name} className="group relative rounded-2xl overflow-hidden aspect-square">
                <Image src={img} fill alt={name} className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <p className="text-white font-bold text-sm drop-shadow">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div
        className="relative overflow-hidden mx-4 md:mx-8 lg:mx-12 2xl:mx-20 mb-20 rounded-3xl px-8 py-16 text-center"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(177,139,55,0.28) 100%), url('/images/whychooseus.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-primary/20 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-[4px] uppercase">Start Today</span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 text-base leading-relaxed">
            Let's talk about your vision. Our team is ready to walk you through every step, from design consultation to the day you get your keys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us"
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl text-base hover:bg-yellow-600 transition-colors duration-300 shadow-lg shadow-primary/30">
              Book a Free Consultation
            </Link>
            <Link href="/gallery"
              className="px-8 py-4 border border-white/25 text-white font-semibold rounded-xl text-base hover:border-primary hover:text-primary transition-colors duration-300">
              Browse Our Gallery
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
