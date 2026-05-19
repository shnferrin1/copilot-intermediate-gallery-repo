'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn-icon rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-slate-400 hover:text-yellow-400 transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-slate-600 hover:text-blue-600 transition-colors" />
      )}
    </button>
  );
}
