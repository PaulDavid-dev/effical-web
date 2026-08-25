// ESS & ET — BRAND DEFINITIONS & DATA REPOSITORY

export const BRANDS = {
  ess: {
    id: "ess",
    name: "ESS — EFFICAL SMART SOLUTIONS",
    shortName: "ESS",
    fullName: "Effical Smart Solutions",
    badgeText: "Main Site",
    tagline: "Smart Living. Intelligent Security. Connected Spaces.",
    subTaglines: ["SMART LIVING", "INTELLIGENT SECURITY"],
    phone: "+91 79049 83794",
    alternatePhone: "+91 96778 55553",
    whatsappNumber: "917904983794",
    email: "sales@effficalsmartsoultions.com",
    supportEmail: "sales@effficalsmartsoultions.com",
    location: "Coimbatore",
    address: "#43/3, Arasu Paniyalar Nagar, Vilankurichi, Coimbatore- 641035",
    workingHours: "Mon - Sat: 9:00 AM – 8:00 PM | 24×7 Emergency Support",
    socials: {
      instagram: "https://www.instagram.com/efficalsmartsolutions?igsi=MTdrdWI4eDJpZW5kaA%3D%3D&utm_source=qr",
      facebook: null,
      whatsapp: "https://wa.me/917904983794"
    },
    footerBio: {
      greeting: "Warm greetings from",
      company: "Effical Smart Solutions",
      description: ""
    },
    copyright: `© ${new Date().getFullYear()} EFFICAL SMART SOLUTIONS (ESS). All Rights Reserved.`
  },
  et: {
    id: "et",
    name: "ET — EFFICAL TECHNOLOGIES",
    shortName: "ET",
    fullName: "Effical Technologies",
    badgeText: "Sub Division",
    tagline: "Smart Home Security & Automation Solutions",
    subTaglines: ["SECURITY ALARMS", "HOME AUTOMATION"],
    phone: "+91 79049 83794",
    alternatePhone: "+91 96778 55553",
    whatsappNumber: "917904983794",
    email: "sales@effficalsmartsoultions.com",
    supportEmail: "sales@effficalsmartsoultions.com",
    location: "Coimbatore",
    address: "#43/3, Arasu Paniyalar Nagar, Vilankurichi, Coimbatore- 641035",
    workingHours: "Mon - Sat: 9:00 AM – 8:00 PM | 24×7 Emergency Support",
    socials: {
      instagram: "https://www.instagram.com/efficaltechnologies?igsh=MXV2aWdmN3gzZXlpdg%3D%3D&utm_source=qr",
      facebook: "https://www.facebook.com/share/1H46VabwU6/?mibextid=wwXIfr",
      whatsapp: "https://wa.me/917904983794"
    },
    footerBio: {
      greeting: "Warm greetings from",
      company: "Effical Technologies",
      description: "We specialize in Smart Home Security & Automation Solutions designed for comfort, safety, and peace of mind 🏠🔐"
    },
    copyright: `© ${new Date().getFullYear()} EFFICAL TECHNOLOGIES (ET). All Rights Reserved.`
  }
};

export const SITE_INFO = BRANDS.ess;


export const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Industries", href: "#industries" },
  { label: "Security That Reacts", href: "#security-reacts" },
  { label: "Projects", href: "#projects" },
  { label: "Why ESS", href: "#why-ess" },
  { label: "Process", href: "#how-it-works" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" }
];

export const TRUSTED_CATEGORIES = [
  "Homes & Villas",
  "Luxury Apartments",
  "Corporate Offices",
  "Hotels & Resorts",
  "Hospitals & Clinics",
  "Industrial Facilities"
];

