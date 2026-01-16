
import { Project, Experience, TimelineEvent, SkillGroup } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Bero Technologies",
    category: "Full Stack Agency",
    image: "/bero.png",
    year: "2024",
    description: "Premier web design agency specializing in captivating brands and innovative websites using WordPress for SMEs.",
    tags: ["WordPress", "Next.js", "TypeScript", "SEO"],
    link: "https://berotechnologies.com"
  },
  {
    id: 2,
    title: "BeroTools",
    category: "AI SaaS Platform",
    image: "/berotools.png",
    year: "2024",
    description: "AI-powered media editing suite: background/watermark removal, noise reduction, optimization.",
    tags: ["Next.js", "Python", "Node.js", "Tailwind"],
    link: "https://berotools.vercel.app/"
  },
  {
    id: 3,
    title: "Bites",
    category: "Full-Stack SaaS",
    image: "/bitchops.png",
    year: "2023",
    description: "Premium restaurant platform with online ordering, reservations, inventory, payments.",
    tags: ["React", "TypeScript", "Node.js", "Stripe"],
    link: "https://bitechops.netlify.app/"
  },
  {
    id: 4,
    title: "Trinzzy",
    category: "E-Commerce",
    image: "/trenzy.png",
    year: "2023",
    description: "Scalable fashion marketplace with inventory, high-conversion checkout.",
    tags: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
    link: "https://trinzzy.netlify.app/"
  },
  {
    id: 5,
    title: "ErrandPlus",
    category: "Marketplace",
    image: "/errandplus.png",
    year: "2023",
    description: "Logistics platform connecting users with local runners for errands & deliveries.",
    tags: ["PHP", "MySQL", "JavaScript", "Maps API"],
    link: "https://www.errandplus.ng/"
  },
  {
    id: 6,
    title: "Medictreat",
    category: "Health Tech",
    image: "/medictreat.png",
    year: "2024",
    description: "Healthcare dashboard: appointments, patient records, secure management.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    link: "https://medictreat.netlify.app/"
  },
  {
    id: 7,
    title: "Duvy",
    category: "Design Portfolio",
    image: "/duvy.png",
    year: "2024",
    description: "UX/UI designer showcase with social ads, SEO content, marketing solutions.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://duvy.netlify.app/"
  },
  {
    id: 8,
    title: "BMX Mobiles",
    category: "Web",
    image: "/bmxmobile.png",
    year: "2024",
    description: "Car dealership site: vehicle listings, valuations, repair services.",
    tags: ["Next.js", "Plasmic", "CSS"],
    link: "https://bmxmobile.netlify.app/"
  },
  {
    id: 9,
    title: "Dr. Omolola Eddo",
    category: "Portfolio",
    image: "/dr-omolola.png",
    year: "2025",
    description: "Professional site focused on education, advocacy, sustainable agriculture.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://dr-omolola.netlify.app/"
  },
  {
    id: 10,
    title: "PizzaHub",
    category: "Fullstack",
    image: "/bittypizza.png",
    year: "2025",
    description: "Online pizza ordering with delivery, promotions, menu customization.",
    tags: ["PHP", "MySQL", "JavaScript"],
    link: "https://bittypizza.netlify.app/"
  },
  {
    id: 11,
    title: "FJ Studio",
    category: "Web",
    image: "/fitzystudio.png",
    year: "2025",
    description: "Fitness studio: programs, memberships, community features.",
    tags: ["WordPress", "JavaScript"],
    link: "https://fitzzystudio.netlify.app/"
  },
  {
    id: 12,
    title: "Omnabra",
    category: "Real Estate",
    image: "/omnabra.png",
    year: "2025",
    description: "Property portal with listings, filters, inquiry system.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://omnabra.netlify.app/"
  },
  {
    id: 13,
    title: "Devisit Events",
    category: "Fullstack",
    image: "/devisit.png",
    year: "2025",
    description: "Event centre platform: weddings, corporate, rentals, planning.",
    tags: ["PHP", "MySQL", "JavaScript"],
    link: "https://www.devisitevents.ng/"
  },
  {
    id: 14,
    title: "Ghostwritten Book Excerpts & Articles",
    category: "Long-Form Content",
    image: "ezenwa-blessing.png",
    year: "2026",
    description: "Confidential ghostwriting: full books, whitepapers, thought-leadership articles, executive bios.",
    tags: ["Book Ghostwriting", "Long-Form", "Confidential NDA"],
    link: "https://ezenwa-blessing.netlify.app/"
  }
]; 
export const JOURNEY: TimelineEvent[] = [
  {
    id: 1,
    year: "2023 - PRESENT",
    role: "CEO & Lead Engineer",
    company: "Bero Technologies",
    description: "Directing technical strategy and full-stack development for a wide range of international clients."
  },
  {
    id: 2,
    year: "2023 - PRESENT",
    role: "Senior Web Developer",
    company: "Bero Technologies (Remote)",
    description: "Architected scalable web applications achieving 95+ performance scores and seamless user experiences."
  },
  {
    id: 3,
    year: "2025 - PRESENT",
    role: "Technical Strategist",
    company: "Eazy Health",
    description: "Leading technical content strategy to bridge the gap between healthcare services and digital accessibility."
  },
  {
    id: 4,
    year: "2022 - PRESENT",
    role: "Full Stack Developer",
    company: "Iprosoft Tech LTD",
    description: "Built robust web apps using React and PHP, focused on API integrations and secure payment processing."
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Full Stack Development",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript / Node.js", level: 90 },
      { name: "Database Engineering", level: 88 },
      { name: "API Architecture", level: 92 }
    ]
  },
  {
    category: "CMS & Platforms",
    skills: [
      { name: "Custom WordPress Dev", level: 94 },
      { name: "Plugin Engineering", level: 88 },
      { name: "Headless CMS Solutions", level: 85 },
      { name: "Shopify / E-commerce", level: 90 }
    ]
  }
];

export const SERVICES = [
  {
    title: "Web Engineering",
    description: "Scalable end-to-end web applications built with modern stacks for global performance.",
    items: ["React & Next.js", "Node.js / Express", "NoSQL/SQL DBs", "Cloud Infrastructure"],
    icon: "Database"
  },
  {
    title: "Headless Solutions",
    description: "Decoupled architectures that offer unmatched speed, security, and developer flexibility.",
    items: ["Next.js Frontend", "WordPress as Backend", "Strapi / Sanity", "GraphQL APIs"],
    icon: "Globe"
  },
  {
    title: "SaaS Development",
    description: "From MVP to enterprise-grade software products with robust auth and payment flows.",
    items: ["MVP Scoping", "User Management", "Subscription Flows", "Data Visualization"],
    icon: "Cpu"
  },
  {
    title: "Product Design",
    description: "Cinematic user interfaces that prioritize user retention and technical conversion.",
    items: ["UI/UX Prototyping", "Motion Systems", "Accessibility", "Brand Identity"],
    icon: "Figma"
  }
];
