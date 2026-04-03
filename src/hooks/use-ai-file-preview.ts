'use client';

import { useState, useEffect, useCallback } from 'react';
import { generateFilePreview, type GenerateFilePreviewOutput } from '@/ai/flows/ai-generated-file-preview';
import { useDebounce } from '@/hooks/use-debounce';

export type PreviewState = {
  isLoading: boolean;
  data: GenerateFilePreviewOutput | null;
  error: string | null;
};

const cache = new Map<string, PreviewState>();

function getLocalMarkdownPreview(content: string): GenerateFilePreviewOutput {
  const lines = content.trim().split('\n');
  const title = lines.find(line => line.startsWith('# '))?.replace('# ', '') || 'Markdown Document';
  const description = lines.find(line => line.trim() && !line.startsWith('#')) || 'A document written in Markdown.';
  
  return {
    title,
    description: description.substring(0, 120) + (description.length > 120 ? '...' : ''),
    componentName: '',
  };
}

function getLocalTypeScriptPreview(filePath: string, content: string): GenerateFilePreviewOutput {
    const fileName = filePath.split('/').pop() || 'file';

    const getValue = (key: string) => {
        const regex = new RegExp(`${key}:\\s*"(.*?)"`);
        const match = content.match(regex);
        return match ? match[1] : null;
    };

    let title = getValue('name') || fileName.replace('.ts', '');
    let description = getValue('description') || `Content and definitions for ${fileName.replace('.ts', '')}.`;

    if (fileName === 'about.ts') {
        const role = getValue('role');
        if (role) {
            title = `${getValue('name') || 'Developer'} | ${role}`;
        }
        description = "Personal information, background, and interests."
    }
    
    if (fileName === 'experience.ts') {
        const roles = [...content.matchAll(/role:\\s*"(.*?)"/g)].map(m => m[1]);
        if (roles.length > 0) {
            description = `A summary of professional experience, including roles like: ${roles.join(', ')}.`;
        } else {
            description = 'Defines an array of past job experiences.';
        }
    }

    if (fileName === 'skills.ts') {
        const skillsList = [...content.matchAll(/"(.*?)"/g)].map(m => m[1]);
        if(skillsList.length > 0) {
            description = `A collection of technical skills, including: ${skillsList.join(', ')}.`;
        } else {
            description = 'Lists technical skills categorized by area.';
        }
    }
    
     if (fileName === 'contact.ts') {
        const commentMatch = content.match(/\/\/\s*(.*)/);
        if (commentMatch) {
            description = commentMatch[1];
        } else {
            description = "Contact information and social links."
        }
    }

    if (filePath.startsWith('portfolio/projects/')) {
        const name = getValue('name');
        const projDescription = getValue('description');
        if (name && projDescription) {
          title = name;
          description = projDescription;
        }
    }

    return {
        title,
        description,
        componentName: '',
    };
}


export const useAiFilePreview = (filePath: string, fileContent: string) => {
  const debouncedFilePath = useDebounce(filePath, 1000);
  const debouncedFileContent = useDebounce(fileContent, 1000);
  const [preview, setPreview] = useState<PreviewState>({ isLoading: false, data: null, error: null });

  const getPreview = useCallback(async (path: string, content: string) => {
    if (!path || !content) {
      setPreview({ isLoading: false, data: null, error: null });
      return;
    }

    if (cache.has(path)) {
      setPreview(cache.get(path)!);
      return;
    }
    
    let localPreview: GenerateFilePreviewOutput | null = null;
    if (path.endsWith('.md')) {
      localPreview = getLocalMarkdownPreview(content);
    } else if (path.endsWith('.ts')) {
      localPreview = getLocalTypeScriptPreview(path, content);
    }

    if (localPreview) {
      const newState: PreviewState = { isLoading: false, data: localPreview, error: null };
      cache.set(path, newState);
      setPreview(newState);
      return;
    }

    setPreview({ isLoading: true, data: null, error: null });

    try {
      const result = await generateFilePreview({ filePath: path, fileContent: content });
      const newState: PreviewState = { isLoading: false, data: result, error: null };
      cache.set(path, newState);
      setPreview(newState);
    } catch (error: any) {
      console.error(error);
      const errorMessage = error.message || 'Failed to generate preview.';
      const newState: PreviewState = { isLoading: false, data: null, error: errorMessage };
      cache.set(path, newState);
      setPreview(newState);
    }
  }, []);

  useEffect(() => {
    if (debouncedFilePath && debouncedFileContent) {
      getPreview(debouncedFilePath, debouncedFileContent);
    }
  }, [debouncedFilePath, debouncedFileContent, getPreview]);

  return preview;
};
