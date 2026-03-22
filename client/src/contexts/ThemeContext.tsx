import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define ThemeType
export type ThemeType = 'light' | 'dark';

// Define ThemeContextType
export interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}

// Create ThemeContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component
export const ThemeProvider: React.FC<{ children: ReactNode; defaultTheme?: ThemeType }> = ({ children, defaultTheme = 'light' }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Load theme from localStorage or use default
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    return savedTheme ? savedTheme : defaultTheme;
  });

  useEffect(() => {
    // Set document attribute and localStorage whenever theme changes
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
