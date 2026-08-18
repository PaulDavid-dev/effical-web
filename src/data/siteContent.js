// ESS — EFFICAL SMART SOLUTIONS DATA REPOSITORY

export const SITE_INFO = {
  name: "ESS — EFFICAL SMART SOLUTIONS",
  shortName: "ESS",
  tagline: "Smart Living. Intelligent Security. Connected Spaces.",
  phone: "+91 98400 12345",
  whatsappNumber: "919840012345",
  email: "contact@efficalsmart.com",
  supportEmail: "support@efficalsmart.com",
  location: "Tamil Nadu & South India",
  address: "ESS Experience Center, Tech Corridor, Tamil Nadu, India",
  workingHours: "Mon - Sat: 9:00 AM – 8:00 PM | 24×7 Emergency Support",
  copyright: `© ${new Date().getFullYear()} EFFICAL SMART SOLUTIONS (ESS). All Rights Reserved.`
};

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
    description: "Future-ready enterprise networks, biometric multi-door access control, automated conference rooms, and centralized 4K surveillance.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Multi-zone cloud access control with biometric & card auth",
      "High-density seamless Wi-Fi 7 enterprise coverage",
      "Intelligent boardrooms with automated projector & audio",
      "Centralized 24/7 AI-driven CCTV surveillance recording"
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
    description: "Long-range perimeter AI surveillance, FASTag/RFID automated boom barriers, fiber-optic backbone for SCADA/OT systems, and vehicle access management.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Automatic heavy-duty boom barriers & sliding gate motors",
      "ANPR (Automated Number Plate Recognition) & RFID vehicle logs",
      "Extreme-weather 4K thermal cameras with perimeter tripwires",
      "Industrial ruggedized fiber switches & structured cabling"
    ],
    stats: "80+ Industrial Plants Configured"
  }
];

export const SOLUTIONS_DATA = [
  {
    id: "smart-home",
    title: "Home Automation",
    tag: "Smart Living",
    iconName: "Home",
    badgeColor: "cyan",
    heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Transform your home into an intuitive living space where lighting, climate, curtains, and audio respond effortlessly to your daily routine.",
    subcategories: [
      { name: "Lighting Automation", desc: "Scene control, dimming, RGB ambient glows, motion-triggered walkways, and schedule timers." },
      { name: "Smart Door Locks", desc: "3D Face ID, fingerprint scanner, anti-peep PIN, RFID card, physical backup key, and remote mobile unlock." },
      { name: "Curtain & Blind Automation", desc: "Whisper-quiet motorized tracks synced to sunrise, sunset, or cinema modes." },
      { name: "Fan & AC Climate Control", desc: "Automated temperature regulations and smart infrared controllers for all brands." },
      { name: "Scene Presets", desc: "One-touch presets: 'Good Morning', 'Cinema Time', 'Party Mode', 'Away & Secure'." }
    ],
    specs: ["Zigbee 3.0 / Matter / Wi-Fi Compatible", "Apple HomeKit, Google Home & Alexa Support", "Touchscreen Glass Wall Panels", "Full Offline Mesh Capability"]
  },
  {
    id: "security",
    title: "Intelligent Security",
    tag: "Active Protection",
    iconName: "ShieldCheck",
    badgeColor: "rose",
    heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Next-generation security that does not just record what happened, but actively detects intrusions and responds in milliseconds.",
    subcategories: [
      { name: "4K AI CCTV Surveillance", desc: "Smart human & vehicle classification, full-color night vision, and tamper detection." },
      { name: "Intrusion Alarm System", desc: "Magnetic door sensors, glass-break detectors, dual-tech PIR motion, and external 110dB siren." },
      { name: "Video Door Phone (VDP)", desc: "1080p wide-angle camera, two-way crystal audio, digital chime, and remote phone answer." },
      { name: "Access Control Systems", desc: "Biometric attendance, magnetic electromagnetic locks, multi-door controllers." },
      { name: "Smart Remote Monitoring", desc: "Real-time HD feeds and instant emergency push alerts directly to your smartphone." }
    ],
    specs: ["AI Facial & License Plate Recognition", "Cloud & On-Premises NVR 30-Day Storage", "Zero False Alarm Filtering", "Cellular SIM Backup Fallback"]
  },
  {
    id: "gate-automation",
    title: "Gate & Access Automation",
    tag: "Seamless Entry",
    iconName: "Lock",
    badgeColor: "amber",
    heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Commercial and residential motorized gate systems designed for heavy cycles, smooth whisper motion, and contactless vehicle access.",
    subcategories: [
      { name: "Sliding Gate Automation", desc: "High-torque oil-bath motors supporting gates up to 2,000kg with soft-start & soft-stop." },
      { name: "Swing Gate Actuators", desc: "Sleek electro-mechanical and hydraulic rams with obstacle detection sensors." },
      { name: "Automatic Boom Barriers", desc: "Fast 1.5s to 3s opening speed for high-traffic apartment & commercial entry points." },
      { name: "RFID & FASTag Vehicle Access", desc: "Long-range hands-free gate opening for authorized resident and corporate vehicles." },
      { name: "Smartphone & Remote Control", desc: "Open gate via mobile app from anywhere in the world or encrypted 433MHz remotes." }
    ],
    specs: ["Battery Backup During Power Cuts", "Infrared Safety Anti-Crush Sensors", "Manual Key Release Mechanism", "IP67 Weatherproof Motors"]
  },
  {
    id: "networking",
    title: "Enterprise Networking",
    tag: "Connected Backbone",
    iconName: "Network",
    badgeColor: "blue",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "High-performance network infrastructure built with enterprise-grade Wi-Fi, 10Gbps fiber backbones, and structured cabling.",
    subcategories: [
      { name: "Enterprise Wi-Fi 7 / 6E", desc: "Seamless zero-drop roaming across large villas, hotels, and multiple office floors." },
      { name: "Structured Cabling (Cat6A/Cat7)", desc: "Fluke-tested certified copper data cabling, organized server racks, and patch panels." },
      { name: "Fiber Optic Backbone", desc: "Single-mode and multi-mode fiber fusion splicing for high-speed inter-building links." },
      { name: "Managed Switches & Firewalls", desc: "VLAN segregation for IoT devices, QoS bandwidth prioritization, and intrusion prevention." },
      { name: "Network Infrastructure Audit", desc: "Wi-Fi heatmap site surveys, signal optimization, and 24/7 network uptime monitoring." }
    ],
    specs: ["Multi-Gigabit Throughput Support", "Dedicated Guest & IoT Isolated VLANs", "PoE+ / PoE++ High-Power Delivery", "Tier-1 Hardware Integration"]
  }
];

