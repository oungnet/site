import { useContext } from 'react';

/**
 * Custom hook to use theme context
 * Must be used within ThemeProvider
 */
export function useTheme() {
  // This hook assumes ThemeContext is already set up
  // You can implement the actual context logic here
  
  const isDark = localStorage.getItem('theme') === 'dark';
  
  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: newTheme } }));
  };

  return {
    isDark,
    toggleTheme,
    theme: isDark ? 'dark' as const : 'light' as const,
  };
}