export const INDUSTRIES_DATA = [
  {
    id: "residential",
    title: "Residential & Luxury Villas",
    subtitle: "Smart Living & Peace of Mind",
    badge: "Smart Homes",
    description: "End-to-end bespoke home automation and security for high-end villas, penthouses, and gated communities with unified mobile control.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Circadian & mood lighting scene automation",
      "Biometric & RFID smart locks with remote access",
      "Automated motorized curtains & HVAC climate control",
      "High-definition video door phone with smartphone link"
    ],
    stats: "350+ Luxury Villas Automated"
  },
  {
    id: "commercial",
    title: "Corporate Offices & Retail",
    subtitle: "Intelligent Workspaces & Seamless Access",
    badge: "Workplace Tech",
    description: "Future-ready enterprise networks, biometric multi-door access control, automated conference rooms, and centralized surveillance.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Multi-zone cloud access control with biometric & card auth",
      "High-density seamless Wi-Fi 7 enterprise coverage",
      "Intelligent boardrooms with automated projector & audio",
      "Centralized 24/7-driven CCTV surveillance recording"
    ],
    stats: "120+ Commercial Buildings Installed"
  },
  {
    id: "hospitality",
    title: "Hotels & Luxury Resorts",
    subtitle: "Elevated Guest Experience & Automation",
    badge: "Hospitality Automation",
    description: "Smart guest room management systems (GRMS), digital keyless entry, energy-saving smart thermostats, and ambient landscape illumination.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Keyless mobile & RFID guest room check-in locks",
      "Guest presence-based energy management systems (GRMS)",
      "High-speed hotel-wide Wi-Fi roaming & fiber networking",
      "Automated outdoor perimeter & pool mood illumination"
    ],
    stats: "45+ Luxury Resorts Integrated"
  },
  {
    id: "healthcare",
    title: "Hospitals & Medical Centers",
    subtitle: "Zero-Downtime Networks & Critical Security",
    badge: "Healthcare Grade",
    description: "Strict clean-room touchless access control, patient monitoring network infrastructure, reliable fiber backbones, and HIPAA-compliant surveillance.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Touchless facial recognition entry for sterile zones",
      "Redundant fiber network architecture for zero latency",
      "Critical asset tracking & thermal temperature monitoring",
      "Integrated emergency siren & rapid lockdown protocols"
    ],
    stats: "30+ Healthcare Facilities Secured"
  },
  {
    id: "industrial",
    title: "Factories & Logistics Warehouses",
    subtitle: "Heavy-Duty Perimeter & Network Backbone",
    badge: "Industrial Grade",
    description: "Long-range perimeter surveillance, FASTag/RFID automated boom barriers, fiber-optic backbone for SCADA/OT systems, and vehicle access management.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Automatic heavy-duty boom barriers & sliding gate motors",
      "ANPR (Automated Number Plate Recognition) & RFID vehicle logs",
      "Extreme-weather thermal cameras with perimeter tripwires",
      "Industrial ruggedized fiber switches & structured cabling"
    ],
    stats: "80+ Industrial Plants Configured"
  }
];

