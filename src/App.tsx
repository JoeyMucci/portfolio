import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { SideNavBar } from './components/SideNavBar/SideNavBar';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <SideNavBar />
      <Router />
    </MantineProvider>
  );
}
