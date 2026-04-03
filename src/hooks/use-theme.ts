'use client';

import { useState, useEffect, useCallback } from 'react';
import type { ThemeId } from '@/lib/themes';

const STORAGE_KEY = 'ide-theme';

function applyTheme(id: ThemeId) {
  const html = document.documentElement;
  html.setAttribute('data-theme', id);
  if (id === 'light') {
    html.classList.remove('dark');
  } else {
    html.classList.add('dark');
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeId>('vscode-dark');

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as ThemeId) || 'vscode-dark';
    applyTheme(stored);
    setThemeState(stored);
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    localStorage.setItem(STORAGE_KEY, id);
    applyTheme(id);
    setThemeState(id);
  }, []);

  return { theme, setTheme };
}
