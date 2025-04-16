'use client';

import { createContext, useContext, ReactNode, useState } from 'react';

interface AppContextType {
  // Add your context values here
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  auth: string | null;
  setAuth: (auth: string | null) => void;
}

const AppContext = createContext<AppContextType>({
  theme: 'light',
  setTheme: () => {},
  auth: null,
  setAuth: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [auth, setAuth] = useState<string | null>(null);

  const value = {
    theme,
    setTheme,
    auth,
    setAuth,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
