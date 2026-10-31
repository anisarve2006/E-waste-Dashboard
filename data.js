/**
 * EWEM — Electronic Waste & Environmental Management Dashboard
 * Structured data based on Semester 5 curriculum & submissions
 */

const SITE = {
  name: "EWEM Student Archive",
  shortName: "EWEM",
  tagline: "Electronic Waste & Environmental Management",
  course: "E-Waste Management",
  courseCode: "VEC02",
  semester: "Semester 5",
  academicYear: "2026–27",
  institution: "Vidyalankar Institute of Technology",
  department: "Department of Computer Engineering",
  github: "https://github.com/anisarve2006/E-waste-Dashboard",
  repo: "https://github.com/anisarve2006/E-waste-Dashboard",
  live: "#",
  metrics: {
    submissions: 11,
    isaCount: 4,
    eseCount: 7,
    liveTools: 4,
    coreThemes: 3,
    recoveredMetals: ["Au", "Ag", "Cu", "Pd", "Pt"],
    stateStudies: ["Madhya Pradesh", "Kerala"]
  }
};

const ASSIGNMENTS = [
  {
    id: 0,
    slug: "course-insights",
    type: "ISA",
    title: "Course Insights & Curriculum Mapping",
    kicker: "Curriculum Baseline · Course Insights (AAP)",
    description: "A foundational breakdown of the EWEM course: the six curriculum buckets, two-credit environmental course structure, CO-PO matrix mapping, 30 planned lectures, and assessment methodologies.",
    tags: ["Curriculum", "AAP", "VEC02", "CO-PO Mapping"],
    date: null,
    dateLabel: "In-Class Baseline",
    status: "Submitted",
    group: [],
    cover: {
      src: "thumbs/ise-00-course-insights.webp",
      alt: "Course insights and curriculum blueprint for EWEM"
    },
    keyMetrics: [
      { label: "Planned Lectures", value: "30 Hours" },
      { label: "Course Credits", value: "2 Credits" },
      { label: "Curriculum Buckets", value: "6 Pillars" }
    ],
    files: [
      {
        kind: "PDF",
        label: "Course Insights (AAP Specification)",
        path: "files/ise-00-course-insights.pdf",
        remoteUrl: "https://preet8808.github.io/preet-ewem-dashboard/files/ise-00-course-insights.pdf",
        meta: "PDF · 3 pages"
      }
    ]
  },
  {
    id: 1,
    slug: "mp-ewaste-ledger",
    type: "ISA",
    title: "Madhya Pradesh E-Waste Ledger & Command Center",
    kicker: "State Intelligence · 20-District Study & Dashboard",
    description: "A comprehensive 20-district state e-waste ledger for Madhya Pradesh detailing 43,575 tonnes/year generation, 68% collection rate, 175 authorized collection centers, and a 100-point state compliance scorecard. Paired with a live cloud intelligence dashboard.",
    tags: ["Madhya Pradesh", "20 Districts", "State Ledger", "Command Center", "Live Tool"],
    date: "2026-07",
    dateLabel: "Jul 2026",
    status: "Submitted",
    group: [],
    cover: {
      src: "thumbs/ise-01-mp-dashboard.webp",
      alt: "Madhya Pradesh E-Waste Command Center dashboard"
    },
    keyMetrics: [
      { label: "Annual Generation", value: "43,575 Tonnes" },
      { label: "Collection Rate", value: "68%" },
      { label: "Collection Centers", value: "175 Authorized" },
      { label: "Districts Audited", value: "20 Districts" }
    ],
    files: [
      {
        kind: "DOCX",
        label: "Madhya Pradesh State E-Waste Management Report",
        path: "files/ise-01-mp-report.docx",
        remoteUrl: "https://preet8808.github.io/preet-ewem-dashboard/files/ise-01-mp-report.docx",
        meta: "DOCX · Official State Report",
        office: true
      },
      {
        kind: "XLSX",
        label: "Madhya Pradesh E-Waste 7-Sheet Tracker",
        path: "files/ise-01-mp-tracker.xlsx",
        remoteUrl: "https://preet8808.github.io/preet-ewem-dashboard/files/ise-01-mp-tracker.xlsx",
        meta: "XLSX · 7-Sheet Analysis",
        office: true
      },
      {
        kind: "LINK",
        label: "MP E-Waste Command Center",
        url: "https://mp-ewaste-buddy.lovable.app",
        note: "Live Interactive Intelligence Dashboard"
      }
    ]
  },
  {
    id: 2,
    slug: "elemental-blueprint",
    type: "ISA",
    title: "Plasma-Arc Elemental Blueprint for PCBs",
    kicker: "Materials Recovery · Urban Mining Poster",
    description: "A high-precision elemental blueprint focusing on PCB urban mining via ultra-high temperature plasma-arc technology. Maps the extraction flows for five critical precious and base metals (Au, Ag, Cu, Pd, Pt) across a 5-stage closed thermodynamic cycle.",
    tags: ["Materials", "Au · Ag · Cu · Pd · Pt", "Plasma Arc", "Urban Mining", "Poster"],
    date: null,
    dateLabel: "In-Class Core",
    status: "Submitted",
    group: ["Kalpesh Sawkare", "Dhiraj Pawar"],
    cover: {
      src: "thumbs/ise-02-elemental-blueprint.webp",
      alt: "Plasma arc metal recovery elemental blueprint poster"
    },
    keyMetrics: [
      { label: "Precious Metals", value: "Au, Ag, Cu, Pd, Pt" },
      { label: "Smelting Temp", value: "5,000–15,000°C" },
      { label: "Process Stages", value: "5 Closed Cycles" }
    ],
    files: [
      {
        kind: "JPEG",
        label: "Elemental Blueprint Technical Poster",
        path: "files/ise-02-elemental-blueprint.jpeg",
        remoteUrl: "https://preet8808.github.io/preet-ewem-dashboard/files/ise-02-elemental-blueprint.jpeg",
        meta: "JPEG · High-Res Poster"
      }
    ]
  },
  {
    id: 3,
    slug: "kerala-landscape",
    type: "ISA",
    title: "Kerala State E-Waste Landscape & Circularity",
    kicker: "Regional Analysis · 13-Slide Policy Deck",
    description: "A 13-slide empirical investigation into Kerala's e-waste infrastructure: quantifying 38,395.84 tonnes/year generation, 75.83% material recovery efficiency, and an authorized formal capacity baseline currently covering only 22.4% of total state waste streams.",
    tags: ["Kerala", "Capacity Gap", "Circular Economy", "State Study", "Presentation"],
    date: "2026-08",
    dateLabel: "Aug 2026",
    status: "Submitted",
    group: [],
    cover: {
      src: "thumbs/ise-03-kerala-deck.webp",
      alt: "Title slide of the Kerala e-waste landscape deck"
    },
    keyMetrics: [
      { label: "State Generation", value: "38,395 Tonnes" },
      { label: "Recovery Rate", value: "75.83%" },
      { label: "Formal Capacity Gap", value: "77.6% Deficit" }
    ],
    files: [
      {
        kind: "PDF",
        label: "Kerala E-Waste Landscape Deck",
        path: "files/ise-03-kerala-deck.pdf",
        remoteUrl: "https://preet8808.github.io/preet-ewem-dashboard/files/ise-03-kerala-deck.pdf",
        meta: "PDF · 13 Slides"
      }
    ]
  },
  {
    id: 4,
    slug: "plasma-arc-patent",
    type: "ESE",
    title: "Plasma Arc Metal Recovery Reactor Design",
    kicker: "Engineering Patent · Thermal Smelting Concept",
    description: "A formal patent-style engineering specification for an ultra-high-temperature plasma arc reactor operating at 5,000–15,000 °C. Features multi-torch ionization, inert gas atmospheric control, cyclonic off-gas scrubbing, and vitrified non-leachable slag separation for >95% metal recovery.",
    tags: ["Plasma Arc", "Thermal Reactor", "Patent Concept", "PCB Pyrolysis", "Zero Leaching"],
    date: "2026-08",
    dateLabel: "Aug 2026",
    status: "Submitted",
    group: ["Kalpesh Sawkare", "Dhiraj Pawar"],
    cover: {
      src: "thumbs/ese-04-plasma-arc.webp",
      alt: "Plasma arc metal recovery system schematic diagram"
    },
    keyMetrics: [
      { label: "Operating Temp", value: "5,000–15,000°C" },
      { label: "Recovery Yield", value: ">95% Efficiency" },
      { label: "Byproduct Safety", value: "Vitrified Slag (Non-Hazardous)" }
    ],
    files: [
      {
        kind: "PDF",
        label: "Plasma Arc Metal Recovery Design Specification",
        path: "files/ese-04-plasma-arc.pdf",
        remoteUrl: "https://preet8808.github.io/preet-ewem-dashboard/files/ese-04-plasma-arc.pdf",
        meta: "PDF · 6 pages with Schematics"
      }
    ]
  },
  {
    id: 5,
    slug: "epr-compliance-review",
    type: "ESE",
    title: "EPR Compliance Review & Target Calculator",
    kicker: "Regulatory Audit · 5 Electronics Giants & Web Tool",
    description: "An empirical audit of top Indian Electronics Manufacturing Services (EMS) — Dixon Technologies, Kaynes Technology, Syrma SGS, Foxconn India, and Tata Electronics — benchmarked against the E-Waste Management Rules, 2022, CPCB portal mandates, and BRSR disclosures. Includes an online EPR calculator.",
    tags: ["EPR Rules 2022", "CPCB", "Dixon · Kaynes · Foxconn", "BRSR Filings", "Live Tool"],
    date: "2026-09",
    dateLabel: "Sep 2026",
    status: "Submitted",
    group: [],
    cover: {
      src: "thumbs/ese-05-epr-tool.webp",
      alt: "Circuit and Salvage EPR compliance calculator interface"
    },
    keyMetrics: [
      { label: "Companies Audited", value: "5 EMS Leaders" },
      { label: "Framework", value: "CPCB 2022 EPR Rules" },
      { label: "Compliance Tool", value: "Interactive Web App" }
    ],
    files: [
      {
        kind: "DOCX",
        label: "E-Waste Compliance Audit: 5 Electronics Companies",
        path: "files/ese-05-epr-review.docx",
        remoteUrl: "https://preet8808.github.io/preet-ewem-dashboard/files/ese-05-epr-review.docx",
        meta: "DOCX · Compliance Research Paper",
        office: true
      },
      {
        kind: "LINK",
        label: "Circuit & Salvage EPR Calculator",
        url: "https://ewastecalc-98.netlify.app",
        note: "Live Interactive Target Calculator"
      }
    ]
  },
  {
    id: 6,
    slug: "india-environmental-policy",
    type: "ESE",
    title: "India Environmental Policy & Decarbonization Briefing",
    kicker: "Global Comparison · 5-Nation Benchmark",
    description: "A high-level policy briefing contrasting India's environmental jurisprudence and e-waste policies against Australia, USA, Japan, and Russia. Explores India's 45% emissions intensity reduction target, 50% non-fossil energy share by 2030, and the integration of EPR with national circular economy roadmaps.",
    tags: ["Environmental Law", "Emissions Targets", "5-Country Benchmark", "COP26 Roadmaps"],
    date: "2026-08",
    dateLabel: "Aug 2026",
    status: "Submitted",
    group: [],
    cover: {
      src: "thumbs/ese-06-india-policy.webp",
      alt: "Title slide of the India environmental policy briefing"
    },
    keyMetrics: [
      { label: "Nations Compared", value: "India, USA, AUS, JPN, RUS" },
      { label: "Emissions Target", value: "45% Reduction by 2030" },
      { label: "Clean Energy Share", value: "50% Non-Fossil" }
    ],
    files: [
      {
        kind: "PPTX",
        label: "India Environmental Policy Briefing Deck",
        path: "files/ese-06-india-policy.pptx",
        remoteUrl: "https://preet8808.github.io/preet-ewem-dashboard/files/ese-06-india-policy.pptx",
        meta: "PPTX · 6 Slides",
        office: true
      }
    ]
  },
  {
    id: 7,
    slug: "ewaste-week-campaign",
    type: "ESE",
    title: "Campus E-Waste Week Campaign & Dual-Sector Dashboard",
    kicker: "Campus Intervention · Media Drive & Analytics Tool",
    description: "An intensive student-led campus activation comprising physical e-waste collection bins, a Sort-and-Score contest, awareness reels, a 10-second campaign film, and a live web dashboard contrasting Formal vs. Informal recycling streams across health hazards, economics, and environmental impacts.",
    tags: ["Campus Drive", "Awareness Media", "Formal vs Informal", "Video Campaign", "Live Tool"],
    date: "2026-09",
    dateLabel: "Sep 2026",
    status: "Submitted",
    group: [],
    feature: "video",
    cover: {
      src: "thumbs/ese-07-campaign-poster.webp",
      alt: "E-Waste Week campus campaign promotional poster"
    },
    keyMetrics: [
      { label: "Campus Reach", value: "Main Block Hub" },
      { label: "Media Assets", value: "Poster + 10s Film" },
      { label: "Paired Platform", value: "Comparative Analytics" }
    ],
    files: [
      {
        kind: "JPEG",
        label: "E-Waste Week Official Poster",
        path: "files/ese-07-campaign-poster.jpeg",
        remoteUrl: "https://preet8808.github.io/preet-ewem-dashboard/files/ese-07-campaign-poster.jpeg",
        meta: "JPEG · High-Resolution Print"
      },
      {
        kind: "MP4",
        label: "E-Waste Week Campaign Video",
        path: "files/ese-07-campaign-video.mp4",
        remoteUrl: "https://preet8808.github.io/preet-ewem-dashboard/files/ese-07-campaign-video.mp4",
        meta: "MP4 · 10 Seconds Video",
        video: true
      },
      {
        kind: "LINK",
        label: "Formal vs Informal Recycling Dashboard",
        url: "https://edashb.netlify.app",
        note: "Live Global & EU Comparative Analytics"
      }
    ]
  },
  {
    id: 8,
    slug: "green-building-scorecard",
    type: "ESE",
    title: "National Green Building Scorecard & Evaluation Tool",
    kicker: "Sustainable Architecture · LEED Benchmark & Simulator",
    description: "A quantitative assessment framework evaluating 10 IGBC/LEED-certified green commercial and institutional facilities across India across 6 core sustainability criteria. Accompanied by a 10-facility Excel model and a live interactive simulator for rating new architectural footprints.",
    tags: ["LEED / IGBC", "Green Building", "Energy Efficiency", "Scorecard", "Live Tool"],
    date: "2026-09",
    dateLabel: "Sep 2026",
    status: "Submitted",
    group: [],
    cover: {
      src: "thumbs/ese-08-green-building.webp",
      alt: "Green Building Scorecard dashboard overview"
    },
    keyMetrics: [
      { label: "Facilities Evaluated", value: "10 Landmark Buildings" },
      { label: "Rating Criteria", value: "6 Rigorous Metrics" },
      { label: "Simulator", value: "Interactive Web App" }
    ],
    files: [
      {
        kind: "XLSX",
        label: "Green Building Evaluation Model Workbook",
        path: "files/ese-08-green-building.xlsx",
        remoteUrl: "https://preet8808.github.io/preet-ewem-dashboard/files/ese-08-green-building.xlsx",
        meta: "XLSX · 10 Buildings Comprehensive Matrix",
        office: true
      },
      {
        kind: "LINK",
        label: "Green Building Interactive Simulator",
        url: "https://zippy-llama-956de9.netlify.app",
        note: "Live Self-Scoring Building Platform"
      }
    ]
  },
  {
    id: 9,
    slug: "pune-swach-model",
    type: "ESE",
    title: "Pune SWaCH Cooperative Model Case Study",
    kicker: "Grassroots Circularity · Informal Integration Case Study",
    description: "An in-depth case study of Pune's revolutionary SWaCH (Solid Waste Collection and Handling) waste-picker cooperative: analyzing how 3,800+ informal recyclers provide door-to-door waste collection for ~900,000 households via formal municipal tie-ups, proving informal integration is pivotal to sustainable e-waste recovery.",
    tags: ["SWaCH Model", "Informal Economy", "Waste Pickers", "Decentralized Recycling", "Pune Case Study"],
    date: "2026-09",
    dateLabel: "Sep 2026",
    status: "Submitted",
    group: [],
    cover: {
      src: "thumbs/ese-09-swach-case-study.webp",
      alt: "First page of the Pune SWaCH model case study documentation"
    },
    keyMetrics: [
      { label: "Cooperative Members", value: "3,800+ Recyclers" },
      { label: "Households Covered", value: "~9 Lakh Urban Homes" },
      { label: "Institutional Partner", value: "Pune Municipal Corp (PMC)" }
    ],
    files: [
      {
        kind: "DOCX",
        label: "Pune SWaCH Cooperative Case Study",
        path: "files/ese-09-swach-case-study.docx",
        remoteUrl: "https://preet8808.github.io/preet-ewem-dashboard/files/ese-09-swach-case-study.docx",
        meta: "DOCX · Full Analytical Case Study",
        office: true
      }
    ]
  },
  {
    id: 10,
    slug: "cartify-ieee-paper",
    type: "ESE",
    title: "Cartify: AI-Driven Catalogue Quality & Recommender Engine",
    kicker: "Applied AI Research · IEEE Conference Paper",
    description: "An IEEE-format engineering research paper presenting Cartify: a quality-gated catalog curation pipeline filtering 572,083 candidate listings down to 17,931 verified products. Integrates a star-schema analytical warehouse with a four-model attention fusion architecture that outperforms classical NCF (Hit Ratio@10 of 0.327 vs 0.260).",
    tags: ["IEEE Paper", "Machine Learning", "Attention Fusion", "Catalog Pipeline", "Recommender Systems"],
    date: "2026-10",
    dateLabel: "Oct 2026",
    status: "Submitted",
    group: ["Dhiraj Pawar", "Kalpesh Sawkare", "Sainath Nanaware"],
    cover: {
      src: "thumbs/ese-10-cartify-paper.webp",
      alt: "First page of the Cartify IEEE research paper"
    },
    keyMetrics: [
      { label: "Filtered Products", value: "17,931 / 572,083" },
      { label: "Model Architecture", value: "4-Model Attention Fusion" },
      { label: "Hit Ratio@10", value: "0.327 (vs 0.260 NCF)" }
    ],
    files: [
      {
        kind: "PDF",
        label: "Cartify Research Paper (IEEE Conference Format)",
        path: "files/ese-10-cartify-paper.pdf",
        remoteUrl: "https://preet8808.github.io/preet-ewem-dashboard/files/ese-10-cartify-paper.pdf",
        meta: "PDF · 5 Pages Technical Paper"
      }
    ]
  }
];

