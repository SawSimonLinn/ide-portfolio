'use client';

import React, { useMemo } from 'react';
import { useTypingEffect } from '@/hooks/use-typing-effect';

interface SyntaxHighlighterProps {
  code: string;
  language: 'typescript' | 'markdown';
}

const highlight = (code: string, language: string) => {
  let highlightedCode = code;

  // Escape HTML to prevent XSS
  highlightedCode = highlightedCode
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  if (language === 'typescript') {
    // Comments
    highlightedCode = highlightedCode.replace(/(\/\/.*)/g, '<span class="text-syntax-comment">$1</span>');
    // Keywords
    highlightedCode = highlightedCode.replace(/\b(export|const|let|var|type|interface|from|import|as|new|return|function|=>|if|else)\b/g, '<span class="text-syntax-keyword">$1</span>');
    // Strings
    highlightedCode = highlightedCode.replace(/('.*?'|".*?"|`.*?`)/gs, '<span class="text-syntax-string">$1</span>');
    // Variables/Properties and Function calls
    highlightedCode = highlightedCode.replace(/(\w+)\s*:/g, '<span class="text-syntax-variable">$1</span>:');
    highlightedCode = highlightedCode.replace(/(\w+)\s*\(/g, '<span class="text-syntax-function">$1</span>(');
    // Punctuation
    highlightedCode = highlightedCode.replace(/([{}()[\],;:.])/g, '<span class="text-syntax-punctuation">$1</span>');
  } else if (language === 'markdown') {
    // Headers
    highlightedCode = highlightedCode.replace(/^(#+)\s*(.*)/gm, (match, p1, p2) => `<span class="text-syntax-keyword">${p1}</span> <span class="text-syntax-function">${p2}</span>`);
    // Bold
    highlightedCode = highlightedCode.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-syntax-string">**$1**</span>');
    // Italic
    highlightedCode = highlightedCode.replace(/\*(.*?)\*/g, '<span class="italic text-syntax-string">*‍$1*</span>');
    // Links
    highlightedCode = highlightedCode.replace(/\[(.*?)\]\((.*?)\)/g, '<span class="text-syntax-punctuation">[</span><span class="text-syntax-variable">$1</span><span class="text-syntax-punctuation">]</span><span class="text-syntax-punctuation">(</span><span class="text-syntax-string underline">$2</span><span class="text-syntax-punctuation">)</span>');
  }

  return highlightedCode;
};

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ code, language }) => {
  const typedCode = useTypingEffect(code.trim(), 2);
  const highlightedCode = useMemo(() => highlight(typedCode, language), [typedCode, language]);
  const lines = highlightedCode.split('\n');

  return (
    <div className="p-4 text-base leading-relaxed">
      {lines.map((line, index) => (
        <div key={index} className="flex">
          <span className="w-10 text-right pr-4 text-muted-foreground select-none">
            {index + 1}
          </span>
          <pre className="flex-1" dangerouslySetInnerHTML={{ __html: line || '&nbsp;' }} />
        </div>
      ))}
    </div>
  );
};
