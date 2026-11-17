"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Products", href: "/products" },
  // { name: "Industries", href: "/industries" },
  { name: "Our Work", href: "/our-work" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <nav className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between px-6 lg:px-12">

        {/* Company Logo */}
        <Link href="/" className="relative flex shrink-0 items-center">
          <Image
            src="/logos/logo-black.png"
            alt="Dairy Machine India"
            width={190}
            height={70}
            priority
            className="h-auto w-[150px] origin-center object-contain transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.05] md:w-[175px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[13px] font-medium tracking-wide text-[#282A28] transition-colors duration-200 hover:text-[#A17C52]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact-us"
          className="hidden items-center justify-center bg-[#282A28] px-6 py-3 text-[12px] font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#A17C52] lg:inline-flex"
        >
          Get Best Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`h-[1.5px] w-6 bg-[#282A28] transition-transform ${
              menuOpen ? "translate-y-[3.75px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-[#282A28] transition-transform ${
              menuOpen ? "-translate-y-[3.75px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#282A28] transition-colors hover:text-[#A17C52]"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-[#282A28] px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#A17C52]"
            >
              Get Best Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}