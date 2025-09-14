"use client";

import Image from "next/image";
import logo from "@/assets/logo-text.png";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto bg-[var(--primary)] shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Arthivia logo"
            quality={100}
            width={140}
            height={70}
            priority
          />
        </Link>
        <div className="hidden md:flex gap-8">
          {[
            { label: "Serviços", href: "#services" },
            { label: "Portfólio", href: "#portfolio" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${jetBrainsMono.className} text-white text-sm md:text-base relative group`}
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-300 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[var(--primary)] flex flex-col items-center gap-6 py-6">
          {[
            { label: "Serviços", href: "#services" },
            { label: "Portfólio", href: "#portfolio" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`${jetBrainsMono.className} text-white text-lg`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
