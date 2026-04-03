'use client';

import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { aboutData, skillsData, experienceData, projectsData, contactData, fileTree } from '@/lib/portfolio-data';

type HistoryEntry = {
  text: string;
  type: 'input' | 'output' | 'error' | 'welcome';
};

const WELCOME: HistoryEntry[] = [
  { text: 'Welcome to Simon\'s portfolio terminal.', type: 'welcome' },
  { text: 'Type `help` for a list of commands.', type: 'welcome' },
];

function listFiles(node: typeof fileTree, indent = ''): string[] {
  const lines: string[] = [];
  if (node.type === 'folder' && node.children) {
    for (const child of node.children) {
      if (child.type === 'folder') {
        lines.push(`${indent}📁 ${child.name}/`);
        lines.push(...listFiles(child, indent + '  '));
      } else {
        lines.push(`${indent}📄 ${child.name}`);
      }
    }
  }
  return lines;
}

export interface TerminalHandle {
  clear: () => void;
}

export const Terminal = forwardRef<TerminalHandle>((_, ref) => {
  const [history, setHistory] = useState<HistoryEntry[]>(WELCOME);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const historyIndex = useRef(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    clear: () => setHistory(WELCOME),
  }));

  const push = (...entries: HistoryEntry[]) => {
    setHistory(prev => [...prev, ...entries]);
  };

  const executeCommand = (raw: string) => {
    const [cmd] = raw.trim().split(/\s+/);
    push({ text: `$ ${raw}`, type: 'input' });

    switch (cmd.toLowerCase()) {
      case 'help':
        push(
          { text: 'Available commands:', type: 'output' },
          { text: '  about       — Who I am', type: 'output' },
          { text: '  skills      — Tech stack', type: 'output' },
          { text: '  experience  — Work history', type: 'output' },
          { text: '  projects    — My projects', type: 'output' },
          { text: '  contact     — Get in touch', type: 'output' },
          { text: '  ls          — List portfolio files', type: 'output' },
          { text: '  pwd         — Current directory', type: 'output' },
          { text: '  date        — Current date/time', type: 'output' },
          { text: '  clear       — Clear terminal', type: 'output' },
        );
        break;

      case 'about':
      case 'whoami':
        push(
          { text: `Name:       ${aboutData.name}`, type: 'output' },
          { text: `Role:       ${aboutData.role}`, type: 'output' },
          { text: `Location:   ${aboutData.location}`, type: 'output' },
          { text: `Background: ${aboutData.background.join(' · ')}`, type: 'output' },
          { text: `Interests:  ${aboutData.interests.join(', ')}`, type: 'output' },
        );
        break;

      case 'skills':
        Object.entries(skillsData).forEach(([category, items]) => {
          push({ text: `${category}: ${items.join(', ')}`, type: 'output' });
        });
        break;

      case 'experience':
      case 'exp':
        experienceData.forEach(job => {
          push(
            { text: `${job.role} @ ${job.company} (${job.period})`, type: 'output' },
            ...job.description.map(d => ({ text: `  · ${d}`, type: 'output' as const })),
            { text: '', type: 'output' },
          );
        });
        break;

      case 'projects': {
        const projects = Object.values(projectsData);
        projects.forEach(p => {
          push(
            { text: `${p.name}`, type: 'output' },
            { text: `  ${p.description}`, type: 'output' },
            { text: `  Stack: ${p.stack.join(', ')}`, type: 'output' },
            { text: '', type: 'output' },
          );
        });
        break;
      }

      case 'contact':
        push(
          { text: `Email:    ${contactData.email}`, type: 'output' },
          { text: `GitHub:   ${contactData.github}`, type: 'output' },
          { text: `LinkedIn: ${contactData.linkedin}`, type: 'output' },
          { text: `Twitter:  ${contactData.twitter}`, type: 'output' },
        );
        break;

      case 'ls':
        push(...listFiles(fileTree).map(t => ({ text: t, type: 'output' as const })));
        break;

      case 'pwd':
        push({ text: '/portfolio', type: 'output' });
        break;

      case 'date':
        push({ text: new Date().toLocaleString(), type: 'output' });
        break;

      case 'clear':
        setHistory(WELCOME);
        return;

      case '':
        break;

      default:
        push({ text: `command not found: ${cmd}`, type: 'error' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      if (cmd) {
        setCommandHistory(prev => [cmd, ...prev]);
        historyIndex.current = -1;
      }
      executeCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(historyIndex.current + 1, commandHistory.length - 1);
      historyIndex.current = next;
      setInput(commandHistory[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(historyIndex.current - 1, -1);
      historyIndex.current = next;
      setInput(next === -1 ? '' : commandHistory[next] ?? '');
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div
      className="h-full font-mono text-sm p-3 flex flex-col cursor-text"
      style={{ backgroundColor: 'var(--terminal-bg)', color: 'var(--terminal-fg)' }}
      onClick={() => inputRef.current?.focus()}
    >
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-0.5 pb-1">
          {history.map((entry, i) => (
            <div
              key={i}
              style={{
                color:
                  entry.type === 'input'   ? 'var(--terminal-cmd)'    :
                  entry.type === 'error'   ? 'var(--terminal-error)'  :
                  entry.type === 'welcome' ? 'var(--terminal-accent)' :
                  'var(--terminal-fg)',
              }}
            >
              {entry.text || '\u00a0'}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <div className="flex items-center">
          <span className="mr-2 flex-shrink-0" style={{ color: 'var(--terminal-accent)' }}>$</span>
          <Input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none focus-visible:ring-0 focus:outline-none w-full p-0 h-auto"
            style={{ color: 'var(--terminal-fg)', caretColor: 'var(--terminal-fg)' }}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </ScrollArea>
    </div>
  );
});

Terminal.displayName = 'Terminal';
