
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

type CategoryProduct = {
  slug: string;
  name: string;
  price: string;
  image?: string;
  capacity?: string;
  material?: string;
  voltage?: string;
  phase?: string;
  cooling?: string;
  usage?: string;
  extra?: string;
  specifications?: [string, string][];
};

const iceCandyProducts: CategoryProduct[] = [
  {
    slug: "600-pph-ice-candy-machine",
    name: "600 PPH Ice Candy Machine",
    price: "₹1,75,000",
    capacity: "600 PPH",
    material: "Stainless Steel",
    voltage: "220 V",
    phase: "Single Phase",
    cooling: "Air Cooled & Water Cooled",
    usage: "Making Candy",
  },
  {
    slug: "350-pph-automatic-ice-candy-machine",
    name: "350 PPH Automatic Ice Candy Machine",
    price: "₹1,42,000",
    capacity: "350 PPH",
    material: "Stainless Steel",
    voltage: "415 V",
    phase: "3 Phase",
    cooling: "Air Cooled & Water Cooled",
    usage: "Making Candy",
  },
  {
    slug: "300-pph-ice-candy-making-machine",
    name: "300 PPH Ice Candy Making Machine",
    price: "₹1,40,000",
    capacity: "300 Pieces / Hour",
    material: "Stainless Steel",
    voltage: "440 V",
    phase: "Three Phase",
    cooling: "35°C cooling temperature",
    usage: "Making Ice Candy",
  },
  {
    slug: "500-pph-ice-candy-machine",
    name: "500 PPH Ice Candy Machine",
    price: "₹1,55,000",
    capacity: "500 Pieces / Hour",
    material: "Stainless Steel",
    voltage: "440 V",
    phase: "Three Phase",
    cooling: "35°C cooling temperature",
    usage: "Ice Candy, Kulfi & Choco Bar",
  },
  {
    slug: "400-pph-popsicle-ice-candy-packaging-machine-e",
    name: "400 PPH Popsicle Ice Candy Packaging Machine E",
    price: "₹1,45,000",
    capacity: "400 Pieces / Hour",
    material: "Stainless Steel",
    voltage: "Not specified",
    phase: "Not specified",
    cooling: "35°C cooling temperature",
    usage: "Ice Candy, Kulfi & Choco Bar",
  },
];

const deepFreezerProducts: CategoryProduct[] = [
  {
    slug: "200l-ss-continuous-freezer",
    name: "200L SS Continuous Freezer",
    price: "₹4,05,000",
    capacity: "200 L",
    material: "Stainless Steel",
    voltage: "415 V",
    phase: "Three Phase",
    cooling: "R-404a",
    usage: "Dairy and ice cream processing",
    extra: "Danfoss Compressor · 50 Hz · 5.8 kW/hr",
  },
  {
    slug: "400l-glycol-deep-freezer",
    name: "400L Glycol Deep Freezer",
    price: "₹1,45,000",
    capacity: "400 L",
    material: "Not specified",
    voltage: "Not specified",
    phase: "Not specified",
    cooling: "R-134a",
    usage: "Storage and cooling",
    extra: "3 Doors · 350 W · 880 × 1740 × 640 mm",
  },
  {
    slug: "200l-glycol-flow-freezer",
    name: "200L Glycol Fow Freezer",
    price: "₹28,500",
    capacity: "200 L",
    material: "Not specified",
    voltage: "Not specified",
    phase: "Not specified",
    cooling: "R-134a",
    usage: "Storage and cooling",
    extra: "2 Doors · 340 W · 860 × 1035 × 640 mm",
  },
  {
    slug: "500l-deep-freezer-ice-cream-hardener",
    name: "500L Deep Freezer Ice Cream Hardener",
    price: "₹1,30,000",
    capacity: "500 L",
    material: "Not specified",
    voltage: "Not specified",
    phase: "Single Phase",
    cooling: "Air Cooled",
    usage: "Ice cream hardening",
    extra: "Automatic · 2 kW/hr",
  },
];

