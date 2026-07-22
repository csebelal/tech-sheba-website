'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Let the browser paint once with disable-transition still active,
    // then remove it so subsequent theme toggles animate smoothly.
    const id = setTimeout(() => {
      document.documentElement.classList.remove('disable-transition');
    }, 30);
    return () => clearTimeout(id);
  }, []);

  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
