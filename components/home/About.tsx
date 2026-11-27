
const businessDetails = [
  ["Nature of Business", "Manufacturer"],
  ["Additional Business", "Wholesale Business, Retail Business"],
  ["Company CEO", "Sawan Chahal"],
  [
    "Registered Address",
    "C-222, Sector 63, HCL, Noida, Gautam Buddha Nagar - 201307, Uttar Pradesh, India",
  ],
  ["Total Number of Employees", "Up to 10 People"],
  ["GST Registration Date", "22-02-2024"],
  ["Legal Status of Firm", "Partnership"],
  ["Annual Turnover", "5 - 25 Cr"],
  ["GST Partner Name", "Sawan Chahal, Rajesh Kumar"],
  ["Export Percentage", "100%"],
  ["Import Export Code (IEC)", "AAWFD2017J"],
  ["Banker", "Union Bank, State Bank of India"],
  ["GST Number", "09AAWFD2017J1Z5"],
];

const paymentModes = [
  "Bank Transfer",
  "Online",
  "Wire Transfer",
  "RTGS",
];

const shipmentModes = [
  "By Air",
  "By Cargo",
  "By Sea",
];

export default function About() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-transparent text-[#282A28]">

      {/* 3D Machinery Background */}
     <iframe
  src="/dmi-about-bg.html"
  title="Dairy Machines India 3D Machinery Background"
  aria-hidden="true"
  tabIndex={-1}
  className="pointer-events-none absolute inset-0 z-0 h-full w-full border-0"
/>

      {/* About Page Content */}
       <div className="relative z-[10]">
        {/* Company Introduction */}
        <section className="px-6 py-24 md:px-10 lg:px-12">
          <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
                About Us
              </p>

              <h1 className="max-w-[620px] font-[var(--font-manrope)] text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-[#282A28] md:text-[54px]">
                Dairy Machines India
              </h1>

              <p className="mt-6 text-[15px] leading-8 text-[#77766F]">
                Established in 2024, with in-depth and immense knowledge,
                "Dairy Machines India", has successfully crafted a position
                as one of the noted Manufacturer and Exporter of Deep Freezer,
                Ice Cream Plant, Ice Cream Fruit Feeder, Milk Pasteurization
                Tank, Mix Ageing Tank, Ice Cream Ripple Pump, Ice Cream E Cart,
                SS Hardening Tunnel, Milk Homogenizer Machine and many more.
              </p>

              <p className="mt-6 text-[15px] leading-8 text-[#77766F]">
                Capitalizing on our industrial know-how and innovation
                philosophy, we strive to improve our existing line-up of
                products and develop new ones to stay ahead in this competing
                domain. The active support provided by our experienced
                workforce and advanced manufacturing unit have helped us
                enormously in meeting our customer's requirements.
                Moreover, they keep themselves abreast of changing market
                demands and technological advancements to surpass the
                expectations of our valuable patrons.
              </p>

              <p className="mt-6 text-[15px] leading-8 text-[#77766F]">
                Under the leadership and technical guidance of our adroit
                mentor, "Mr. Sawan Chahal (CEO)", we have conquered many
                benchmarks of success. His vision is to progress as a highly
                technically qualified organization and maintain the status
                of customer oriented organization facilitating superior
                quality products.
              </p>
            </div>

            {/* Company Image Placeholder */}
            <div className="min-h-[420px] border border-[#D8D4CB]/60 bg-[#ECEAE4]/45 backdrop-blur-[2px]" />
          </div>
        </section>

        {/* Company Factsheet */}
        <section className="border-y border-[#D8D4CB]/70 bg-[#E9E6DF]/65 px-6 py-16 backdrop-blur-[3px] md:px-10 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
              Company Factsheet
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-3xl font-medium">2024</p>
                <p className="mt-2 text-sm text-[#77766F]">Established</p>
              </div>

              <div>
                <p className="text-3xl font-medium">1500</p>
                <p className="mt-2 text-sm text-[#77766F]">
                  Manufacturing Unit (Sq. Ft.)
                </p>
              </div>

              <div>
                <p className="text-3xl font-medium">10</p>
                <p className="mt-2 text-sm text-[#77766F]">
                  Employees (Up to 10 People)
                </p>
              </div>

              <div>
                <p className="text-3xl font-medium">Manufacturer</p>
                <p className="mt-2 text-sm text-[#77766F]">
                  Nature of Business
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Company Information */}
        <section className="bg-[#E7E8E5]/65 px-6 py-24 backdrop-blur-[3px] md:px-10 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
              Business Profile
            </p>

            <h2 className="mb-12 text-4xl font-medium md:text-5xl">
              Company Information
            </h2>

            <div className="grid gap-x-16 md:grid-cols-2">
              {businessDetails.map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-2 border-b border-[#DEDCD5]/80 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="text-sm text-[#77766F]">{label}</p>

                  <p className="text-sm font-medium text-[#282A28] sm:max-w-[65%] sm:text-right">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Payment and Shipment Details */}
            <div className="mt-16 grid gap-12 border-t border-[#DEDCD5]/80 pt-12 md:grid-cols-2">
              <div>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
                  Payment Details
                </p>

                <h3 className="mb-6 text-2xl font-medium">
                  Payment Modes
                </h3>

                <div className="flex flex-wrap gap-3">
                  {paymentModes.map((mode) => (
                    <span
                      key={mode}
                      className="border border-[#DEDCD5] bg-[#F5F3EE]/55 px-4 py-3 text-sm text-[#77766F]"
                    >
                      {mode}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
                  Shipping Details
                </p>

                <h3 className="mb-6 text-2xl font-medium">
                  Shipment Modes
                </h3>

                <div className="flex flex-wrap gap-3">
                  {shipmentModes.map((mode) => (
                    <span
                      key={mode}
                      className="border border-[#DEDCD5] bg-[#F5F3EE]/55 px-4 py-3 text-sm text-[#77766F]"
                    >
                      {mode}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure & Team */}
        <section className="bg-[#F5F3EE]/65 px-6 py-24 backdrop-blur-[3px] md:px-10 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
                  Inside Our Company
                </p>

                <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                  Our Infrastructure
                </h2>
              </div>

              <p className="max-w-[390px] text-sm leading-7 text-[#77766F]">
                Explore our team, workplace and manufacturing
                facilities at Dairy Machines India.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">

              {/* Manufacturing Unit */}
              <div className="group relative min-h-[420px] overflow-hidden border border-[#D8D4CB]/70 bg-[#E9E6DF]/45 backdrop-blur-[2px] lg:row-span-2">
                <div className="absolute inset-0 bg-[#E9E6DF]/20" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-[#D8D4CB]/70 bg-[#F5F3EE]/80 p-7 backdrop-blur-[4px]">
                  <div>
                    <p className="mb-2 text-xs tracking-widest text-[#A17C52]">
                      01 / FACILITY
                    </p>

                    <h3 className="text-2xl font-medium">
                      Our Manufacturing Unit
                    </h3>

                    <p className="mt-2 text-sm text-[#77766F]">
                      1500 Square Feet
                    </p>
                  </div>

                  <span className="text-2xl text-[#A17C52]">↗</span>
                </div>
              </div>

              {/* Our Team */}
              <div className="group relative min-h-[280px] overflow-hidden border border-[#D8D4CB]/70 bg-[#E9E6DF]/45 backdrop-blur-[2px]">
                <div className="absolute inset-0 bg-[#E9E6DF]/20" />

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-[#D8D4CB]/70 bg-[#F5F3EE]/80 p-6 backdrop-blur-[4px]">
                  <div>
                    <p className="mb-2 text-xs tracking-widest text-[#A17C52]">
                      02 / PEOPLE
                    </p>

                    <h3 className="text-xl font-medium">
                      Our Team
                    </h3>
                  </div>

                  <span className="text-2xl text-[#A17C52]">↗</span>
                </div>
              </div>

              {/* Our Office */}
              <div className="group relative min-h-[280px] overflow-hidden border border-[#D8D4CB]/70 bg-[#E9E6DF]/45 backdrop-blur-[2px]">
                <div className="absolute inset-0 bg-[#E9E6DF]/20" />

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-[#D8D4CB]/70 bg-[#F5F3EE]/80 p-6 backdrop-blur-[4px]">
                  <div>
                    <p className="mb-2 text-xs tracking-widest text-[#A17C52]">
                      03 / WORKSPACE
                    </p>

                    <h3 className="text-xl font-medium">
                      Our Office
                    </h3>
                  </div>

                  <span className="text-2xl text-[#A17C52]">↗</span>
                </div>
              </div>

              {/* Our Sign Board */}
              <div className="group relative min-h-[220px] overflow-hidden border border-[#D8D4CB]/70 bg-[#E9E6DF]/45 backdrop-blur-[2px] lg:col-span-2">
                <div className="absolute inset-0 bg-[#E9E6DF]/20" />

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-[#D8D4CB]/70 bg-[#F5F3EE]/80 p-6 backdrop-blur-[4px]">
                  <div>
                    <p className="mb-2 text-xs tracking-widest text-[#A17C52]">
                      04 / COMPANY IDENTITY
                    </p>

                    <h3 className="text-xl font-medium">
                      Our Sign Board
                    </h3>
                  </div>

                  <span className="text-2xl text-[#A17C52]">↗</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Certificates & Recognition */}
        <section className="bg-[#F5F3EE]/65 px-6 py-24 backdrop-blur-[3px] md:px-10 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
                  Official Documentation
                </p>

                <h2 className="text-4xl font-medium md:text-5xl">
                  Certificates &
                  <span className="block text-[#8B765E]">
                    Recognition
                  </span>
                </h2>
              </div>

              <p className="max-w-[390px] text-sm leading-7 text-[#77766F]">
                Official Importer-Exporter Code certificate
                issued to Dairy Machines India.
              </p>
            </div>

            <div className="grid items-center gap-12 border border-[#DEDCD5] bg-[#E9E6DF]/75 p-6 backdrop-blur-[3px] md:grid-cols-2 md:p-10">

              {/* Original IEC Certificate */}
              <a
                href="https://5.imimg.com/data5/SELLER/Default/2024/4/414736144/HH/BA/TQ/197985230/certificate-of-iec-page-0001-1000x1000.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center bg-white p-5 transition-transform duration-300 hover:scale-[1.01]"
              >
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/4/414736144/HH/BA/TQ/197985230/certificate-of-iec-page-0001-1000x1000.jpg"
                  alt="Original Importer Exporter Code certificate of Dairy Machines India"
                  className="max-h-[650px] w-full object-contain"
                />
              </a>

              {/* Certificate Details */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A17C52]">
                  Importer Exporter Code
                </p>

                <h3 className="mt-5 text-3xl font-medium">
                  IEC Certificate
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#77766F]">
                  Official certificate issued by the Directorate General
                  of Foreign Trade, Government of India, to Dairy Machines India.
                </p>

                <div className="mt-9 border-t border-[#D4D0C7]">
                  <div className="flex justify-between gap-4 border-b border-[#D4D0C7] py-5">
                    <span className="text-sm text-[#77766F]">Firm Name</span>
                    <span className="text-right text-sm font-medium">
                      Dairy Machines India
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b border-[#D4D0C7] py-5">
                    <span className="text-sm text-[#77766F]">IEC Number</span>
                    <span className="text-sm font-medium">AAWFD2017J</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b border-[#D4D0C7] py-5">
                    <span className="text-sm text-[#77766F]">Date of Issue</span>
                    <span className="text-sm font-medium">27/04/2024</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b border-[#D4D0C7] py-5">
                    <span className="text-sm text-[#77766F]">Nature of Concern</span>
                    <span className="text-sm font-medium">Partnership</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b border-[#D4D0C7] py-5">
                    <span className="text-sm text-[#77766F]">Signatory</span>
                    <span className="text-sm font-medium">Sawan Chahal</span>
                  </div>
                </div>

                <a
                  href="https://5.imimg.com/data5/SELLER/Default/2024/4/414736144/HH/BA/TQ/197985230/certificate-of-iec-page-0001-1000x1000.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 bg-[#282A28] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#A17C52]"
                >
                  View Original Certificate <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
