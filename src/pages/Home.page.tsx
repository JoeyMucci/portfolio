import { SideNavBar } from '@/components/SideNavBar/SideNavBar';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Center, Text, Button, Group, useMantineColorScheme } from '@mantine/core';

export function HomePage() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Group>
      <SideNavBar />
      <ColorSchemeToggle />

      <Center>
        <Button color={colorScheme === 'light' ? 'pink' : 'orange'}  >
          Responsive Button
        </Button>    

        <Text>
          Blah Blah Blah 
        </Text>
      </Center>
    </Group>
  );
}
