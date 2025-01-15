import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Center, Text, Button, useMantineColorScheme } from '@mantine/core';

export function HomePage() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <ColorSchemeToggle />

      <Center>
        <Button color={colorScheme === 'light' ? 'pink' : 'orange'}  >
          Responsive Button
        </Button>    

        <Text>
          Blah Blah Blah 
        </Text>
      </Center>
    </>
  );
}