const PROJECTS = [
  {
    id: "proj-mp",
    title: "MP E-Waste Intelligence",
    subtitle: "State Command Center",
    category: "Geospatial & Analytics",
    description: "A live, district-level command platform tracking 43,575 tonnes of annual e-waste across 20 districts in Madhya Pradesh. Visualizes collection hubs, compliance scores, and district logistics.",
    assignment: "Assignment 01 (ISA)",
    url: "https://mp-ewaste-buddy.lovable.app",
    cta: "Launch Command Center",
    badge: "Live Web App",
    accent: "cyan",
    stats: "20 Districts · 43.5k T/yr"
  },
  {
    id: "proj-epr",
    title: "Circuit & Salvage",
    subtitle: "EPR Target Calculator",
    category: "Regulatory Tech",
    description: "An interactive regulatory compliance engine assessing EPR obligations for 5 Indian manufacturing leaders (Dixon, Foxconn, Kaynes, Syrma SGS, Tata) under CPCB E-Waste Rules 2022.",
    assignment: "Assignment 05 (ESE)",
    url: "https://ewastecalc-98.netlify.app",
    cta: "Open EPR Tool",
    badge: "Live Web App",
    accent: "violet",
    stats: "5 EMS Giants · CPCB Rules"
  },
  {
    id: "proj-formal-informal",
    title: "Formal vs Informal Streams",
    subtitle: "Recycling Economics Dashboard",
    category: "Health & Economics",
    description: "A comparative data exploration platform highlighting disparities between formal authorized recyclers and informal scrap ecosystems across toxic emissions, worker safety, and recovered material yields.",
    assignment: "Assignment 07 (ESE)",
    url: "https://edashb.netlify.app",
    cta: "Open Analytics Hub",
    badge: "Live Web App",
    accent: "lime",
    stats: "Global & EU Data · Toxic Risk"
  },
  {
    id: "proj-green-building",
    title: "Green Building Scorecard",
    subtitle: "LEED / IGBC Simulator",
    category: "Sustainable Infrastructure",
    description: "A benchmarking tool and multi-criteria simulator modeling 10 premier green facilities across India with instant self-scoring across energy, water, materials, and indoor quality metrics.",
    assignment: "Assignment 08 (ESE)",
    url: "https://zippy-llama-956de9.netlify.app",
    cta: "Launch Simulator",
    badge: "Live Web App",
    accent: "coral",
    stats: "10 Facilities · 6 Criteria"
  }
];

