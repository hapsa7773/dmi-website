
import { Suspense } from "react";
import Link from "next/link";

type Product = {
  category: string;
  slug: string;
  name: string;
  price: string;
  description: string;
  specifications: [string, string][];
  features?: string[];
};

type ProductPageProps = {
  params: Promise<{
    category: string;
    product: string;
  }>;
};

const iceCandyFeatures = [
  "Inner tank of SS 316/304 and outer tank of SS304.",
  "Insitu PUF insulation for brine tank.",
  "Brine spray system made of SS.",
  "Less time required for starting and easy to clean due to less quantity of brine in the system.",
  "Suitable for continuous production without any interruption.",
  "Pre-wired electric control panel with thermostat and all safeties.",
];

const products: Product[] = [
  // ICE CANDY PRODUCTS
  {
    category: "ice-candy-machine",
    slug: "600-pph-ice-candy-machine",
    name: "600 PPH Ice Candy Machine",
    price: "₹1,75,000",
    description:
      "Ice candy production machine with stainless steel construction and air-cooled and water-cooled options.",
    specifications: [
      ["Capacity", "600 PPH"],
      ["Usage / Application", "Making Candy"],
      ["Machine Body Material", "Stainless Steel"],
      ["Frequency", "50 Hz"],
      ["Phase", "Single Phase"],
      ["Voltage", "220 V"],
      ["Type of Cooling", "Air Cooled & Water Cooled"],
      ["Cooling Coil", "Copper Coil"],
      ["Insulation", "PUF Insulation"],
      ["Brand", "DMI"],
    ],
    features: iceCandyFeatures,
  },
  {
    category: "ice-candy-machine",
    slug: "350-pph-automatic-ice-candy-machine",
    name: "350 PPH Automatic Ice Candy Machine",
    price: "₹1,42,000",
    description:
      "Automatic ice candy machine with stainless steel construction and air-cooled and water-cooled options.",
    specifications: [
      ["Capacity", "350 PPH"],
      ["Usage / Application", "Making Candy"],
      ["Machine Body Material", "Stainless Steel"],
      ["Frequency", "50 Hz"],
      ["Phase", "3 Phase"],
      ["Voltage", "415 V"],
      ["Type of Cooling", "Air Cooled & Water Cooled"],
      ["Cooling Coil", "Copper Coil"],
      ["Insulation", "PUF Insulation"],
      ["Brand", "DMI"],
    ],
    features: iceCandyFeatures,
  },
  {
    category: "ice-candy-machine",
    slug: "300-pph-ice-candy-making-machine",
    name: "300 PPH Ice Candy Making Machine",
    price: "₹1,40,000",
    description:
      "Ice candy making machine with stainless steel body and mirror finish.",
    specifications: [
      ["Capacity", "300 Pieces / Hour"],
      ["Usage / Application", "Making Ice Candy"],
      ["Machine Body Material", "Stainless Steel"],
      ["Frequency", "50 Hz"],
      ["Cooling Temperature", "35°C"],
      ["Phase", "Three Phase"],
      ["Voltage", "440 V"],
      ["Finished Type", "Mirror Finish"],
      ["Brand", "DMI"],
    ],
    features: iceCandyFeatures,
  },
  {
    category: "ice-candy-machine",
    slug: "500-pph-ice-candy-machine",
    name: "500 PPH Ice Candy Machine",
    price: "₹1,55,000",
    description:
      "Ice candy machine suitable for ice candy, kulfi and choco bar production.",
    specifications: [
      ["Capacity", "500 Pieces / Hour"],
      ["Usage / Application", "Ice Candy, Kulfi, Choco Bar"],
      ["Machine Body Material", "Stainless Steel"],
      ["Frequency", "50 Hz"],
      ["Cooling Temperature", "35°C"],
      ["Phase", "Three Phase"],
      ["Voltage", "440 V"],
      ["Finished Type", "Mirror Finish"],
      ["Brand", "DMI"],
    ],
    features: iceCandyFeatures,
  },
  {
    category: "ice-candy-machine",
    slug: "400-pph-popsicle-ice-candy-packaging-machine-e",
    name: "400 PPH Popsicle Ice Candy Packaging Machine E",
    price: "₹1,45,000",
    description:
      "Automatic machine for ice candy, kulfi and choco bar applications.",
    specifications: [
      ["Capacity", "400 Pieces / Hour"],
      ["Usage / Application", "Ice Candy / Kulfi / Choco Bar"],
      ["Machine Body Material", "Stainless Steel"],
      ["Brand", "DMI"],
      ["Automation Grade", "Automatic"],
      ["Cooling Temperature", "35°C"],
    ],
    features: iceCandyFeatures,
  },

  // DEEP FREEZER PRODUCTS
  {
    category: "deep-freezer",
    slug: "200l-ss-continuous-freezer",
    name: "200L SS Continuous Freezer",
    price: "₹4,05,000",
    description:
      "200 litre SS continuous freezer for dairy and ice cream processing applications.",
    specifications: [
      ["Capacity", "200 L"],
      ["Machine Body Material", "Stainless Steel"],
      ["Refrigerant", "R-404a"],
      ["Compressor", "Danfoss"],
      ["Voltage", "415 V"],
      ["Frequency", "50 Hz"],
      ["Phase", "Three Phase"],
      ["Power Consumption", "5.8 kW/hr"],
    ],
  },
  {
    category: "deep-freezer",
    slug: "400l-glycol-deep-freezer",
    name: "400L Glycol Deep Freezer",
    price: "₹1,45,000",
    description:
      "400 litre glycol deep freezer with three doors for storage and cooling applications.",
    specifications: [
      ["Capacity", "400 L"],
      ["Refrigerant", "R-134a"],
      ["Number of Doors", "3"],
      ["Power", "350 W"],
      ["Dimensions", "880 × 1740 × 640 mm"],
    ],
  },
  {
    category: "deep-freezer",
    slug: "200l-glycol-flow-freezer",
    name: "200L Glycol Fow Freezer",
    price: "₹28,500",
    description:
      "200 litre glycol freezer with two doors for storage and cooling applications.",
    specifications: [
      ["Capacity", "200 L"],
      ["Refrigerant", "R-134a"],
      ["Number of Doors", "2"],
      ["Power", "340 W"],
      ["Dimensions", "860 × 1035 × 640 mm"],
    ],
  },
  {
    category: "deep-freezer",
    slug: "500l-deep-freezer-ice-cream-hardener",
    name: "500L Deep Freezer Ice Cream Hardener",
    price: "₹1,30,000",
    description:
      "500 litre automatic, air-cooled deep freezer for ice cream hardening applications.",
    specifications: [
      ["Capacity", "500 L"],
      ["Phase", "Single Phase"],
      ["Power Consumption", "2 kW/hr"],
      ["Automation Grade", "Automatic"],
      ["Cooling Type", "Air Cooled"],
    ],
  },

  // ICE CREAM PLANT PRODUCTS
  {
    category: "ice-cream-plant",
    slug: "900-lph-ice-cream-plant",
    name: "900 LPH Ice Cream Plant",
    price: "₹7,50,000",
    description:
      "900 LPH fully automatic ice cream plant with food-grade stainless steel construction.",
    specifications: [
      ["Capacity", "900 Litres / Hour"],
      ["Material", "SS 304 Food Grade"],
      ["Phase", "3 Phase"],
      ["Cooling Temperature", "-5°C"],
      ["Frequency", "50 Hz"],
      ["Automation Grade", "Fully Automatic"],
      ["Finish", "Mirror Finish"],
    ],
  },
  {
    category: "ice-cream-plant",
    slug: "700-lph-ice-cream-plant",
    name: "700 LPH Ice Cream Plant",
    price: "₹6,50,000",
    description:
      "Automatic ice cream manufacturing plant with a production capacity of 700 litres per hour.",
    specifications: [
      ["Capacity", "700 Litres / Hour"],
      ["Material", "SS 304"],
      ["Voltage", "440 V"],
      ["Automation Grade", "Automatic"],
      ["Usage / Application", "Manufacturing Ice Cream"],
    ],
  },
  {
    category: "ice-cream-plant",
    slug: "500-lph-ice-cream-plant",
    name: "500 LPH Ice Cream Plant",
    price: "₹7,50,000",
    description:
      "Automatic stainless steel ice cream plant with a production capacity of 500 litres per hour.",
    specifications: [
      ["Capacity", "500 Litres / Hour"],
      ["Material", "Stainless Steel"],
      ["Voltage", "415 V"],
      ["Automation Grade", "Automatic"],
      ["Usage / Application", "Ice Cream"],
    ],
  },
  {
    category: "ice-cream-plant",
    slug: "ice-cream-processing-plant",
    name: "Ice Cream Processing Plant",
    price: "₹6,40,000",
    description:
      "Stainless steel processing plant for ice cream and milk applications.",
    specifications: [
      ["Listed Capacity", "800 Litres / Hour"],
      ["Plant Capacity (also listed)", "200 L/hr"],
      ["Material", "Stainless Steel"],
      ["Voltage", "415 V"],
      ["Phase", "Three Phase"],
      ["Frequency", "50 Hz"],
      ["Finish", "Mirror Finish"],
      ["Usage / Application", "Ice Cream and Milk"],
    ],
  },
  {
    category: "ice-cream-plant",
    slug: "700-lph-automatic-ice-cream-plant",
    name: "700 LPH Automatic Ice Cream Plant",
    price: "₹7,50,000",
    description:
      "Automatic ice cream manufacturing plant with stainless steel construction and 700 LPH capacity.",
    specifications: [
      ["Capacity", "700 Litres / Hour"],
      ["Material", "SS 304"],
      ["Voltage", "415 V"],
      ["Automation Grade", "Automatic"],
      ["Usage / Application", "Manufacturing Ice Cream"],
    ],
  },
  {
    category: "ice-cream-plant",
    slug: "850-lph-dmi-ice-cream-plant",
    name: "850 LPH DMI Ice Cream Plant",
    price: "₹7,20,000",
    description:
      "DMI ice cream manufacturing plant with food-grade SS 304 construction and 850 LPH capacity.",
    specifications: [
      ["Capacity", "850 LPH"],
      ["Material", "SS 304 Food Grade"],
      ["Voltage", "440 V"],
      ["Automation Grade", "Automatic"],
      ["Usage / Application", "Manufacturing Ice Cream"],
    ],
  },
  {
    category: "ice-cream-plant",
    slug: "ice-cream-plant-manufacturer",
    name: "Ice Cream Plant Manufacturer",
    price: "₹3,50,000",
    description:
      "Ice cream processing plant with stainless steel construction and inline plant layout.",
    specifications: [
      ["Capacity", "100 L / Hour"],
      ["Material", "SS 304 & SS 316"],
      ["Voltage", "415 V"],
      ["Phase", "Three Phase"],
      ["Refrigerant", "R404A"],
      ["Power", "6.5 KW"],
      ["Plant Layout", "Inline"],
      ["Automation", "Automatic and Semi Automatic"],
    ],
  },
  {
    category: "ice-cream-plant",
    slug: "900-lph-fully-automatic-ice-cream-plant",
    name: "900 LPH Fully Automatic Ice Cream Plant",
    price: "₹7,20,000",
    description:
      "Fully automatic stainless steel ice cream plant with a production capacity of 900 litres per hour.",
    specifications: [
      ["Capacity", "900 Litres / Hour"],
      ["Material", "Stainless Steel"],
      ["Automation Grade", "Fully Automatic"],
      ["Usage / Application", "Ice Cream"],
    ],
  },
    
  // MILK PROCESSING PLANT PRODUCTS
  {
    category: "milk-processing-plant",
    slug: "5000-lph-milk-processing-plant-and-machines",
    name: "5000 LPH Milk Processing Plant and Machines",
    price: "₹7,05,000",
    description: "",
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
    category: "milk-processing-plant",
    slug: "2000-lph-milk-processing-plant-and-machines",
    name: "2000 LPH Milk Processing Plant and Machines",
    price: "₹5,00,000",
    description: "",
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


  // AGEING VAT MACHINE PRODUCTS
  {
    category: "ageing-vat-machine",
    slug: "1000-pph-ageing-vat-machine",
    name: "1000 PPH Ageing Vat Machine",
    price: "₹1,65,000",
    description:
      "The Ageing Tank is stainless steel tanks with sloped bottom are used to cool down pasteurized ice-cream mix and store it at a controlled temperature of around 4°C, a slow agitation allows the complete ageing for better ice cream structure Electrical panel with over pressure tripping safety All product contact parts of S. S. 304 Tank are triple layer jacket mirror finish",
    specifications: [
      ["Capacity", "1000 pouch per hour"],
      ["Material", "Stainless Steel"],
      ["Filling System", "Fully Automatic"],
      ["Brand", "DMI"],
      ["Phase", "Three"],
      ["Voltage", "440V"],
      ["Compressor", "2.5 Ton"],
    ],
  },
  {
    category: "ageing-vat-machine",
    slug: "4000-pph-ice-cream-ageing-tank",
    name: "4000 PPH Ice Cream Ageing Tank",
    price: "₹2,25,000",
    description:
      "The Ageing Tank is stainless steel tanks with sloped bottom are used to cool down pasteurized ice-cream mix and store it at a controlled temperature of around 4°C, a slow agitation allows the complete ageing for better ice cream structure Electrical panel with over pressure tripping safety All product contact parts of S. S. 304 Tank are triple layer jacket mirror finish",
    specifications: [
      ["Capacity", "4000 pouch per hour"],
      ["Material", "Stainless Steel"],
      ["Filling System", "Fully Automatic"],
      ["Brand", "DMI"],
      ["Phase", "Three"],
      ["Voltage", "440V"],
    ],
  },
  {
    category: "ageing-vat-machine",
    slug: "2000-pph-ice-cream-ageing-vat-machine",
    name: "2000 PPH Ice Cream Ageing Vat Machine",
    price: "₹1,95,000",
    description:
      "The Ageing Tank is stainless steel tanks with sloped bottom are used to cool down pasteurized ice-cream mix and store it at a controlled temperature of around 4°C, a slow agitation allows the complete ageing for better ice cream structure Electrical panel with over pressure tripping safety All product contact parts of S. S. 304 Tank are triple layer jacket mirror finish",
    specifications: [
      ["Capacity", "2000 pouch per hour"],
      ["Material", "Stainless Steel"],
      ["Filling System", "Fully Automatic"],
      ["Brand", "DMI"],
      ["Phase", "Three"],
      ["Voltage", "440V"],
    ],
  },
  {
    category: "ageing-vat-machine",
    slug: "500-pph-ageing-tank",
    name: "500 Pph Ageing Tank",
    price: "₹2,88,000",
    description:
      "An ice cream aging tank is a specialized container used in the production of ice cream, where the ice cream mix is stored for a period of time to improve its texture and quality.",
    specifications: [
      ["Capacity", "500 L"],
      ["Jacket Type", "Triple Jacket"],
      ["Agitator Type", "Propeller"],
      ["Material", "Stainless Steel"],
      ["Filling System", "Fully Automatic"],
      ["Cooling Medium", "Glycol"],
      ["Body Material", "SS304"],
      ["Insulation Type", "PUF"],
      ["Brand", "DMI"],
      ["Voltage", "415V"],
      ["Phase", "Three Phase"],
      ["Application", "Ice Cream Mix"],
    ],
  },


  // ICE CREAM FRUIT FEEDER PRODUCTS
  {
    category: "ice-cream-fruit-feeder",
    slug: "200-lpb-ice-cream-fruit-feeder",
    name: "200 LPB Ice Cream Fruit Feeder",
    price: "₹2,10,000",
    description: "",
    specifications: [
      ["Capacity", "200 Liter/Batch"],
      ["Number of Flavors", "Single"],
      ["Phase", "Single Phase"],
      ["Model Name/Number", "DMI300FF"],
      ["Machine Body Material", "SS"],
      ["Brand", "DMI"],
      ["Frequency", "50 Hz"],
      ["Power Source", "Electric"],
      ["Voltage", "220 V"],
    ],
    features: [
      "Frame and covering panel made from S.S. 304 quality.",
      "Separate Hopper with Agitator for Wet and Dry ingredients.",
      "Rotary valve with three blade.",
      "Blades made from special nickel alloy.",
      "All contact parts of S.S 304, Aluminum and food grade plastics.",
      "Separate variable speed electronic Frequency control drive for Lifter Rotor, Mixer and both Augur.",
    ],
  },
  {
    category: "ice-cream-fruit-feeder",
    slug: "20l-ice-cream-candy-plant",
    name: "20L Ice Cream Candy Plant",
    price: "₹1,45,000",
    description: "",
    specifications: [
      ["Capacity", "4 MOULD"],
      ["Production Capacity", "20 Litre"],
      ["Machine Body Material", "SS"],
      ["Type of Ice Cream Machine", "Ice Cream Candy Machine"],
      ["Model No", "20240208"],
      ["Frequency", "50 Hz"],
      ["Compressor", "Emerson / tecumsah"],
      ["Brand", "DMI"],
    ],
    features: [
      "Inner tank of SS 316/304 and outer tank of SS304.",
      "Insitu PUF insulation for brine tank.",
      "Brine spray system made of SS.",
      "Less time required for starting and easy to clean due to less quantity of brine in the system.",
      "Suitable for continuous production without any interruption.",
      "Pre wired electric control panel with thermostat and all safeties.",
    ],
  },
  {
    category: "ice-cream-fruit-feeder",
    slug: "30l-ice-cream-candy-plant",
    name: "30L Ice Cream Candy Plant",
    price: "₹2,00,000",
    description:
      "We are a remarkable entity in this domain, engaged in offering a qualitative 30L Ice Cream Candy Plant. The provided product is executed as per the requirements of our precious clients. Our experts check all the steps and parameters associated to this product and carry out it in the best possible manner. Our professionals use high grade tools and latest technology to execute this product. Moreover, this product can be availed by our precious clients at affordable price.",
    specifications: [
      ["Capacity", "4 MOULD"],
      ["Production Capacity", "30 Litre"],
      ["Machine Body Material", "Stainless steel"],
      ["Type of Ice Cream Machine", "Ice Cream Candy Machine"],
      ["Brand", "DMI"],
    ],
  },


  // KULFI ICE CREAM PRODUCTS
  {
    category: "kulfi-ice-cream",
    slug: "300-kph-automatic-kulfi-machine",
    name: "300 KPH Automatic Kulfi Machine",
    price: "₹1,40,000",
    description: "",
    specifications: [],
  },
  {
    category: "kulfi-ice-cream",
    slug: "400-kph-kulfi-machine",
    name: "400 KPH Kulfi Machine",
    price: "₹1,45,000",
    description: "",
    specifications: [],
  },
    // BATCH FREEZER PRODUCTS
  {
    category: "batch-freezer",
    slug: "5l-ice-cream-batch-freezer",
    name: "5L Ice Cream Batch Freezer",
    price: "₹1,35,000",
    description: "",
    specifications: [],
  },

    // MINI ICE CREAM PLANT PRODUCTS
  {
    category: "mini-ice-cream-plant",
    slug: "mini-ice-cream-plant",
    name: "Mini Ice Cream Plant",
    price: "₹1,35,000",
    description: "",
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

    // 200 LPH ICE CREAM PROCESSING PLANT
  {
    category: "200-lph-ice-cream-processing-plant",
    slug: "200-lph-ice-cream-processing-plant",
    name: "200 LPH Ice Cream Processing Plant",
    price: "₹10,60,000",
    description: "",
    specifications: [
      ["Capacity", "1000 litres/hour"],
      ["Automation Grade", "Automatic"],
      ["Usage/Application", "Ice Cream"],
      ["Machine Body Material", "SS"],
      ["Brand", "DMI"],
      ["Voltage", "415V"],
    ],
  },

    // ICE CREAM RIPPLE PUMP
  {
    category: "ice-cream-ripple-pump",
    slug: "40l-ice-cream-ripple-pump",
    name: "40L Ice Cream Ripple Pump",
    price: "₹1,85,000",
    description: "",
    specifications: [],
  },
  
    // CANDY MAKING MACHINE
  {
    category: "candy-making-machine",
    slug: "4-mould-refrigeration-ice-candy-plant",
    name: "4 Mould Refrigeration Ice Candy Plant",
    price: "₹1,75,000",
    description: "",
    specifications: [
      ["Capacity", "4 MOULD"],
      ["Production Capacity", "20 Litre"],
      ["Machine Body Material", "SS"],
      ["Type of Ice Cream Machine", "Ice Cream Candy Machine"],
      ["Brand", "DMI"],
      ["Automation Type", "Automatic"],
    ],
  },
    // MILK PASTEURIZER
  {
    category: "milk-pasteurizer",
    slug: "1000-lph-milk-pasteurizer",
    name: "1000 LPH Milk Pasteurizer",
    price: "₹1,25,000",
    description:
      "We are a remarkable entity in this domain, engaged in offering a qualitative 1000 LPH Milk Pasteurizer. The provided product is executed as per the requirements of our precious clients.",
    specifications: [
      ["Capacity", "1000 L"],
      ["Equipment Type", "Milk Pasteurizer"],
      ["Voltage", "220V"],
      ["Machine Body Material", "SS"],
      ["Automation Grade", "Automatic"],
      ["Brand", "DMI"],
    ],
  },
   
    // MILK COOLER
  {
    category: "milk-cooler",
    slug: "2000l-bulk-milk-cooler",
    name: "2000L Bulk Milk Cooler",
    price: "₹29,50,003",
    description:
      "We are a remarkable entity in this domain, engaged in offering a qualitative 2000L Bulk Milk Cooler. The provided product is executed as per the requirements of our precious clients. Our experts check all the steps and parameters associated to this product and carry out it in the best possible manner. Our professionals use high grade tools and latest technology to execute this product. Moreover, this product can be availed by our precious clients at affordable price.",
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
    // FULLY AUTOMATIC ICE CREAM PLANT
  {
    category: "fully-automatic-ice-cream-plant",
    slug: "fully-automatic-ice-cream-plant",
    name: "Fully Automatic Ice Cream Plant",
    price: "₹10,60,000",
    description: "",
    specifications: [],
  },

    // ICE CREAM PLANT & ICE CREAM MACHINES
  {
    category: "ice-cream-plant-and-ice-cream-machines",
    slug: "ice-cream-plant-machinery",
    name: "Ice Cream Plant Machinery",
    price: "₹5,45,000",
    description: "",
    specifications: [],
  },
    // AUTOMATIC ICE CREAM PLANT
  {
    category: "automatic-ice-cream-plant",
    slug: "automatic-ice-cream-plant",
    name: "Automatic Ice Cream Plant",
    price: "₹4,50,000",
    description: "",
    specifications: [
      ["Plant Capacity", "200 L/hr"],
      ["Automation Grade", "Semi Automatic"],
      ["Plant Type", "Turnkey"],
    ],
  },
    // MILK HOMOGENIZER MACHINE
  {
    category: "milk-homogenizer-machine",
    slug: "100-lph-milk-homogenizer-machine",
    name: "100 LPH Milk Homogenizer Machine",
    price: "₹1,60,000",
    description: "",
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
  {
  category: "cold-storage-and-blast-room",
  slug: "10-ton-cold-storage-and-blast-room",
  name: "10 Ton Cold Storage And Blast Room",
  price: "₹5,50,000",
  description:
    "The Cold Room assembled on Side Modular construction that enables quick and Easy installation.",
  specifications: [
    ["Storage Capacity", "10 T"],
    ["Material", "Stainless Steel"],
    ["Phase Type", "Single Phase"],
    ["Number of Door", "Single Door"],
    ["Frequency", "50 Hz"],
    ["Voltage", "220 V"],
    ["Brand", "DMI"],
  ],
  features: [
    "Flexible panel sizes.",
    "Optimal temperature management over a wide range have multi-functional settings to Suit different products.",
    "Cam locking- It ensures that walls, ceilings, doors, corners and floors are perfectly aligned.",
    "Sweep gasket maintains an airtight seal and helps maintain flexibility across temperatures.",
    "Over Lap/Flush Type Door and Choice of sliding doors",
    "In some Cold Rooms, there is a view port that allows one to look inside the cold room Without the need to open the door.",
    "Temperature Range -40 to +15°C.",
    "Puff Insulated Panels Cladding Material –Pre-printed GI Sheet , Stainless Steel.",
    "Insulated Puff Panels Thickness : 40mm, 50mm, 60mm, 80mm, 100mm, 120mm, 150mm.",
    "Floor Type – PU panel With Plywood and Aluminum Ch. Sheet and Insulation Bare Puff.",
    "Condenser Type – Air Cooled, Water Cooled, Evaporative Condenser.",
    "Compressor Type- Commercial Hermetic Scroll, Reciprocating, Semi Hermetic.",
    "All Three Phase Units Protect with Single Phase Preventer.",
    "High cooling capacity with reduced power consumption.",
    "High and Constant Quality.",
    "Fans with especially efficient low noise external rotor motors",
    "Single Phase & Three Phase.",
    "Extra Size Condenser with grooved copper tubes and Aluminum Fins and Big Size Drier Filter.",
    "Reduction In Electricity Consumption.",
    "Available in S.S./PCGI/ Aluminium Body.",
    "Coil: use new high efficient aluminum wave fin, high heat conductivity, fast water discharge, use high efficient copper pipe, high heat transfer.",
    "Use new type liquid distributor & uniform frost.",
    "Fan: low cost, high reliability, lower temperature- resistant and",
  ],
},

{
  category: "ice-cream-e-cart",
  slug: "100kg-ice-cream-e-cart",
  name: "100kg Ice Cream E Cart",
  price: "₹45,000",
  description:
    "An ice cream cart (or ice cream stall) is a mobile Cart & motorized E-rickshaw commercial vehicle that sells ice cream as a retail outlet. The ice cream cart is usually used during the summer and is generally spotted at public space, parks, beaches, schools or drive through neighborhoods (residential areas).",
  specifications: [
    ["Loading Capacity(kg)", "100 kg"],
    ["Color", "Multicolor"],
    ["Usage/Application", "For Ice Cream"],
    ["Material", "MS"],
    ["Surface Finish", "Color Coated"],
    ["Brand", "DMI"],
  ],
},
{
  category: "ice-cream-rotary-type-cup-and-cone-filling-machine",
  slug: "100-cph-ice-cream-cup-and-cone-filling-machine",
  name: "100 CPH Ice Cream Cup And Cone Filling Machine",
  price: "₹8,00,000",
  description:
    "DMI has designed and developed a flexible rotary type cup & cone filling machines for ice cream. The machines can be made available as per the requirement of customers starting from a single lane up to four lanes. The machines are suitable for filling of ice cream in small/big cup as well as big/small cone. One of the most important features of the machine is, they are very compact and require very less floor space. The machine is to be connected in line with a continuous freezer. The variable speed allows the arrangement to match the freezer capacity. The machine also provides the options to fill the cones with the use of change parts. The change over from one cup size to another cup size is very easy and can be done within few minutes. The batch coding is also possible on the conveyor.",
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

{
  category: "milk-pasteurization-tank",
  slug: "500-lph-milk-pasteurization-tank",
  name: "500 LPH Milk Pasteurization Tank",
  price: "₹1,15,000",
  description:
    "The Milk Pasteurization Tank is made out of a steam jacket kettle or a Hot water tank that is used to heat juice or milk to the correct temperature. From: Thermal Processing of Food Products by Steam and Hot Water, Electrical panel with over pressure tripping safety All product contact parts of S. S. 304 Tank are triple layer jacket mirror finish",
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

{
  category: "mix-ageing-tank",
  slug: "2000l-mix-ageing-tank",
  name: "2000L Mix Ageing Tank",
  price: "₹1,65,000",
  description:
    "The Ageing Tank is stainless steel tanks with sloped bottom are used to cool down pasteurized ice-cream mix and store it at a controlled temperature of around 4°C, a slow agitation allows the complete ageing for better ice cream structure Electrical panel with over pressure tripping safetyAll product contact parts of S. S. 304 Tank are triple layer jacket mirror finish",
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
{
  category: "ice-cream-flavour-tank",
  slug: "100l-ice-cream-flavor-tank",
  name: "100L Ice Cream Flavor Tank",
  price: "₹28,000",
  description:
    "The tank used to mix ice cream flavour is? Explanation: Mixing Tank, as the name suggests, these tanks are used for mixing different products and mixing the ingredients into the product. Tanks may be of the insulated type or have a single stainless steel shell.This innovative equipment helps in creating new and exciting flavors for ice cream by combining ingredients. Simply fill the mixing tank with your favorite flavors, add the desired amount of liquid and churn.",
  specifications: [
    ["Form", "Liquid"],
    ["Type", "Water Soluble"],
    ["Pack Size", "100 ml"],
    ["Usage", "Ice Cream"],
    ["Flavour Profile", "Rajbhog"],
    ["Shelf Life", "12 months"],
  ],
},
{
  category: "chocolate-and-defrost-tank",
  slug: "10kg-chocolate-and-defrost-tank",
  name: "10kg Chocolate And Defrost Tank",
  price: "₹35,000",
  description: "",
  specifications: [],
},

{
  category: "ss-hardening-tunnel",
  slug: "100l-ss-hardening-tunnel",
  name: "100L SS Hardening Tunnel",
  price: "₹4,80,000",
  description: "",
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
  features: [
    "Specially designed arrangement to hard candy& Ice Cream in very short time.",
    "Robust & Elegant aesthetically design.",
    "Efficient refrigerated system& chambers maintain a temperature even at working time.",
    "Automatically control of temperature Defrost System by specially designed programmable temperature Controller.",
    "High density PUF insulation with outer & inner covers in SS304",
  ],
},
{
  category: "servo-hmi-pouch-packing-machine",
  slug: "100-ppm-automatic-pouch-packing-machine",
  name: "100 PPM Automatic Pouch Packing Machine",
  price: "₹4,95,000",
  description:
    "We are offering a wide range of Servo HMI Pouch Packing Machine to our clients.",
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

async function ProductContent({ params }: ProductPageProps) {
  const { category, product: productSlug } = await params;

  const product = products.find(
    (item) =>
      item.slug === productSlug && item.category === category
  );

  const categoryName = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F5F3EE] px-6 py-24">
        <div className="mx-auto max-w-[900px] text-center">
          <h1 className="text-3xl font-medium text-[#282A28]">
            Product Not Found
          </h1>
          <Link
            href={`/products/${category}`}
            className="mt-7 inline-block text-sm text-[#A17C52] underline underline-offset-4"
          >
            Back to Category
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F3EE]">
      {/* Breadcrumb */}
      <section className="px-6 pt-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#77766F]">
            <Link href="/" className="hover:text-[#A17C52]">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#A17C52]">
              Products
            </Link>
            <span>/</span>
            <Link
              href={`/products/${category}`}
              className="hover:text-[#A17C52]"
            >
              {categoryName}
            </Link>
            <span>/</span>
            <span className="text-[#282A28]">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="px-6 py-12 md:px-10 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex aspect-square max-h-[600px] items-center justify-center border border-[#DEDCD5] bg-[#ECEAE4]">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center border border-[#D5D1C7] text-[#A17C52]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-[#8B877D]">
                Product Image
              </p>
              <p className="mt-2 text-xs text-[#A6A196]">
                Image to be added
              </p>
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
              Dairy Machines India
            </p>

            <h1 className="mt-5 text-3xl font-medium leading-tight text-[#282A28] md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 text-sm leading-8 text-[#77766F]">
              {product.description}
            </p>

            <div className="mt-9 border-y border-[#DEDCD5] py-6">
              <p className="text-xs uppercase tracking-widest text-[#77766F]">
                Approximate Price
              </p>
              <p className="mt-2 text-3xl font-medium text-[#282A28]">
                {product.price}
                <span className="ml-2 text-sm font-normal text-[#77766F]">
                  / Piece
                </span>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-6 bg-[#282A28] px-7 py-4 text-xs font-medium tracking-wider text-white transition-colors hover:bg-[#A17C52]"
              >
                GET BEST QUOTE <span className="text-lg">→</span>
              </Link>

              <Link
                href={`/products/${category}`}
                className="inline-flex items-center justify-center border border-[#CFCBC1] px-7 py-4 text-xs font-medium tracking-wider text-[#282A28] transition-colors hover:border-[#A17C52] hover:text-[#A17C52]"
              >
                BACK TO PRODUCTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-white px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
            Product Information
          </p>

          <h2 className="mt-4 text-3xl font-medium text-[#282A28] md:text-4xl">
            Technical Specifications
          </h2>

          <div className="mt-10 max-w-4xl border-t border-[#DEDCD5]">
            {product.specifications.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-2 gap-4 border-b border-[#DEDCD5] py-5 text-sm"
              >
                <span className="text-[#77766F]">{label}</span>
                <span className="font-medium text-[#282A28]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salient Features */}
      {product.features && (
        <section className="px-6 py-20 md:px-10 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A17C52]">
              Machine Highlights
            </p>

            <h2 className="mt-4 text-3xl font-medium text-[#282A28] md:text-4xl">
              Salient Features
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {product.features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-start gap-4 border border-[#DEDCD5] bg-white p-6"
                >
                  <span className="text-xs font-semibold text-[#A17C52]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-7 text-[#55554F]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry CTA */}
      <section className="bg-[#282A28] px-6 py-16 text-white md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#C4A47D]">
              Interested in this machine?
            </p>
            <h2 className="mt-4 text-3xl font-medium md:text-4xl">
              Request the Best Quote
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#C5C3BC]">
              Contact our team for product enquiries and further information.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="inline-flex shrink-0 items-center justify-center gap-6 bg-[#F5F3EE] px-7 py-4 text-xs font-semibold tracking-wider text-[#282A28] transition-colors hover:bg-[#A17C52] hover:text-white"
          >
            CONTACT US <span className="text-lg">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F5F3EE] px-6 py-20 text-[#77766F]">
          Loading product...
        </div>
      }
    >
      <ProductContent params={params} />
    </Suspense>
  );
}
