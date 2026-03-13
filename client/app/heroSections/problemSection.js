"use client";

import { Icon } from "@iconify/react";



const problems = [
  {
    icon: "solar:battery-charge-linear",
    color: "text-[#4B1F4E]",
    title: "Low Energy",
    description:
      "Chronic fatigue and midday crashes stemming from improper macronutrient balancing."
  },
  {
    icon: "solar:scale-linear",
    color: "text-[#63D1D3]",
    title: "Weight Imbalance",
    description:
      "Struggle to maintain composition due to metabolic resistance and generic advice."
  },
  {
    icon: "solar:apple-linear",
    color: "text-[#4B1F4E]",
    title: "Poor Habits",
    description:
      "Inconsistent eating patterns and reliance on processed convenience foods."
  },
  {
    icon: "solar:stomach-linear",
    color: "text-[#63D1D3]",
    title: "Digestive Issues",
    description:
      "Bloating and discomfort indicating microbiome disruption and food sensitivities."
  }
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white relative border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          
          <h2
            className="text-3xl md:text-4xl tracking-tight font-semibold text-[#4B1F4E] mb-4"
          >
            The Modern Health Dilemma
          </h2>

          <p className="text-slate-500 text-base font-light">
            Standard diets fail because they aren't built for your unique biology.
            Recognizing the symptoms of misalignment is the first step.
          </p>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {problems.map((item, index) => (
            <div
              key={index}
              className="group bg-[#FAFAFA] p-8 rounded-3xl border border-slate-100 hover:border-[#63D1D3]/30 hover:shadow-xl hover:shadow-[#63D1D3]/5 transition-all duration-300 hover:-translate-y-1"
            >

              <div
                className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon icon={item.icon} className="text-3xl" />
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 font-[600] font-inter">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed font-light">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}