const THEMES = [
  {
    id: "evidence",
    number: "01",
    title: "Evidence",
    colorToken: "coral",
    tagline: "Quantifying the Baseline",
    description: "Empirically measure the e-waste burden and operational capacities before proposing interventions. Covers state-level inventory ledgers, district tracking, green building metrics, and course outcomes.",
    assignments: [0, 1, 3, 8],
    keyInsight: "43k+ tonnes tracked in MP; 75.8% recovery in Kerala reveals critical infrastructure deficits."
  },
  {
    id: "recovery",
    number: "02",
    title: "Recovery",
    colorToken: "lime",
    tagline: "Thermodynamics & Urban Mining",
    description: "Engineered extraction of critical precious metals (Au, Ag, Cu, Pd, Pt) from printed circuit boards using high-efficiency plasma arc thermal pyrolysis and zero-leach slag vitrification.",
    assignments: [2, 4],
    keyInsight: "Smelting at 5,000–15,000°C achieves >95% precious metal extraction without toxic off-gassing."
  },
  {
    id: "adoption",
    number: "03",
    title: "Adoption",
    colorToken: "cyan",
    tagline: "Policy, Campus Action & Systems",
    description: "Translating engineering research into systemic practice: Extended Producer Responsibility (EPR) mandates, national policy benchmarks, student campus campaigns, cooperative integration, and AI recommender algorithms.",
    assignments: [5, 6, 7, 9, 10],
    keyInsight: "Bridging the formal-informal divide with cooperative frameworks like Pune's SWaCH."
  }
];

