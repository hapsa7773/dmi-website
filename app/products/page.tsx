
"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  "Ice Cream Plant",
  "Ice Candy Machine",
  "Deep Freezer",
  "Ageing Vat Machine",
  "Ice Cream Fruit Feeder",
  "Milk Processing Plant",
  "Kulfi Ice Cream",
  "Batch Freezer",
  "Mini Ice Cream Plant",
  "200 LPH Ice Cream Processing Plant",
  "Ice Cream Ripple Pump",
  "Candy Making Machine",
  "Milk Pasteurizer",
  "Milk Cooler",
  "Fully Automatic Ice Cream Plant",
  "Ice Cream Plant & Ice Cream Machines",
  "Automatic Ice Cream Plant",
  "Milk Homogenizer Machine",
  "Cold Storage And Blast Room",
  "Ice Cream E Cart",
  "Ice Cream Rotary Type Cup And Cone Filling Machine",
  "Milk Pasteurization Tank",
  "Mix Ageing Tank",
  "Ice Cream Flavour Tank",
  "Chocolate And Defrost Tank",
  "SS Hardening Tunnel",
  "Servo HMI Pouch Packing Machine",
  "New Items",
];

function createSlug(category: string) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <main className="min-h-screen bg-[#F5F3EE]">

      {/* Page Header */}
      <section className="px-6 pb-14 pt-20 md:px-10 lg:px-12 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
            Our Machinery Collection
          </p>

          <h1 className="font-heading text-4xl font-medium leading-tight text-[#282A28] md:text-6xl">
            Our Products
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-[#77766F] md:text-base">
            Explore our range of dairy processing machinery and
            industrial equipment, designed to support modern
            dairy and ice cream businesses.
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-2xl">
            <div className="flex items-center gap-4 border border-[#DEDCD5] bg-white px-5 py-4 transition-colors focus-within:border-[#A17C52]">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-[#77766F]"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products or machinery..."
                aria-label="Search product categories"
                className="w-full bg-transparent text-sm text-[#282A28] outline-none placeholder:text-[#99968E]"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="shrink-0 text-xs text-[#77766F] transition-colors hover:text-[#A17C52]"
                >
                  Clear
                </button>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Product Categories */}
      <section className="px-6 pb-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">

          {/* Category Heading */}
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#DEDCD5] pb-5">

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#A17C52]">
                Browse Our Range
              </p>

              <h2 className="mt-3 text-2xl font-medium text-[#282A28] md:text-3xl">
                Explore Categories
              </h2>
            </div>

            <p className="text-sm text-[#77766F]">
              {filteredCategories.length} Categories
            </p>

          </div>

          {/* Category Cards */}
          {filteredCategories.length > 0 ? (

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredCategories.map((category, index) => (

                <Link
                  key={category}
                  href={`/products/${createSlug(category)}`}
                  className="group flex min-h-[145px] flex-col justify-between border border-[#DEDCD5] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#A17C52] hover:shadow-md"
                >

                  <span className="text-xs tracking-widest text-[#A17C52]">
                    CATEGORY {String(categories.indexOf(category) + 1).padStart(2, "0")}
                  </span>

                  <div className="mt-8 flex items-end justify-between gap-3">

                    <h3 className="text-base font-medium leading-6 text-[#282A28] transition-colors group-hover:text-[#A17C52]">
                      {category}
                    </h3>

                    <span className="shrink-0 text-xl text-[#A17C52] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </Link>

              ))}

            </div>

          ) : (

            /* No Search Results */
            <div className="py-20 text-center">

              <h3 className="text-xl font-medium text-[#282A28]">
                No Matching Categories Found
              </h3>

              <p className="mt-3 text-sm text-[#77766F]">
                Try searching with another product name.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-6 text-sm font-medium text-[#A17C52] underline underline-offset-4"
              >
                Clear Search
              </button>

            </div>

          )}

        </div>
      </section>

    </main>
  );
}
