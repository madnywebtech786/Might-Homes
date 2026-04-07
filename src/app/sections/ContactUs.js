"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import "./styles/ContactUs.css";
import { Phone, Mail, CheckCircle, ChevronDown } from "lucide-react";

const SUBJECTS = [
  "Request a Free Quote",
  "Book a Show Home Tour",
  "Pre Construction Inquiry",
  "Town House Information",
  "Community Information",
  "General Inquiry",
];

function CustomSelect({ value, onChange, error }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`w-full flex items-center justify-between bg-gray-50 border text-base rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 ${
          error ? "border-red-400 bg-red-50" : "border-gray-200"
        } ${value ? "text-gray-900" : "text-gray-400"}`}
      >
        <span>{value || "Select a subject..."}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180 text-primary" : ""}`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute z-50 left-0 right-0 mt-1.5 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden transition-all duration-200 origin-top ${
          open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        {SUBJECTS.map((subject) => (
          <button
            key={subject}
            type="button"
            onClick={() => { onChange(subject); setOpen(false); }}
            className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150 flex items-center gap-2 ${
              value === subject
                ? "bg-primary/10 text-primary font-semibold"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {value === subject && (
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            )}
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ContactUs() {
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

  const validateEmail = (email) => /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(email);
  const validatePhone = (phone) => /^\+?\d{10,15}$/.test(phone);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubjectChange = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }));
    if (errors.subject) setErrors((prev) => ({ ...prev, subject: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { firstName, lastName, email, phone, subject, message } = formData;

    let formErrors = {};
    if (!firstName.trim()) formErrors.firstName = "First name is required.";
    if (!lastName.trim()) formErrors.lastName = "Last name is required.";
    if (!email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      formErrors.email = "Invalid email format.";
    }
    if (!phone.trim()) {
      formErrors.phone = "Phone number is required.";
    } else if (!validatePhone(phone)) {
      formErrors.phone = "Invalid phone number. Must be 10-15 digits.";
    }
    if (!subject) formErrors.subject = "Please select a subject.";
    if (!message.trim()) formErrors.message = "Message is required.";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("Failed to submit the form.");
        setSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
      } catch (error) {
        setErrors({ submit: "Error submitting the form. Please try again later." });
        console.error(error);
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div
      className="contactUs flex px-4 md:px-8 lg:px-12 2xl:px-20 gap-10 flex-col lg:flex-row"
      id="contact"
    >
      <div className="bg-white w-full lg:w-1/2 mx-auto flex flex-col gap-4 p-8 my-20 relative rounded-2xl shadow-2xl shadow-black/10">
        {/* Header */}
        <div className="flex flex-col gap-3 z-20">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-[3px] uppercase">
              Get Free Quote
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Design Your Vision with a Free Consultation
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="tel:5874357924"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-200 text-sm"
            >
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-medium">587-435-7924</span>
            </a>
            <a
              href="mailto:info@mightyhomesinc.ca"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-200 text-sm"
            >
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-medium">info@mightyhomesinc.ca</span>
            </a>
          </div>
        </div>

        {submitted ? (
          <div className="z-20 flex flex-col items-center gap-4 py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Message Sent!</h4>
            <p className="text-gray-500 text-sm max-w-xs">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 px-6 py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:bg-yellow-600 transition-colors duration-300"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-4 z-20" onSubmit={handleSubmit} noValidate>
            {/* Name row */}
            <div className="flex gap-3">
              <div className="w-full">
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`bg-gray-50 border text-gray-900 text-base rounded-xl block w-full p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 ${errors.firstName ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                  placeholder="First Name"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`bg-gray-50 border text-gray-900 text-base rounded-xl block w-full p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 ${errors.lastName ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                  placeholder="Last Name"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email + Phone row */}
            <div className="flex gap-3">
              <div className="w-full">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`bg-gray-50 border text-gray-900 text-base rounded-xl block w-full p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                  placeholder="Email Address"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="w-full">
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`bg-gray-50 border text-gray-900 text-base rounded-xl block w-full p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                  placeholder="Phone Number"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Subject */}
            <div>
              <CustomSelect
                value={formData.subject}
                onChange={handleSubjectChange}
                error={errors.subject}
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>

            {/* Message */}
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              className={`block p-4 w-full text-base text-gray-900 bg-gray-50 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 resize-none ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200"}`}
              placeholder="Tell us about your dream home..."
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}

            {errors.submit && (
              <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">{errors.submit}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-max px-8 py-4 text-sm md:text-base text-white font-bold rounded-xl flex items-center gap-2 transition-all duration-300 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary hover:bg-yellow-600 shadow-lg shadow-primary/30 hover:shadow-primary/50"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                "Get Free Quote"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
