import classes from './SideNavBar.module.css';
import { Stack, Tooltip, UnstyledButton, useMantineColorScheme } from '@mantine/core';
import { theme } from '../../theme';
import {
    IconInfoHexagon,
    IconSchool,
    IconBlocks,
    IconBriefcase2,
    IconTargetArrow,
    IconGraph,
    IconNews,
    IconFlame
  } from '@tabler/icons-react';

const navButtons = [
    { Icon : IconInfoHexagon, label : 'About' },
    { Icon : IconSchool, label : 'School' },
    { Icon : IconBlocks, label : 'Projects' },
    { Icon : IconBriefcase2, label : 'Work Experience' },
    { Icon : IconTargetArrow, label : 'Skills' },
    { Icon : IconGraph, label : 'Stats'},
    { Icon : IconFlame, label: 'Streaks'},
    { Icon : IconNews, label: 'Press'},
]

export function SideNavBar()  {
    const { colorScheme } = useMantineColorScheme();

    return (
        <nav className={classes.navbar} style={{backgroundColor : colorScheme === 'light' ? theme.colors!.pink![4] : theme.colors!.orange![6]}}>
            <Stack justify="center" gap={0}>
                {navButtons.map((nButt, i) => 
                    <Tooltip 
                      key={i}
                      label={nButt.label}  
                      color={colorScheme === 'light' ? theme.colors!.pink![4] : theme.colors!.orange![6]} 
                      style={colorScheme === 'dark' ? {color: theme.colors!.dark![7] } : {}}
                      position="right" 
                      transitionProps={{ duration : 0 }}
                      offset={20}
                    >
                        <UnstyledButton className={classes.element}>
                            <nButt.Icon 
                              size={35} 
                              stroke={1.5}
                              color={colorScheme === 'light' ? theme.colors!.lightBlue![4] : theme.colors!.dark![7]}
                            />
                        </UnstyledButton>
                    </Tooltip>
                )}
            </Stack>
        </nav>
    )
}