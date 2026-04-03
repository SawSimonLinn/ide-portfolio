# [DevIDE Portfolio](https://ide-portfolio-chi.vercel.app/) — VS Code-Style Portfolio Template

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 15">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/themes-6-purple?style=for-the-badge" alt="6 Themes">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Proprietary-green?style=for-the-badge" alt="Proprietary License"></a>
</p>

<p align="center">
  <a href="https://ide-portfolio-chi.vercel.app/"><img src="https://img.shields.io/badge/Live_Demo-▶_View-black?style=flat-square&logo=vercel&logoColor=white" alt="Live Demo"></a>
  <img src="https://img.shields.io/badge/deploy-Vercel-black?style=flat-square&logo=vercel" alt="Deploy on Vercel">
  <img src="https://img.shields.io/badge/one--file_setup-portfolio--data.ts-orange?style=flat-square" alt="One file setup">
</p>

![alt text](image-1.png)
A portfolio that looks and feels like Visual Studio Code. Built with Next.js, TypeScript, and Tailwind CSS.

---

## What You Get

- IDE layout with file explorer, editor panel, and live preview
- Multiple built-in themes (VS Code Dark, Light, Dracula, etc.)
- Resizable panels — editor, preview, and terminal
- Syntax-highlighted "code" files that display your real portfolio content
- Fully responsive
- Zero dependencies on external services — it's just a Next.js app

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm, yarn, or pnpm

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser.

---

## Customizing Your Portfolio

**All of your personal content lives in one file:**

```
src/lib/portfolio-data.ts
```

Open that file and replace the placeholder data with your own. Here's what each section controls:

---

### Your Name & Bio — `aboutData`

```ts
export const aboutData = {
  name: "Your Name",
  role: "Your Role",           // e.g. "Full Stack Developer"
  location: "Your City",
  background: [
    "Your background point 1",
    "Your background point 2",
    "Your background point 3",
  ],
  interests: ["Interest 1", "Interest 2", "Interest 3", "Interest 4"],
};
```

---

### Skills — `skillsData`

```ts
export const skillsData: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript"],  // Edit categories and items freely
  Backend: ["Node.js", "PostgreSQL"],
  Tools: ["Git", "Docker", "Figma"],
};
```

Add or remove categories as you like — e.g. `"DevOps"`, `"Mobile"`, etc.

---

### Experience — `experienceData`

Each job entry looks like this:

```ts
{
  role: "Your Job Title",
  company: "Company Name",
  period: "2022 - Present",
  description: [
    "What you built or achieved.",
    "Impact or scope of your work.",
    "Technologies or teams involved.",
  ],
},
```

Add as many jobs as you need. Delete ones you don't need.

---

### Projects — `projectsData`

Each project is keyed to a file path in the IDE file tree. By default there are three slots:

| Key | File shown in IDE |
|-----|------------------|
| `portfolio/projects/dashboard.ts` | `dashboard.ts` |
| `portfolio/projects/portfolio.ts` | `portfolio.ts` |
| `portfolio/projects/generator.ts` | `generator.ts` |

Edit each entry:

```ts
'portfolio/projects/dashboard.ts': {
  name: "Your Project Name",
  description: "What it does and why it's interesting.",
  stack: ["Next.js", "Supabase", "Tailwind"],
  features: [
    "Key feature 1",
    "Key feature 2",
    "Key feature 3",
  ],
  imageUrl: "/placeholder-images/1.svg",  // See image section below
  github: "https://github.com/you/repo",
  demo: "https://your-demo.vercel.app",
},
```

**To add a 4th project:** duplicate an entry and update the `fileTree` array (see below).

---

### Contact — `contactData`

```ts
export const contactData = {
  email: "you@email.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  twitter: "https://twitter.com/your-handle",
};
```

---

### Resume — `fileContents['portfolio/resume.md']`

Further down in `portfolio-data.ts` is a `fileContents` map. The `portfolio/resume.md` entry is a full Markdown resume that renders in the preview panel. Replace all of Simon's details with yours.

Also update the inline `fileContents` strings for `about.ts`, `skills.ts`, `experience.ts`, `contact.ts`, and each project file — these are what display in the editor panel. They should match your `aboutData`, `skillsData`, etc.

---

### Title Bar Name

In [src/app/page.tsx](src/app/page.tsx), find line 107 and update the name shown in the macOS-style title bar:

```tsx
<span className="text-[12px] text-muted-foreground">
  Your Name — Portfolio        {/* ← change this */}
</span>
```

---

### Browser Tab Title & SEO

In [src/app/layout.tsx](src/app/layout.tsx):

```ts
export const metadata: Metadata = {
  title: 'Your Name — Portfolio',
  description: 'A brief description for search engines.',
};
```

---

### Project Images

Project images live in `public/placeholder-images/`. The default files are `1.svg`, `2.svg`, `3.svg`.

To use your own images:
1. Drop your image files into `public/placeholder-images/`
2. Update `imageUrl` in each project entry in `portfolio-data.ts`:
   ```ts
   imageUrl: "/placeholder-images/your-image.png",
   ```

Recommended size: **1200 × 630px** (16:9).

---

### Adding or Removing Files in the IDE Explorer

The file tree is defined in `portfolio-data.ts` as `fileTree`. Each node is either a `file` or `folder`:

```ts
{ name: 'skills.ts', path: 'portfolio/skills.ts', type: 'file' }
```

To add a new file to the explorer, add an entry here and also add the corresponding content string in `fileContents`.

---

### Themes

The portfolio ships with several built-in themes. Users can switch between them using the theme switcher icon in the explorer panel. No configuration needed.

To add or modify themes, edit `src/lib/themes.ts`.

---

## Deployment

### Deploy to Vercel (recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Click **Deploy** — no environment variables needed

### Build locally

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # HTML shell, metadata, fonts
│   └── page.tsx            # Main IDE layout
├── components/
│   └── ide/                # IDE UI components (editor, terminal, file explorer, etc.)
├── lib/
│   ├── portfolio-data.ts   ← YOUR CONTENT GOES HERE
│   ├── themes.ts           # Theme definitions
│   └── types.ts            # Shared TypeScript types
└── hooks/
    └── use-theme.ts        # Theme persistence (localStorage)
```

---

## Quick Customization Checklist

- [ ] `portfolio-data.ts` — name, role, location, background, interests
- [ ] `portfolio-data.ts` — skills categories and items
- [ ] `portfolio-data.ts` — experience (jobs)
- [ ] `portfolio-data.ts` — projects (name, description, stack, features, links, images)
- [ ] `portfolio-data.ts` — contact links
- [ ] `portfolio-data.ts` — resume markdown
- [ ] `portfolio-data.ts` — inline `fileContents` strings (editor panel content)
- [ ] `page.tsx` line 107 — title bar name
- [ ] `layout.tsx` — browser tab title and description
- [ ] `public/placeholder-images/` — swap in your own project screenshots

---

## License

This template is for personal use by the purchaser. You may use it for your own portfolio. You may not resell or redistribute this template.
