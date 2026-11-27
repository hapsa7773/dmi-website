
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[900px] overflow-hidden bg-[#F5F3EE] sm:min-h-[950px] lg:min-h-[680px]">

      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-machines.png"
          alt="Dairy Machines India processing equipment"
          fill
          priority
          sizes="100vw"
          className="object-contain object-bottom lg:object-cover lg:object-center"
        />
      </div>

      {/* Mobile Overlay */}
      <div
        className="absolute inset-0 z-10 lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(245,243,238,0.99) 0%, rgba(245,243,238,0.96) 43%, rgba(245,243,238,0.78) 58%, rgba(245,243,238,0.18) 82%, rgba(245,243,238,0.02) 100%)",
        }}
      />

      {/* Desktop Overlay */}
      <div
        className="absolute inset-0 z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(245,243,238,0.98) 0%, rgba(245,243,238,0.94) 25%, rgba(245,243,238,0.72) 36%, rgba(245,243,238,0.22) 48%, transparent 60%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 mx-auto flex min-h-[900px] max-w-[1440px] items-start px-5 pb-16 pt-20 sm:min-h-[950px] sm:px-8 lg:min-h-[680px] lg:items-center lg:px-10 lg:py-20 xl:px-12">

        <div className="w-full max-w-[610px]">

          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A17C52] sm:mb-7 sm:text-xs sm:tracking-[0.22em]">
            Complete Dairy Processing Solutions
          </p>

          <h1 className="font-serif text-[42px] font-medium leading-[1.08] tracking-[-0.035em] text-[#191919] sm:text-6xl lg:text-[72px]">
            Engineered for
            <span className="block text-[#79563C]">
              Modern Dairy
            </span>
            Businesses
          </h1>

          <p className="mt-5 max-w-[490px] text-sm leading-7 text-[#45433F] sm:mt-7 sm:text-base sm:leading-8">
            Reliable dairy processing machinery for Ice Cream,
            Milk, Ice Candy and a wide range of dairy applications.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">

            <Link
              href="/contact-us"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#282A28] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#A17C52] sm:w-auto sm:px-8"
            >
              Get Best Quote
              <span>→</span>
            </Link>

            <Link
              href="/products"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#77766F] bg-white/70 px-7 py-4 text-sm font-medium text-[#282A28] transition-all duration-300 hover:bg-white sm:w-auto sm:px-8"
            >
              Explore Our Machinery
            </Link>

          </div>

          {/* Key Features */}
          <div className="mt-8 grid grid-cols-3 gap-2 border-t border-[#DEDCD5] pt-5 sm:mt-12 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-5 sm:pt-7">

            <p className="text-[10px] font-medium leading-5 text-[#282A28] sm:text-sm">
              Robust Engineering
            </p>

            <p className="text-[10px] font-medium leading-5 text-[#282A28] sm:text-sm">
              Complete Plant Solutions
            </p>

            <p className="text-[10px] font-medium leading-5 text-[#282A28] sm:text-sm">
              Reliable Support
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
