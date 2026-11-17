import Link from "next/link";

const reviews = [
  {
    name: "Ghassen Hamila",
    location: "United States Of America",
    product: "900 LPH Ice Cream Plant",
    date: "22 January 2026",
  },
  {
    name: "Vishesh",
    location: "Rampur, Uttar Pradesh",
    product: "Cold Storage Rooms",
    date: "16 March 2026",
  },
  {
    name: "Anil Pathak",
    location: "Angola",
    product: "Ice Lolly Machine",
    date: "26 December 2025",
  },
  {
    name: "Suraj",
    location: "Baheri, Uttar Pradesh",
    product: "Ice Cream Plant",
    date: "11 October 2025",
  },
  {
    name: "Suresh Chandra Jat",
    location: "Bhiwani, Haryana",
    product: "Ice Cream Plant",
    date: "29 September 2025",
  },
  {
    name: "Vandana",
    location: "Muzaffarpur, Bihar",
    product: "Plate Heat Exchangers",
    date: "19 December 2024",
  },
  {
    name: "Alok",
    location: "Noida, Uttar Pradesh",
    product: "Ice Cream Plant",
    date: "11 April 2024",
    review:
      "I'm very happy to work with DMI This is trusted company to purchase plant and machine",
  },
  {
    name: "Laxmi Ice Cream Private Limited",
    location: "Loni, Uttar Pradesh",
    product: "Ice Cream Plant",
    date: "11 April 2024",
    review:
      "Fantastic Experience with DMI! Product deliver on time. Cost efficient",
  },
  {
    name: "Raja Chasti",
    location: "Srinagar, Jammu & Kashmir",
    product: "Milk Processing Plant and Machines",
    date: "28 July 2024",
    review: "nice",
  },
  {
    name: "IndiaMART Buyer",
    location: "India",
    product: "Ice Cream Plant",
    date: "22 March 2024",
  },
  {
    name: "GYAN PRAKASH",
    location: "India",
    product: "Ice Cream Plant",
    date: "20 March 2024",
  },
  {
    name: "Poonam",
    location: "Lucknow, Uttar Pradesh",
    product: "Ice Cream Mould",
    date: "09 January 2025",
  },
  {
    name: "ARTI KUMARI",
    location: "Purnea, Bihar",
    product: "Not specified",
    date: "09 January 2025",
  },
  {
    name: "Santosh Sahoo",
    location: "Keonjhar, Odisha",
    product: "Ice Cream Plant",
    date: "22 October 2024",
  },
  {
    name: "Aziran Khatun",
    location: "Mangaldai, Assam",
    product: "Ice Cream Plant",
    date: "06 October 2024",
  },
  {
    name: "Dimple Thakur",
    location: "Mandi, Himachal Pradesh",
    product: "Ice Cream Plant",
    date: "30 August 2025",
  },
  {
    name: "Ravinder Singh Rawat",
    location: "Noida, Uttar Pradesh",
    product: "Ice Cream Cart",
    date: "29 March 2024",
  },
];

