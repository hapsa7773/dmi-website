
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Products", href: "/products" },
  { name: "Our Work", href: "/our-work" },
  { name: "Contact Us", href: "/contact-us" },
];

const productLinks = [
  { name: "Ice Cream Plant", href: "/products/ice-cream-plant" },
  { name: "Ice Candy Machine", href: "/products/ice-candy-machine" },
  { name: "Deep Freezer", href: "/products/deep-freezer" },
  { name: "Milk Processing Plant", href: "/products/milk-processing-plant" },
  { name: "Ageing Vat Machine", href: "/products/ageing-vat-machine" },
];

export default function Footer() {
  return (
    <footer className="bg-[#282A28] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-20">

          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="mb-7 inline-block">
              <img
                src="/logos/logo-white.png"
                alt="Dairy Machines India"
                className="h-auto w-[185px] object-contain"
              />
            </Link>

            <p className="max-w-[310px] text-sm leading-7 text-white/60">
              We are a Manufacturer and Supplier of Deep Freezer,
              Ice Cream Plant, Ice Cream Fruit Feeder, Milk
              Pasteurization Tank, Mix Ageing Tank, Ice Cream
              Ripple Pump, Ice Cream E Cart, SS Hardening Tunnel
              and many more.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#C4A27C]">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-white/65 transition-colors duration-200 hover:translate-x-1 hover:text-[#C4A27C]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#C4A27C]">
              Our Products
            </h3>

            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-white/65 transition-colors duration-200 hover:translate-x-1 hover:text-[#C4A27C]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/products"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#C4A27C] transition-colors hover:text-white"
            >
              View Complete Range <span>↗</span>
            </Link>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#C4A27C]">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div>
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                  Contact Person
                </p>

                <p className="text-sm text-white/75">
                  Rajesh (Director)
                </p>
              </div>

              <div>
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                  Phone
                </p>

                <a
                  href="tel:+917949083327"
                  className="text-sm text-white/75 transition-colors hover:text-[#C4A27C]"
                >
                  +91 79490 83327
                </a>
              </div>

              <div>
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                  Address
                </p>

                <p className="max-w-[280px] text-sm leading-7 text-white/65">
                  C-222, Sector 63, HCL,
                  Noida - 201307,
                  Gautam Buddha Nagar,
                  Uttar Pradesh, India.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs leading-6 text-white/45">
            © 2026 Dairy Machines India. All Rights Reserved.
          </p>

          <p className="text-xs leading-6 text-white/45">
            GST No. 09AAWFD2017J1Z5
          </p>

        </div>

      </div>
    </footer>
  );
}
