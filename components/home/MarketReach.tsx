"use client";

import { useEffect, useRef, useState } from "react";
const majorMarkets = [
  { name: "USA", flag: "us" },
  { name: "UK", flag: "gb" },
  { name: "Canada", flag: "ca" },
  { name: "Japan", flag: "jp" },
  { name: "Australia", flag: "au" },
];

const exportCountries = [
  { name: "Sri Lanka", flag: "lk" },
  { name: "Nepal", flag: "np" },
  { name: "Bangladesh", flag: "bd" },
  { name: "United Kingdom", flag: "gb" },
  { name: "United Arab Emirates", flag: "ae" },
];


function CountryList({
  countries,
  light = false,
}: {
  countries: { name: string; flag: string }[];
  light?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`mt-10 grid grid-cols-2 gap-8 border-t pt-8 sm:grid-cols-3 md:grid-cols-5 ${
        light ? "border-[#DEDCD5]" : "border-white/20"
      }`}
    >
      {countries.map((country, index) => (
        <div
          key={country.name}
          style={{
            transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
          }}
          className={`flex items-center gap-3 transition-all duration-700 ease-out hover:-translate-y-1 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <img
            src={`https://flagcdn.com/w40/${country.flag}.png`}
            alt={`${country.name} flag`}
            width="32"
            height="22"
            className="h-[22px] w-8 rounded-[2px] object-cover"
          />

          <p
            className={`text-sm font-medium md:text-base ${
              light ? "text-[#282A28]" : "text-white"
            }`}
          >
            {country.name}
          </p>
        </div>
      ))}
    </div>
  );
}


export default function MarketReach() {
  return (
    <>
      {/* Our Reach */}
      <section className="bg-[#282A28] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#C4A27D]">
            Our Reach
          </p>

          <h2 className="text-4xl font-medium text-white md:text-5xl">
            Major Market
          </h2>

          <CountryList countries={majorMarkets} />
        </div>
      </section>

      {/* Top Export Countries */}
      <section className="bg-[#F5F3EE] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
            International Trade
          </p>

          <h2 className="text-4xl font-medium text-[#282A28] md:text-5xl">
            Top Export Countries
          </h2>

          <CountryList countries={exportCountries} light />
        </div>
      </section>
    </>
  );
}
