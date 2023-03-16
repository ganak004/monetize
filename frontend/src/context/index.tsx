import { createContext } from "react";

interface ThemeType {
  lightMode: boolean;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeType>({
  lightMode: true,
  setTheme: () => {},
});

export { ThemeContext };
