import {
  PhoneCall, FileSearch, FileSignature, ShieldCheck,
  Droplets, HardHat, Truck, Wrench, Umbrella, FlaskConical,
} from "lucide-react";

// ============================================================
// COPY — display strings for every section
// ============================================================
export const COPY = {
  hero: {
    eyebrow: "SPF Contractor Insurance Specialists",
    h1Lead: "Insurance engineered for",
    h1Highlight: "SPF applicators",
    lead: "Coverage specifications built for spray polyurethane foam contractors — GL with isocyanate endorsements, contractor pollution liability for MDI/TDI exposure, rig insurance for your proportioner, and umbrella limits that meet GC requirements. All 50 states.",
    cta1: "Get a quote",
    cta2: "Call 844-967-5247",
    quoteNote: "15-min quote · A-rated carriers · All 50 states",
  },
  nav: {
    getQuote: "Get a Quote",
  },
  footer: {
    tagline: "Technical coverage for technical work.",
    copyright: `© ${new Date().getFullYear()} Contractors Choice Agency. All rights reserved.`,
    npnNote: "NPN #8608479 · Licensed all 50 states",
    ctaSubcopy: "SPF-specific GL, CPL for isocyanate exposure, rig insurance, and umbrella. 15-minute quotes.",
    description: "Precision insurance for spray polyurethane foam contractors. SPF GL with off-ratio endorsements, contractor pollution liability for MDI/TDI exposure, rig insurance, workers' comp, and umbrella. Licensed all 50 states since 2005.",
  },
  servicesGrid: {
    eyebrow: "Coverage specifications",
    h2Lead: "Six coverage lines",
    h2Highlight: "for SPF contractors",
    lead: "Standard contractor policies routinely exclude SPF work. Our coverage is written specifically for spray polyurethane foam applicators — correct class codes, isocyanate language, and off-ratio endorsements.",
    quoteNote: "Need the full stack? We coordinate all lines on one account.",
  },
  why: {
    eyebrow: "Why SPF Insurance",
    h2: "Built for SPF applicators — not generic contractors",
    lead: "Most commercial insurance is written for standard construction. SPF application involves isocyanates, off-ratio risk, and classification challenges that standard policies routinely exclude or misprice.",
  },
  coverage: {
    eyebrow: "Coverage area",
    h2: "Writing SPF contractor insurance in all 50 states",
    lead: "From Texas production SPF to Northeast commercial projects to California VOC-compliant applications — we write SPF contractor insurance nationwide with carriers familiar with the SPF classification landscape.",
  },
  process: {
    eyebrow: "Process",
    h2: "From application specs to bound coverage",
    lead: "Our quoting process is built for SPF contractors. We collect the right underwriting data the first time — proportioner specs, chemical types, job classifications — and return bindable quotes, not estimates.",
  },
  testimonials: {
    eyebrow: "SPF contractor clients",
    h2Lead: "Contractors who",
    h2Highlight: "switched to SPF-specific coverage",
    lead: "SPF applicators who moved from generic contractor policies to SPF-specific coverage.",
  },
  finalCta: {
    h2: "Get SPF-specific coverage in 15 minutes",
    lead: "Our quoting team understands SPF classification, isocyanate exposure language, and off-ratio endorsements. Call or submit your specs now.",
    cta1: "Request a quote",
    cta2: "844-967-5247",
  },
  ctaBand: {
    defaultTitle: "SPF contractor coverage — bound fast",
    defaultDescription: "A-rated carriers, SPF-specific GL, CPL for isocyanate exposure, rig insurance, and umbrella limits that meet GC requirements. 15-minute quotes.",
  },
  faq: {
    eyebrow: "Technical questions",
    h2Lead: "SPF insurance",
    h2Highlight: "FAQ",
  },
  servicesPage: {
    metaTitle: "SPF Contractor Insurance Coverage Lines",
    metaDescription: "Six coverage lines for spray polyurethane foam contractors — SPF GL, contractor pollution liability, workers' comp, commercial auto, rig insurance, and umbrella. All 50 states.",
    ogTitle: "SPF Contractor Insurance — Coverage Specifications",
    ogDescription: "Precision insurance coverage for SPF applicators. Six lines: GL, CPL, WC, commercial auto, rig, umbrella.",
    h1Lead: "Coverage specifications",
    h1Highlight: "for SPF contractors",
    lead: "Standard contractor GL routinely excludes SPF work by classification or pollution endorsement. Our six coverage lines are written specifically for spray polyurethane foam applicators — with the right class codes, chemical exposure language, and off-ratio endorsements.",
    ctaTitle: "Need coverage across multiple lines?",
    ctaDescription: "We coordinate GL, CPL, WC, commercial auto, rig insurance, and umbrella on a single SPF contractor account. One call, 15-minute turnaround.",
  },
  blogPage: {
    metaTitle: "SPF Contractor Insurance Blog — Coverage Specifications & Technical Guides",
    metaDescription: "Technical coverage guides for spray polyurethane foam contractors — GL exclusions, isocyanate CPL, rig insurance, workers' comp class codes, and umbrella limits.",
    h1Lead: "SPF insurance",
    h1Highlight: "technical guides",
    lead: "Coverage specification articles for spray polyurethane foam contractors — GL exclusions, isocyanate pollution liability, rig insurance, WC class codes, and commercial umbrella requirements.",
  },
  serviceDetail: {
    h1Suffix: "for SPF Contractors",
    imageAltSuffix: "SPF Contractor Insurance Coverage",
    category: "SPF Contractor Insurance",
  },
  about: {
    eyebrow: "About SPF Insurance",
    h1: "Coverage specialists for the SPF trade",
    h1Lead: "Coverage specialists",
    h1Highlight: "for the SPF trade",
    lead: "Contractors Choice Agency has placed commercial insurance for spray polyurethane foam applicators since 2005. We understand SPF classification challenges, isocyanate exposure language, and the off-ratio endorsements that make SPF GL actually work.",
    imageAlt: "SPF Insurance specialist at modern technical office",
    missionTitle: "Technical precision, not boilerplate coverage",
    missionText: "Standard contractor insurance is written for framers, plumbers, and electricians. SPF application involves isocyanates, reactive chemistry, and completed-operations exposure that generic policies exclude or misprice. We built SPF Insurance to fill that gap — coverage specifications matched to the technical demands of SPF work.",
    metaTitle: "About SPF Insurance | Contractors Choice Agency",
    metaDescription: "Contractors Choice Agency has placed SPF contractor insurance since 2005. SPF GL, CPL for isocyanate exposure, rig insurance, WC, commercial auto, and umbrella. All 50 states.",
    storyEyebrow: "Our story",
    storyTitle: "Built for SPF applicators since 2005",
    storyLead: "Contractors Choice Agency started placing specialty contractor insurance in 2005. Over two decades, SPF contractor coverage became a core focus — driven by the complexity of isocyanate classification, off-ratio exclusions, and rig insurance gaps that standard carrier programs repeatedly failed to address.",
    timeline: [
      { year: "2005", title: "Founded in Chandler, AZ", desc: "Contractors Choice Agency opens, specializing in hard-to-place contractor insurance across the Southwest." },
      { year: "2010", title: "SPF specialty program established", desc: "First dedicated SPF contractor GL program placed, addressing the classification and pollution exclusion gaps in standard contractor markets." },
      { year: "2015", title: "Expanded to all 50 states", desc: "Admitted and E&S market access grows to cover SPF applicators in every state, including California surplus line compliance and Northeast commercial markets." },
      { year: "2020", title: "500+ SPF contractors insured", desc: "SPF Insurance becomes the primary brand for the agency's spray foam specialization, serving 500+ active SPF contractor accounts." },
      { year: "2025", title: "Full coverage stack nationwide", desc: "GL, CPL, WC, commercial auto, rig insurance, and umbrella — coordinated on single accounts with 15-minute quote turnaround." },
    ],
    valuesTitle: "What makes us different",
    values: [
      { icon: "ShieldCheck", title: "SPF-specific expertise", desc: "We understand NCCI class codes for spray foam applicators, isocyanate trigger language in CPL, and off-ratio endorsement mechanics." },
      { icon: "HardHat", title: "Technical vocabulary", desc: "MDI, TDI, A-side/B-side, proportioners, heated hose assemblies — we speak SPF. No explaining your trade to a generalist broker." },
      { icon: "Award", title: "A-rated carriers only", desc: "Every coverage line is placed through A.M. Best A-rated or A+ carriers. GC certificate requirements met without exception." },
      { icon: "Handshake", title: "Account-level service", desc: "Single point of contact for GL, CPL, WC, auto, rig, and umbrella. Annual reviews, audit support, certificate management." },
    ],
  },
  quote: {
    eyebrow: "Request a quote",
    h1: "SPF contractor insurance quote",
    lead: "Submit your application specs and we'll return bindable quotes from A-rated SPF-specialist carriers within 15 minutes during business hours.",
    formNote: "Typical info needed: business name, states of operation, annual revenue, SPF volume (board-feet or tons), crew size, proportioner specs, and loss history.",
  },
  contact: {
    eyebrow: "Contact",
    h1: "Talk to an SPF insurance specialist",
    lead: "Our team understands SPF classification, isocyanate exposure endorsements, and off-ratio coverage. Call, email, or submit a message.",
  },
  coveragePage: {
    metaTitle: "SPF Contractor Insurance — Coverage Area (All 50 States)",
    metaDescription: "SPF Insurance writes spray polyurethane foam contractor coverage in all 50 states — from Texas and the Southwest to California, the Northeast, and the Pacific Northwest.",
    h1Lead: "SPF contractor insurance",
    h1Highlight: "nationwide",
    lead: "We write SPF contractor GL, CPL, workers' comp, commercial auto, rig insurance, and umbrella in all 50 states — with carriers familiar with SPF classification in each market.",
    sectionTitle: "Key SPF contractor markets",
    nationwideLead: "Regardless of your state or SPF application type — residential closed-cell, commercial roofing, cold storage, or agricultural — we write bindable coverage through A-rated carriers licensed in your state.",
    faqs: [
      { q: "Do you write SPF insurance in all 50 states?", a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes SPF contractor insurance — GL, CPL, WC, commercial auto, rig insurance, and umbrella — in every state through admitted and E&S carriers." },
      { q: "Can you insure SPF contractors in California with its VOC restrictions?", a: "Yes. California SPF contractors face strict VOC regulations and California-specific surplus line requirements. We work with California-licensed carriers who understand the state's SPF regulatory environment." },
    ],
  },
};

// ============================================================
// PROCESS — 4-step SPF quote process
// ============================================================
export const PROCESS = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Submit your specs",
    description: "Call or submit your SPF application specs — proportioner type, chemical classifications, annual volume (board-feet or tons), crew size, and states of operation.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "We shop SPF markets",
    description: "We approach A-rated carriers with SPF-specific programs — matching your class codes, isocyanate exposure classification, and off-ratio endorsement requirements.",
  },
  {
    step: "03",
    icon: FileSignature,
    title: "Review and bind",
    description: "We return bindable quotes, not estimates. Review coverage specifications, confirm limits and endorsements, and bind — certificates issued same day.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Ongoing account management",
    description: "Annual reviews, certificate management, audit support, and claims coordination. We track SPF market changes so your coverage specs stay current.",
  },
];

