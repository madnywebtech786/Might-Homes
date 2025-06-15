"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

export default function Accordion({
  title,
  children,
  index,
  expandedIndex,
  setExpandedIndex,
}) {
  const isOpen = expandedIndex === index;

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setExpandedIndex(isOpen ? null : index)}
        className="w-full flex justify-between items-center p-4 py-5 text-left transition-all duration-300 hover:cursor-pointer"
      >
        <span className="text-base font-semibold text-gray-800">{title}</span>
        <ChevronRight
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-90 text-black" : "text-gray-500"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100 p-4 py-6 pt-0"
            : "max-h-0 opacity-0 px-4"
        } text-gray-600 bg-white`}
      >
        {children}
      </div>
    </div>
  );
}