export const ECOSYSTEM_NODES = [
  { id: "hub", name: "ESS Master Hub", type: "core", icon: "Cpu", status: "ONLINE", desc: "Central AI processing & mesh coordinator" },
  { id: "lights", name: "Lighting & Ambience", type: "smart-home", icon: "Lightbulb", status: "ACTIVE", desc: "Circadian scenes & dimming" },
  { id: "lock", name: "Biometric Smart Locks", type: "smart-home", icon: "KeyRound", status: "LOCKED", desc: "FaceID & anti-tamper security" },
  { id: "cctv", name: "4K AI Surveillance", type: "security", icon: "Camera", status: "STREAMING", desc: "AI human detection armed" },
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
    cctv: "360° AI Patrol Active",
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
    lights: "Cyber Cyan Ambience (15%)",
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
    title: "The Pearl Luxury Villa",
    category: "Residential Villa",
    location: "Coimbatore, Tamil Nadu",
    scale: "8,500 sq.ft. Luxury Residence",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    tags: ["Full Smart Home", "Biometric Locks", "Perimeter 4K CCTV", "Motorized Gates"],
    description: "Complete luxury transformation with circadian lighting control across 5 bedrooms, concealed motorized curtains, smart door locks, synchronized sliding gates, and UniFi enterprise Wi-Fi.",
    metrics: { devices: "148 Devices", cameras: "16 Cameras", installationTime: "12 Days" }
  },
  {
    id: "vertex-hq",
    title: "Vertex Corporate Headquarters",
    category: "Commercial Office",
    location: "Chennai, Tamil Nadu",
    scale: "25,000 sq.ft. Tech Office",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    tags: ["10Gbps Fiber Network", "Touchless Access", "64 AI Cameras", "Automated Boardrooms"],
    description: "Designed and deployed enterprise-grade structured cabling, multi-floor Wi-Fi 7 roaming, biometric face-recognition turnstiles, and automated lighting for energy reduction.",
    metrics: { devices: "320 Endpoints", cameras: "64 Cameras", installationTime: "21 Days" }
  },
  {
    id: "skyview-penthouses",
    title: "Skyview Signature Penthouses",
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
    title: "Apex Logistics & Manufacturing Plant",
    category: "Industrial Plant",
    location: "Sriperumbudur Industrial Hub",
    scale: "14-Acre Industrial Compound",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    tags: ["Heavy Boom Barriers", "FASTag Vehicle Access", "Thermal CCTV", "Fiber Splicing"],
    description: "Heavy-duty perimeter security with automatic hydraulic barriers, FASTag vehicle entry management, long-range thermal perimeter tripwires, and outdoor fiber network backbone.",
    metrics: { devices: "85 Industrial Nodes", cameras: "42 Thermal/4K", installationTime: "28 Days" }
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
  { name: "Hikvision", category: "AI CCTV & Security", badge: "ColorVu & AI" },
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
    review: "We engaged ESS for our 14-acre warehouse facility. The automated FASTag boom barriers and 4K perimeter security cameras eliminated unauthorized entries and saved us significant security staffing costs. Truly professional integrators.",
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
    a: "Yes. All ESS ecosystems sync securely with end-to-end encrypted mobile apps for iOS and Android, allowing you to view live 4K camera streams, unlock gates for guests, and receive instant tamper alerts anywhere in the world."
  },
  {
    q: "Do you provide on-site warranty and maintenance?",
    a: "Every project comes with a comprehensive minimum 2-Year On-Site Warranty along with annual maintenance contracts (AMC), regular firmware security updates, and 24×7 emergency support."
  }
];