// ============================================================
// WHY CHOOSE — 6 differentiators
// ============================================================
export const WHY_CHOOSE = [
  {
    icon: FlaskConical,
    title: "SPF classification expertise",
    description: "We understand NCCI and ISO class codes for spray foam applicators — the difference between an accurately classified policy and one that excludes your work at claims time.",
  },
  {
    icon: Droplets,
    title: "Isocyanate exposure language",
    description: "MDI and TDI are pollutants under standard GL pollution exclusions. We place CPL coverage with trigger language that actually responds to isocyanate exposure events.",
  },
  {
    icon: ShieldCheck,
    title: "Off-ratio endorsements",
    description: "Standard GL excludes off-ratio SPF events as 'expected or intended injury.' We secure endorsements that cover off-ratio application claims — the most common SPF GL dispute.",
  },
  {
    icon: Wrench,
    title: "Rig and equipment coverage",
    description: "Your proportioner isn't covered by commercial auto. We write inland marine equipment floaters matched to proportioner replacement values and heated hose assemblies.",
  },
  {
    icon: Umbrella,
    title: "GC umbrella compliance",
    description: "We build umbrella stacks — GL + CPL + umbrella — that satisfy $5M and $10M GC certificate requirements for commercial SPF subcontracting.",
  },
  {
    icon: HardHat,
    title: "WC audit management",
    description: "SPF WC audits are high-risk for payroll misclassification. We review your crew structure and job classifications before placement to minimize audit exposure.",
  },
];

