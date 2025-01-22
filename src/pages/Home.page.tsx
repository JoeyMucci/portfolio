import { SideNavBar } from '@/components/SideNavBar/SideNavBar';
import { Stats } from '@/components/Sections/StatSection'
import { Stack, MantineColor, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '../theme';

const lightMain : MantineColor = theme.colors!.lightBlue![4]
const lightSec : MantineColor = theme.colors!.pink![4]
const darkMain : MantineColor = theme.colors!.dark![7]
const darkSec : MantineColor = theme.colors!.orange![6]


export function HomePage() {
  const { colorScheme } = useMantineColorScheme();
  const largeScreen = useMediaQuery('(min-width: 56em)');

  return (
    <>
      <SideNavBar />     
      <Stack align="center">
        <Stats
          main={colorScheme === 'light' ? lightMain : darkMain}
          sec={colorScheme === 'light' ? lightSec : darkSec}
          isFull={largeScreen as boolean}
        />
      </Stack>
    </>
  )
}
