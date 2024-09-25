import { Theme } from '@/types/theme';
import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ThemeContextProps {
  selectedTheme: Theme;
}

interface ThemeDispatchContextProps {
  setSelectedTheme: Dispatch<SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeDispatchContext = createContext<ThemeDispatchContextProps | null>(
  null,
);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [selectedTheme, setSelectedTheme] = useState(Theme.SYSTEM);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    switch (savedTheme) {
      case Theme.LIGHT:
        setSelectedTheme(Theme.LIGHT);
        return;
      case Theme.DARK:
        setSelectedTheme(Theme.DARK);
        return;
      default:
        setSelectedTheme(Theme.SYSTEM);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ selectedTheme }}>
      <ThemeDispatchContext.Provider value={{ setSelectedTheme }}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeContext must be used within a ThemeContextProvider');
  }

  return context;
}

export function useThemeDispatch(): ThemeDispatchContextProps {
  const context = useContext(ThemeDispatchContext);

  if (!context) {
    throw new Error(
      'ThemeDispatchContext must be used within a ThemeDispatchContextProvider',
    );
  }

  return context;
}
