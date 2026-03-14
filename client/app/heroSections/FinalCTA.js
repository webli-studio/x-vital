"use client";

import Image from "next/image";


export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#4B1F4E]">

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">

        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
          alt="Background"
          fill
          className="object-cover opacity-10 mix-blend-overlay"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4B1F4E] via-[#4B1F4E]/80 to-transparent"></div>

        {/* Teal Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#63D1D3] blur-[120px] opacity-20 rounded-t-full"></div>

      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

        <h2
          className={`text-4xl md:text-6xl tracking-tight font-semibold text-white mb-6`}
        >
          Your Transformation Starts Today
        </h2>

        <p className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
          Stop guessing. Start optimizing. Join thousands who have revolutionized
          their health with the XVITAL protocol.
        </p>

        <button className="bg-[#63D1D3] text-[#4B1F4E] text-lg font-semibold px-10 py-5 rounded-full hover:bg-white hover:shadow-2xl hover:shadow-[#63D1D3]/50 transition-all duration-300 transform hover:-translate-y-1">
          Start Your Assessment
        </button>

        <p className="text-white/50 text-xs mt-6">
          Takes approximately 5 minutes to complete.
        </p>

      </div>

    </section>
  );
}