export const SOLUTIONS_DATA = [
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    category: "networking",
    tag: "10Gbps Fiber & Wi-Fi 7",
    iconName: "Network",
    heroImage: "/sol_network.jpg",
    shortDesc: "Enterprise Gigabit backbones, single-mode fiber splicing, certified Cat6A/7 structured cabling, and zero-drop mesh Wi-Fi.",
    badge: "10G FIBER & WI-FI",
    subcategories: [
      { name: "Structured Data Cabling", desc: "Fluke-tested Cat6A / Cat7 copper cabling with precision server rack management." },
      { name: "Fiber Optic Backbone", desc: "Single-mode & multi-mode fusion splicing for high-speed inter-building campus links." },
      { name: "Enterprise Wi-Fi 7 / 6E", desc: "Seamless zero-drop roaming across large multi-floor villas, hotels, and offices." },
      { name: "Managed Layer-3 Switches", desc: "VLAN IoT isolation, PoE+ delivery, and redundant gateway failover protection." }
    ],
    specs: ["10Gbps SFP+ Fiber Uplinks", "VLAN IoT Security Segregation", "Fluke DSX-8000 Certified", "Zero-Drop Roaming 802.11be"]
  },
  {
    id: "cctv-surveillance",
    title: "CCTV Surveillance",
    category: "security",
    tag: "ColorVu",
    iconName: "Camera",
    heroImage: "/cctv_surveillance.jpg",
    shortDesc: "Next-gen video surveillance featuring intelligent human & vehicle classification, full-color night vision, and active deterrence.",
    badge: "24/7 NVR",
    subcategories: [
      { name: "ColorVu Cameras", desc: "Crisp daylight color clarity even in pitch black darkness with zero infrared grain." },
      { name: "Smart Human & Vehicle Filtering", desc: "Zero false alarm filtering ignores pets, rain, and swaying trees." },
      { name: "Perimeter Virtual Tripwires", desc: "Instant audio alarm and strobe flash when restricted boundary is crossed." },
      { name: "Encrypted Cloud & NVR Vault", desc: "30-90 days continuous recording with encrypted remote smartphone access." }
    ],
    specs: ["3840x2160 UHD Resolution", "H.265+ Smart Codec Compression", "IP67 Weatherproof Vandal Resistance", "Two-Way Audio Talkback"]
  },
  {
    id: "intrusion-alarm",
    title: "Intrusion Alarm Systems",
    category: "security",
    tag: "110dB Active Deterrence",
    iconName: "ShieldAlert",
    heroImage: "/sol_alarm.jpg",
    shortDesc: "Military-grade wireless intrusion detection with magnetic door contacts, glass-break sensors, dual-tech PIRs, and 110dB sirens.",
    badge: "INSTANT DETECT",
    subcategories: [
      { name: "Wireless Door & Window Contacts", desc: "Sub-second breach detection on all perimeter doors, french windows, and skylights." },
      { name: "Dual-Tech Pet-Immune PIRs", desc: "Infrared and microwave motion sensors that eliminate false triggers from pets." },
      { name: "110dB External Strobe Siren", desc: "Blaring acoustic deterrent and pulsing strobe that immediately repels intruders." },
      { name: "Dual GSM & Wi-Fi Backups", desc: "Uninterrupted cellular telemetry communication even during internet or power blackouts." }
    ],
    specs: ["Sub-200ms Threat Response", "868MHz Encrypted Jeweller Radio", "5-Year Sensor Battery Life", "Cellular 4G SIM Fallback"]
  },
  {
    id: "smart-lighting",
    title: "Smart Lighting Automation",
    category: "automation",
    tag: "Circadian & DALI / RGB",
    iconName: "Lightbulb",
    heroImage: "/sol_lighting.jpg",
    shortDesc: "Architectural lighting control that synchronizes with natural sunlight, mood presets, motion-lit pathways, and touch glass smart switches.",
    badge: "CIRCADIAN & SCENES",
    subcategories: [
      { name: "Circadian Rhythm Tuning", desc: "Warm 2700K sunset tones to energized 5000K daylight transitions automatically." },
      { name: "Architectural Scene Keypads", desc: "Custom laser-engraved luxury glass wall touch switches and dimmer plates." },
      { name: "RGB Ambient Mood Glowing", desc: "Dynamic cove lighting and accent strips synced to music, movie, or dinner modes." },
      { name: "Occupancy Walkway Sensors", desc: "Gentle midnight pathway lighting activating without blinding high-intensity lights." }
    ],
    specs: ["DALI-2 / 0-10V / Phase Dimming", "Apple Home, Alexa & Google Home", "Zigbee 3.0 & Matter Compatible", "No Neutral Wire Options Available"]
  },
  {
    id: "smart-locks",
    title: "Smart Door Locks",
    category: "access",
    tag: "3D Face ID & Fingerprint",
    iconName: "Lock",
    heroImage: "/sol_locks.jpg",
    shortDesc: "Keyless biometric smart deadbolts engineered with 3D facial recognition, 0.3s optical fingerprint scanning, anti-peep PINs, and remote app unlock.",
    badge: "KEYLESS LUXURY",
    subcategories: [
      { name: "3D Infrared Facial Unlock", desc: "Contactless biometric recognition even in total darkness or while wearing glasses." },
      { name: "Live Semiconductor Fingerprint", desc: "0.3s ultra-fast recognition on ergonomic handle with fake-finger prevention." },
      { name: "Anti-Peep Scramble PIN", desc: "Enter random digits before/after real PIN code to prevent onlookers from copying." },
      { name: "Temporary OTP Guest Access", desc: "Generate timed one-time access codes for housekeeping, guests, or deliveries." }
    ],
    specs: ["C-Class High-Security Lock Cylinder", "Built-In Wide Angle HD Camera", "Emergency USB-C Power Port", "Anti-Tamper Pry Alarm Sensor"]
  },
  {
    id: "gate-automation",
    title: "Gate Automation",
    category: "access",
    tag: "Up to 2,000kg Motors",
    iconName: "ShieldCheck",
    heroImage: "/main_gate_closed.jpg",
    shortDesc: "Heavy-duty electro-mechanical and hydraulic motorized systems for residential sliding gates, swing rams, and telescopic gates.",
    badge: "HEAVY DUTY MOTORS",
    subcategories: [
      { name: "Oil-Bath Sliding Gate Motors", desc: "Silent operation with soft-start and soft-stop for gates up to 2,000 kg." },
      { name: "Heavy Hydraulic Swing Rams", desc: "Self-locking motorized actuators engineered for high wind load resistance." },
      { name: "Infrared Anti-Crush Safety", desc: "Dual safety photocells instantly reverse gate motion if vehicle or person is in path." },
      { name: "Inverter Battery Fallback", desc: "Seamless operation during power cuts with emergency mechanical key release." }
    ],
    specs: ["IP67 Weatherproof Rating", "100% Duty Cycle Rated", "Soft Start / Slow Down Ramping", "Encrypted 433/868MHz Rolling Code"]
  },
  {
    id: "vehicle-access",
    title: "Vehicle Access & Parking",
    category: "access",
    tag: "FASTag & Boom Barriers",
    iconName: "Radio",
    heroImage: "/sol_barriers.jpg",
    shortDesc: "Contactless long-range FASTag RFID vehicle access, 1.5s high-speed LED boom barriers, automatic number plate recognition (ANPR), and parking systems.",
    badge: "FASTAG & ANPR",
    subcategories: [
      { name: "1.5s High-Speed Boom Barriers", desc: "Brushless DC motor with LED illuminated barrier arms for round-the-clock traffic." },
      { name: "Long-Range FASTag RFID Readers", desc: "Hands-free automated gate opening from 6 to 12 meters for registered residents." },
      { name: "ANPR License Plate Cameras", desc: "OCR recognition logs vehicle number plates and grants instantaneous entry." },
      { name: "Anti-Tailgating Loop Detectors", desc: "Magnetic ground inductive loops prevent unauthorized vehicles from slipping behind." }
    ],
    specs: ["1.5s to 3s Adjustable Speed", "5 Million Cycles MTBF Rating", "Integrated Traffic LED Indicator", "Crash-Proof Breakaway Arm Bracket"]
  },
  {
    id: "access-control",
    title: "Time Attendance & Access",
    category: "security",
    tag: "Biometric & EM Locks",
    iconName: "UserCheck",
    heroImage: "/sol_access.jpg",
    shortDesc: "Touchless facial recognition terminals, 600lbs electromagnetic locks, motorized turnstiles, and unified attendance payroll software.",
    badge: "ENTERPRISE ACCESS",
    subcategories: [
      { name: "Touchless Facial Attendance", desc: "Deep learning terminal with fever screening, mask detection, and 0.2s matching." },
      { name: "600lbs Magnetic EM Locks", desc: "Fail-safe electromagnetic lock systems with door status sensor monitoring." },
      { name: "Motorized Flap Barrier Turnstiles", desc: "Brushed stainless steel pedestrian turnstiles for corporate and clubhouse lobbies." },
      { name: "Multi-Door Central Controller", desc: "TCP/IP networked access controller supporting hundreds of doors across buildings." }
    ],
    specs: ["50,000 Face Capacity", "Anti-Spoofing Dual Bionic Cameras", "Wiegand & OSDP Protocol Support", "Automated Cloud Payroll Sync"]
  }
];

