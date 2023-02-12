import { useEffect, useState } from 'react';

const useDarkMode = (): [string, () => void, boolean] => {
  const localHour = new Date().getHours();
  const localThemeFallback = localHour > 8 && localHour < 18 ? 'light' : 'dark';
  const [theme, setTheme] = useState<string>(localThemeFallback);
  const [mountedComponent, setMountedComponent] = useState<boolean>(false);
  const setMode = (mode: string) => {
    window.sessionStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const themeToggler = () => (theme === 'light' ? setMode('dark') : setMode('light'));
  useEffect(() => {
    const localTheme = window.sessionStorage.getItem('theme');
    const resultTheme = localTheme ?? localThemeFallback;
    setTheme(resultTheme);
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler, mountedComponent];
};

export default useDarkMode;
