"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";


export default function ExpertSection() {
  return (
    <section className="py-24 bg-[#FAFAFA] border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2 relative">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#4B1F4E] to-[#63D1D3] rounded-3xl transform -rotate-3 scale-100 opacity-20 blur-lg"></div>

            {/* Expert Image */}
            <div className="relative aspect-[4/5] w-full">

              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Nutrition Expert"
                fill
                className="rounded-3xl shadow-xl object-cover z-10"
              />

            </div>

            {/* Floating Review */}
            <div className="absolute bottom-6 -right-6 md:-right-12 bg-white p-5 rounded-2xl shadow-xl z-20 border border-slate-100 hidden sm:block">

              <div className="flex items-center space-x-2 mb-2">

                <Icon icon="solar:star-bold" className="text-yellow-400" />
                <Icon icon="solar:star-bold" className="text-yellow-400" />
                <Icon icon="solar:star-bold" className="text-yellow-400" />
                <Icon icon="solar:star-bold" className="text-yellow-400" />
                <Icon icon="solar:star-bold" className="text-yellow-400" />

              </div>

              <p className="text-xs font-medium text-slate-800">
                "Changed my life completely."
              </p>

              <p className="text-[10px] text-slate-400 mt-1">
                - Sarah J., Client
              </p>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2">

            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">

              <Icon
                icon="solar:shield-check-linear"
                className="text-[#63D1D3]"
              />

              <span className="text-xs font-medium font-inter text-slate-600 uppercase tracking-wide">
                Clinical Expertise
              </span>

            </div>

            {/* Heading */}
            <h2
              className={`text-3xl md:text-5xl tracking-tight font-semibold text-slate-900 mb-6 leading-tight`}
            >
              Guided by <span className="text-[#4B1F4E]">Nutrition</span> Expertise
            </h2>

            {/* Paragraphs */}
            <p className="text-base text-slate-600 font-light leading-relaxed mb-6">
              The XVITAL Protocol was developed by Dr. Elena Rostova, bringing
              over 15 years of clinical nutritional biochemistry experience
              from Silicon Valley's top bio-optimization clinics.
            </p>

            <p className="text-base text-slate-600 font-light leading-relaxed mb-8">
              "We created XVITAL to bridge the gap between elite athlete
              metabolic testing and accessible daily nutrition. Health is not
              generic, and your diet shouldn't be either."
            </p>

            {/* Doctor Info */}
            <div>

              <h4 className="font-semibold text-slate-900 tracking-tight font-inter">
                Dr. Elena Rostova
              </h4>

              <p className="text-sm text-[#63D1D3] font-medium">
                Founder & Chief Science Officer
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}