export const ECOSYSTEM_NODES = [
  { id: "hub", name: "ESS Master Hub", type: "core", icon: "Cpu", status: "ONLINE", desc: "Central processing & mesh coordinator" },
  { id: "lights", name: "Lighting & Ambience", type: "smart-home", icon: "Lightbulb", status: "ACTIVE", desc: "Circadian scenes & dimming" },
  { id: "lock", name: "Biometric Smart Locks", type: "smart-home", icon: "KeyRound", status: "LOCKED", desc: "FaceID & anti-tamper security" },
  { id: "cctv", name: "Surveillance", type: "security", icon: "Camera", status: "STREAMING", desc: "Human detection armed" },
  { id: "alarm", name: "Perimeter Security Siren", type: "security", icon: "BellRing", status: "ARMED", desc: "Intrusion tripwire active" },
  { id: "gate", name: "Automated Gate Entry", type: "gate", icon: "DoorClosed", status: "STANDBY", desc: "FASTag scanner standby" },
  { id: "network", name: "Enterprise Wi-Fi Mesh", type: "network", icon: "Wifi", status: "1.2 Gbps", desc: "Ultra-low latency connection" },
  { id: "app", name: "ESS Mobile App", type: "controller", icon: "Smartphone", status: "SYNCED", desc: "Global cloud control" }
];

