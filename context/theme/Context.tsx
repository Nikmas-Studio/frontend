import { Theme } from '@/types/theme';
import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ThemeContextProps {
  selectedTheme: Theme;
}

interface ThemeDispatchContextProps {
  setSelectedTheme: Dispatch<SetStateAction<Theme>>;
}

const ThemeContext =
  createContext<ThemeContextProps | null>(null);

const ThemeDispatchContext =
  createContext<ThemeDispatchContextProps | null>(null);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [selectedTheme, setSelectedTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');

    switch (savedTheme) {
      case Theme.Light:
        return Theme.Light;
      case Theme.Dark:
        return Theme.Dark;
      default:
        return Theme.System;
    }
  });

  return (
    <ThemeContext.Provider value={{ selectedTheme }}>
      <ThemeDispatchContext.Provider
        value={{ setSelectedTheme }}
      >
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'ThemeContext must be used within a ThemeContextProvider',
    );
  }

  return context;
}

export function useThemeDispatch() {
  const context = useContext(ThemeDispatchContext);

  if (!context) {
    throw new Error(
      'ThemeDispatchContext must be used within a ThemeDispatchContextProvider',
    );
  }

  return context;
}