import React from "react";
import StepCard from "../components/StepCard";

export default function Steps() {
  const steps = [
    { title: "Contact", desc: "Reach out to us to start your project." },
    {
      title: "Appointment",
      desc: "Schedule a consultation at your convenience.",
    },
    { title: "Inspection", desc: "We assess your home exterior needs." },
    { title: "Proposal", desc: "Get a detailed quote and project plan." },
    { title: "Approval", desc: "Approve the plan and choose materials." },
    { title: "Execution", desc: "Our experts carry out the installation." },
    { title: "Review", desc: "Final walkthrough and satisfaction check." },
    { title: "Success", desc: "Enjoy your upgraded exterior!" },
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
