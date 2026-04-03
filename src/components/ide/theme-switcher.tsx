'use client';

import React from 'react';
import { Palette, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { themes, type ThemeId } from '@/lib/themes';

interface ThemeSwitcherProps {
  current: ThemeId;
  onChange: (id: ThemeId) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ current, onChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-muted-foreground hover:text-foreground"
          title="Switch theme"
        >
          <Palette size={13} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {themes.map(t => (
          <DropdownMenuItem
            key={t.id}
            onClick={() => onChange(t.id)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="w-3 flex-shrink-0">
              {current === t.id && <Check size={11} />}
            </span>
            <span>{t.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