// ============================================================
// HOME_FAQS — 20 SPF-specific Q&A
// ============================================================
export const HOME_FAQS = [
  {
    q: "Why does standard general liability exclude SPF work?",
    a: "Standard GL policies exclude SPF work through two mechanisms: (1) classification exclusions — if your operations aren't listed or are excluded in the policy declarations, claims can be denied; and (2) pollution exclusions — isocyanates and blowing agents are classified as pollutants under standard ISO pollution exclusion language. SPF-specific GL addresses both with correct class codes and isocyanate coverage endorsements.",
  },
  {
    q: "What is an off-ratio exclusion in standard GL?",
    a: "An off-ratio event occurs when the A-component (isocyanate) and B-component (polyol) are mixed at the wrong ratio during application, resulting in soft foam, incomplete cure, or chemical release. Standard GL policies frequently exclude off-ratio events as 'expected or intended injury' or under separate product exclusions. SPF-specific GL endorsements cover off-ratio application claims as covered occurrences.",
  },
  {
    q: "What is Contractor Pollution Liability (CPL) and why do SPF contractors need it?",
    a: "CPL covers third-party bodily injury and property damage arising from pollutant releases during your contracting operations. For SPF contractors, this means MDI/TDI isocyanate exposure, amine catalyst off-gassing, and blowing agent releases. Standard GL pollution exclusions exclude these events entirely — CPL fills that coverage gap.",
  },
  {
    q: "What MDI/TDI exposure events does CPL typically cover?",
    a: "CPL covers third-party claims arising from: isocyanate off-gassing during and after SPF application, blowing agent releases (CO2, HFO, water-blown), amine catalyst exposure, respiratory sensitization complaints from building occupants, and indoor air quality claims post-application. The trigger language in the CPL policy determines what's covered — we review trigger definitions carefully for SPF applicators.",
  },
  {
    q: "What is the A-component and B-component in SPF, and how does it affect coverage?",
    a: "The A-component is the isocyanate (typically MDI — methylene diphenyl diisocyanate). The B-component is the polyol blend (resin side), which includes polyols, flame retardants, surfactants, catalysts, and blowing agents. Insurance classification treats the isocyanate A-side as the primary pollutant exposure. Both components require proper chemical classification in your policy — particularly for CPL trigger language.",
  },
  {
    q: "Does my commercial auto policy cover my spray foam proportioner?",
    a: "No. Commercial auto policies cover the vehicle — the truck or trailer — as a scheduled vehicle. The proportioner unit, heated hose assemblies, spray guns, and ancillary equipment are not covered under commercial auto. These require a separate inland marine equipment floater (rig insurance). We write both coverages and coordinate them to eliminate the equipment coverage gap.",
  },
  {
    q: "What is SPF rig insurance and what does it cover?",
    a: "SPF rig insurance is an inland marine equipment floater covering your spray foam proportioner machine, heated hose assemblies, spray guns, drum heaters, generators, and ancillary equipment. Coverage applies on-site, in-transit, and at your yard or storage location. Proportioner replacement values range from $15,000 to $80,000+ — most SPF contractors are significantly underinsured on equipment without a separate floater.",
  },
  {
    q: "What workers' comp class codes apply to SPF applicators?",
    a: "SPF applicators typically fall under NCCI class codes in the insulation contractor range (5183 — Plumbing, Heating, Ventilation; or specialty codes depending on state). Some states use Bureau-specific codes for spray foam applicators. Misclassification at WC placement often results in large audit charges. We review class code assignment with carriers familiar with spray foam operations before binding.",
  },
  {
    q: "How does named insured structure affect SPF coverage?",
    a: "Named insured structure matters for SPF contractors with multiple crews, DBAs, or related entities. If your spray foam crews operate under different entity names or you use 1099 subcontractors for SPF work, the named insured must reflect the actual risk — or claims can be denied. We review entity structure and subcontractor use during the application process.",
  },
  {
    q: "Does my SPF GL cover subcontractors I hire for spray foam work?",
    a: "Not automatically. Standard GL policies exclude subcontractor work unless specifically endorsed. SPF GL policies require subcontractor scheduling or blanket subcontractor coverage endorsements for hired SPF crews to be covered. We review subcontractor certificates and ensure your policy responds to both your direct operations and any hired SPF subcontractors.",
  },
  {
    q: "What is the difference between admitted and surplus-line carriers for SPF insurance?",
    a: "Admitted carriers are licensed by state insurance departments and provide state guaranty fund protection. Surplus-line (E&S) carriers operate outside standard admitted markets and can write risks that admitted carriers decline — including many SPF applicator accounts. Most SPF contractor GL and CPL is placed in E&S markets through approved surplus line brokers. We are licensed to place both admitted and E&S coverage in all 50 states.",
  },
  {
    q: "What umbrella limits do commercial GCs require from SPF subcontractors?",
    a: "Commercial GCs and property owners increasingly require $5M to $10M umbrella limits from SPF subcontractors, particularly on large commercial, industrial, and institutional projects. The umbrella must follow form over your SPF GL and ideally your CPL as well. We build the full coverage stack — GL + CPL + umbrella — to satisfy GC certificate requirements.",
  },
  {
    q: "How do I get a certificate of insurance showing SPF coverage for a GC with a spray foam exclusion?",
    a: "Many GC master policies include spray foam exclusions in their own GL. When a GC requires an SPF subcontractor to carry coverage, they typically require the subcontractor's GL to be SPF-specific and may require confirmation that the GL does not itself contain a spray foam exclusion. We issue certificates that accurately reflect your SPF-specific coverage and can provide policy language excerpts for GC compliance review.",
  },
  {
    q: "Can I get SPF insurance if I've had prior GL claims from foam defects?",
    a: "Claim history affects placement but does not automatically disqualify coverage. SPF-specific E&S markets underwrite completed-operations losses on a case-by-case basis. We present your claim history with context — type of loss, root cause, remediation taken — to carriers most likely to write your risk. Some markets will add specific exclusions rather than decline entirely.",
  },
  {
    q: "What SPF application types affect my insurance classification?",
    a: "Application type affects class code, premium, and coverage availability: (1) closed-cell roofing SPF — higher completed-operations exposure; (2) open-cell residential insulation — lower chemical exposure profile; (3) cold storage and agricultural applications — specialty markets; (4) marine applications — separate specialty classification. We match your application mix to the right carrier program.",
  },
  {
    q: "How is SPF workers' comp premium calculated?",
    a: "SPF WC premium is calculated on payroll at rates specific to your class code. Some states use dual-wage rules that apply different rates based on hourly wage thresholds. Premium adjustments occur at audit based on actual payroll. We review your payroll allocation — distinguishing applicator payroll from clerical and driver payroll — to ensure accurate classification and minimize audit exposure.",
  },
  {
    q: "Does commercial auto insurance cover chemical loads in my SPF truck?",
    a: "Standard commercial auto does not cover chemical cargo (A and B component drums) as cargo coverage — and may exclude pollution liability arising from chemical spills during transport. A pollution endorsement on commercial auto or a separate CPL policy is needed to cover chemical release events during transport. We coordinate commercial auto and CPL to eliminate this gap.",
  },
  {
    q: "What is a proportioner and why does its value matter for insurance?",
    a: "A proportioner is the core SPF equipment — a heated, high-pressure machine that meters and mixes the A and B components at the correct ratio before atomizing through the spray gun. New proportioner prices range from $20,000 to $80,000+ depending on output capacity and heater specs. Without an equipment floater, a proportioner loss is typically uninsured or underinsured under commercial auto. We insure proportioners at agreed-value or replacement-cost basis.",
  },
  {
    q: "How long does it take to get SPF contractor insurance?",
    a: "Most SPF contractor insurance quotes are returned within 15 minutes of receiving complete application information during business hours. Binding typically occurs same-day. Certificates are issued the same day as binding. Complex risks with claim history or large commercial operations may take 24–48 hours for full market review.",
  },
  {
    q: "What information do you need to quote SPF contractor insurance?",
    a: "To quote SPF contractor GL, CPL, WC, commercial auto, rig, and umbrella, we typically need: (1) business entity name and state of formation; (2) states of operation; (3) years in business; (4) annual revenue and SPF-specific revenue; (5) SPF application types (open-cell, closed-cell, roofing, residential, commercial); (6) crew size and payroll breakdown; (7) proportioner make/model and replacement value; (8) vehicle count and VINs; (9) 5-year loss history.",
  },
];

