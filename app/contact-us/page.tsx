
"use client";

import { useState } from "react";

const productOptions = [
  "Ice Candy Machine",
  "Deep Freezer",
  "Ice Cream Plant",
  "Kulfi Ice Cream",
  "Ageing Vat Machine",
  "Ice Cream Fruit Feeder",
  "Milk Processing Plant",
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
  "Other Requirement",
];

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappMessage = `Hello Dairy Machines India,

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}
Product / Requirement: ${form.requirement}
Message: ${form.message}`;

    const whatsappURL = `https://wa.me/917949083327?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="bg-[#F5F3EE] text-[#282A28]">
      {/* Hero Section */}
      <section className="border-b border-[#DEDCD5]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#A17C52]">
            Get in Touch
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Let&apos;s discuss your
            <span className="text-[#A17C52]"> requirements.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#77766F] md:text-lg">
            Connect with Dairy Machines India for your business enquiries
            and product requirements.
          </p>
        </div>
      </section>

      {/* Contact Information & Enquiry Form */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">

        {/* Left: Contact Information */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#A17C52]">
            Contact Information
          </p>

          <h2 className="max-w-md text-3xl font-semibold leading-snug md:text-4xl">
            We&apos;re here to help you.
          </h2>

          <p className="mt-5 max-w-lg leading-8 text-[#77766F]">
            Get in touch with our team to discuss your requirements.
            We look forward to hearing from you.
          </p>

          <div className="mt-12 space-y-9">
            {/* Contact Person */}
            <div className="border-b border-[#DEDCD5] pb-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A17C52]">
                Contact Person
              </p>

              <p className="text-xl font-medium">Rajesh</p>
              <p className="mt-1 text-sm text-[#77766F]">Director</p>
            </div>

            {/* Phone */}
            <div className="border-b border-[#DEDCD5] pb-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A17C52]">
                Phone
              </p>

              <a
                href="tel:+917949083327"
                className="text-xl font-medium transition hover:text-[#A17C52]"
              >
                +91 79490 83327
              </a>
            </div>

            {/* Address */}
            <div className="border-b border-[#DEDCD5] pb-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A17C52]">
                Our Location
              </p>

              <p className="max-w-sm text-base leading-7 text-[#555650]">
                C-222, Sector 63, HCL, Noida - 201307,
                Gautam Buddha Nagar, Uttar Pradesh, India.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=C-222%2C+Sector+63%2C+Noida%2C+Uttar+Pradesh+201307%2C+India"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#A17C52] hover:underline"
              >
                Get Directions <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Enquiry Form */}
        <div className="border border-[#DEDCD5] bg-white p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A17C52]">
            Send an Enquiry
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Tell us about your requirements
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#77766F]">
            Fill in the details below. Your enquiry will open in WhatsApp
            for you to send.
          </p>

          <form onSubmit={handleSubmit} className="mt-9 space-y-6">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Your Name *
              </label>

              <input
                required
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Enter your name"
                className="w-full border border-[#DEDCD5] bg-[#FDFCF9] px-4 py-3 text-sm outline-none transition focus:border-[#A17C52]"
              />
            </div>

            {/* Phone & Email */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone Number *
                </label>

                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  placeholder="Enter phone number"
                  className="w-full border border-[#DEDCD5] bg-[#FDFCF9] px-4 py-3 text-sm outline-none transition focus:border-[#A17C52]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="Enter email"
                  className="w-full border border-[#DEDCD5] bg-[#FDFCF9] px-4 py-3 text-sm outline-none transition focus:border-[#A17C52]"
                />
              </div>
            </div>

            {/* Product Dropdown */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Product / Requirement *
              </label>

              <select
                required
                value={form.requirement}
                onChange={(e) =>
                  setForm({ ...form, requirement: e.target.value })
                }
                className="w-full border border-[#DEDCD5] bg-[#FDFCF9] px-4 py-3 text-sm outline-none transition focus:border-[#A17C52]"
              >
                <option value="">Select a Product</option>

                {productOptions.map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Your Message *
              </label>

              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Write your enquiry here..."
                className="w-full resize-none border border-[#DEDCD5] bg-[#FDFCF9] px-4 py-3 text-sm outline-none transition focus:border-[#A17C52]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#282A28] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#A17C52]"
            >
              Submit Enquiry <span className="ml-2">↗</span>
            </button>

            <p className="text-center text-xs text-[#77766F]">
              You will be redirected to WhatsApp to send your enquiry.
            </p>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#282A28] px-6 py-16 text-center text-white md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A47F]">
          Dairy Machines India
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-snug md:text-4xl">
          Have a requirement? Let&apos;s connect.
        </h2>

        <a
          href="tel:+917949083327"
          className="mt-8 inline-flex items-center border border-[#A17C52] px-8 py-4 text-sm font-semibold transition hover:bg-[#A17C52]"
        >
          Call Us <span className="ml-3">↗</span>
        </a>
      </section>
    </main>
  );
}
