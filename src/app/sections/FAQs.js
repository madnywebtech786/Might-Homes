"use client";
import React, { useState } from "react";
import Accordion from "../components/Accordion";

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
            title="How long does it take to build a custom home with Mighty Homes?"
            index={0}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          >
            <p>
              Build timelines typically range from 6 to 12 months depending on
              the model, lot, and customization level. We provide a detailed
              schedule during your proposal stage so you always know exactly
              where you stand.
            </p>
          </Accordion>

          <Accordion
            title="What communities does Mighty Homes build in?"
            index={1}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          >
            <p>
              We currently build across Calgary, Airdrie, Chestermere, Cochrane,
              Okotoks, and Strathmore. New communities are added regularly —
              visit our Communities page or contact us to find out what's
              available near you.
            </p>
          </Accordion>

          <Accordion
            title="Can I customize the floor plan and finishes?"
            index={2}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          >
            <p>
              Absolutely. Every Mighty Homes build starts with your vision. We
              offer flexible floor plan modifications, a premium selections
              studio for finishes, and a dedicated design consultant who guides
              you through every choice, from countertops to cabinetry.
            </p>
          </Accordion>

          <Accordion
            title="What is the Mighty Standard?"
            index={3}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          >
            <p>
              The Mighty Standard is our quality benchmark, a non-negotiable
              commitment to premium materials, skilled craftsmanship, and
              meticulous attention to detail in every home we build. It's our
              promise that your home is built to last and built to impress.
            </p>
          </Accordion>

          <Accordion
            title="Do you offer warranties on your homes?"
            index={4}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          >
            <p>
              Yes. All Mighty Homes builds are covered by Alberta's New Home
              Warranty program, which includes coverage for materials and labour,
              building envelope, and major structural components. We also provide
              our own post-possession support for complete peace of mind.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
