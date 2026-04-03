'use client';

import React from 'react';
import { X } from 'lucide-react';
import type { PortfolioFile } from '@/app/page';
import { cn } from '@/lib/utils';
import { SyntaxHighlighter } from './syntax-highlighter';

interface EditorPanelProps {
  openFiles: PortfolioFile[];
  activeFile: PortfolioFile | null;
  onCloseTab: (path: string) => void;
  onTabSelect: (path: string) => void;
}

export const EditorPanel: React.FC<EditorPanelProps> = ({
  openFiles,
  activeFile,
  onCloseTab,
  onTabSelect,
}) => {
  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex-shrink-0 border-b border-border bg-sidebar-background">
        <div className="flex items-center overflow-x-auto">
          {openFiles.map(file => (
            <div
              key={file.path}
              onClick={() => onTabSelect(file.path)}
              className={cn(
                "flex items-center p-2.5 border-r border-border cursor-pointer group whitespace-nowrap",
                activeFile?.path === file.path ? 'bg-background border-t-2 border-t-primary' : 'hover:bg-muted/50'
              )}
            >
              <span className="mr-2 text-sm">{file.path.split('/').pop()}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCloseTab(file.path);
                }}
                className="h-4 w-4 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {activeFile ? (
          <SyntaxHighlighter 
            code={activeFile.content}
            language={activeFile.path.endsWith('.md') ? 'markdown' : 'typescript'}
            key={activeFile.path}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select a file to view its content
          </div>
        )}
      </div>
    </div>
  );
};
