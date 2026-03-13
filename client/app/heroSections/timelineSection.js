"use client";

import { Icon } from "@iconify/react";



const timeline = [
  {
    title: "Start Assessment",
    description:
      "Initiate the process with a simple click to access our secure platform.",
    color: "bg-[#4B1F4E]"
  },
  {
    title: "Complete Questionnaire",
    description:
      "Detail your habits, goals, and medical history in our clinical intake form.",
    color: "bg-[#63D1D3]"
  },
  {
    title: "Get Your Program",
    description:
      "Receive your digitally delivered, highly personalized nutrition framework.",
    color: "bg-[#4B1F4E]"
  },
  {
    title: "Book Consultation",
    description:
      "Schedule a 1-on-1 session with a certified XVITAL protocol specialist.",
    color: "bg-[#63D1D3]"
  }
];

export default function TimelineSection() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2
          className={`text-3xl md:text-4xl tracking-tight font-semibold text-center text-slate-900 mb-16`}
        >
          Your Journey to Vitality
        </h2>

        <div className="relative pl-8 md:pl-0">

          {/* Vertical Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2"></div>

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row justify-between items-center mb-16 group"
              >

                {/* LEFT TEXT */}
                {isLeft ? (
                  <div className="order-2 md:order-1 md:w-5/12 text-left md:text-right pt-6 md:pt-0 pl-6 md:pl-0 pr-0 md:pr-12">
                    <h4 className="text-xl font-semibold tracking-tight text-slate-900 mb-2 font-inter">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-light">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  <div className="order-1 md:order-1 md:w-5/12 hidden md:block"></div>
                )}

                {/* DOT */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#FAFAFA] shadow-md flex items-center justify-center z-10 transition-colors duration-300 group-hover:border-[#63D1D3]/30">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                </div>

                {/* RIGHT TEXT */}
                {!isLeft ? (
                  <div className="order-2 md:order-3 md:w-5/12 text-left pt-6 md:pt-0 pl-6 md:pl-12">
                    <h4 className="text-xl font-semibold tracking-tight text-slate-900 mb-2 font-inter">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-light">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  <div className="order-1 md:order-3 md:w-5/12 hidden md:block"></div>
                )}

              </div>
            );
          })}

          {/* FINAL STEP */}
          <div className="relative flex flex-col md:flex-row justify-between items-center group">

            <div className="order-2 md:order-1 md:w-5/12 text-left md:text-right pt-6 md:pt-0 pl-6 md:pl-0 pr-0 md:pr-12">
              <h4 className="text-xl font-semibold tracking-tight text-slate-900 mb-2 font-inter">
                Begin Transformation
              </h4>
              <p className="text-sm text-slate-500 font-light">
                Implement your protocol and track progress in the XVITAL dashboard.
              </p>
            </div>

            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#4B1F4E] border-4 border-white shadow-xl flex items-center justify-center z-10">
              <Icon
                icon="solar:star-fall-minimalistic-2-linear"
                className="text-white text-xl"
              />
            </div>

            <div className="order-1 md:order-3 md:w-5/12 hidden md:block"></div>

          </div>

        </div>
      </div>
    </section>
  );
}