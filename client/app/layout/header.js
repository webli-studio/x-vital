"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
      
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Image
          src="/xvitalLogoTransparent.png"
          alt="XVITAL logo"
          width={160}
          height={50}
          priority
          className="w-[140px] md:w-[160px] object-contain"
        />

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#protocol" className="hover:text-[#4B1F4E] transition-colors">
            Protocol
          </a>
          <a href="#programs" className="hover:text-[#4B1F4E] transition-colors">
            Programs
          </a>
          <a href="#consultation" className="hover:text-[#4B1F4E] transition-colors">
            Consultation
          </a>
          <a href="#supplements" className="hover:text-[#4B1F4E] transition-colors">
            Supplements
          </a>
        </div>

        {/* CTA */}
        <button className="bg-[#4B1F4E] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#4B1F4E]/90 hover:shadow-lg hover:shadow-[#4B1F4E]/20 transition-all duration-300 flex items-center gap-2">
          Start Assessment
            <Icon icon="solar:arrow-right-linear" width="16"/>
        </button>
    </div>
    </nav>
  );
}