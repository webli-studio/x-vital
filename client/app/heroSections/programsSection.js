"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";


const programs = [
  {
    title: "Male Protocol",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070",
    description:
      "Optimized for testosterone support, lean muscle retention, and sustained physical output. Tailored to male metabolic rates."
  },
  {
    title: "Female Protocol",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070",
    description:
      "Balanced for hormonal fluctuation, optimal recovery, and sustainable energy. Adaptive to the female biological cycle."
  }
]; 

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="py-24 bg-[#4B1F4E] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(#63D1D3 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2
            className="text-3xl md:text-4xl tracking-tight font-semibold text-white mb-4"
          >
            Choose Your Program
          </h2>

          <p className="text-white/70 text-base font-light max-w-xl mx-auto">
            Select your biological baseline to begin the assessment. Our
            algorithms adjust heavily based on endocrine differences.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white"
            >

              {/* Image Section */}
              <div className="h-64 sm:h-80 overflow-hidden relative">

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>

                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute bottom-6 left-6 z-20">
                  <h3
                    className={`text-3xl text-white font-semibold tracking-tight mb-1`}
                  >
                    {program.title}
                  </h3>
                </div>

              </div>

              {/* Content */}
              <div className="p-8">

                <p className="text-sm text-slate-500 font-light mb-6 leading-relaxed">
                  {program.description}
                </p>

                <button className="w-full bg-slate-50 border border-slate-200 text-[#4B1F4E] font-medium py-3 rounded-xl flex items-center justify-center space-x-2 group-hover:bg-[#4B1F4E] group-hover:text-white group-hover:border-[#4B1F4E] transition-all duration-300">

                  <span>Select Program</span>

                  <Icon icon="solar:arrow-right-linear" className="text-lg" />

                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Hidden hint */}
        <div className="hidden text-center mt-6 text-white/50 text-xs">
          Selecting a program will open the secure assessment portal.
        </div>

      </div>
    </section>
  );
}