const batchFreezerProducts: CategoryProduct[] = [
  {
    slug: "5l-ice-cream-batch-freezer",
    name: "5L Ice Cream Batch Freezer",
    price: "₹1,35,000",
    specifications: [],
  },
];

const iceCreamPlantProducts: CategoryProduct[] = [
  {
    slug: "900-lph-ice-cream-plant",
    name: "900 LPH Ice Cream Plant",
    image: "/images/products/900-lph-ice-cream-plant.png",
    price: "₹7,50,000",
    capacity: "900 Litres / Hour",
    material: "SS 304 Food Grade",
    voltage: "Not specified",
    phase: "3 Phase",
    cooling: "-5°C",
    usage: "Ice Cream",
    extra: "Fully Automatic · 50 Hz · Mirror Finish",
  },
  {
    slug: "700-lph-ice-cream-plant",
    name: "700 LPH Ice Cream Plant",
    image: "/images/products/700-lph-ice-cream-plant.png",
    price: "₹6,50,000",
    capacity: "700 Litres / Hour",
    material: "SS 304",
    voltage: "440 V",
    phase: "Not specified",
    cooling: "Not specified",
    usage: "Manufacturing Ice Cream",
    extra: "Automatic",
  },
  {
    slug: "500-lph-ice-cream-plant",
    name: "500 LPH Ice Cream Plant",
    image: "/images/products/500-lph-ice-cream-plant.png",
    price: "₹7,50,000",
    capacity: "500 Litres / Hour",
    material: "Stainless Steel",
    voltage: "415 V",
    phase: "Not specified",
    cooling: "Not specified",
    usage: "Ice Cream",
    extra: "Automatic",
  },
  {
    slug: "ice-cream-processing-plant",
    name: "Ice Cream Processing Plant",
    image: "/images/products/ice-cream-processing-plant.png",
    price: "₹6,40,000",
    capacity: "800 Litres / Hour",
    material: "Stainless Steel",
    voltage: "415 V",
    phase: "Three Phase",
    cooling: "Not specified",
    usage: "Ice Cream and Milk",
    extra: "50 Hz · Mirror Finish · Plant capacity needs confirmation",
  },
  {
    slug: "700-lph-automatic-ice-cream-plant",
    name: "700 LPH Automatic Ice Cream Plant",
    image: "/images/products/700-lph-automatic-ice-cream-plant.png",
    price: "₹7,50,000",
    capacity: "700 Litres / Hour",
    material: "SS 304",
    voltage: "415 V",
    phase: "Not specified",
    cooling: "Not specified",
    usage: "Manufacturing Ice Cream",
    extra: "Automatic",
  },
  {
    slug: "850-lph-dmi-ice-cream-plant",
    name: "850 LPH DMI Ice Cream Plant",
    image: "/images/products/850-lph-dmi-ice-cream-plant.png",
    price: "₹7,20,000",
    capacity: "850 LPH",
    material: "SS 304 Food Grade",
    voltage: "440 V",
    phase: "Not specified",
    cooling: "Not specified",
    usage: "Manufacturing Ice Cream",
    extra: "Automatic",
  },
  {
    slug: "ice-cream-plant-manufacturer",
    name: "Ice Cream Plant Manufacturer",
    image: "/images/products/ice-cream-plant-manufacturer.png",
    price: "₹3,50,000",
    capacity: "100 L / Hour",
    material: "SS 304 & SS 316",
    voltage: "415 V",
    phase: "Three Phase",
    cooling: "R404A Refrigerant",
    usage: "Ice Cream",
    extra: "6.5 KW · Inline Plant Layout · Automatic and Semi Automatic",
  },
  {
    slug: "900-lph-fully-automatic-ice-cream-plant",
    name: "900 LPH Fully Automatic Ice Cream Plant",
    image: "/images/products/900-lph-fully-automatic-ice-cream-plant.png",
    price: "₹7,20,000",
    capacity: "900 Litres / Hour",
    material: "Stainless Steel",
    voltage: "Not specified",
    phase: "Not specified",
    cooling: "Not specified",
    usage: "Ice Cream",
    extra: "Fully Automatic",
  },
];

