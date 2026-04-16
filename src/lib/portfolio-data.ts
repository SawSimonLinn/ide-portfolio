import type { FileTreeNode } from "@/components/ide/file-explorer";
import type { Job } from "@/lib/types";

export const aboutData = {
  name: "Saw Simon Linn",
  role: "AI Software Engineer",
  location: "Remote — Open to Relocation",
  background: [
    "2+ years building AI-powered systems and intelligent products",
    "Specialized in LLMs, RAG pipelines, and AI agent workflows",
    "Backend architecture, automation, and full-stack product development",
    "Experience shipping products with real users using Supabase and Clerk",
  ],
  interests: [
    "AI Systems",
    "Indie Hacking",
    "Automation",
    "Building useful products",
  ],
};

export const skillsData: Record<string, string[]> = {
  "AI / ML": [
    "LLM APIs",
    "RAG Systems",
    "Prompt Engineering",
    "AI Agents",
    "Embeddings",
    "Vector Search",
  ],
  Languages: ["JavaScript", "TypeScript", "Python", "SQL"],
  Frameworks: ["Next.js", "React", "Node.js", "Express"],
  Tools: ["Git", "Docker", "Supabase", "Clerk", "Appwrite", "MongoDB"],
};

export const experienceData: Job[] = [
  {
    role: "Software Engineer",
    company: "Koios Marketplace",
    period: "Sep 2025 – Present",
    description: [
      "The marketplace had no stable API layer or consistent service boundaries, so I led sprint execution to architect scalable Node.js microservices and Next.js features, documented API contracts, and integrated type-safe APIs with resilient UI error handling — improving overall system reliability and team velocity.",
      "High-traffic workflows lacked test coverage and were prone to silent regressions, so I introduced Jest unit testing and end-to-end test suites across critical paths, significantly reducing the risk of production failures.",
    ],
  },
  {
    role: "AI Applied Engineer Intern",
    company: "Nailbox AI",
    period: "Jun 2025 – Aug 2025",
    description: [
      "Manual document workflows created delays and lack of visibility in RFI and submittal processes. Built backend APIs and data models to enable real-time tracking and structured workflow management.",
      "Designed and implemented an LLM-powered pipeline to process email threads, extract key information, and map content to the correct RFI and submittal versions.",
      "Reduced manual review effort by automating document classification and demonstrated practical use of AI in production workflows.",
    ],
  },
  {
    role: "Full-stack Developer",
    company: "Appwrite",
    period: "Aug 2025 – Sep 2025",
    description: [
      "Developed Nomis Life, a platform for junior developers to showcase projects and receive feedback from peers.",
      "Implemented a public profile feature allowing users to share real project links and demonstrate skill confidence.",
      "Created a review system for peer evaluations, enhancing community engagement and learning opportunities.",
    ],
  },
  {
    role: "Software Engineer",
    company: "TripleTen",
    period: "Oct 2025 – Nov 2025",
    description: [
      "Developed a partner internal pipeline using React, TypeScript, and Tailwind CSS.",
      "Collaborated closely with backend developers to ensure seamless API integration across the application.",
      "Designed user interfaces based on Figma prototypes and conducted thorough testing using Jest.",
    ],
  },
  {
    role: "AI Product Engineer",
    company: "Independent Contractor",
    period: "Mar 2025 – Present",
    description: [
      "Build and ship AI-powered web applications using modern full-stack technologies for various clients.",
      "Integrate AI APIs to create real-world product features including automation, summarization, and intelligent workflows.",
      "Design and develop end-to-end systems from UI/UX to backend and deployment, with a focus on product thinking and solving real business problems.",
    ],
  },
  {
    role: "Co-Founder & Software Engineer",
    company: "Code Heaven Studio",
    period: "Feb 2025 – Present",
    description: [
      "Led design and development of client websites, ensuring SEO optimization, performance, and strong user engagement.",
      "Implemented AI-driven support workflows, minimizing project delays and improving client satisfaction through innovative solutions.",
      "Guided projects from concept to launch, maintaining transparency and close collaboration with clients throughout the process.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  features: string[];
  imageUrl: string;
  github: string;
  demo: string;
};

export const projectsData: Record<string, Project> = {
  "portfolio/projects/linna.ts": {
    name: "Linna (AI SaaS)",
    description:
      "An AI SaaS with a persistent memory system that retains project context across sessions — solving the problem of developers losing context and momentum between coding sessions.",
    stack: ["Next.js", "AI", "Supabase"],
    features: [
      "Persistent memory system that retains project goals, decisions, and chat history across sessions.",
      "Context-aware AI responses grounded in your specific project state instead of generic outputs.",
      "Real users — shipped and deployed as a production product improving developer productivity and continuity.",
    ],
    imageUrl: "/placeholder-images/1.png",
    github: "https://github.com/SawSimonLinn",
    demo: "https://simonlinn.dev",
  },
  "portfolio/projects/rag-system.ts": {
    name: "RAG System (AI Archive)",
    description:
      "A Retrieval-Augmented Generation pipeline that grounds AI responses in real data, solving the problem of LLMs producing generic or hallucinated answers without external knowledge.",
    stack: ["AI", "Embeddings", "Vector Search", "TypeScript"],
    features: [
      "RAG pipeline that retrieves relevant data before generating any response.",
      "Embeddings and vector search to connect user queries with structured data sources.",
      "Significantly improved answer accuracy and relevance by grounding AI in real data over hallucination.",
    ],
    imageUrl: "/placeholder-images/2.png",
    github: "https://github.com/SawSimonLinn",
    demo: "https://simonlinn.dev",
  },
  "portfolio/projects/content-engine.ts": {
    name: "AI Content Engine (Agent Workflow)",
    description:
      "A multi-step AI agent system that automates content creation workflows across platforms — eliminating the repetitive, time-consuming process of manual content generation.",
    stack: ["AI Agents", "Workflow Automation", "TypeScript", "Node.js"],
    features: [
      "Multi-step AI agent pipeline with prompt chaining for end-to-end content generation.",
      "Generates scripts, captions, hashtags, and structured content plans from a single input.",
      "System-level workflow architecture similar to AutoGPT, demonstrating orchestration and automation thinking.",
    ],
    imageUrl: "/placeholder-images/3.png",
    github: "https://github.com/SawSimonLinn",
    demo: "https://simonlinn.dev",
  },
  "portfolio/projects/mono-commerce.ts": {
    name: "MonoCommerce",
    description:
      "A minimalist full-stack e-commerce platform for architectural objects and essential goods. Monochrome aesthetic, precision engineering — built with Next.js 15 and Supabase.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Zustand",
      "Genkit AI",
    ],
    features: [
      "Full storefront with editorial homepage, product catalog, category filtering, and product detail pages.",
      "Cart & multi-step checkout with promo/gift card support, Google & Apple OAuth via Supabase.",
      "Admin dashboard with product management, order overview, analytics, and review moderation.",
      "AI integration via Genkit + Google Gemini for intelligent product features.",
    ],
    imageUrl: "/placeholder-images/4.png",
    github: "https://github.com/SawSimonLinn/MonoCommerce",
    demo: "https://simonlinn.dev",
  },
};

export const contactData = {
  email: "sawsimonlinn@gmail.com",
  github: "https://github.com/SawSimonLinn",
  linkedin: "https://linkedin.com/in/sawsimonlinn",
  twitter: "https://twitter.com/sawsimonlinn",
};

export const fileTree: FileTreeNode = {
  name: "portfolio",
  path: "portfolio",
  type: "folder",
  children: [
    { name: "about.ts", path: "portfolio/about.ts", type: "file" },
    { name: "skills.ts", path: "portfolio/skills.ts", type: "file" },
    { name: "experience.ts", path: "portfolio/experience.ts", type: "file" },
    {
      name: "projects",
      path: "portfolio/projects",
      type: "folder",
      children: [
        { name: "linna.ts", path: "portfolio/projects/linna.ts", type: "file" },
        {
          name: "rag-system.ts",
          path: "portfolio/projects/rag-system.ts",
          type: "file",
        },
        {
          name: "content-engine.ts",
          path: "portfolio/projects/content-engine.ts",
          type: "file",
        },
        {
          name: "mono-commerce.ts",
          path: "portfolio/projects/mono-commerce.ts",
          type: "file",
        },
      ],
    },
    { name: "contact.ts", path: "portfolio/contact.ts", type: "file" },
    { name: "resume.md", path: "portfolio/resume.md", type: "file" },
  ],
};

export const fileContents: Record<string, string> = {
  "portfolio/about.ts": `
export const developer = {
  name: "Saw Simon Linn",
  role: "AI Software Engineer",
  location: "Remote — Open to Relocation",
  phone: "(414) 343-6893",
  email: "sawsimonlinn@gmail.com",
  website: "simonlinn.dev",
  summary: [
    "AI-focused Software Engineer with 2+ years of experience",
    "Building intelligent systems using LLMs, RAG pipelines, and AI agent workflows",
    "Skilled in backend architecture, automation, and developing AI-powered products with real users",
    "Experience with Supabase and Clerk for authentication and data management"
  ],
  interests: ["AI Systems", "Indie Hacking", "Automation", "Building useful products"],
};
  `,
  "portfolio/skills.ts": `
export const skills = {
  "ai_ml": [
    "LLM APIs",
    "RAG Systems",
    "Prompt Engineering",
    "AI Agents",
    "Embeddings",
    "Vector Search"
  ],
  languages: ["JavaScript", "TypeScript", "Python", "SQL"],
  frameworks: ["Next.js", "React", "Node.js", "Express"],
  tools: ["Git", "Docker", "Supabase", "Clerk", "Appwrite", "MongoDB"],
};
  `,
  "portfolio/experience.ts": `
import type { Job } from '@/lib/types';

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "Koios Marketplace",
    period: "Sep 2025 – Present",
    type: "Remote",
    description: [
      "The marketplace had no stable API layer or consistent service boundaries — led sprint execution to architect scalable Node.js microservices and Next.js features, documented API contracts, and integrated type-safe APIs with resilient UI error handling.",
      "High-traffic workflows lacked test coverage and were prone to silent regressions — introduced Jest unit testing and end-to-end test suites across critical paths, significantly reducing risk of production failures.",
    ],
  },
  {
    role: "AI Applied Engineer Intern",
    company: "Nailbox AI",
    period: "Jun 2025 – Aug 2025",
    type: "Remote",
    description: [
      "Built backend APIs and data models to enable real-time tracking and structured workflow management for RFI and submittal processes.",
      "Designed and implemented an LLM-powered pipeline to process email threads, extract key information, and map content to the correct RFI and submittal versions.",
      "Reduced manual review effort by automating document classification — demonstrating practical use of AI in production workflows.",
    ],
  },
  {
    role: "Full-stack Developer",
    company: "Appwrite",
    period: "Aug 2025 – Sep 2025",
    type: "Remote",
    description: [
      "Developed Nomis Life, a platform for junior developers to showcase projects and receive feedback from peers.",
      "Implemented a public profile feature allowing users to share real project links and demonstrate skill confidence.",
      "Created a review system for peer evaluations, enhancing community engagement and learning opportunities.",
    ],
  },
  {
    role: "Software Engineer",
    company: "TripleTen",
    period: "Oct 2025 – Nov 2025",
    type: "Remote",
    description: [
      "Developed a partner internal pipeline using React, TypeScript, and Tailwind CSS.",
      "Collaborated closely with backend developers to ensure seamless API integration across the application.",
      "Designed user interfaces based on Figma prototypes and conducted thorough testing using Jest.",
    ],
  },
  {
    role: "AI Product Engineer",
    company: "Independent Contractor",
    period: "Mar 2025 – Present",
    type: "Remote",
    description: [
      "Build and ship AI-powered web applications using modern full-stack technologies for various clients.",
      "Integrate AI APIs to create real-world product features including automation, summarization, and intelligent workflows.",
      "Design and develop end-to-end systems from UI/UX to backend and deployment, focused on product thinking and real business problems.",
    ],
  },
  {
    role: "Co-Founder & Software Engineer",
    company: "Code Heaven Studio",
    period: "Feb 2025 – Present",
    type: "Hybrid",
    description: [
      "Led design and development of client websites, ensuring SEO optimization, performance, and strong user engagement.",
      "Implemented AI-driven support workflows, minimizing project delays and improving client satisfaction through innovative solutions.",
      "Guided projects from concept to launch, maintaining transparency and close collaboration with clients throughout the process.",
    ],
  },
];
  `,
  "portfolio/projects/linna.ts": `
export const project = {
  name: "Linna (AI SaaS)",
  tagline: "Website | Product | Memory | Real Users",
  description: "An AI SaaS with a persistent memory system that retains project context across sessions — solving the problem of developers losing context and momentum between coding sessions.",
  stack: ["Next.js", "AI", "Supabase"],
  features: [
    "Persistent memory system stores project goals, decisions, and chat history across sessions.",
    "Context-aware AI responses grounded in your specific project instead of generic outputs.",
    "Shipped as a real product with real users — improving productivity and session continuity."
  ],
  imageUrl: "/placeholder-images/1.jpg",
  github: "https://github.com/SawSimonLinn",
  demo: "https://simonlinn.dev"
};
  `,
  "portfolio/projects/rag-system.ts": `
export const project = {
  name: "RAG System (AI Archive)",
  tagline: "Website | Data | Retrieval | Accuracy",
  description: "A Retrieval-Augmented Generation pipeline that grounds AI responses in real data — solving the problem of LLMs producing generic or hallucinated answers without external knowledge.",
  stack: ["AI", "Embeddings", "Vector Search", "TypeScript"],
  features: [
    "RAG pipeline that retrieves relevant documents before generating any response.",
    "Embeddings and vector search to connect user queries with structured data sources.",
    "Improved answer accuracy and relevance by grounding AI in real data over hallucination."
  ],
  imageUrl: "/placeholder-images/2.jpg",
  github: "https://github.com/SawSimonLinn",
  demo: "https://simonlinn.dev"
};
  `,
  "portfolio/projects/content-engine.ts": `
export const project = {
  name: "AI Content Engine (Agent Workflow)",
  tagline: "Website | Automation | System Thinking",
  description: "A multi-step AI agent system that automates content creation workflows — eliminating the repetitive, time-consuming process of manual content generation across platforms.",
  stack: ["AI Agents", "Workflow Automation", "TypeScript", "Node.js"],
  features: [
    "Multi-step AI agent pipeline with prompt chaining for end-to-end content generation.",
    "Generates scripts, captions, hashtags, and structured content plans from a single input.",
    "System-level architecture similar to AutoGPT — demonstrating orchestration and automation thinking."
  ],
  imageUrl: "/placeholder-images/3.jpg",
  github: "https://github.com/SawSimonLinn",
  demo: "https://simonlinn.dev"
};
  `,
  "portfolio/projects/mono-commerce.ts": `
export const project = {
  name: "MonoCommerce",
  tagline: "Minimalist E-Commerce | Full-Stack | AI-Integrated",
  description: "A minimalist full-stack storefront built for architectural objects and essential goods. Monochrome aesthetic, precision engineering — powered by Next.js 15 and Supabase.",
  stack: [
    "Next.js 15 (App Router, Turbopack)",
    "TypeScript",
    "Supabase (Postgres, Auth, Realtime)",
    "Tailwind CSS + shadcn/ui",
    "Zustand",
    "React Hook Form + Zod",
    "Genkit + Google Gemini",
    "Recharts",
  ],
  features: [
    "Editorial homepage, product catalog with category filtering, and product detail pages.",
    "Persistent cart drawer, multi-step checkout with promo/gift card support.",
    "Google & Apple OAuth via Supabase, user accounts, order history, and wishlist.",
    "Admin dashboard — product management, order overview, analytics, and review moderation.",
    "AI integration via Genkit + Google Gemini for intelligent product features.",
    "Dark / light mode with system-aware theme and manual toggle.",
    "Fallback mode — browses storefront without a backend if Supabase is not configured.",
  ],
  imageUrl: "/placeholder-images/3.jpg",
  github: "https://github.com/SawSimonLinn/MonoCommerce",
  demo: "https://simonlinn.dev"
};
  `,
  "portfolio/contact.ts": `
// Let's connect!
//
// I'm always open to discussing new projects, AI product ideas,
// or opportunities to be part of an ambitious team.
//
// Whether you have a question or just want to say hi,
// feel free to reach out through the form.

export const socialLinks = {
  github: "https://github.com/SawSimonLinn",
  linkedin: "https://linkedin.com/in/sawsimonlinn",
  website: "https://simonlinn.dev",
  email: "sawsimonlinn@gmail.com",
  phone: "(414) 343-6893",
}

function send(message: string) {
  // ... sending logic
  console.log("Message sent:", message);
  return { status: "success" };
}
  `,
  "portfolio/resume.md": `
# Saw Simon Linn
AI Software Engineer | Remote — Open to Relocation
[(414) 343-6893](tel:4143436893) | [sawsimonlinn@gmail.com](mailto:sawsimonlinn@gmail.com) | [linkedin.com/in/sawsimonlinn](https://linkedin.com/in/sawsimonlinn) | [github.com/SawSimonLinn](https://github.com/SawSimonLinn) | [simonlinn.dev](https://simonlinn.dev)

---

## Professional Summary

AI-focused Software Engineer with 2+ years of experience building intelligent systems using **LLMs, RAG pipelines, and AI agent workflows**. Skilled in backend architecture, automation, and developing AI-powered products with real users. Experience with **Supabase and Clerk** for authentication and data management. Open to relocation.

---

## Technical Skills

- **AI/ML:** LLM APIs, RAG Systems, Prompt Engineering, AI Agents, Embeddings, Vector Search
- **Languages & Tools:** JavaScript, TypeScript, Python, SQL, Git, Docker
- **Frameworks:** Node.js, Express, Next.js, React, Appwrite, MongoDB

---

## Work Experience

### **Software Engineer** | Koios Marketplace
*Sep 2025 – Present · Remote*

- The marketplace had no stable API layer or consistent service boundaries — led sprint execution to architect scalable **Node.js microservices** and Next.js features, documented API contracts, and integrated type-safe APIs with resilient UI error handling, improving system reliability and team velocity.
- High-traffic workflows lacked test coverage and were prone to silent regressions — introduced **Jest unit testing** and end-to-end test suites across critical paths, significantly reducing the risk of production failures.

### **AI Applied Engineer Intern** | Nailbox AI
*Jun 2025 – Aug 2025 · Remote*

- Built backend APIs and data models to enable real-time tracking and structured workflow management for RFI and submittal processes.
- Designed and implemented an **LLM-powered pipeline** to process email threads, extract key information, and map content to the correct RFI and submittal versions.
- Reduced manual review effort by automating document classification — demonstrating practical use of AI in production workflows.

---

## Projects

### **Linna (AI SaaS)** — Next.js | AI | Supabase
*Website | Product | Memory | Real Users*
- Built an AI SaaS with **persistent memory system** that retains project context across sessions.
- Designed system to store project goals, decisions, and chat history, enabling context-aware responses instead of generic AI outputs.
- Delivered a real-user product acting as a **project-aware AI assistant**, improving productivity and continuity.

### **RAG System (AI Archive)** — AI | Embeddings | Vector Search
*Website | Data | Retrieval | Accuracy*
- Built a **RAG pipeline** to retrieve relevant data before generating responses, solving the problem of LLM hallucination.
- Integrated embeddings and vector search to connect user queries with structured data sources.
- Improved answer accuracy and relevance by grounding AI responses in real data.

### **AI Content Engine (Agent Workflow)** — AI Agents | Workflow Automation
*Website | Automation | System Thinking*
- Built a **multi-step AI agent system** to automate content generation workflows across platforms.
- Designed prompt chaining to generate scripts, captions, hashtags, and structured content plans.
- Created system-level workflow similar to AutoGPT, demonstrating automation and orchestration thinking.

---

## Education

**TripleTen Software Engineering Bootcamp** — Certificate in Full-Stack Software Engineering
*Graduated: Feb 2025 · Remote*

**University of Computer Studies, Yangon** — Diploma in Computer Science
*Graduated: May 2019 · Yangon, Myanmar*
Graduated with Distinction — GPA: 3.76
`,
};