export const PRESET_SCENES = [
  {
    id: "welcome",
    name: "Welcome Home",
    icon: "Sparkles",
    lights: "Warm Golden (75%)",
    door: "Unlocked via FaceID",
    cctv: "Home Privacy Mode",
    alarm: "Disarmed",
    gate: "Auto-Opened",
    desc: "Gentle warm lighting illuminates walkways, AC powers on to 23°C, curtains glide open."
  },
  {
    id: "away",
    name: "Away & Secure",
    icon: "ShieldAlert",
    lights: "Random Presence Simulation",
    door: "Deadbolt Armed",
    cctv: "360° Patrol Active",
    alarm: "Full Perimeter Armed",
    gate: "Locked with Barrier Down",
    desc: "All non-essential appliances switch off, smart locks engage multi-bolt lock, security armed."
  },
  {
    id: "night",
    name: "Night Protection",
    icon: "Moon",
    lights: "Pathway Motion Light Only",
    door: "Auto-Locked",
    cctv: "Infrared Night Vision Armed",
    alarm: "Ground Floor Armed",
    gate: "Secure Locked",
    desc: "Bedroom temperature optimized, perimeter sensors armed, instant alerts active for unauthorized gate entry."
  },
  {
    id: "cinema",
    name: "Cinema & Party",
    icon: "Film",
    lights: "Emerald Aura Ambience (15%)",
    door: "Guest Access Enabled",
    cctv: "Perimeter Monitoring",
    alarm: "Exterior Zones Only",
    gate: "Guest Intercom Active",
    desc: "Curtains fully close, surround sound system initializes, ambient RGB backlighting glows."
  }
];