const kulfiIceCreamProducts: CategoryProduct[] = [
  {
    slug: "300-kph-automatic-kulfi-machine",
    name: "300 KPH Automatic Kulfi Machine",
    price: "₹1,40,000",
    specifications: [],
  },
  {
    slug: "400-kph-kulfi-machine",
    name: "400 KPH Kulfi Machine",
    price: "₹1,45,000",
    specifications: [],
  },
];

const ageingVatProducts: CategoryProduct[] = [
  {
    slug: "1000-pph-ageing-vat-machine",
    name: "1000 PPH Ageing Vat Machine",
    price: "₹1,65,000",
    specifications: [],
  },
  {
    slug: "4000-pph-ice-cream-ageing-tank",
    name: "4000 PPH Ice Cream Ageing Tank",
    price: "₹2,25,000",
    specifications: [],
  },
  {
    slug: "2000-pph-ice-cream-ageing-vat-machine",
    name: "2000 PPH Ice Cream Ageing Vat Machine",
    price: "₹1,95,000",
    specifications: [],
  },
  {
    slug: "500-pph-ageing-tank",
    name: "500 Pph Ageing Tank",
    price: "₹2,88,000",
    specifications: [],
  },
];

const iceCreamFruitFeederProducts: CategoryProduct[] = [
  {
    slug: "200-lpb-ice-cream-fruit-feeder",
    name: "200 LPB Ice Cream Fruit Feeder",
    price: "₹2,10,000",
    specifications: [],
  },
  {
    slug: "20l-ice-cream-candy-plant",
    name: "20L Ice Cream Candy Plant",
    price: "₹1,45,000",
    specifications: [],
  },
  {
    slug: "30l-ice-cream-candy-plant",
    name: "30L Ice Cream Candy Plant",
    price: "₹2,00,000",
    specifications: [],
  },
];

const milkProcessingProducts: CategoryProduct[] = [
  {
    slug: "5000-lph-milk-processing-plant-and-machines",
    name: "5000 LPH Milk Processing Plant and Machines",
    price: "₹7,05,000",
    specifications: [
      ["Capacity", "5000 LPH"],
      ["Automation Grade", "Automatic"],
      ["Equipment Type", "Milk Pasteurizer"],
      ["Material of Construction", "Stainless Steel 304"],
      ["Voltage", "440V"],
      ["Power", "Electric"],
      ["Power Supply", "Three Phase"],
      ["Brand", "DMI"],
    ],
  },
  {
    slug: "2000-lph-milk-processing-plant-and-machines",
    name: "2000 LPH Milk Processing Plant and Machines",
    price: "₹5,00,000",
    specifications: [
      ["Capacity", "2000 LPH"],
      ["Automation Grade", "Automatic"],
      ["Equipment Type", "Milk Pasteurizer"],
      ["Material of Construction", "Stainless Steel 316"],
      ["Voltage", "440V"],
      ["Power", "Electric"],
      ["Power Supply", "Three Phase"],
      ["Brand", "DMI"],
    ],
  },
];

const miniIceCreamPlantProducts: CategoryProduct[] = [
  {
    slug: "mini-ice-cream-plant",
    name: "Mini Ice Cream Plant",
    price: "₹1,35,000",
    specifications: [
      ["Plant Capacity", "100 L/hr"],
      ["Automation Grade", "Semi Automatic"],
      ["Plant Type", "Turnkey"],
      ["Refrigerant", "R404A"],
      ["Material Of Construction", "SS304 & SS316"],
      ["Power Requirement", "5 KW"],
      ["Phase", "Three Phase"],
      ["Voltage", "415 V"],
      ["Application", "Frozen Yogurt, Ice Cream"],
      ["Plant Layout", "Inline"],
      ["Production Capacity", "100 LTR PER DAY"],
    ],
  },
];

