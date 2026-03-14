"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { Julius_Sans_One } from "next/font/google";


export default function LifestyleGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2
            className={`text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-4`}
          >
            The XVITAL Lifestyle
          </h2>

          <p className="text-slate-500 text-base font-light">
            Aspirational, achievable, and entirely optimized for you.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">

          {/* Large Image */}
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">

            <Image
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053"
              alt="Healthy Food Prep"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-medium tracking-wide">
                Precision Nutrition
              </span>
            </div>

          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden relative group">

            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070"
              alt="Active Lifestyle"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden relative group">

            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020"
              alt="Yoga Wellness"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

          </div>

          {/* Vitality Card */}
          <div className="col-span-2 md:col-span-1 row-span-1 rounded-2xl overflow-hidden relative group bg-slate-100 flex items-center justify-center">

            <div className="text-center p-4">

              <Icon
                icon="solar:heart-pulse-linear"
                className="text-4xl text-[#63D1D3] mb-2"
              />

              <p className="text-xs font-semibold text-[#4B1F4E] uppercase tracking-widest">
                Vitality
              </p>

            </div>

          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden relative group">

            <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
              alt="Consultation Coaching"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

          </div>

        </div>

      </div>
    </section>
  );
}