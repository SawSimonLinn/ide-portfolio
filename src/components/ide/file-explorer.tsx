'use client';

import React, { useState } from 'react';
import { Folder, FolderOpen, FileCode, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export type FileTreeNode = {
  name: string;
  path: string;
  type: 'folder' | 'file';
  children?: FileTreeNode[];
};

interface FileExplorerProps {
  tree: FileTreeNode;
  onSelect: (node: FileTreeNode) => void;
  activePath?: string | null;
}

const getFileIcon = (fileName: string) => {
  if (fileName.endsWith('.ts')) {
    return <FileCode className="h-4 w-4 mr-2 flex-shrink-0 text-syntax-keyword" />;
  }
  if (fileName.endsWith('.md')) {
    return <FileText className="h-4 w-4 mr-2 flex-shrink-0 text-syntax-string" />;
  }
  return <FileCode className="h-4 w-4 mr-2 flex-shrink-0" />;
};

const TreeNode: React.FC<{ node: FileTreeNode; onSelect: (node: FileTreeNode) => void; activePath?: string | null; defaultOpen?: boolean }> = ({ node, onSelect, activePath, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const isFolder = node.type === 'folder';
  const isActive = activePath === node.path;

  const handleToggle = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    }
    onSelect(node);
  };

  return (
    <div>
      <div
        onClick={handleToggle}
        className={cn(
          "flex items-center p-1.5 rounded-md cursor-pointer hover:bg-muted/50 text-foreground",
          isActive && !isFolder ? "bg-primary/20" : ""
        )}
      >
        {isFolder ? (
          isOpen ? <FolderOpen className="h-4 w-4 mr-2 flex-shrink-0 text-primary" /> : <Folder className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
        ) : (
          getFileIcon(node.name)
        )}
        <span className="truncate">{node.name}</span>
      </div>
      {isFolder && isOpen && (
        <div className="pl-4 border-l border-border ml-2">
          {node.children?.map(child => (
            <TreeNode key={child.path} node={child} onSelect={onSelect} activePath={activePath} />
          ))}
        </div>
      )}
    </div>
  );
};

export const FileExplorer: React.FC<FileExplorerProps> = ({ tree, onSelect, activePath }) => {
  return (
    <div className="space-y-1">
      <TreeNode node={tree} onSelect={onSelect} activePath={activePath} defaultOpen={true} />
    </div>
  );
};
