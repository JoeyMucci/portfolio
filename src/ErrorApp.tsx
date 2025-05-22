import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { MantineProvider } from '@mantine/core';
import { ErrorPage } from './pages/Error.page';
import { themeD } from './themeD';
import { themeL } from './themeL';

export default function App() {
  const colorScheme: string =
    localStorage.getItem('mantine-color-scheme-value') !== null
      ? localStorage.getItem('mantine-color-scheme-value')!
      : 'light';

  return (
    <MantineProvider theme={colorScheme && colorScheme === 'light' ? themeL : themeD}>
      <ErrorPage />
    </MantineProvider>
  );
}
