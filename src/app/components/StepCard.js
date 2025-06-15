import React from "react";
import { CheckCircle } from "lucide-react";
export default function StepCard({ index, number, title, desc }) {
  return (
    <div
      key={index}
      className="flex items-start gap-4 p-6 border rounded-lg shadow-sm bg-[#fffdf8] border-[#B78B37]/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="text-6xl font-extrabold text-transparent leading-none relative">
        <span
          className="text-transparent stroke-text absolute inset-0"
          aria-hidden="true"
        >
          {number < 10 ? `0${number}` : number}
        </span>
        <span className="opacity-0">{number < 10 ? `0${number}` : number}</span>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1 text-[#1e1e1e]">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