const iceCreamProcessing200Products: CategoryProduct[] = [
  {
    slug: "200-lph-ice-cream-processing-plant",
    name: "200 LPH Ice Cream Processing Plant",
    price: "₹10,60,000",
    specifications: [
      ["Capacity", "1000 litres/hour"],
      ["Automation Grade", "Automatic"],
      ["Usage/Application", "Ice Cream"],
      ["Machine Body Material", "SS"],
      ["Brand", "DMI"],
      ["Voltage", "415V"],
    ],
  },
];

const iceCreamRipplePumpProducts: CategoryProduct[] = [
  {
    slug: "40l-ice-cream-ripple-pump",
    name: "40L Ice Cream Ripple Pump",
    price: "₹1,85,000",
    specifications: [],
  },
];

const candyMakingProducts: CategoryProduct[] = [
  {
    slug: "4-mould-refrigeration-ice-candy-plant",
    name: "4 Mould Refrigeration Ice Candy Plant",
    price: "₹1,75,000",
    specifications: [
      ["Capacity", "4 MOULD"],
      ["Production Capacity", "20 Litre"],
      ["Machine Body Material", "SS"],
      ["Type of Ice Cream Machine", "Ice Cream Candy Machine"],
      ["Brand", "DMI"],
      ["Automation Type", "Automatic"],
    ],
  },
];

const milkPasteurizerProducts: CategoryProduct[] = [
  {
    slug: "1000-lph-milk-pasteurizer",
    name: "1000 LPH Milk Pasteurizer",
    price: "₹1,25,000",
    specifications: [
      ["Capacity", "1000 L"],
      ["Equipment Type", "Milk Pasteurizer"],
      ["Voltage", "220V"],
      ["Machine Body Material", "SS"],
      ["Automation Grade", "Automatic"],
      ["Brand", "DMI"],
    ],
  },
];

const milkCoolerProducts: CategoryProduct[] = [
  {
    slug: "2000l-bulk-milk-cooler",
    name: "2000L Bulk Milk Cooler",
    price: "₹29,50,003",
    specifications: [
      ["Tank Type", "Closed"],
      ["Cooling Technology", "Direct Expansion (DX)"],
      ["Tank Material", "Stainless Steel 304"],
      ["Chilling Time", "4 Hour"],
      ["Cooling Temperature", "+4 Degree Celsius"],
      ["Material", "SS"],
      ["Brand", "DMI"],
    ],
  },
];

const fullyAutomaticIceCreamProducts: CategoryProduct[] = [
  {
    slug: "fully-automatic-ice-cream-plant",
    name: "Fully Automatic Ice Cream Plant",
    price: "₹10,60,000",
    specifications: [],
  },
];

const iceCreamPlantMachineryProducts: CategoryProduct[] = [
  {
    slug: "ice-cream-plant-machinery",
    name: "Ice Cream Plant Machinery",
    price: "₹5,45,000",
    specifications: [],
  },
];

const automaticIceCreamPlantProducts: CategoryProduct[] = [
  {
    slug: "automatic-ice-cream-plant",
    name: "Automatic Ice Cream Plant",
    price: "₹4,50,000",
    specifications: [
      ["Plant Capacity", "200 L/hr"],
      ["Automation Grade", "Semi Automatic"],
      ["Plant Type", "Turnkey"],
    ],
  },
];

