"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "587-435-7924",
    href: "tel:5874357924",
    description: "Mon–Fri, 9am–6pm MST",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@mightygomesinc.ca",
    href: "mailto:info@mightygomesinc.ca",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "Alberta, Canada",
    href: "#",
    description: "Serving all of Alberta",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri",
    href: "#",
    description: "9:00 AM – 6:00 PM MST",
  },
];

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = "First name is required.";
    if (!formData.lastName.trim()) errs.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) {
      errs.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      errs.phone = "Invalid phone number (10–15 digits).";
    }
    if (!formData.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setErrors({ submit: "Something went wrong. Please try again or email us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="relative h-[360px] md:h-[440px] flex items-end pb-14"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.75) 100%), url('/images/whychooseus.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-8 lg:px-12 2xl:px-20 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-[4px] uppercase">Reach Out</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Let's Build Your<br />
            <span className="text-primary">Dream Together</span>
          </h1>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="px-4 md:px-8 lg:px-12 2xl:px-20 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map(({ icon: Icon, label, value, href, description }) => (
            <a
              key={label}
              href={href}
              className="group bg-white rounded-2xl shadow-lg shadow-black/5 border border-gray-100 p-6 flex flex-col gap-3 hover:border-primary/40 hover:shadow-primary/10 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">{label}</p>
                <p className="text-gray-900 font-bold text-sm mt-0.5 group-hover:text-primary transition-colors duration-300">{value}</p>
                <p className="text-gray-400 text-xs mt-0.5">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Main Form Section */}
      <div className="px-4 md:px-8 lg:px-12 2xl:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start max-w-7xl mx-auto">

          {/* Left: Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image src="/images/logoRounded.png" width={60} height={60} alt="Mighty Homes" />
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest">Mighty Homes</p>
                <p className="text-gray-900 font-bold text-sm">Building Alberta's Future</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary text-xs font-semibold tracking-[4px] uppercase">Why Contact Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                We're Here to
                <br />
                <span className="text-primary">Help You</span>
              </h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                Whether you're looking to build your first home, explore our communities,
                or get a free quote, our experienced team is ready to walk you through every step.
              </p>
            </div>

            {/* Features list */}
            <div className="flex flex-col gap-4">
              {[
                "Free consultation & quote",
                "Custom home designs available",
                "Multiple Alberta communities",
                "Experienced team of builders",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Direct Contact</p>
              <div className="flex flex-col gap-3">
                <a href="tel:5874357924" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Phone className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Phone</p>
                    <p className="text-gray-900 font-semibold text-sm group-hover:text-primary transition-colors duration-300">587-435-7924</p>
                  </div>
                </a>
                <a href="mailto:info@mightygomesinc.ca" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Mail className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <p className="text-gray-900 font-semibold text-sm group-hover:text-primary transition-colors duration-300">info@mightygomesinc.ca</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 px-8 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-yellow-600 transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-xl shadow-black/5 border border-gray-100 p-8 md:p-10">
                {/* Form header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px w-8 bg-primary" />
                    <span className="text-primary text-xs font-semibold tracking-[4px] uppercase">Get in Touch</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    Request a Free Quote
                  </h2>
                  <p className="text-gray-400 text-sm mt-2">
                    Fill out the form and our team will contact you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 text-sm font-semibold mb-1.5">
                        First Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 ${errors.firstName ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 text-sm font-semibold mb-1.5">
                        Last Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 ${errors.lastName ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Email & Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-1.5">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-1.5">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="5874357924"
                        className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-1.5">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Select a subject...</option>
                      <option value="Free Quote">Request a Free Quote</option>
                      <option value="Show Home">Book a Show Home Tour</option>
                      <option value="Pre Construction">Pre Construction Inquiry</option>
                      <option value="Town House">Town House Information</option>
                      <option value="Community">Community Information</option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-1.5">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dream home, preferred community, timeline, or any questions you have..."
                      className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 resize-none ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {errors.submit && (
                    <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">{errors.submit}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-bold text-white text-base flex items-center justify-center gap-2 transition-all duration-300 ${
                      isSubmitting ? "bg-gray-300 cursor-not-allowed" : "bg-primary hover:bg-yellow-600 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    By submitting, you agree to be contacted by our team. We respect your privacy.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
