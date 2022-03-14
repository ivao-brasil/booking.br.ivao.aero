import { createContext, FunctionComponent, useCallback, useLayoutEffect, useState } from "react";

export enum ThemeVariants {
  DARK,
  LIGHT
}

interface IThemeContext {
  themeVariant: ThemeVariants;
  setThemeVariant: (value: ThemeVariants) => void;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeContextProvider: FunctionComponent = ({ children }) => {
  const [themeVariant, setThemeVariant] = useState<ThemeVariants>(ThemeVariants.LIGHT);
  const LOCAL_STORAGE_KEY = "theme";

  const setVariant = useCallback((value: ThemeVariants) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, ThemeVariants[value]);
    setThemeVariant(value);
  }, []);

  useLayoutEffect(() => {
    const storageTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageTheme === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setVariant(ThemeVariants.DARK);
        return;
      }

      return;
    }

    setThemeVariant(ThemeVariants[storageTheme as keyof typeof ThemeVariants]);
  }, [setVariant]);

  useLayoutEffect(() => {
    if (themeVariant === ThemeVariants.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeVariant]);

  return (
    <ThemeContext.Provider value={{ themeVariant, setThemeVariant: setVariant }}>
      {children}
    </ThemeContext.Provider>
  );
};
