// SPF Insurance — spf-insurance.com
// Stitch: Technical Precision — #f1f5f9 gray, #0d6e6e teal, IBM Plex Sans+Mono

export const SITE = {
  name: "SPF Insurance",
  legalName: "Contractors Choice Agency",
  domain: "spf-insurance.com",
  url: "https://spf-insurance.com",
  tagline: "Insurance Engineered for SPF Contractors",
  description: "Precision insurance coverage for spray polyurethane foam contractors — SPF contractor GL, contractor pollution liability, workers' comp, commercial auto, rig insurance, and umbrella. Technical coverage for technical work. All 50 states.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
    full: "12220 E Riggs Road, Suite #105, Chandler, AZ 85249",
  },
  founded: 2005,
  npn: "8608479",
  licensed: "All 50 states",
  hours: "Mon–Fri 8am–5pm MST",
};

export const BRAND = {
  brandShort: "SPF Insurance",
  brandSub: "Contractor Insurance",
  icon: "FlaskConical",
  niche: "SPF Contractors",
  nicheAdj: "spray polyurethane foam",
  nicheShort: "SPF",
  coverageNote: "Coverage engineered for the technical demands of SPF application.",
  regionPill: "SPF Contractor Insurance — All 50 States",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// 6 services (SPF-specific slugs)
export const SERVICES = [
  {
    slug: "spf-contractor-gl",
    title: "SPF Contractor General Liability",
    icon: "ShieldCheck",
    description: "GL coverage engineered for spray polyurethane foam applicators — with isocyanate and off-ratio endorsements that standard policies exclude.",
    fullDescription: "Standard general liability policies routinely exclude SPF work by classification or endorsement. Our SPF-specific GL is written for SPF applicators with the correct class codes, chemical exposure language, and off-ratio endorsements. Covers completed operations, bodily injury, and property damage arising from SPF application.",
    keywords: ["SPF contractor general liability", "spray foam GL insurance", "SPF GL", "isocyanate GL coverage", "off-ratio general liability", "spray polyurethane foam GL"],
  },
  {
    slug: "contractor-pollution-liability",
    title: "Contractor Pollution Liability",
    icon: "Droplets",
    description: "CPL coverage for isocyanate (MDI/TDI) and VOC exposure events — the chemical risk that standard GL pollution exclusions leave uncovered.",
    fullDescription: "SPF application involves MDI (methylene diphenyl diisocyanate), TDI, and blowing agents classified as pollutants under standard GL pollution exclusions. Contractor Pollution Liability (CPL) fills that gap — covering third-party bodily injury and property damage from chemical exposure events, including off-gassing complaints and indoor air quality claims.",
    keywords: ["contractor pollution liability spray foam", "SPF CPL insurance", "isocyanate insurance", "MDI TDI pollution liability", "spray foam VOC coverage"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    icon: "HardHat",
    description: "Workers' comp rated for SPF application class codes — covering isocyanate respiratory exposure, chemical burns, and fall hazards on SPF job sites.",
    fullDescription: "SPF applicators face unique WC exposure: isocyanate sensitization, chemical burns, PPE compliance claims, and elevated fall risk on roofing and wall applications. We place WC with carriers familiar with spray foam class codes and dual-wage schedules, minimizing audit surprises at year-end.",
    keywords: ["spray foam workers compensation", "SPF workers comp", "spray foam WC class codes", "isocyanate workers comp"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto & Spray Rigs",
    icon: "Truck",
    description: "Commercial auto for SPF contractor fleets — covering proportioner trucks, heated-hose rigs, and service vehicles as scheduled vehicles.",
    fullDescription: "SPF rigs are not standard commercial vehicles. Proportioner units, heated hose systems, and chemical transport require proper commercial auto scheduling and may require cargo/pollution endorsements for chemical loads. We schedule SPF rigs correctly from the start.",
    keywords: ["spray foam commercial auto", "SPF rig truck insurance", "proportioner truck insurance", "spray foam vehicle insurance"],
  },
  {
    slug: "rig-insurance",
    title: "SPF Rig & Equipment Insurance",
    icon: "Wrench",
    description: "Inland marine coverage for SPF proportioners, heated hoses, spray guns, and ancillary equipment — replacing commercial auto coverage gaps for rig equipment.",
    fullDescription: "Commercial auto policies do not cover the proportioner, heated hose assemblies, or spray guns as equipment — only the vehicle. Inland marine (equipment floater) covers your SPF rig equipment on-site, in-transit, and at the yard. We write equipment floaters matched to proportioner replacement values ($15,000–$80,000+).",
    keywords: ["SPF rig insurance", "spray foam equipment insurance", "proportioner insurance", "spray foam inland marine", "heated hose coverage"],
  },
  {
    slug: "umbrella",
    title: "Commercial Umbrella",
    icon: "Umbrella",
    description: "Umbrella limits up to $10M for SPF contractors — meeting GC requirements and protecting against large completed-operations claims.",
    fullDescription: "Large commercial GCs and property owners require SPF subcontractors to carry $5M or $10M umbrella limits. Our umbrella policies follow form over SPF-specific GL and CPL, providing true excess coverage rather than gap-filled stand-alone policies.",
    keywords: ["spray foam umbrella insurance", "SPF umbrella coverage", "contractor umbrella $5M $10M", "spray foam excess liability"],
  },
];

// 8 location markets
export const LOCATIONS = [
  { slug: "texas-southwest", name: "Texas & Southwest", region: "TX·AZ·NM", blurb: "High SPF application volume in residential, commercial, and agricultural markets across Texas, Arizona, and New Mexico." },
  { slug: "southeast", name: "Southeast", region: "FL·GA·NC", blurb: "Coastal and commercial SPF markets across Florida, Georgia, and North Carolina — high humidity drives closed-cell SPF demand." },
  { slug: "midwest", name: "Midwest", region: "IL·OH·MI", blurb: "Industrial SPF applications in manufacturing and cold-storage facilities across Illinois, Ohio, and Michigan." },
  { slug: "northeast", name: "Northeast", region: "NY·PA·NJ", blurb: "Commercial SPF demand in dense urban and mixed-use construction markets across New York, Pennsylvania, and New Jersey." },
  { slug: "california", name: "California", region: "CA", blurb: "Strict VOC regulations and large commercial SPF market — California requires carriers familiar with CA DOI surplus line requirements." },
  { slug: "mountain-states", name: "Mountain States", region: "CO·UT", blurb: "SPF insulation demand driven by extreme temperature differentials in Colorado and Utah residential and commercial construction." },
  { slug: "mid-atlantic", name: "Mid-Atlantic", region: "VA·MD", blurb: "Federal and commercial SPF projects across Virginia and Maryland — government contractor insurance requirements apply." },
  { slug: "pacific-northwest", name: "Pacific Northwest", region: "WA·OR", blurb: "Industrial SPF applications in manufacturing, cold storage, and commercial construction across Washington and Oregon." },
];

export const CREDENTIALS = [
  { label: "Licensed All 50 States", icon: "ShieldCheck" },
  { label: "NPN #8608479", icon: "FileCheck" },
  { label: "A-Rated Carriers", icon: "Star" },
  { label: "Founded 2005", icon: "Calendar" },
  { label: "SPF Specialist", icon: "FlaskConical" },
  { label: "15-Min Quotes", icon: "Clock" },
];

export const STATS = [
  { value: 500, prefix: "", suffix: "+", label: "SPF contractors insured" },
  { value: 20, prefix: "", suffix: "+", label: "Years insuring SPF applicators" },
  { value: 15, prefix: "", suffix: " min", label: "Average quote turnaround" },
  { value: 50, prefix: "", suffix: "", label: "States licensed and writing" },
];

export const TESTIMONIALS = [
  {
    name: "Marcus T.",
    role: "Owner, T&S Spray Foam LLC",
    company: "T&S Spray Foam LLC",
    location: "Houston, TX",
    quote: "We were getting declined everywhere because of our SPF classification. CCA got us GL with the right off-ratio endorsement in two days. First broker who actually understood what we do.",
    text: "We were getting declined everywhere because of our SPF classification. CCA got us GL with the right off-ratio endorsement in two days. First broker who actually understood what we do.",
    rating: 5,
  },
  {
    name: "Sandra R.",
    role: "Owner, Coastal Foam Solutions",
    company: "Coastal Foam Solutions",
    location: "Tampa, FL",
    quote: "The CPL coverage for our isocyanate exposure was the piece we were missing. CCA explained the pollution exclusion gap in standard GL and placed us correctly. Real expertise.",
    text: "The CPL coverage for our isocyanate exposure was the piece we were missing. CCA explained the pollution exclusion gap in standard GL and placed us correctly. Real expertise.",
    rating: 5,
  },
  {
    name: "Derek M.",
    role: "Owner, Summit SPF Insulation",
    company: "Summit SPF Insulation",
    location: "Denver, CO",
    quote: "Our GC required $5M umbrella with the SPF GL underneath. CCA had the stack bound within a week. They know the commercial SPF insurance market better than anyone we've worked with.",
    text: "Our GC required $5M umbrella with the SPF GL underneath. CCA had the stack bound within a week. They know the commercial SPF insurance market better than anyone we've worked with.",
    rating: 5,
  },
];
