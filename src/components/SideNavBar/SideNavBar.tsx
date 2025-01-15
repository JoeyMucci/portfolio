import classes from './SideNavBar.module.css';
import { Stack, Tooltip, UnstyledButton, useMantineColorScheme } from '@mantine/core';
import { theme } from '../../theme';

const navButtons = [
    { icon : 'A', label : 'About' },
    { icon : 'P', label : 'Projects' },
    { icon : 'T', label : 'Stats' },
    { icon : 'R', label : 'Streaks' },
]

export function SideNavBar()  {
    const { colorScheme } = useMantineColorScheme();

    return (
        <nav className={classes.navbar} style={{backgroundColor : colorScheme === 'light' ? theme.colors!.pink![4] : theme.colors!.orange![6]}}>
            <Stack justify="center" gap={0}>
                {navButtons.map((nButt) => 
                    <Tooltip 
                      label={nButt.label}  
                      color={colorScheme === 'light' ? theme.colors!.pink![4] : theme.colors!.orange![6]} 
                      style={colorScheme === 'dark' ? {color: theme.colors!.dark![7] } : {}}
                      position="right" transitionProps={{ duration : 0 }}>
                        <UnstyledButton>
                            {nButt.icon}
                        </UnstyledButton>
                    </Tooltip>
                )}
            </Stack>
        </nav>
    )
}