'use client';

import React from 'react';
import Image from 'next/image';
import { Github, ExternalLink, MapPin, Mail, Twitter, Linkedin, Briefcase, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  aboutData,
  skillsData,
  experienceData,
  projectsData,
  contactData,
} from '@/lib/portfolio-data';

interface AiGeneratedFilePreviewProps {
  filePath: string;
  fileContent: string;
}

// ── About Preview ────────────────────────────────────────────────────────────
function AboutPreview() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary flex-shrink-0">
          {aboutData.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">{aboutData.name}</h2>
          <p className="text-sm text-primary">{aboutData.role}</p>
          <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
            <MapPin size={11} />
            <span>{aboutData.location}</span>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <p className="text-xs uppercase text-muted-foreground mb-2 font-medium tracking-wider">Background</p>
        <ul className="space-y-1">
          {aboutData.background.map((item) => (
            <li key={item} className="text-sm text-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      <div>
        <p className="text-xs uppercase text-muted-foreground mb-2 font-medium tracking-wider">Interests</p>
        <div className="flex flex-wrap gap-2">
          {aboutData.interests.map((interest) => (
            <Badge key={interest} variant="secondary">{interest}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Skills Preview ────────────────────────────────────────────────────────────
function SkillsPreview() {
  const categoryColors: Record<string, string> = {
    Frontend: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    Backend: 'bg-green-500/10 text-green-400 border-green-500/20',
    Tools: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  };

  return (
    <div className="p-4 space-y-4">
      <div>
        <h2 className="text-base font-semibold text-foreground">Technical Skills</h2>
        <p className="text-xs text-muted-foreground mt-0.5">A collection of technologies I work with</p>
      </div>
      <Separator />
      {Object.entries(skillsData).map(([category, items]) => (
        <div key={category}>
          <p className="text-xs uppercase text-muted-foreground mb-2 font-medium tracking-wider">{category}</p>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span
                key={skill}
                className={`text-xs px-2.5 py-1 rounded-full border font-medium ${categoryColors[category] ?? 'bg-muted text-muted-foreground'}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Experience Preview ────────────────────────────────────────────────────────
function ExperiencePreview() {
  return (
    <div className="p-4 space-y-4">
      <div>
        <h2 className="text-base font-semibold text-foreground">Work Experience</h2>
        <p className="text-xs text-muted-foreground mt-0.5">{experienceData.length} positions</p>
      </div>
      <Separator />
      <div className="space-y-5">
        {experienceData.map((job, i) => (
          <div key={i} className="relative pl-4 border-l-2 border-border">
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-foreground">{job.role}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Briefcase size={11} className="text-muted-foreground" />
                  <span className="text-xs text-primary">{job.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                <Calendar size={11} />
                <span>{job.period}</span>
              </div>
            </div>
            <ul className="mt-2 space-y-1">
              {job.description.map((point, j) => (
                <li key={j} className="text-xs text-muted-foreground flex items-start gap-1.5">
                  <span className="text-primary/60 mt-0.5 flex-shrink-0">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Project Preview ───────────────────────────────────────────────────────────
function ProjectPreview({ filePath }: { filePath: string }) {
  const project = projectsData[filePath];
  if (!project) return <FallbackPreview filePath={filePath} />;

  return (
    <div className="p-4 space-y-4">
      <div className="overflow-hidden rounded-lg border border-border">
        <div className="relative w-full h-40">
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold text-foreground">{project.name}</h2>
        <p className="text-xs text-muted-foreground mt-1">{project.description}</p>
      </div>

      <div>
        <p className="text-xs uppercase text-muted-foreground mb-2 font-medium tracking-wider">Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase text-muted-foreground mb-2 font-medium tracking-wider">Features</p>
        <ul className="space-y-1">
          {project.features.map((f) => (
            <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">▸</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="gap-1.5 text-xs" asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={13} />
            GitHub
          </a>
        </Button>
        {project.demo !== '#' && (
          <Button size="sm" className="gap-1.5 text-xs" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={13} />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

// ── Contact Preview ───────────────────────────────────────────────────────────
function ContactPreview() {
  const links = [
    { label: 'Email', value: contactData.email, href: `mailto:${contactData.email}`, icon: <Mail size={14} /> },
    { label: 'GitHub', value: contactData.github.replace('https://', ''), href: contactData.github, icon: <Github size={14} /> },
    { label: 'LinkedIn', value: contactData.linkedin.replace('https://', ''), href: contactData.linkedin, icon: <Linkedin size={14} /> },
    { label: 'Twitter', value: contactData.twitter.replace('https://', ''), href: contactData.twitter, icon: <Twitter size={14} /> },
  ];

  return (
    <div className="p-4 space-y-4">
      <div>
        <h2 className="text-base font-semibold text-foreground">Get In Touch</h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          Open to new projects, creative ideas, and ambitious teams.
        </p>
      </div>
      <Separator />
      <div className="space-y-3">
        {links.map(({ label, value, href, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2.5 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
          >
            <span className="text-primary">{icon}</span>
            <div className="min-w-0">
              <p className="text-xs font-medium text-foreground">{label}</p>
              <p className="text-xs text-muted-foreground truncate">{value}</p>
            </div>
            <ExternalLink size={11} className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
}

// ── Resume Preview ────────────────────────────────────────────────────────────
function ResumePreview() {
  return (
    <div className="p-4 space-y-3">
      <div className="text-center pb-3 border-b border-border">
        <h2 className="text-base font-bold text-foreground">{aboutData.name}</h2>
        <p className="text-xs text-primary mt-0.5">{aboutData.role} · {aboutData.location}</p>
        <p className="text-xs text-muted-foreground mt-1">{contactData.email}</p>
      </div>

      <div>
        <p className="text-xs uppercase text-muted-foreground mb-2 font-medium tracking-wider">Experience</p>
        <div className="space-y-2">
          {experienceData.map((job, i) => (
            <div key={i} className="text-xs">
              <div className="flex justify-between">
                <span className="font-medium text-foreground">{job.role}</span>
                <span className="text-muted-foreground">{job.period}</span>
              </div>
              <span className="text-primary">{job.company}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <p className="text-xs uppercase text-muted-foreground mb-2 font-medium tracking-wider">Skills</p>
        <div className="flex flex-wrap gap-1.5">
          {Object.values(skillsData).flat().map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div className="text-center">
        <Button variant="outline" size="sm" className="text-xs gap-1.5">
          <ExternalLink size={11} />
          Download Full Resume
        </Button>
      </div>
    </div>
  );
}

// ── Fallback Preview ──────────────────────────────────────────────────────────
function FallbackPreview({ filePath }: { filePath: string }) {
  const fileName = filePath.split('/').pop() ?? filePath;
  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="text-center text-muted-foreground">
        <p className="text-sm font-medium">{fileName}</p>
        <p className="text-xs mt-1">No preview available for this file.</p>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export const AiGeneratedFilePreview: React.FC<AiGeneratedFilePreviewProps> = ({ filePath }) => {
  if (filePath === 'portfolio/about.ts') return <AboutPreview />;
  if (filePath === 'portfolio/skills.ts') return <SkillsPreview />;
  if (filePath === 'portfolio/experience.ts') return <ExperiencePreview />;
  if (filePath.startsWith('portfolio/projects/')) return <ProjectPreview filePath={filePath} />;
  if (filePath === 'portfolio/contact.ts') return <ContactPreview />;
  if (filePath === 'portfolio/resume.md') return <ResumePreview />;
  return <FallbackPreview filePath={filePath} />;
};
