import classes from './SideNavBar.module.css';
import { Stack, Tooltip, UnstyledButton, useMantineColorScheme } from '@mantine/core';
import { themeL } from '../../themeL';
import { FC } from 'react';
import {
    IconInfoHexagon,
    IconSchool,
    IconBlocks,
    IconBriefcase2,
    IconTargetArrow,
    IconGraph,
    IconNews,
    IconFlame,
    IconMoonStars,
    IconSun,
  } from '@tabler/icons-react';

const navButtons = [
    { Icon : IconInfoHexagon, label : 'About' },
    { Icon : IconSchool, label : 'School' },
    { Icon : IconBlocks, label : 'Projects' },
    { Icon : IconBriefcase2, label : 'Experience' },
    { Icon : IconTargetArrow, label : 'Skills' },
    { Icon : IconGraph, label : 'Stats'},
    { Icon : IconFlame, label: 'Streaks'},
    { Icon : IconNews, label: 'Press'},
]

interface ToggleProps {
    toggle : () => void
}

export const SideNavBar : FC<ToggleProps> = ({toggle}) => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    return (
        <nav className={classes.navbar} style={{backgroundColor : colorScheme === 'light' ? themeL.colors!.pink![4] : themeL.colors!.orange![6]}}>
            <Stack justify="center" gap={0}>
                {navButtons.map((nButt, i) => 
                    <Tooltip 
                      key={i}
                      label={nButt.label}  
                      color={colorScheme === 'light' ? themeL.colors!.pink![4] : themeL.colors!.orange![6]} 
                      style={colorScheme === 'dark' ? {color: themeL.colors!.dark![7] } : {}}
                      position="right" 
                      transitionProps={{ duration : 0 }}
                      offset={20}
                    >
                        <UnstyledButton className={classes.element}>
                            <nButt.Icon 
                            size={35} 
                            stroke={1.5}
                            color={colorScheme === 'light' ? themeL.colors!.lightBlue![4] : themeL.colors!.dark![7]}
                            />
                        </UnstyledButton>
                    </Tooltip>
                )}
            </Stack>
            
            {colorScheme === 'light' ? (
                <Tooltip
                    label="Dark Mode"
                    color={themeL.colors!.pink![4]}
                    position="right" 
                    transitionProps={{ duration : 0 }}
                    offset={20}
                >
                    <UnstyledButton onClick={() => { toggle(); setColorScheme('dark') } } className={classes.bottomElement}>
                        <IconMoonStars
                            size={35} 
                            stroke={1.5}
                            color={themeL.colors!.lightBlue![4]}
                        />
                    </UnstyledButton>
                </Tooltip>
            ) : (
                <Tooltip
                    label="Light Mode"
                    color={themeL.colors!.orange![6]}
                    style={{color: themeL.colors!.dark![7]}}
                    position="right" 
                    transitionProps={{ duration : 0 }}
                    offset={20}
                >
                    <UnstyledButton onClick={() => { toggle(); setColorScheme('light') } } className={classes.bottomElement}>
                        <IconSun
                            size={35} 
                            stroke={1.5}
                            color={themeL.colors!.dark![7]}
                        />
                    </UnstyledButton>
                </Tooltip>
            )}
        </nav>
    )
}