const milkHomogenizerProducts: CategoryProduct[] = [
  {
    slug: "100-lph-milk-homogenizer-machine",
    name: "100 LPH Milk Homogenizer Machine",
    price: "₹1,60,000",
    specifications: [
      ["Capacity", "100 L"],
      ["Pressure", "200 Bar"],
      ["Production Capacity", "100 LPH"],
      ["Usage/Application", "Ice Cream"],
      ["Motor Power", "2 HP"],
      ["Drive", "AC Driver"],
      ["Material", "Stainless Steel"],
      ["Phase", "3 Phase"],
      ["Voltage", "415V"],
      ["Automation Grade", "Automatic"],
      ["Power", "2.5 kW"],
      ["Number Of Piston", "3 Piston 2 Stage"],
      ["Weight", "120 kg"],
      ["Material Grade", "SS 304 Food Grade"],
      ["Frequency", "50 Hz"],
      ["Brand", "DMI"],
    ],
  },
];

const coldStorageProducts: CategoryProduct[] = [
  {
    slug: "10-ton-cold-storage-and-blast-room",
    name: "10 Ton Cold Storage And Blast Room",
    price: "₹5,50,000",
    specifications: [
      ["Storage Capacity", "10 T"],
      ["Material", "Stainless Steel"],
      ["Phase Type", "Single Phase"],
      ["Number of Door", "Single Door"],
      ["Frequency", "50 Hz"],
      ["Voltage", "220 V"],
      ["Brand", "DMI"],
    ],
  },
];

const iceCreamECartProducts: CategoryProduct[] = [
  {
    slug: "100kg-ice-cream-e-cart",
    name: "100kg Ice Cream E Cart",
    price: "₹45,000",
    specifications: [
      ["Loading Capacity(kg)", "100 kg"],
      ["Color", "Multicolor"],
      ["Usage/Application", "For Ice Cream"],
      ["Material", "MS"],
      ["Surface Finish", "Color Coated"],
      ["Brand", "DMI"],
    ],
  },
];

const rotaryCupConeProducts: CategoryProduct[] = [
  {
    slug: "100-cph-ice-cream-cup-and-cone-filling-machine",
    name: "100 CPH Ice Cream Cup And Cone Filling Machine",
    price: "₹8,00,000",
    specifications: [
      ["Capacity", "1000 Cones/Hr"],
      ["Frequency", "50 Hz"],
      ["Phase", "Single Phase"],
      ["Size", "1150 mm L x 975 mm W x 1650 H"],
      ["Operating Voltage", "220 V"],
      ["Ingredient Size", "10mm x 10mm x 10mm"],
      ["Brand", "DMI"],
    ],
  },
];

const milkPasteurizationTankProducts: CategoryProduct[] = [
  {
    slug: "500-lph-milk-pasteurization-tank",
    name: "500 LPH Milk Pasteurization Tank",
    price: "₹1,15,000",
    specifications: [
      ["Capacity(Litre/Hour)", "500"],
      ["Automation Grade", "Semi-Automatic"],
      ["Equipment Type", "Milk Pasteurizer"],
      ["Material", "SS"],
      ["Phase", "Single Phase"],
      ["Voltage", "220 V"],
      ["Insulation Material", "Glass Wool"],
      ["Temperature", "85 Degree Celsius"],
    ],
  },
];

const mixAgeingTankProducts: CategoryProduct[] = [
  {
    slug: "2000l-mix-ageing-tank",
    name: "2000L Mix Ageing Tank",
    price: "₹1,65,000",
    specifications: [
      ["Material", "Stainless Steel"],
      ["Storage Material", "Milk/Dairy"],
      ["Filling System", "Manual"],
      ["Phase", "3 Phase"],
      ["Capacity(Litre)", "2000 L"],
      ["Frequency", "50 Hz"],
      ["Brand", "DMI"],
      ["Finishing", "Mirror Finish"],
      ["Gear Motor", "1/2 HP"],
      ["Temperature", "4 Degree Celsius"],
      ["Model Name/Number", "DMI100"],
      ["Number Of Legs", "4"],
      ["Power Source", "415 V"],
      ["Refrigeration", "R-404a"],
      ["Shape", "Square & Round"],
      ["Water Jacket", "40 mm"],
    ],
  },
];

