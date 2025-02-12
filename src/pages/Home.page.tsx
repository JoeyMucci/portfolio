import { SideNavBar } from '@/components/SideNavBar/SideNavBar'
import { About } from '@/components/Sections/AboutSection'
import { School } from '@/components/Sections/SchoolSection'
import { Projects } from '@/components/Sections/ProjectsSection'
import { Experience } from '@/components/Sections/ExperienceSection'
import { Skills } from '@/components/Sections/SkillsSection'
import { Stats } from '@/components/Sections/StatSection'
import { Streaks } from '@/components/Sections/StreaksSection'
import { Press } from '@/components/Sections/PressSection'
import { Stack, MantineColor, useMantineColorScheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { themeL } from '../themeL'
import { FC } from 'react'

const lightMain : MantineColor = themeL.colors!.lightBlue![4]
const lightSec : MantineColor = themeL.colors!.pink![4]
const darkMain : MantineColor = themeL.colors!.dark![7]
const darkSec : MantineColor = themeL.colors!.orange![6]

const Sections = [
  About,
  School,
  Projects,
  Experience,
  Skills, 
  Stats,
  Streaks,
  Press,
]

interface ToggleProps {
  toggle : () => void
}

export const HomePage : FC<ToggleProps> = ({toggle}) => {
  const { colorScheme } = useMantineColorScheme();
  const largeScreen = useMediaQuery('(min-width: 56em)');

  return (
    <>
      <SideNavBar toggle={toggle} />     
      <Stack align="center">
        {Sections.map((Section, i) => {
          return (
            <Section
              key={i}
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
