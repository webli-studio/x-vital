"use client";

import { Icon } from "@iconify/react";


const steps = [
  {
    icon: "solar:clipboard-check-linear",
    color: "text-[#4B1F4E]",
    border: "border-[#4B1F4E]/20",
    badgeBg: "bg-[#4B1F4E]",
    badgeText: "text-white",
    title: "Assessment",
    description:
      "Comprehensive biological and lifestyle data collection to baseline your current state."
  },
  {
    icon: "solar:dna-linear",
    color: "text-[#63D1D3]",
    border: "border-[#63D1D3]/40",
    badgeBg: "bg-[#63D1D3]",
    badgeText: "text-white",
    title: "Personalized Program",
    description:
      "Algorithmic generation of your tailored macro and micronutrient requirements."
  },
  {
    icon: "solar:magic-stick-3-linear",
    color: "text-white",
    containerBg: "bg-[#4B1F4E]",
    border: "border-white/20",
    badgeBg: "bg-white",
    badgeText: "text-[#4B1F4E]",
    title: "Transformation",
    description:
      "Guided integration into your lifestyle resulting in sustained metabolic optimization."
  }
];

export default function ProtocolSection() {
  return (
    <section
      id="protocol"
      className="py-24 bg-[#FAFAFA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">

          <span className="text-[#63D1D3] text-sm font-bold font-inter tracking-widest uppercase mb-3 block">
            The Solution
          </span>

          <h2
            className={`text-3xl md:text-5xl tracking-tight font-semibold text-slate-900 mb-6`}
          >
            The XVITAL Nutrition Protocol
          </h2>

          <p className="text-slate-500 text-lg font-light">
            A clinical approach to daily wellness. We replace guesswork with
            data-driven personalization.
          </p>

        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">

          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative z-10 flex flex-col items-center text-center group ${
                index !== 0 ? "mt-12 md:mt-0" : ""
              }`}
            >

              {/* Icon Circle */}
              <div
                className={`w-24 h-24 rounded-full ${
                  step.containerBg ? step.containerBg : "bg-white border border-slate-100"
                } shadow-lg ${
                  step.containerBg ? "shadow-[#4B1F4E]/30" : ""
                } flex items-center justify-center mb-8 relative transition-transform duration-500 group-hover:-translate-y-2`}
              >

                <div
                  className={`absolute inset-2 rounded-full border ${step.border}`}
                ></div>

                <Icon icon={step.icon} className={`text-4xl ${step.color}`} />

                {/* Step Number */}
                <div
                  className={`absolute -top-3 -right-3 w-8 h-8 font-inter rounded-full ${step.badgeBg} ${step.badgeText} flex items-center justify-center text-sm font-semibold shadow-md`}
                >
                  {index + 1}
                </div>

              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3 font-inter">
                {step.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed font-light px-4">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}