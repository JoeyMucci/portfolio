import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { HomePage } from './pages/Home.page';
import { themeD } from './themeD';
import { themeL } from './themeL';

export default function App() {
  const start =
    localStorage.getItem('mantine-color-scheme-value') !== null
      ? localStorage.getItem('mantine-color-scheme-value')!
      : 'dark';

  localStorage.setItem('mantine-color-scheme-value', start);
  const [colorScheme, setColorScheme] = useState<string>(start);

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <MantineProvider theme={colorScheme && colorScheme === 'light' ? themeL : themeD}>
      <HomePage toggle={toggleColorScheme} />
    </MantineProvider>
  );
}