export const FEATURED_PROJECTS = [
  {
    id: "pearl-villa",
    title: "Luxury Villa",
    category: "Residential Villa",
    location: "Coimbatore, Tamil Nadu",
    scale: "8,500 sq.ft. Luxury Residence",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    tags: ["Full Smart Home", "Biometric Locks", "Perimeter CCTV", "Motorized Gates"],
    description: "Complete luxury transformation with circadian lighting control across 5 bedrooms, concealed motorized curtains, smart door locks, synchronized sliding gates, and UniFi enterprise Wi-Fi.",
    metrics: { devices: "148 Devices", cameras: "16 Cameras", installationTime: "12 Days" }
  },
  {
    id: "vertex-hq",
    title: "Corporate Headquarters",
    category: "Commercial Office",
    location: "Chennai, Tamil Nadu",
    scale: "25,000 sq.ft. Tech Office",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    tags: ["10Gbps Fiber Network", "Touchless Access", "64 Cameras", "Automated Boardrooms"],
    description: "Designed and deployed enterprise-grade structured cabling, multi-floor Wi-Fi 7 roaming, biometric face-recognition turnstiles, and automated lighting for energy reduction.",
    metrics: { devices: "320 Endpoints", cameras: "64 Cameras", installationTime: "21 Days" }
  },
  {
    id: "skyview-penthouses",
    title: "Signature Penthouses",
    category: "Luxury Apartments",
    location: "Bengaluru / Chennai",
    scale: "12 Ultra-Luxury Units",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    tags: ["Video Door Intercom", "Smart Glass Controls", "Scene Lighting", "Smart Locks"],
    description: "Custom digital living experience featuring smart multi-factor door locks, high-resolution video door phone connected to residents' smartphones, and smart curtain integration.",
    metrics: { devices: "210 Devices", cameras: "24 Cameras", installationTime: "18 Days" }
  },
  {
    id: "apex-industrial",
    title: "Logistics & Manufacturing Plant",
    category: "Industrial Plant",
    location: "kerala",
    scale: "14-Acre Industrial Compound",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    tags: ["Heavy Boom Barriers", "FASTag Vehicle Access", "Thermal CCTV", "Fiber Splicing"],
    description: "Heavy-duty perimeter security with automatic hydraulic barriers, FASTag vehicle entry management, long-range thermal perimeter tripwires, and outdoor fiber network backbone.",
    metrics: { devices: "85 Industrial Nodes", cameras: "42 Thermal", installationTime: "28 Days" }
  }
];

export const WHY_ESS_PILLARS = [
  {
    number: "01",
    title: "Consultation & Architecture",
    description: "We don't sell generic boxes. We study your architectural floor plans, daily lifestyle, and aesthetic preferences to design an engineered blueprint tailored exclusively to your property."
  },
  {
    number: "02",
    title: "End-to-End System Integration",
    description: "Instead of dealing with separate vendors for lighting, CCTV, gates, and Wi-Fi, ESS brings every discipline under one synchronized ecosystem with unified mobile & voice control."
  },
  {
    number: "03",
    title: "White-Glove Installation",
    description: "Clean conduit routing, concealed wiring, structured patch racks, and premium glass wall plates executed by certified system engineers with zero compromise on aesthetics."
  },
  {
    number: "04",
    title: "Scalable & Future-Proof Tech",
    description: "Built on globally standardized protocols (Matter, Zigbee, IP, PoE) allowing your system to expand effortlessly as new technologies and devices evolve."
  },
  {
    number: "05",
    title: "Dedicated Post-Launch Support",
    description: "Rapid on-site service, 24×7 emergency helpline, remote diagnostics, and regular firmware security updates to ensure your home or business runs smoothly."
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    timeframe: "Day 1",
    description: "Initial discovery discussion to understand your space, security priorities, automation desires, and budget parameters."
  },
  {
    step: "02",
    title: "Site Assessment",
    timeframe: "Day 2 - 3",
    description: "Our senior technical engineers visit your villa, office, or site for cabling route audits, Wi-Fi coverage mapping, and camera angle calculations."
  },
  {
    step: "03",
    title: "System Design",
    timeframe: "Day 4 - 5",
    description: "We provide an interactive 3D proposal, schematic architectural wiring diagrams, device schedule, and itemized transparent quote."
  },
  {
    step: "04",
    title: "Professional Installation",
    timeframe: "Scheduled Phase",
    description: "Certified technicians install hardware, splice fiber, calibrate sensors, configure mobile apps, and integrate scene automations."
  },
  {
    step: "05",
    title: "Handover & 24/7 Support",
    timeframe: "Continuous",
    description: "Comprehensive family/staff walkthrough, mobile app onboarding, warranty certification, and continuous lifetime technical support."
  }
];