// ============================================================
// GENERAL_FAQS — 14 Q&A for service/location pages
// ============================================================
export const GENERAL_FAQS = [
  {
    q: "Is SPF contractor GL different from standard contractor GL?",
    a: "Yes. SPF-specific GL is endorsed to cover isocyanate exposure events and off-ratio application claims that standard GL pollution exclusions and product exclusions eliminate. A standard contractor GL policy will typically deny SPF-related claims.",
  },
  {
    q: "Do I need both GL and CPL as an SPF contractor?",
    a: "In most cases, yes. GL covers general bodily injury and property damage from your operations. CPL specifically covers pollutant-triggered claims — isocyanate and VOC exposure events that fall under GL pollution exclusions. The two policies work together to provide complete coverage for SPF applicators.",
  },
  {
    q: "Are SPF-specific insurance programs available in my state?",
    a: "Yes. We write SPF contractor insurance in all 50 states through admitted and E&S carriers. Some states have more SPF carrier options than others — California, Texas, and Florida have the deepest SPF markets.",
  },
  {
    q: "What does A-rated carrier mean and why does it matter?",
    a: "A.M. Best assigns financial strength ratings to insurance carriers. A-rated carriers have demonstrated strong financial strength and are required by most commercial contracts. We place SPF insurance exclusively through A-rated and A+ A.M. Best rated carriers.",
  },
  {
    q: "Can I add additional insureds for GC projects?",
    a: "Yes. SPF GL policies can add general contractors, property owners, and project managers as additional insureds. We process certificate requests and additional insured endorsements same-day.",
  },
  {
    q: "How often should SPF contractors review their coverage?",
    a: "Annual review is standard, but coverage should also be reviewed when: you add application types (e.g., start doing SPF roofing), add crew members, purchase new proportioner equipment, expand to new states, or take on commercial projects with higher limit requirements.",
  },
  {
    q: "What is the difference between occurrence and claims-made GL for SPF contractors?",
    a: "Occurrence-based GL covers claims for events that occur during the policy period regardless of when the claim is filed. Claims-made GL covers claims filed during the policy period. For SPF contractors with completed-operations exposure (foam applied in prior years), occurrence-based GL is generally preferable — it covers long-tail completed-operations claims without requiring tail coverage.",
  },
  {
    q: "What is tail coverage and do SPF contractors need it?",
    a: "Tail coverage (extended reporting period) applies to claims-made policies. It extends the period during which claims can be reported after the policy ends. If you hold a claims-made GL or CPL, tail coverage is critical when you cancel or change carriers — especially for SPF applicators with completed-operations exposure from prior years.",
  },
  {
    q: "Does GL cover SPF completed-operations claims?",
    a: "SPF-specific GL includes completed-operations coverage for claims arising from foam applied in prior policy periods. Standard GL completed-operations exclusions for SPF work are common — verify your policy covers SPF completed operations explicitly.",
  },
  {
    q: "Can I get coverage if I'm a new SPF contractor with no prior insurance history?",
    a: "Yes. New SPF contractors without prior insurance history can be placed in E&S markets with slightly higher rates, with rates typically improving after 1–3 years of clean loss history. We work with markets that write new-venture SPF accounts.",
  },
  {
    q: "What is the typical GL limit for SPF contractors?",
    a: "Most SPF contractors carry $1M per occurrence / $2M aggregate. Commercial projects and GC requirements frequently call for $2M/$4M or $3M/$6M. Umbrella policies are then stacked above to reach $5M or $10M total limits.",
  },
  {
    q: "How does claim reporting work for SPF insurance?",
    a: "Report claims to your carrier immediately upon a covered event or notice of potential claim. For SPF contractors, this includes: off-ratio application events, occupant complaints about off-gassing, foam adhesion failures, and any third-party bodily injury or property damage arising from your SPF work. We provide claims coordination and carrier contact guidance.",
  },
  {
    q: "Can I bundle multiple SPF coverage lines with one agency?",
    a: "Yes — and we recommend it. Coordinating GL, CPL, WC, commercial auto, rig insurance, and umbrella through a single agency prevents coverage gaps (particularly between commercial auto and rig equipment), simplifies certificate management, and allows us to review the full program for completeness annually.",
  },
  {
    q: "What is an equipment floater and how does it differ from commercial property?",
    a: "An equipment floater (inland marine) covers mobile equipment — like your SPF proportioner — wherever it goes: job sites, in transit, and at your yard. Commercial property only covers equipment at a fixed, scheduled location. SPF proportioners require a floater, not a property policy, because they move with every job.",
  },
];

