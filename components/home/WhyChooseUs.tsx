
import Image from "next/image";

const features = [
  {
    title: "Large product line",
    image: "/images/why-choose-us/product-line.png",
  },
  {
    title: "Domain expertise",
    image: "/images/why-choose-us/domain-expertise.png",
  },
  {
    title: "Competitive pricing",
    image: "/images/why-choose-us/competitive-pricing.png",
  },
  {
    title: "Robust infrastructure and dedicated workforce",
    image: "/images/why-choose-us/infrastructure.png",
  },
  {
    title: "Global quality standards",
    image: "/images/why-choose-us/quality-standards.png",
  },
  {
    title: "Simple ordering process",
    image: "/images/why-choose-us/ordering-process.png",
  },
  {
    title: "Wide distribution network",
    image: "/images/why-choose-us/distribution-network.png",
  },
  {
    title: "Strong business ethics",
    image: "/images/why-choose-us/business-ethics.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#EAE8E1] py-20 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">

        {/* Heading */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
              Why Choose Us
            </p>

            <h2 className="max-w-[650px] text-4xl font-medium leading-tight tracking-tight text-[#282A28] md:text-5xl lg:text-[54px]">
              Why Work With
              <span className="block text-[#947B60]">
                Dairy Machines India?
              </span>
            </h2>
          </div>

          <p className="max-w-[420px] text-sm leading-7 text-[#77766F] md:ml-auto md:text-base">
            Our organization has several outstanding attributes.
            These factors together help strengthen our company and
            provide us an edge over competitors.
          </p>
        </div>

        {/* Premium Feature Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group flex flex-col overflow-hidden border border-[#D9D5CC] bg-[#282A28]"
            >

              {/* Image */}
              <div className="relative h-[250px] overflow-hidden bg-[#D8D4CA]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Number */}
                <span className="absolute left-5 top-5 z-10 flex h-10 w-10 items-center justify-center border border-white/50 bg-[#282A28]/80 text-xs font-semibold tracking-widest text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Solid Text Panel */}
              <div className="flex min-h-[125px] flex-1 flex-col justify-between px-6 py-6">
                <h3 className="max-w-[260px] text-[17px] font-semibold leading-7 tracking-[-0.01em] !text-white">
                  {feature.title}
                </h3>

                <div className="mt-5 h-[2px] w-9 bg-[#C4A27C] transition-all duration-300 group-hover:w-16" />
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
