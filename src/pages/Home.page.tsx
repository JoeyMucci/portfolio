import { SideNavBar } from '@/components/SideNavBar/SideNavBar'
import { About } from '@/components/Sections/AboutSection'
import { School } from '@/components/Sections/SchoolSection'
import { Projects } from '@/components/Sections/ProjectsSection'
import { WorkExp } from '@/components/Sections/WorkExpSection'
import { Skills } from '@/components/Sections/SkillsSection'
import { Stats } from '@/components/Sections/StatSection'
import { Streaks } from '@/components/Sections/StreaksSection'
import { Press } from '@/components/Sections/PressSection'
import { Stack, MantineColor, useMantineColorScheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { theme } from '../theme'

const lightMain : MantineColor = theme.colors!.lightBlue![4]
const lightSec : MantineColor = theme.colors!.pink![4]
const darkMain : MantineColor = theme.colors!.dark![7]
const darkSec : MantineColor = theme.colors!.orange![6]

const Sections = [
  About,
  School,
  Projects,
  WorkExp,
  Skills, 
  Stats,
  Streaks,
  Press,
]


export function HomePage() {
  const { colorScheme } = useMantineColorScheme();
  const largeScreen = useMediaQuery('(min-width: 56em)');

  return (
    <>
      <SideNavBar />     
      <Stack align="center">
        {Sections.map((Section) => {
          return (
            <Section
              main={colorScheme === 'light' ? lightMain : darkMain}
              sec={colorScheme === 'light' ? lightSec : darkSec}
              isFull={largeScreen as boolean}
            />
          )
        })}
      </Stack>
    </>
  )
}