export default function OurWorkPage() {
  return (
    <main className="bg-[#F5F3EE] text-[#282A28]">

      {/* HERO */}
      <section className="px-6 md:px-12 lg:px-20 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#A17C52] font-semibold mb-7">
            Dairy Machines India
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
            Our Work.
            <span className="block text-[#A17C52]">
              Built Around Production.
            </span>
          </h1>

          <div className="mt-10 flex flex-col md:flex-row justify-between gap-8 items-start md:items-end">
            <p className="max-w-2xl text-[#77766F] leading-8 text-base md:text-lg">
              We manufacture ice cream making plants and machinery.
              Explore our manufacturing capabilities, infrastructure,
              team and customer experiences.
            </p>

            <Link
              href="/contact-us"
              className="border-b border-[#A17C52] pb-2 text-sm font-semibold hover:text-[#A17C52] transition"
            >
              Get In Touch ↗
            </Link>
          </div>
        </div>
      </section>

      {/* MANUFACTURING */}
      <section className="bg-[#282A28] text-white px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-[#C4A27C] mb-6">
            Manufacturing
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
              Ice Cream Machinery
              <span className="block text-[#C4A27C]">
                Manufacturing
              </span>
            </h2>

            <p className="text-white/60 leading-8 max-w-xl">
              DMI manufactures ice cream making plants and supplies
              semi-automatic and fully automatic machinery as per
              customer requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-10 border-t border-white/15">
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-[#C4A27C]">
                1500
              </p>
              <p className="text-sm text-white/60 mt-3">
                Manufacturing Unit Size (Square Feet)
              </p>
            </div>

            <div>
              <p className="text-4xl md:text-5xl font-semibold text-[#C4A27C]">
                15+
              </p>
              <p className="text-sm text-white/60 mt-3">
                Years of Experience
              </p>
            </div>

            <div>
              <p className="text-4xl md:text-5xl font-semibold text-[#C4A27C]">
                4.7/5
              </p>
              <p className="text-sm text-white/60 mt-3">
                Customer Rating
              </p>
              <p className="text-xs text-white/40 mt-2">
                Reviewed by 17 users
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TURNKEY WORK */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-28">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A17C52] mb-6">
            Our Capabilities
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl">
            From Brand Development to Production & Installation
          </h2>

          <p className="text-[#77766F] leading-8 mt-6 max-w-2xl">
            At DMI, we offer a complete turnkey solution covering
            brand development, packaging, production, marketing,
            timely delivery and installation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DEDCD5] mt-14 border border-[#DEDCD5]">
            {[
              "Brand Development",
              "Packaging Expertise",
              "State-of-the-Art Production",
              "Strategic Marketing",
              "Timely Delivery",
              "Installation",
            ].map((item, index) => (
              <div
                key={item}
                className="bg-[#F5F3EE] p-8 md:p-10 min-h-40"
              >
                <p className="text-xs text-[#A17C52] mb-8">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="bg-[#ECEAE4] px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A17C52] mb-6">
            Infrastructure & Team
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Our Infrastructure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#F5F3EE] p-8 md:p-12 min-h-64 flex flex-col justify-between">
              <p className="text-xs uppercase tracking-widest text-[#A17C52]">
                Manufacturing Unit
              </p>
              <div>
                <p className="text-5xl font-semibold">1500 Sq. Ft.</p>
                <p className="text-sm text-[#77766F] mt-3">
                  Manufacturing Unit Size
                </p>
              </div>
            </div>

            <div className="bg-[#F5F3EE] p-8 md:p-12 min-h-64 flex flex-col justify-between">
              <p className="text-xs uppercase tracking-widest text-[#A17C52]">
                Our Team
              </p>
              <div>
                <h3 className="text-3xl font-semibold">
                  Infrastructure & Team
                </h3>
                <p className="text-sm text-[#77766F] mt-3">
                  Official company profile section
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-28">
        <div className="max-w-7xl mx-auto">

          <p className="text-xs uppercase tracking-[0.22em] text-green-600 font-semibold mb-6">
            Customer Experiences
          </p>

          <div className="flex flex-col md:flex-row justify-between gap-8 md:items-end">
            <div>
              <h2 className="text-4xl md:text-6xl font-semibold">
                Trusted by Our
                <span className="block text-green-600">
                  Customers.
                </span>
              </h2>

              <p className="text-[#77766F] mt-5">
                Feedback and experiences shared by customers of
                Dairy Machines India.
              </p>
            </div>

            <div className="border-l border-[#DEDCD5] pl-7">
              <p className="text-5xl font-semibold">4.7/5</p>
              <p className="text-green-600 text-xl tracking-wider mt-2">
                ★★★★★
              </p>
              <p className="text-sm text-[#77766F] mt-2">
                Based on 17 customer reviews
              </p>
            </div>
          </div>

          {/* RATING DISTRIBUTION */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 border-y border-[#DEDCD5] py-8 mt-12">
            {[
              ["82%", "5 Star"],
              ["6%", "4 Star"],
              ["0%", "3 Star"],
              ["0%", "2 Star"],
              ["12%", "1 Star"],
            ].map(([percentage, label]) => (
              <div key={label}>
                <p className="text-2xl font-semibold text-green-600">
                  {percentage}
                </p>
                <p className="text-sm text-[#77766F] mt-2">{label}</p>
              </div>
            ))}
          </div>

          {/* ALL 17 REVIEWS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {reviews.map((review, index) => (
              <article
                key={review.name}
                className="group bg-white border border-[#DEDCD5] p-7 md:p-8 flex flex-col justify-between min-h-[260px] hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center gap-3">
                    <p className="text-xs uppercase tracking-wider font-semibold text-green-600">
                      Customer {String(index + 1).padStart(2, "0")}
                    </p>

                    <span className="text-xs text-[#77766F]">
                      {review.date}
                    </span>
                  </div>

                  <div className="mt-7">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-700 font-semibold">
                      {review.name.charAt(0)}
                    </span>
                  </div>

                  {review.review && (
                    <p className="text-[#555650] leading-7 mt-5">
                      “{review.review}”
                    </p>
                  )}

                  <p className="text-xs text-[#77766F] mt-5">
                    Product: {review.product}
                  </p>
                </div>

                <div className="border-t border-[#DEDCD5] pt-5 mt-7">
                  <h3 className="font-semibold group-hover:text-green-700 transition-colors">
                    {review.name}
                  </h3>

                  <p className="text-xs text-[#77766F] mt-2">
                    {review.location}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      

    </main>
  );
}