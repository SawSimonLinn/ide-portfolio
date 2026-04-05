# DevIDE Portfolio — Setup Guide

Everything you need to go from download to live portfolio.

> **The short version:** Install dependencies, open one file, replace the placeholder content with yours, deploy.

---

## Step 1 — Install & Run

```bash
npm install
npm run dev
```

Open your browser at `http://localhost:9002`.

You'll see the full IDE layout with placeholder content. Your job is to replace that with your own.

---

## Step 2 — Open Your One File

Everything personal lives here:

```
src/lib/portfolio-data.ts
```

This is the only file you need to edit to make the portfolio yours. Open it and work through each section below.

---

## What's Inside `portfolio-data.ts`

### `aboutData` — Your intro

```ts
export const aboutData = {
  name: "Your Name",
  role: "Your Job Title",
  location: "Your City",
  background: [
    "A line about your background",
    "Another line",
  ],
  interests: ["Coding", "Design", "Whatever you're into"],
};
```

This powers the **About** panel. Replace each field with yours.

---

### `skillsData` — Your tech stack

```ts
export const skillsData = {
  Frontend: ["React", "Next.js", "TypeScript"],
  Backend: ["Node.js", "MongoDB"],
  Tools: ["Git", "Figma"],
};
```

Each key is a **category label** shown in the IDE. The array is your list of skills in that category.
Add, remove, or rename categories freely.

---

### `experienceData` — Your work history

```ts
export const experienceData = [
  {
    role: "Your Job Title",
    company: "Company Name",
    period: "2022 - Present",
    description: [
      "What you did",
      "What you shipped",
      "What impact you had",
    ],
  },
];
```

Add one object per job. They appear in order — newest first is recommended.
Each item in `description` is a separate bullet point.

---

### `projectsData` — Your projects

```ts
export const projectsData = {
  'portfolio/projects/your-project.ts': {
    name: "Project Name",
    description: "One sentence about what this is.",
    stack: ["Next.js", "Tailwind"],
    features: [
      "Feature one",
      "Feature two",
    ],
    imageUrl: "/placeholder-images/1.svg",
    github: "https://github.com/you/project",
    demo: "https://your-project.com",
  },
};
```

Each key is a **file path** — this is what appears in the IDE's file explorer sidebar.

**To add a new project:**

1. Add a new entry to `projectsData` with a new key like `'portfolio/projects/myapp.ts'`
2. Add a matching node to `fileTree` (see below)
3. Add matching display content to `fileContents` (see below)

The key must match exactly across all three.

**Project images** go in:

```
public/placeholder-images/
```

Recommended size: `1200 × 630px`. Then update `imageUrl` to point to your file.

---

### `contactData` — Your links

```ts
export const contactData = {
  email: "you@email.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  twitter: "https://twitter.com/your-handle",
};
```

These power the **Contact** panel and the social links shown in the IDE.

---

### `fileTree` — The sidebar file explorer

This controls what files and folders appear in the left panel of the IDE.

```ts
export const fileTree = {
  name: 'portfolio',
  path: 'portfolio',
  type: 'folder',
  children: [
    { name: 'about.ts',      path: 'portfolio/about.ts',      type: 'file' },
    { name: 'skills.ts',     path: 'portfolio/skills.ts',     type: 'file' },
    { name: 'experience.ts', path: 'portfolio/experience.ts', type: 'file' },
    {
      name: 'projects',
      path: 'portfolio/projects',
      type: 'folder',
      children: [
        { name: 'myapp.ts', path: 'portfolio/projects/myapp.ts', type: 'file' },
      ],
    },
    { name: 'contact.ts',    path: 'portfolio/contact.ts',    type: 'file' },
    { name: 'resume.md',     path: 'portfolio/resume.md',     type: 'file' },
  ],
};
```

If you add a project, add its file node here too. The `path` value must match the key you used in `projectsData`.

---

### `fileContents` — What shows in the editor when a file is clicked

When a visitor clicks a file in the sidebar, the IDE shows "code" in the editor. That content comes from `fileContents`.

Each key matches a file path:

```ts
export const fileContents = {
  'portfolio/about.ts': `
export const developer = {
  name: "Your Name",
  role: "Your Title",
  ...
};
  `,

  'portfolio/projects/myapp.ts': `
export const project = {
  name: "My App",
  description: "...",
  stack: [...],
  ...
};
  `,
};
```

This is the "code display" — it doesn't run, it just looks like real code in the editor. Update it to match your real content.

---

### `resume.md` inside `fileContents`

Your resume lives at key `'portfolio/resume.md'` inside `fileContents`. It's written in Markdown and renders inside the IDE preview panel.

```ts
'portfolio/resume.md': `
# Your Name
Your Title | Your City
your@email.com

## Experience
...

## Skills
...
`
```

Write it like a normal Markdown resume. Standard headers, bullet points, and links all work.

---

## Step 3 — Update the Browser Tab & Title Bar

### Browser tab title

Open [src/app/layout.tsx](src/app/layout.tsx) and update:

```ts
export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your short portfolio description',
};
```

### IDE title bar

Open [src/app/page.tsx](src/app/page.tsx) and find:

```tsx
Simon Linn — Portfolio
```

Replace it with your name.

---

## Step 4 — Optional: AI Preview

The portfolio includes an optional AI-powered preview feature using Gemini via Genkit.

- The portfolio works completely without it
- To enable it, create a `.env` file at the project root:

```env
GEMINI_API_KEY=your_api_key_here
```

Get a free key at [aistudio.google.com](https://aistudio.google.com).

---

## Step 5 — Build & Deploy

### Build for production

```bash
npm run build
npm run start
```

### Deploy to Vercel (recommended)

1. Push your project to GitHub
2. Import it at [vercel.com](https://vercel.com)
3. Settings:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output: automatic (Next.js)
4. Add `GEMINI_API_KEY` as an environment variable only if you want AI preview

### Deploy to Netlify

- Build command: `npm run build`
- Follow Netlify's Next.js deploy guide for output settings
- Add environment variables if using AI preview

---

## Before You Ship (Checklist)

- [ ] Replaced all placeholder content in `portfolio-data.ts`
- [ ] Updated browser title in `layout.tsx`
- [ ] Updated title bar name in `page.tsx`
- [ ] Swapped in your own project images
- [ ] Cleared your personal `.env` values before sharing the source
- [ ] Updated `portfolio/resume.md` with your real resume
- [ ] Tested `npm run build` with no errors
- [ ] Confirmed links (GitHub, LinkedIn, demo URLs) all work

---

## What's Included / Not Included

**Included:**
- Full source code
- This setup guide
- Freedom to host wherever you want

**Not included:**
- Writing your portfolio content for you
- Done-for-you deployment
- API costs from Gemini or other third-party services
