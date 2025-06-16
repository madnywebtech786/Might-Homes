"use client";
import Accordion from "@/app/components/Accordion";
import React, { useState } from "react";

export default function FAQs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className=" p-4 py-10 md:p-8 lg:p-12 2xl:p-20">
      <div className="max-w-5xl mx-auto ">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h1>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Accordion
            title="Are there Quick Possession homes available in Savanna Calgary?"
            index={0}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          >
            <p>
              Yes, Savanna offers a variety of quick possession homes tailored
              to suit your timeline and budget. These homes are ready for
              immediate move-in or nearing completion.
            </p>
          </Accordion>

          <Accordion
            title="What home types are available in Savanna?"
            index={1}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          >
            <p>
              Savanna features a wide selection of home types including laned
              homes, front garage homes, duplexes, and townhomes designed for
              modern families.
            </p>
          </Accordion>

          <Accordion
            title="How much does it cost to buy a new home in Savanna?"
            index={2}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          >
            <p>
              Prices vary depending on the home type and size, but typically
              start from the mid $400,000s. Flexible payment plans and financing
              options are also available.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
