
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[#F5F3EE]">

      {/* Full Width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-machines.png"
          alt="Dairy Machines India processing equipment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Text Readability Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(245,243,238,0.98) 0%, rgba(245,243,238,0.94) 25%, rgba(245,243,238,0.72) 36%, rgba(245,243,238,0.22) 48%, transparent 60%)",
        }}
      />

      

      {/* Hero Content */}
      <div className="relative z-20 mx-auto flex min-h-[680px] max-w-[1440px] items-center px-6 py-20 md:px-10 lg:px-12">

        <div className="max-w-[610px]">

          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
            Complete Dairy Processing Solutions
          </p>

          <h1 className="font-serif text-5xl font-medium leading-[1.06] tracking-[-0.035em] text-[#191919] sm:text-6xl lg:text-[72px]">
            Engineered for
            <span className="block text-[#79563C]">
              Modern Dairy
            </span>
            Businesses
          </h1>

          <p className="mt-7 max-w-[490px] text-base leading-8 text-[#45433F]">
            Reliable dairy processing machinery for Ice Cream,
            Milk, Ice Candy and a wide range of dairy applications.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 rounded-full bg-[#282A28] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#A17C52]"
            >
              Get Best Quote
              <span>→</span>
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-[#77766F] bg-white/60 px-8 py-4 text-sm font-medium text-[#282A28] transition-all duration-300 hover:bg-white"
            >
              Explore Our Machinery
            </Link>

          </div>

          {/* Key Features */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-[#DEDCD5] pt-7">

            <p className="text-sm font-medium text-[#282A28]">
              Robust Engineering
            </p>

            <p className="text-sm font-medium text-[#282A28]">
              Complete Plant Solutions
            </p>

            <p className="text-sm font-medium text-[#282A28]">
              Reliable Support
            </p>

          </div>

        </div>
      </div>
    </section>

    
    
  );

  
}

