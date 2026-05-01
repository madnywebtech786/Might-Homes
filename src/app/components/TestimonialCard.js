import React from "react";

export default function TestimonialCard({ name, message }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-[28px] overflow-hidden border border-[#e1c08e]/35 bg-white px-6 py-6 sm:px-8 sm:py-8 shadow-[0_12px_35px_rgba(0,0,0,0.06)]">
      <div className="absolute left-0 top-0 h-[5px] w-full rounded-t-[28px] bg-[#e1c08e]" />

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e1c08e]/15 text-base font-semibold text-[#8a6a3c]">
          {name?.charAt(0)}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[17px] font-semibold leading-tight text-slate-900 sm:text-lg">
            {name}
          </p>

          <p className="mt-3 text-[15px] leading-7 text-slate-600 sm:text-base">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}