// ============================================================
// SERVICE_DETAIL — per-slug content blocks
// ============================================================
export const SERVICE_DETAIL: Record<string, {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: { q: string; a: string }[];
}> = {
  "spf-contractor-gl": {
    heroBlurb: "SPF contractor GL is not standard contractor GL with a spray foam endorsement — it's a distinct product written for the classification, chemical exposure, and completed-operations profile of spray polyurethane foam applicators. Standard GL policies deny SPF claims at the class code level and through pollution exclusions. We write GL that actually covers SPF work.",
    whatsCovered: [
      "Bodily injury and property damage arising from SPF application operations",
      "Completed-operations coverage for foam applied in prior policy periods",
      "Off-ratio application events as covered occurrences (not excluded 'expected injury')",
      "Premises and operations for SPF job sites",
      "Personal and advertising injury",
      "Medical payments to third parties",
      "SPF-specific class code endorsements (not mislabeled as general insulation)",
    ],
    whoItsFor: [
      "Residential closed-cell and open-cell SPF applicators",
      "Commercial SPF roofing contractors",
      "Agricultural and cold-storage SPF applicators",
      "SPF insulation subcontractors working under GC contracts",
      "SPF contractors entering new states or application types",
      "Contractors transitioning from standard GL that excluded SPF work",
    ],
    whyCca: [
      "SPF class code expertise — we assign the correct NCCI/ISO codes, not generic 'insulation contractor'",
      "Off-ratio endorsement review — we verify the policy language covers off-ratio events as occurrences",
      "Pollution exclusion audit — we confirm isocyanate and VOC exposure is not excluded by the GL pollution clause",
      "Completed-operations verification — confirm your GL covers foam applied in prior periods",
      "Same-day certificates with accurate SPF coverage language for GC review",
    ],
    faqs: [
      { q: "What makes SPF GL different from standard contractor GL?", a: "SPF GL uses the correct class codes for spray foam applicators, includes off-ratio endorsements, and is written with carriers who understand that isocyanate exposure events are covered occurrences — not pollution exclusions or product defects." },
      { q: "Will standard GL cover an off-ratio foam event?", a: "In most cases, no. Standard GL policies treat off-ratio events as 'expected or intended injury' or exclude them under product liability exclusions. SPF-specific GL endorsements address off-ratio events explicitly as covered occurrences." },
      { q: "Can I get GL that also covers my subcontracted SPF crews?", a: "Yes, with a blanket subcontractor endorsement. We verify that your GL extends coverage to hired SPF applicator subcontractors and review their certificate requirements." },
    ],
  },
  "contractor-pollution-liability": {
    heroBlurb: "MDI and TDI — the isocyanates in the A-component of SPF — are classified as pollutants under standard ISO GL pollution exclusion language. This means standard GL typically won't cover isocyanate exposure events, off-gassing complaints, or indoor air quality claims from SPF application. Contractor Pollution Liability (CPL) fills that gap specifically for SPF chemical exposure.",
    whatsCovered: [
      "Third-party bodily injury from isocyanate (MDI/TDI) exposure during application",
      "Indoor air quality claims from building occupants post-SPF application",
      "Amine catalyst and blowing agent (HFO, CO2) off-gassing complaints",
      "Chemical spill cleanup costs from A and B component releases on job sites",
      "Property damage from chemical contamination during SPF operations",
      "Transportation pollution incidents involving chemical drum transport",
      "Extended reporting periods for long-tail exposure claims",
    ],
    whoItsFor: [
      "SPF contractors applying closed-cell foam in occupied or recently occupied buildings",
      "Commercial SPF roofing contractors with occupant exposure risk",
      "Contractors working near HVAC intakes where isocyanate can enter building systems",
      "SPF contractors in states with strict VOC regulations (CA, NY, IL)",
      "SPF subcontractors whose GC requires CPL on the certificate",
      "Any SPF applicator whose GL pollution exclusion is not endorsed for isocyanates",
    ],
    whyCca: [
      "CPL trigger language review — we verify that MDI/TDI is explicitly covered under the pollutant definition",
      "Transportation pollution coordination — we align CPL with commercial auto for chemical cargo coverage",
      "Retroactive date management — we maintain CPL retroactive dates to protect prior-period exposure events",
      "GC certificate compliance — we issue CPL certificates showing pollutant coverage for isocyanates",
      "Multi-carrier placement for stacked CPL limits on large commercial SPF projects",
    ],
    faqs: [
      { q: "Is isocyanate covered under standard GL or CPL?", a: "Standard GL pollution exclusions typically exclude isocyanate exposure events as pollutant-triggered claims. CPL is the coverage vehicle for MDI/TDI and related SPF chemical exposure — it's written specifically to cover the pollutant events that GL excludes." },
      { q: "What is a CPL retroactive date?", a: "A retroactive date establishes the earliest date from which CPL coverage applies to claims. For SPF contractors, maintaining or backdating retroactive dates is critical — exposure claims can surface months to years after application. We manage retroactive dates carefully when switching carriers." },
      { q: "Does CPL cover transportation of A and B component drums?", a: "Some CPL policies extend to transportation pollution events. We verify that your CPL covers chemical releases during drum transport, or coordinate with a commercial auto pollution endorsement to cover that gap." },
    ],
  },
  "workers-compensation": {
    heroBlurb: "SPF applicators face WC exposure that general contractor WC policies don't account for: isocyanate respiratory sensitization, chemical burns from A and B component contact, and elevated fall risk on roofing and elevated SPF applications. We place WC with carriers who understand spray foam class codes and audit SPF payroll accurately.",
    whatsCovered: [
      "Statutory workers' compensation benefits for all SPF application crew members",
      "Isocyanate sensitization and occupational respiratory disease claims",
      "Chemical burns and dermal exposure from A and B component contact",
      "Fall injuries on SPF roofing and elevated wall applications",
      "Cumulative trauma claims from repetitive spray equipment operation",
      "Employers liability (Coverage B) for third-party-over actions",
      "All states where you employ SPF applicator crews",
    ],
    whoItsFor: [
      "SPF contractors with W-2 applicator employees",
      "Contractors with mixed crews — direct employees plus hired day-labor SPF crews",
      "SPF roofing contractors with elevated fall exposure",
      "Cold-storage and agricultural SPF applicators with confined-space WC exposure",
      "Contractors undergoing WC audit with prior payroll misclassification",
    ],
    whyCca: [
      "SPF class code review — correct NCCI code assignment prevents large audit charges",
      "Dual-wage rule guidance — we review state-specific dual-wage rules for SPF applicator pay rates",
      "Payroll allocation assistance — correctly segregate applicator, clerical, and driver payroll",
      "Audit preparation — we prepare payroll documentation to minimize audit surprises",
      "Multi-state WC coordination for contractors operating in multiple states",
    ],
    faqs: [
      { q: "What NCCI class code applies to spray foam applicators?", a: "SPF applicators typically fall under codes in the 5183 (Plumbing, Heating, Ventilation) or specialty insulation contractor range, depending on state bureau rules. Exact code assignment varies by state and application type. We verify correct code assignment with each carrier." },
      { q: "What is a WC audit and how does it affect SPF contractors?", a: "WC policies are written on estimated payroll and adjusted at year-end audit based on actual payroll. For SPF contractors, audit adjustments can be significant if payroll is misclassified or if hired day-labor crews are added to the audited payroll. We help prepare audit documentation and respond to carrier audit findings." },
      { q: "Can I cover 1099 SPF subcontractors under my WC policy?", a: "WC coverage for 1099 subcontractors depends on state law. In many states, uninsured subcontractors are added to your WC payroll at audit. We review your subcontractor certificates and advise on the WC implications of your contractor/subcontractor mix." },
    ],
  },
  "commercial-auto": {
    heroBlurb: "SPF contractor vehicles are not standard commercial vehicles — proportioner trucks, chemical transport vehicles, and heated-hose rigs require proper scheduling and may require chemical cargo endorsements. We schedule SPF rigs correctly as commercial vehicles, coordinate with rig equipment floaters for the proportioner, and address chemical cargo coverage.",
    whatsCovered: [
      "Liability for bodily injury and property damage from SPF contractor vehicle accidents",
      "Physical damage (collision and comprehensive) on proportioner trucks and service vehicles",
      "Hired and non-owned auto liability for rented or employee vehicles used in SPF operations",
      "Chemical cargo transport liability coordination with CPL policy",
      "Medical payments coverage for vehicle occupants",
      "Uninsured/underinsured motorist coverage",
      "Trailer liability for spray equipment trailers",
    ],
    whoItsFor: [
      "SPF contractors with one or more proportioner trucks or spray rigs",
      "Contractors transporting A and B component drums between job sites",
      "Multi-crew SPF operations with multiple service vehicles",
      "SPF contractors renting vehicles or using employee vehicles for job-site transport",
      "Contractors whose commercial auto is currently scheduled incorrectly as non-commercial vehicles",
    ],
    whyCca: [
      "Correct rig scheduling — we describe SPF proportioner trucks accurately to avoid coverage disputes",
      "Chemical cargo coordination — we align commercial auto with CPL for chemical transport events",
      "Rig equipment floater coordination — we eliminate the gap between commercial auto and equipment coverage",
      "Fleet scheduling review — verify all vehicles including employee-owned vehicles used for SPF work are covered",
      "Driver qualification review — we advise on MVR requirements for SPF applicator drivers",
    ],
    faqs: [
      { q: "Does commercial auto cover my proportioner equipment?", a: "No. Commercial auto covers the vehicle — the truck or trailer. The proportioner machine, heated hoses, spray guns, and ancillary equipment are not covered under commercial auto. A separate rig insurance (inland marine equipment floater) is required for the equipment." },
      { q: "Does commercial auto cover chemical spills from A and B component drums during transport?", a: "Standard commercial auto does not cover pollution liability from chemical releases during transport. A pollution endorsement on the commercial auto policy or CPL with a transportation trigger is needed. We coordinate these coverages to eliminate the transport pollution gap." },
      { q: "Can I insure a rented proportioner truck under my commercial auto policy?", a: "Hired auto coverage on your commercial auto policy covers rented vehicles. We verify your hired auto limit is sufficient for the replacement value of rented SPF rigs and coordinate with the rig equipment floater if proportioner equipment is included in the rental." },
    ],
  },
  "rig-insurance": {
    heroBlurb: "Your SPF proportioner is your production asset — typically $20,000 to $80,000+ in replacement value — and it is not covered under your commercial auto policy. Inland marine rig insurance (equipment floater) covers your proportioner, heated hose assemblies, spray guns, and ancillary equipment on-site, in-transit, and at your yard or shop.",
    whatsCovered: [
      "Proportioner machine (agreed-value or replacement-cost basis) — $15,000 to $80,000+",
      "Heated hose assemblies including heated transfer hoses",
      "Spray guns, tip kits, and application equipment",
      "Drum heaters and auxiliary heating equipment",
      "Generators and power equipment used for SPF operations",
      "Equipment in transit between job sites",
      "Equipment at temporary job-site storage locations",
      "Equipment at your shop or yard location",
    ],
    whoItsFor: [
      "Any SPF contractor with a proportioner machine (open-cell or closed-cell)",
      "Contractors who assumed proportioner equipment is covered under commercial auto",
      "SPF roofing contractors with high-output proportioner equipment ($50,000+)",
      "Contractors with multiple proportioners or spare hose assemblies",
      "SPF contractors who finance their proportioner and require lender certificate of insurance",
    ],
    whyCca: [
      "Agreed-value endorsements — we write proportioners at agreed value, not ACV, eliminating depreciation disputes at claims time",
      "Replacement-cost coverage — new proportioner replacement including installation and startup",
      "Equipment inventory review — we ensure heated hoses, spray guns, and ancillaries are scheduled",
      "Lender certificate issuance — we add equipment lenders as loss payees for financed proportioners",
      "Coordination with commercial auto — we document the boundary between auto and equipment coverage to prevent gaps",
    ],
    faqs: [
      { q: "What is an inland marine equipment floater?", a: "An inland marine policy (equipment floater) covers mobile equipment at whatever location it's used — job sites, in transit, and at your yard. It fills the gap left by commercial auto (covers the vehicle, not the equipment) and commercial property (covers fixed-location property, not mobile equipment)." },
      { q: "Should I insure my proportioner at actual cash value or agreed value?", a: "Agreed value is preferable for proportioners. At ACV, depreciation is applied at claims time — a 5-year-old proportioner might pay out at 50% of replacement cost. At agreed value, the policy pays the agreed amount regardless of depreciation. We write proportioner floaters at agreed value wherever markets allow." },
      { q: "Does rig insurance cover heated hoses?", a: "Yes, when properly scheduled. Heated hose assemblies — which can run $3,000 to $8,000 per set — must be listed on the equipment schedule. We review your full equipment list to ensure hoses, spray guns, and ancillaries are included in the floater." },
    ],
  },
  "umbrella": {
    heroBlurb: "Commercial GCs and institutional property owners increasingly require SPF subcontractors to carry $5M to $10M umbrella limits — above the GL and CPL base policies. We build umbrella stacks that follow form over SPF-specific GL and CPL, providing true excess coverage and satisfying GC certificate requirements for large commercial SPF projects.",
    whatsCovered: [
      "Excess limits above SPF GL — $1M to $10M per occurrence over underlying GL",
      "Follow-form excess over CPL for isocyanate and pollution liability events",
      "Excess over workers' comp employers liability (Coverage B)",
      "Excess over commercial auto liability",
      "Drop-down coverage when underlying policies are exhausted or fail to respond",
      "Defense costs above underlying policy limits",
    ],
    whoItsFor: [
      "SPF contractors bidding on commercial projects requiring $5M or $10M umbrella certificates",
      "SPF subcontractors whose GC master policy has spray foam exclusions requiring subcontractor umbrella",
      "Industrial and institutional SPF contractors with large completed-operations exposure",
      "SPF roofing contractors on high-value commercial or industrial buildings",
      "Contractors with multi-year SPF projects requiring continuous high-limit coverage",
    ],
    whyCca: [
      "Follow-form umbrella over SPF-specific GL — we verify the umbrella follows the SPF GL form, not a generic contractor form",
      "CPL follow-form option — some umbrella markets will excess over CPL for total pollution limit stacking",
      "GC compliance review — we confirm umbrella language satisfies the specific GC certificate requirements",
      "Same-day umbrella certificates for project bid deadlines",
      "Multi-year umbrella options for large SPF projects requiring extended coverage",
    ],
    faqs: [
      { q: "What does it mean for an umbrella to 'follow form' over SPF GL?", a: "Follow-form umbrella adopts the same coverage terms as the underlying GL policy. For SPF contractors, this means the umbrella covers the same SPF-specific risks as the GL — including off-ratio events and SPF class codes — rather than excluding them as a standard umbrella might." },
      { q: "Can the umbrella follow form over both GL and CPL?", a: "Some umbrella markets will excess over both GL and CPL, providing excess pollution limits in addition to excess GL limits. This is particularly valuable for SPF contractors on large commercial projects with high isocyanate exposure potential." },
      { q: "How quickly can umbrella coverage be bound for a project deadline?", a: "For accounts with existing GL and CPL in place, umbrella can typically be bound same-day. We issue certificates immediately upon binding. For new accounts, the full program (GL + CPL + umbrella) typically takes 24–48 hours to bind from complete application submission." },
    ],
  },
};

