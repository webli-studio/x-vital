"use client";




const links = [
  { name: "Terms", href: "#" },
  { name: "Privacy", href: "#" },
  { name: "Contact", href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Logo + Tagline */}
        <div className="mb-6 md:mb-0 text-center md:text-left">

          <span
            className={`text-2xl tracking-tighter font-semibold text-white`}
          >
            XVITAL
          </span>

          <p className="text-slate-500 text-xs mt-2 font-light">
            Precision nutrition for the modern human.
          </p>

        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm text-slate-400 font-light">

          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

        </div>

      </div>

    </footer>
  );
}