const iceCreamFlavourTankProducts: CategoryProduct[] = [
  {
    slug: "100l-ice-cream-flavor-tank",
    name: "100L Ice Cream Flavor Tank",
    price: "₹28,000",
    specifications: [
      ["Form", "Liquid"],
      ["Type", "Water Soluble"],
      ["Pack Size", "100 ml"],
      ["Usage", "Ice Cream"],
      ["Flavour Profile", "Rajbhog"],
      ["Shelf Life", "12 months"],
    ],
  },
];

const ssHardeningTunnelProducts: CategoryProduct[] = [
  {
    slug: "100l-ss-hardening-tunnel",
    name: "100L SS Hardening Tunnel",
    price: "₹4,80,000",
    specifications: [
      ["Material", "Stainless Steel"],
      ["Usage/Application", "Food Industry"],
      ["Working Temperature", "40 Degree Celsius"],
      ["Voltage", "220 V"],
      ["Capacity", "12 Moulds"],
      ["Frequency", "50 Hz"],
      ["Phase", "Single Phase"],
      ["Storage Capacity", "100 L"],
      ["Power Source", "Electric"],
      ["Defrost Type", "Auto-Defrost"],
      ["Automation Grade", "Automatic"],
    ],
  },
];

const chocolateDefrostTankProducts: CategoryProduct[] = [
  {
    slug: "10kg-chocolate-and-defrost-tank",
    name: "10kg Chocolate And Defrost Tank",
    price: "₹35,000",
    specifications: [],
  },
];

const servoPouchPackingProducts: CategoryProduct[] = [
  {
    slug: "100-ppm-automatic-pouch-packing-machine",
    name: "100 PPM Automatic Pouch Packing Machine",
    price: "₹4,95,000",
    specifications: [
      ["Packaging Range", "Upto 5kg"],
      ["Machine Type", "Servo Driven FFS"],
      ["Automation Grade", "Automatic"],
      ["Machine Power", "1 HP"],
      ["Sealing Type", "Center Seal"],
      ["Packaging Speed", "100 PPM"],
      ["Driven Type", "Electric"],
      ["Frequency", "50 Hz"],
      ["Brand", "DMI"],
      ["Material", "SS"],
      ["Dosing System", "Manual Filling"],
      ["Machine Size", "3600 x 1500 x 2000 mm"],
      ["Phase", "Three Phase"],
      ["Photo Sensor", "Banner"],
      ["HMI", "Fuji / Wecon"],
      ["Output", "120 PPM"],
    ],
  },
];

const mushroomProcessingProducts: CategoryProduct[] = [
  {
    slug: "mushroom-processing-plant",
    name: "Mushroom Processing Plant",
    price: "₹15,00,000",
    specifications: [],
  },
];

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

