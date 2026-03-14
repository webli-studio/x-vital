"use client";

import { Icon } from "@iconify/react";
import { Julius_Sans_One } from "next/font/google";

const julius = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400"
});

const checklist = [
  "Data interpretation and baseline review",
  "Meal structuring and timing strategy",
  "Supplementation protocol integration"
];

export default function ConsultationSection() {
  return (
    <section
      id="consultation"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2
            className={`text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-4`}
          >
            Book Your Deep Dive
          </h2>

          <p className="text-slate-500 text-base font-light mb-8 leading-relaxed">
            Following your assessment, schedule a 45-minute consultation with a
            protocol specialist. We'll walk through your data, explain your
            custom macro targets, and set integration milestones.
          </p>

          {/* Checklist */}
          <div className="space-y-4 mb-10">

            {checklist.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">

                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#63D1D3]/20 flex items-center justify-center flex-shrink-0">
                  <Icon
                    icon="solar:check-circle-linear"
                    className="text-[#63D1D3] text-sm"
                  />
                </div>

                <p className="text-sm text-slate-600 font-light">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT CARD (Calendar Mockup) */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 max-w-md mx-auto w-full font-inter">

          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">

            <div>

              <h4 className="font-semibold text-slate-900">
                Protocol Onboarding
              </h4>

              <p className="text-xs text-slate-500 flex items-center mt-1">
                <Icon
                  icon="solar:clock-circle-linear"
                  className="mr-1"
                />
                45 min
              </p>

            </div>

            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
              <Icon
                icon="solar:video-camera-linear"
                className="text-[#4B1F4E] text-xl"
              />
            </div>

          </div>

          {/* Month */}
          <div className="flex items-center justify-between mb-6">

            <h5 className="text-sm font-semibold text-slate-800">
              November 2023
            </h5>

            <div className="flex space-x-2">

              <button className="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400 transition-colors">
                <Icon icon="solar:alt-arrow-left-linear" />
              </button>

              <button className="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors">
                <Icon icon="solar:alt-arrow-right-linear" />
              </button>

            </div>

          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 gap-2 text-center mb-2 text-[10px] font-medium text-slate-400 uppercase">

            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>

          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 text-center text-sm">

            <div></div>
            <div></div>
            <div></div>

            <div className="p-2 text-slate-300">1</div>
            <div className="p-2 text-slate-300">2</div>

            <div className="p-2 text-slate-700 font-medium hover:bg-[#63D1D3]/10 rounded-full cursor-pointer transition-colors">
              3
            </div>

            <div className="p-2 text-slate-700 font-medium hover:bg-[#63D1D3]/10 rounded-full cursor-pointer transition-colors">
              4
            </div>

            <div className="p-2 text-slate-700 font-medium hover:bg-[#63D1D3]/10 rounded-full cursor-pointer transition-colors">
              5
            </div>

            <div className="p-2 text-white font-medium bg-[#4B1F4E] rounded-full cursor-pointer shadow-md">
              6
            </div>

            <div className="p-2 text-slate-700 font-medium hover:bg-[#63D1D3]/10 rounded-full cursor-pointer transition-colors">
              7
            </div>

            <div className="p-2 text-slate-700 font-medium hover:bg-[#63D1D3]/10 rounded-full cursor-pointer transition-colors">
              8
            </div>

            <div className="p-2 text-slate-700 font-medium hover:bg-[#63D1D3]/10 rounded-full cursor-pointer transition-colors">
              9
            </div>

            <div className="p-2 text-slate-700 font-medium hover:bg-[#63D1D3]/10 rounded-full cursor-pointer transition-colors">
              10
            </div>

          </div>

          {/* Button */}
          <div className="mt-8 pt-6 border-t border-slate-100">

            <button className="w-full py-3 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors">
              Book Consultancy Call
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}