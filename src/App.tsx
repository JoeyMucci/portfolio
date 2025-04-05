import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { MantineProvider } from '@mantine/core';
import { useState } from 'react'; 
import { HomePage } from './pages/Home.page';
import { themeL } from './themeL';
import { themeD } from './themeD';

export default function App() {
  const start = localStorage.getItem('mantine-color-scheme-value') !== null ? 
    localStorage.getItem('mantine-color-scheme-value')! :
    'dark'; 

  localStorage.setItem('mantine-color-scheme-value', start);
  const [colorScheme, setColorScheme] = useState<string>(start);

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <MantineProvider theme={colorScheme && colorScheme === 'light' ? themeL : themeD}>
      <HomePage toggle={toggleColorScheme}/>
    </MantineProvider>
  );
}
