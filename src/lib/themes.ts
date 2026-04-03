export type ThemeId = 'vscode-dark' | 'dracula' | 'light' | 'github';

export interface Theme {
  id: ThemeId;
  label: string;
  isDark: boolean;
}

export const themes: Theme[] = [
  { id: 'vscode-dark', label: 'VS Code Dark', isDark: true },
  { id: 'dracula',     label: 'Dracula',       isDark: true },
  { id: 'light',       label: 'Light',          isDark: false },
  { id: 'github',      label: 'GitHub Dark',    isDark: true },
];
