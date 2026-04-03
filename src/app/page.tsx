'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { FileExplorer, type FileTreeNode } from '@/components/ide/file-explorer';
import { EditorPanel } from '@/components/ide/editor-panel';
import { fileTree, fileContents as initialFileContents } from '@/lib/portfolio-data';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { AiGeneratedFilePreview } from '@/components/ide/ai-generated-file-preview';
import { Terminal, type TerminalHandle } from '@/components/ide/terminal';
import { ThemeSwitcher } from '@/components/ide/theme-switcher';
import { useTheme } from '@/hooks/use-theme';
import { themes } from '@/lib/themes';
import { ImperativePanelHandle } from 'react-resizable-panels';
import { Plus, Trash2, RotateCcw, GitBranch, XCircle, AlertTriangle, PanelRight, PanelBottom } from 'lucide-react';

export type PortfolioFile = {
  path: string;
  content: string;
};

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [openFiles, setOpenFiles] = useState<PortfolioFile[]>([]);
  const [activeFile, setActiveFile] = useState<PortfolioFile | null>(null);
  const [previewKey, setPreviewKey] = useState(0);
  const terminalRef = useRef<TerminalHandle>(null);
  const previewPanelRef = useRef<ImperativePanelHandle>(null);
  const terminalPanelRef = useRef<ImperativePanelHandle>(null);
  const [previewCollapsed, setPreviewCollapsed] = useState(false);
  const [terminalCollapsed, setTerminalCollapsed] = useState(false);

  const togglePreview = () => {
    if (previewCollapsed) previewPanelRef.current?.expand();
    else previewPanelRef.current?.collapse();
  };

  const toggleTerminal = () => {
    if (terminalCollapsed) terminalPanelRef.current?.expand();
    else terminalPanelRef.current?.collapse();
  };

  const fileContents = useMemo(() => new Map(Object.entries(initialFileContents)), []);

  const handleFileSelect = useCallback((node: FileTreeNode) => {
    if (node.type === 'file') {
      const existingFile = openFiles.find(f => f.path === node.path);
      const fileContent = fileContents.get(node.path) || '';

      const file = { path: node.path, content: fileContent };

      if (!existingFile) {
        setOpenFiles(prev => [...prev, file]);
      }
      setActiveFile(file);
    }
  }, [openFiles, fileContents]);

  const handleCloseTab = useCallback((path: string) => {
    setOpenFiles(prev => {
      const newOpenFiles = prev.filter(f => f.path !== path);
      if (activeFile?.path === path) {
        setActiveFile(newOpenFiles.length > 0 ? newOpenFiles[newOpenFiles.length - 1] : null);
      }
      return newOpenFiles;
    });
  }, [activeFile]);

  const handleTabSelect = useCallback((path: string) => {
    const file = openFiles.find(f => f.path === path);
    if (file) {
      setActiveFile(file);
    }
  }, [openFiles]);

  useEffect(() => {
    // Open about.ts by default
    const aboutNode = fileTree.children?.find(c => c.name === 'about.ts');
    if (aboutNode) {
      handleFileSelect(aboutNode as FileTreeNode);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentThemeLabel = themes.find(t => t.id === theme)?.label ?? theme;
  const activeLanguage = activeFile
    ? activeFile.path.endsWith('.md') ? 'Markdown' : 'TypeScript'
    : 'Plain Text';

  return (
    <main className="h-screen bg-background text-foreground font-code text-sm flex flex-col">
      {/* VS Code-style title bar */}
      <div
        className="flex-shrink-0 flex items-center justify-center px-4 select-none relative"
        style={{
          height: '30px',
          backgroundColor: 'hsl(var(--sidebar-background))',
          borderBottom: '1px solid hsl(var(--border))',
        }}
      >
        {/* macOS traffic light placeholder */}
        <div className="absolute left-4 flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="text-[12px] text-muted-foreground">
          Simon Linn — Portfolio
        </span>
      </div>

      <div className="flex-1 min-h-0">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          <ResizablePanel defaultSize={18} minSize={15} maxSize={25}>
            <div className="h-full overflow-y-auto p-2 bg-sidebar-background">
              <div className="flex items-center justify-between px-2 mb-2">
                <p className="text-xs uppercase text-muted-foreground">Explorer</p>
                <ThemeSwitcher current={theme} onChange={setTheme} />
              </div>
              <FileExplorer
                tree={fileTree}
                onSelect={handleFileSelect}
                activePath={activeFile?.path}
              />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={82}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={65}>
                <ResizablePanelGroup direction="horizontal">
                  <ResizablePanel defaultSize={50}>
                    <EditorPanel
                      openFiles={openFiles}
                      activeFile={activeFile}
                      onCloseTab={handleCloseTab}
                      onTabSelect={handleTabSelect}
                    />
                  </ResizablePanel>
                  {!previewCollapsed && <ResizableHandle withHandle />}
                  <ResizablePanel
                    ref={previewPanelRef}
                    defaultSize={50}
                    collapsible
                    minSize={0}
                    onCollapse={() => setPreviewCollapsed(true)}
                    onExpand={() => setPreviewCollapsed(false)}
                  >
                    <div className="h-full flex flex-col">
                      <div className="text-xs uppercase text-muted-foreground px-2.5 border-b border-border bg-sidebar-background flex-shrink-0 flex items-center justify-between" style={{ height: '35px' }}>
                        <span>Preview</span>
                        <div className="flex items-center gap-0.5">
                          <button
                            title="Refresh Preview"
                            onClick={() => setPreviewKey(k => k + 1)}
                            className="p-1 rounded hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <RotateCcw size={13} />
                          </button>
                        </div>
                      </div>
                      <div className="flex-grow overflow-y-auto">
                        {activeFile ? (
                          <AiGeneratedFilePreview
                            key={`${activeFile.path}-${previewKey}`}
                            filePath={activeFile.path}
                            fileContent={activeFile.content}
                          />
                        ) : (
                         <div className="p-4 text-center text-muted-foreground">Select a file to see a preview.</div>
                        )}
                      </div>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
              {!terminalCollapsed && <ResizableHandle withHandle />}
              <ResizablePanel
                ref={terminalPanelRef}
                defaultSize={35}
                collapsible
                minSize={0}
                onCollapse={() => setTerminalCollapsed(true)}
                onExpand={() => setTerminalCollapsed(false)}
              >
                <div className="h-full flex flex-col">
                  <div className="text-xs uppercase text-muted-foreground px-2.5 border-b border-t border-border bg-sidebar-background flex-shrink-0 flex items-center justify-between" style={{ height: '35px' }}>
                    <span>Terminal</span>
                    <div className="flex items-center gap-0.5">
                      <button
                        title="New Terminal"
                        onClick={() => terminalRef.current?.clear()}
                        className="p-1 rounded hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Plus size={13} />
                      </button>
                      <button
                        title="Clear Terminal"
                        onClick={() => terminalRef.current?.clear()}
                        className="p-1 rounded hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Terminal ref={terminalRef} />
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* VS Code-style status bar */}
      <div
        className="flex-shrink-0 flex items-center justify-between px-2 text-[11px] select-none"
        style={{
          height: '22px',
          backgroundColor: 'hsl(var(--primary))',
          color: 'hsl(var(--primary-foreground))',
        }}
      >
        {/* Left section */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 hover:bg-black/10 px-1.5 py-0.5 rounded cursor-pointer">
            <GitBranch size={12} />
            main
          </span>
          <span className="flex items-center gap-1 hover:bg-black/10 px-1.5 py-0.5 rounded cursor-pointer">
            <XCircle size={12} />
            0
          </span>
          <span className="flex items-center gap-1 hover:bg-black/10 px-1.5 py-0.5 rounded cursor-pointer">
            <AlertTriangle size={12} />
            0
          </span>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-1">
          <button
            title={previewCollapsed ? 'Show Preview' : 'Hide Preview'}
            onClick={togglePreview}
            className={`flex items-center gap-1 px-1.5 py-0.5 rounded cursor-pointer hover:bg-black/10 ${previewCollapsed ? 'opacity-50' : ''}`}
          >
            <PanelRight size={12} />
          </button>
          <button
            title={terminalCollapsed ? 'Show Terminal' : 'Hide Terminal'}
            onClick={toggleTerminal}
            className={`flex items-center gap-1 px-1.5 py-0.5 rounded cursor-pointer hover:bg-black/10 ${terminalCollapsed ? 'opacity-50' : ''}`}
          >
            <PanelBottom size={12} />
          </button>
          <span className="hover:bg-black/10 px-1.5 py-0.5 rounded cursor-pointer">{currentThemeLabel}</span>
          <span className="hover:bg-black/10 px-1.5 py-0.5 rounded cursor-pointer">{activeLanguage}</span>
          <span className="hover:bg-black/10 px-1.5 py-0.5 rounded cursor-pointer">UTF-8</span>
          <span className="hover:bg-black/10 px-1.5 py-0.5 rounded cursor-pointer">Spaces: 2</span>
        </div>
      </div>
    </main>
  );
}
