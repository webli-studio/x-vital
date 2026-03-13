"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { Julius_Sans_One } from "next/font/google";



export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-bl from-[#63D1D3]/20 to-transparent blur-3xl opacity-70"></div>
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#4B1F4E]/10 to-transparent blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl">

          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-[#63D1D3]/30 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#63D1D3]"></span>
            <span className="text-xs font-medium text-[#4B1F4E] tracking-wide uppercase font-inter">
              The Future of Wellness
            </span>
          </div>

          <h1
            className={`text-5xl lg:text-7xl tracking-tight font-[600] text-slate-900 leading-[1] mb-6`}
          >
            Transform Your Health with the{" "}
            <span className="text-[#4B1F4E]">XVITAL</span> Protocol
          </h1>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light font-inter">
            A science-backed personalized nutrition system designed to improve
            energy, optimize metabolism, and establish long-term holistic wellness.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">

            <button className="w-full sm:w-auto bg-[#4B1F4E] text-white text-base font-medium px-8 py-4 rounded-full hover:bg-[#4B1F4E]/90 hover:shadow-xl hover:shadow-[#4B1F4E]/20 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Start Your Assessment</span>
              <Icon icon="solar:arrow-right-linear" className="text-xl" />
            </button>

            <button className="w-full sm:w-auto bg-white text-[#4B1F4E] border border-slate-200 text-base font-medium px-8 py-4 rounded-full hover:bg-slate-50 transition-all duration-300">
              Learn More
            </button>

          </div>

          {/* Users */}
          <div className="mt-10 flex items-center space-x-4">

            <div className="flex -space-x-3">

              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100"
                alt="user"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />

              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100"
                alt="user"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />

              <Image
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100"
                alt="user"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />

              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600 font-inter">
                +2k
              </div>

            </div>

            <div className="text-sm text-slate-500 font-medium font-inter">
              Joined the protocol
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative lg:h-[600px] w-full">

          <div className="absolute inset-0 bg-[#63D1D3]/5 rounded-3xl transform rotate-3 scale-105 transition-transform duration-700 hover:rotate-6"></div>

          <Image
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070"
            alt="Healthy Lifestyle"
            fill
            className="relative object-cover rounded-3xl shadow-2xl shadow-slate-200/50 object-center"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center space-x-4 backdrop-blur-sm bg-white/90">

            <div className="w-12 h-12 rounded-full bg-[#63D1D3]/20 flex items-center justify-center text-[#63D1D3]">
              <Icon icon="solar:graph-up-linear" className="text-2xl" />
            </div>

            <div>
              <div className="text-sm text-slate-500 font-medium font-inter">
                Energy Levels
              </div>
              <div className="text-lg font-semibold text-slate-900 tracking-tight font-inter">
                +84% Boost
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}