"use client";

import Image from "next/image";


const supplements = [
  {
    badge: "Phase 1",
    badgeColor: "text-slate-400 bg-white",
    title: "Bio-Active Isolate",
    description: "Cold-filtered whey protein isolate",
    price: "$54.00",
    image:
      "https://images.unsplash.com/photo-1562243061-204550d8a2c9"
  },
  {
    badge: "Essential",
    badgeColor: "text-[#63D1D3] bg-[#63D1D3]/10",
    title: "Daily Synthesis",
    description: "High-absorption multivitamin complex",
    price: "$38.00",
    custom: true
  },
  {
    badge: "Targeted",
    badgeColor: "text-slate-400 bg-white",
    title: "Microbiome Reset",
    description: "Pre/Probiotic gut health formula",
    price: "$42.00",
    darkBottle: true
  }
];

export default function SupplementsSection() {
  return (
    <section
      id="supplements"
      className="py-24 bg-[#FAFAFA] border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">

          <div className="max-w-2xl">

            <span className="text-[#63D1D3] text-sm font-semibold tracking-widest uppercase mb-3 block font-inter">
              Coming Soon
            </span>

            <h2
              className={`text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-4 `}
            >
              XVITAL Supplements
            </h2>

            <p className="text-slate-500 text-base font-light">
              Clinical-grade formulations designed to work synergistically with
              your personalized nutrition protocol.
            </p>

          </div>

        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {supplements.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >

              {/* Image Area */}
              <div className="h-64 bg-slate-50 flex items-center justify-center p-8 relative">

                <div
                  className={`absolute top-4 left-4 px-2 py-1 rounded text-[10px] font-semibold font-inter tracking-wider uppercase shadow-sm ${item.badgeColor}`}
                >
                  {item.badge}
                </div>

                {/* Product Image */}
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={160}
                    height={160}
                    className="object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Custom Bottle */}
                {item.custom && (
                  <div className="w-24 h-40 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">

                    <div className="w-16 h-20 bg-slate-50 border border-slate-100 flex flex-col items-center justify-center p-2 text-center">
                      <div className="w-4 h-4 rounded-full bg-[#4B1F4E] mb-1"></div>
                      <div className="text-[6px] font-bold text-slate-400">
                        XVITAL
                      </div>
                      <div className="text-[5px] text-slate-300">MULTI</div>
                    </div>

                    <div className="absolute -top-3 w-16 h-6 bg-slate-200 rounded-t-lg"></div>

                  </div>
                )}

                {/* Dark Bottle */}
                {item.darkBottle && (
                  <div className="w-24 h-32 bg-slate-800 rounded-xl shadow-lg border border-slate-700 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">

                    <div className="w-16 h-16 bg-slate-900 border border-slate-700 flex flex-col items-center justify-center p-2 text-center">

                      <div className="w-4 h-4 rounded-full bg-[#63D1D3] mb-1"></div>

                      <div className="text-[6px] font-bold text-white">
                        XVITAL
                      </div>

                      <div className="text-[5px] text-slate-400">BIOME</div>

                    </div>

                    <div className="absolute -top-3 w-16 h-6 bg-slate-700 rounded-t-lg"></div>

                  </div>
                )}

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-1 font-inter">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 font-light mb-4">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">

                  <span className="font-medium text-slate-900 font-inter">
                    {item.price}
                  </span>

                  <button className="text-xs font-medium text-[#4B1F4E] border border-[#4B1F4E]/20 px-3 py-1.5 rounded-lg hover:bg-[#4B1F4E] hover:text-white transition-colors">
                    Coming Soon
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}