export const TECH_PARTNERS = [
  { name: "Schneider Electric", category: "Automation & Switches", badge: "Smart Switches" },
  { name: "Hikvision", category: "CCTV & Security", badge: "ColorVu &" },
  { name: "Ubiquiti UniFi", category: "Enterprise Wi-Fi & Routing", badge: "Wi-Fi 7 / PoE" },
  { name: "Dahua Technology", category: "Video Intercom & CCTV", badge: "Active Deterrence" },
  { name: "Yale", category: "Digital Door Locks", badge: "Biometric Locks" },
  { name: "Legrand", category: "Home Automation", badge: "Luxury Panels" },
  { name: "Somfy", category: "Curtain & Blind Motors", badge: "Quiet Motors" },
  { name: "Cisco", category: "Enterprise Switching", badge: "Network Core" },
  { name: "Honeywell", category: "Perimeter Intrusion Alarms", badge: "Sensors & Sirens" },
  { name: "Fibaro", category: "Smart Home Controllers", badge: "Z-Wave / IoT" },
  { name: "DSC Security", category: "Commercial Alarm Panels", badge: "Grade-3 Alarms" },
  { name: "Mikrotik", category: "ISP & Fiber Routing", badge: "High-Bandwidth" }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Arvind Ramesh",
    role: "Villa Owner, Coimbatore",
    review: "ESS completely transformed our 6,000 sq.ft villa. From the biometric gate entry to the master bedroom lighting scenes and crystal-clear CCTV, everything works like magic. Their installation was impeccably clean with zero visible messy wires.",
    rating: 5,
    project: "Luxury Villa Automation"
  },
  {
    name: "Karthik Subramanian",
    role: "Managing Director, Vertex Logistics",
    review: "We engaged ESS for our 14-acre warehouse facility. The automated FASTag boom barriers and perimeter security cameras eliminated unauthorized entries and saved us significant security staffing costs. Truly professional integrators.",
    rating: 5,
    project: "Commercial Gate & CCTV"
  },
  {
    name: "Priya Sundaram",
    role: "Interior Architect, Chennai",
    review: "As an architect, aesthetics matter to me as much as functionality. ESS provided gorgeous flush-mounted glass touch panels and motorized curtain motors that integrated seamlessly into our design. They are now my go-to automation partner.",
    rating: 5,
    project: "Architectural Automation"
  }
];

export const FAQS = [
  {
    q: "Can ESS automate an existing home without breaking walls or repainting?",
    a: "Yes, absolutely! We offer advanced wireless Zigbee 3.0 and Matter retrofit modules that install directly behind your existing switchboards without any masonry or wiring damage."
  },
  {
    q: "What happens to the smart locks, gates, and security during a power outage?",
    a: "All our systems come with dedicated UPS and DC battery backup packs. Gates have mechanical manual release keys, and smart door locks operate on independent AA lithium batteries with emergency 9V USB jump-start ports."
  },
  {
    q: "Can I control the system when I am traveling abroad?",
    a: "Yes. All ESS ecosystems sync securely with end-to-end encrypted mobile apps for iOS and Android, allowing you to view live camera streams, unlock gates for guests, and receive instant tamper alerts anywhere in the world."
  },
  {
    q: "Do you provide on-site warranty and maintenance?",
    a: "Every project comes with a comprehensive minimum 2-Year On-Site Warranty along with annual maintenance contracts (AMC), regular firmware security updates, and 24×7 emergency support."
  }
];
