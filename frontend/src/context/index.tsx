import { createContext } from 'react';

interface ThemeType {
  lightMode: boolean;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeType>({
  lightMode: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});

export { ThemeContext };