// ============================================================
// AZ_REGIONS — 8 SPF contractor markets
// ============================================================
export const AZ_REGIONS = [
  { name: "Texas & Southwest", note: "TX·AZ·NM — high SPF application volume in residential, commercial, and agricultural markets" },
  { name: "Southeast", note: "FL·GA·NC — coastal and commercial SPF markets with high closed-cell demand" },
  { name: "Midwest", note: "IL·OH·MI — industrial SPF applications in manufacturing and cold storage" },
  { name: "Northeast", note: "NY·PA·NJ — commercial SPF demand in dense urban and mixed-use construction" },
  { name: "California", note: "CA — strict VOC regulations, large commercial SPF market, surplus line compliance" },
  { name: "Mountain States", note: "CO·UT — SPF insulation demand driven by extreme temperature differentials" },
  { name: "Mid-Atlantic", note: "VA·MD — federal and commercial SPF with government contractor requirements" },
  { name: "Pacific Northwest", note: "WA·OR — industrial SPF in manufacturing, cold storage, and commercial construction" },
];

// ============================================================
// US_STATES
// ============================================================
export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
  "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
  "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
  "Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico",
  "New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania",
  "Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];

// ============================================================
// QUOTE_SERVICE_TYPES
// ============================================================
export const QUOTE_SERVICE_TYPES = [
  "SPF Contractor General Liability",
  "Contractor Pollution Liability (CPL)",
  "Workers' Compensation",
  "Commercial Auto & Spray Rigs",
  "SPF Rig & Equipment Insurance",
  "Commercial Umbrella",
  "Full Program (GL + CPL + WC + Auto + Rig + Umbrella)",
  "GL + CPL Only",
  "GL + Umbrella Stack",
  "Other / Not Sure",
];

// ============================================================
// YEARS_OPTIONS
// ============================================================
export const YEARS_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];
