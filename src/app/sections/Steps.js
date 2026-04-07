import React from "react";
import StepCard from "../components/StepCard";

export default function Steps() {
  const steps = [
    { title: "Reach Out", desc: "Call, email, or fill out our form. We respond within 24 hours." },
    {
      title: "Consultation",
      desc: "Free, no-pressure meeting to discuss your vision, budget, and lot options.",
    },
    { title: "Design", desc: "Our team creates custom floor plans and 3D renderings tailored to you." },
    { title: "Proposal", desc: "Receive a detailed, transparent quote with full pricing. No hidden fees." },
    { title: "Approval", desc: "Finalize your plan, select your finishes, and sign off to break ground." },
    { title: "Construction", desc: "Our skilled tradespeople build your home with regular progress updates." },
    { title: "Walkthrough", desc: "Pre-possession inspection: every detail checked against the Mighty Standard." },
    { title: "Move In", desc: "Keys in hand. Your dream home is ready to welcome your family." },
  ];
  return (
    <div className="bg-gray-50 px-4 py-10 md:px-10 lg:px-20 lg:pt-30 lg:pb-20">
      <p className="text-xl sm:text-2xl md:text-4xl lg:text-3xl px-4 font-semibold headFont mt-2 text-center">
        Our Easy Working Steps
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {steps.map((step, idx) => (
          <StepCard
            key={idx}
            number={idx + 1}
            title={step.title}
            desc={step.desc}
          />
        ))}
      </div>
    </div>
  );
}
