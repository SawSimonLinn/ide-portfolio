import type { FileTreeNode } from '@/components/ide/file-explorer';
import type { Job } from '@/lib/types';

export const aboutData = {
  name: "Simon Linn",
  role: "Frontend Developer",
  location: "California",
  background: [
    "6+ years in design",
    "Transitioned into software engineering",
    "Passionate about building useful products",
  ],
  interests: ["Minimalist design", "Indie hacking", "Bouldering", "Photography"],
};

export const skillsData: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript"],
  Backend: ["Node.js", "MongoDB"],
  Tools: ["Git", "Appwrite", "Figma"],
};

export const experienceData: Job[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Innovate Inc.",
    period: "2021 - Present",
    description: [
      "Led the architecture and development of a new design system in React, reducing development time for new features by 40%.",
      "Mentored junior developers, conducted code reviews, and promoted best practices for code quality and performance.",
      "Collaborated with product and design teams to ship high-impact features for our flagship SaaS product.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Creative Solutions",
    period: "2019 - 2021",
    description: [
      "Developed and maintained responsive, cross-browser compatible websites for a variety of clients.",
      "Integrated third-party APIs for payments, analytics, and content management systems.",
      "Improved website performance and SEO scores through targeted optimizations.",
    ],
  },
  {
    role: "UX/UI Designer",
    company: "DesignFirst Studio",
    period: "2016 - 2019",
    description: [
      "Designed user interfaces and experiences for mobile and web applications.",
      "Created wireframes, prototypes, and high-fidelity mockups in Figma and Sketch.",
      "Conducted user research and usability testing to inform design decisions.",
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
  'portfolio/projects/dashboard.ts': {
    name: "School Dashboard",
    description: "Full CRUD system with authentication",
    stack: ["Next.js", "Appwrite", "Tailwind"],
    features: ["Student management", "Teacher dashboard", "Payment tracking"],
    imageUrl: "/placeholder-images/1.svg",
    github: "https://github.com",
    demo: "https://vercel.com",
  },
  'portfolio/projects/portfolio.ts': {
    name: "This VS Code Portfolio",
    description: "A meta project! My personal portfolio, built to resemble the VS Code editor you're currently in.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit AI"],
    features: [
      "IDE-style layout with file explorer, editor, and preview.",
      "Custom syntax highlighting and typing animation.",
      "Fully responsive design for a seamless experience on any device.",
    ],
    imageUrl: "/placeholder-images/2.svg",
    github: "https://github.com",
    demo: "#",
  },
  'portfolio/projects/generator.ts': {
    name: "AI Image & Blog Generator",
    description: "A SaaS platform that leverages generative AI to create unique blog posts and accompanying images.",
    stack: ["React", "Firebase", "Google Gemini", "Stripe"],
    features: [
      "User-friendly interface for generating content.",
      "Integration with Gemini API for text and image generation.",
      "Stripe integration for subscription-based access.",
    ],
    imageUrl: "/placeholder-images/3.svg",
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export const contactData = {
  email: "simon.linn@email.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  twitter: "https://twitter.com/your-handle",
};

export const fileTree: FileTreeNode = {
  name: 'portfolio',
  path: 'portfolio',
  type: 'folder',
  children: [
    { name: 'about.ts', path: 'portfolio/about.ts', type: 'file' },
    { name: 'skills.ts', path: 'portfolio/skills.ts', type: 'file' },
    { name: 'experience.ts', path: 'portfolio/experience.ts', type: 'file' },
    {
      name: 'projects',
      path: 'portfolio/projects',
      type: 'folder',
      children: [
        { name: 'dashboard.ts', path: 'portfolio/projects/dashboard.ts', type: 'file' },
        { name: 'portfolio.ts', path: 'portfolio/projects/portfolio.ts', type: 'file' },
        { name: 'generator.ts', path: 'portfolio/projects/generator.ts', type: 'file' },
      ],
    },
    { name: 'contact.ts', path: 'portfolio/contact.ts', type: 'file' },
    { name: 'resume.md', path: 'portfolio/resume.md', type: 'file' },
  ],
};

export const fileContents: Record<string, string> = {
  'portfolio/about.ts': `
export const developer = {
  name: "Simon Linn",
  role: "Frontend Developer",
  location: "California",
  background: [
    "6+ years in design",
    "Transitioned into software engineering",
    "Passionate about building useful products"
  ],
  interests: ["Minimalist design", "Indie hacking", "Bouldering", "Photography"],
};
  `,
  'portfolio/skills.ts': `
export const skills = {
  frontend: ["React", "Next.js", "TypeScript"],
  backend: ["Node.js", "MongoDB"],
  tools: ["Git", "Appwrite", "Figma"]
};
  `,
  'portfolio/experience.ts': `
import type { Job } from '@/lib/types';

export const experience: Job[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Innovate Inc.",
    period: "2021 - Present",
    description: [
      "Led the architecture and development of a new design system in React, reducing development time for new features by 40%.",
      "Mentored junior developers, conducted code reviews, and promoted best practices for code quality and performance.",
      "Collaborated with product and design teams to ship high-impact features for our flagship SaaS product."
    ],
  },
  {
    role: "Software Engineer",
    company: "Creative Solutions",
    period: "2019 - 2021",
    description: [
      "Developed and maintained responsive, cross-browser compatible websites for a variety of clients.",
      "Integrated third-party APIs for payments, analytics, and content management systems.",
      "Improved website performance and SEO scores through targeted optimizations."
    ],
  },
  {
    role: "UX/UI Designer",
    company: "DesignFirst Studio",
    period: "2016 - 2019",
    description: [
      "Designed user interfaces and experiences for mobile and web applications.",
      "Created wireframes, prototypes, and high-fidelity mockups in Figma and Sketch.",
      "Conducted user research and usability testing to inform design decisions."
    ],
  },
];
  `,
  'portfolio/projects/dashboard.ts': `
export const project = {
  name: "School Dashboard",
  description: "Full CRUD system with authentication",
  stack: ["Next.js", "Appwrite", "Tailwind"],
  features: [
    "Student management",
    "Teacher dashboard",
    "Payment tracking"
  ],
  imageUrl: "/placeholder-images/1.jpg",
  imageHint: "dashboard analytics",
  github: "https://github.com",
  demo: "https://vercel.com"
};
  `,
  'portfolio/projects/portfolio.ts': `
export const project = {
  name: "This VS Code Portfolio",
  description: "A meta project! My personal portfolio, built to resemble the VS Code editor you're currently in. An interactive and unique way to showcase my skills and journey.",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit AI"],
  features: [
    "IDE-style layout with file explorer, editor, and preview.",
    "AI-powered preview generation for conceptual code files.",
    "Custom syntax highlighting and typing animation.",
    "Fully responsive design for a seamless experience on any device."
  ],
  imageUrl: "/placeholder-images/2.jpg",
  imageHint: "code editor",
  github: "https://github.com",
  demo: "#"
};
  `,
  'portfolio/projects/generator.ts': `
export const project = {
  name: "AI Image & Blog Generator",
  description: "A SaaS platform that leverages generative AI to create unique blog posts and accompanying images from a simple text prompt. Built to explore the capabilities of modern AI models.",
  stack: ["React", "Firebase", "Google Gemini", "Stripe"],
  features: [
    "User-friendly interface for generating content.",
    "Integration with Gemini API for text and image generation.",
    "Stripe integration for subscription-based access.",
    "User accounts and history of generated content."
  ],
  imageUrl: "/placeholder-images/3.jpg",
  imageHint: "abstract art",
  github: "https://github.com",
  demo: "https://netlify.com"
};
  `,
  'portfolio/contact.ts': `
// Let's connect! 
//
// I'm always open to discussing new projects, creative ideas, 
// or opportunities to be part of an ambitious team. 
//
// Whether you have a question or just want to say hi, 
// feel free to reach out through the form.

export const socialLinks = {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  twitter: "https://twitter.com/your-handle",
}

function send(message: string) {
  // ... sending logic
  console.log("Message sent:", message);
  return { status: "success" };
}
  `,
  'portfolio/resume.md': `
# Simon Linn
Frontend Developer | California
[simon.linn@email.com](mailto:simon.linn@email.com) | [LinkedIn](https://linkedin.com) | [GitHub](https://github.com)

## Summary
Creative and detail-oriented Frontend Developer with over 6 years of experience spanning from UX/UI design to full-stack web development. Passionate about building performant, accessible, and beautiful user interfaces. Proven ability to lead projects, mentor teams, and translate complex requirements into elegant, functional products.

---

## Experience

### **Senior Frontend Engineer** | Innovate Inc.
*2021 - Present*
- Led the architecture and development of a new design system in React, reducing development time for new features by 40%.
- Mentored junior developers, conducted code reviews, and promoted best practices for code quality and performance.
- Collaborated with product and design teams to ship high-impact features for our flagship SaaS product.

### **Software Engineer** | Creative Solutions
*2019 - 2021*
- Developed and maintained responsive, cross-browser compatible websites for a variety of clients using React and Vue.js.
- Integrated third-party APIs for payments, analytics, and content management systems.

### **UX/UI Designer** | DesignFirst Studio
*2016 - 2019*
- Designed user interfaces and experiences for mobile and web applications, from wireframes to high-fidelity prototypes.
- Conducted user research and usability testing to inform and validate design decisions.

---

## Skills
- **Languages:** TypeScript, JavaScript (ES6+), HTML5, CSS3/SCSS
- **Frameworks:** React, Next.js, Vue.js
- **Styling:** Tailwind CSS, Framer Motion, Styled Components
- **Backend:** Node.js, Express, Firebase, MongoDB
- **Tools:** Git, Docker, Vercel, Figma, Jest, Cypress

---

## Education
**Bachelor of Science in Graphic Design**
*State University*
`,
};