async function CategoryContent({ params }: CategoryPageProps) {
  const { category } = await params;

  const categoryName = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const categoryProducts: Record<string, CategoryProduct[]> = {
    "ice-candy-machine": iceCandyProducts,
    "deep-freezer": deepFreezerProducts,
    "batch-freezer": batchFreezerProducts,
    "ice-cream-plant": iceCreamPlantProducts,
    "kulfi-ice-cream": kulfiIceCreamProducts,
    "ageing-vat-machine": ageingVatProducts,
    "ice-cream-fruit-feeder": iceCreamFruitFeederProducts,
    "mini-ice-cream-plant": miniIceCreamPlantProducts,
    "200-lph-ice-cream-processing-plant": iceCreamProcessing200Products,
    "ice-cream-ripple-pump": iceCreamRipplePumpProducts,
    "candy-making-machine": candyMakingProducts,
    "milk-pasteurizer": milkPasteurizerProducts,
    "milk-cooler": milkCoolerProducts,
    "fully-automatic-ice-cream-plant": fullyAutomaticIceCreamProducts,
    "ice-cream-plant-and-ice-cream-machines": iceCreamPlantMachineryProducts,
    "automatic-ice-cream-plant": automaticIceCreamPlantProducts,
    "milk-homogenizer-machine": milkHomogenizerProducts,
    "cold-storage-and-blast-room": coldStorageProducts,
    "ice-cream-e-cart": iceCreamECartProducts,
    "ice-cream-rotary-type-cup-and-cone-filling-machine": rotaryCupConeProducts,
    "milk-pasteurization-tank": milkPasteurizationTankProducts,
    "mix-ageing-tank": mixAgeingTankProducts,
    "ice-cream-flavour-tank": iceCreamFlavourTankProducts,
    "chocolate-and-defrost-tank": chocolateDefrostTankProducts,
    "ss-hardening-tunnel": ssHardeningTunnelProducts,
    "servo-hmi-pouch-packing-machine": servoPouchPackingProducts,
    "new-items": mushroomProcessingProducts,
    "milk-processing-plant": milkProcessingProducts,
  };

  const products = categoryProducts[category] ?? [];

  return (
    <main className="min-h-screen bg-[#F5F3EE]">
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A17C52]">
            Our Products
          </p>

          <h1 className="font-heading text-3xl font-semibold text-[#282A28] md:text-5xl">
            {categoryName}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#77766F] md:text-base">
            Explore our range of {categoryName.toLowerCase()} designed for
            dairy and food processing requirements.
          </p>

          <div className="mt-6 h-px w-full bg-[#DEDCD5]" />
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.slug}
                className="group overflow-hidden border border-[#DEDCD5] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link
                  href={`/products/${category}/${product.slug}`}
                  className="block"
                >
                  <div className="relative h-[250px] overflow-hidden bg-white">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#ECEAE4]">
                        <span className="text-sm text-[#77766F]">
                          Product Image
                        </span>
                      </div>
                    )}
                  </div>
                </Link>

                <div className="p-6">
                  <Link href={`/products/${category}/${product.slug}`}>
                    <h2 className="min-h-[52px] font-heading text-lg font-semibold text-[#282A28] transition-colors group-hover:text-[#A17C52]">
                      {product.name}
                    </h2>
                  </Link>

                  <p className="mt-3 text-xl font-semibold text-[#A17C52]">
                    {product.price}
                  </p>

                  <div className="my-5 h-px bg-[#DEDCD5]" />

                  <div className="space-y-3 text-sm">
                    {product.specifications ? (
                      product.specifications.map(([label, value]) => (
                        <div
                          key={label}
                          className="flex justify-between gap-3"
                        >
                          <span className="text-[#77766F]">{label}</span>
                          <span className="text-right font-medium text-[#282A28]">
                            {value}
                          </span>
                        </div>
                      ))
                    ) : (
                      <>
                        {[
                          ["Capacity", product.capacity],
                          ["Material", product.material],
                          ["Voltage", product.voltage],
                          ["Phase", product.phase],
                          ["Cooling", product.cooling],
                          ["Application", product.usage],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="flex justify-between gap-3"
                          >
                            <span className="text-[#77766F]">{label}</span>
                            <span className="text-right font-medium text-[#282A28]">
                              {value}
                            </span>
                          </div>
                        ))}

                        {product.extra && (
                          <p className="border-t border-[#DEDCD5] pt-3 text-xs leading-6 text-[#77766F]">
                            {product.extra}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  <Link
                    href={`/products/${category}/${product.slug}`}
                    className="mt-6 flex w-full items-center justify-center bg-[#282A28] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#A17C52]"
                  >
                    View Product Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-[#DEDCD5] bg-white px-6 py-16 text-center">
            <h2 className="font-heading text-2xl font-semibold text-[#282A28]">
              Products Coming Soon
            </h2>

            <p className="mt-3 text-sm text-[#77766F]">
              Products for this category will be added soon.
            </p>

            <Link
              href="/contact-us"
              className="mt-6 inline-flex bg-[#282A28] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#A17C52]"
            >
              Get Best Quote
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F3EE]" />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}
