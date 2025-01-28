import { Paper, Stack, Text, MantineColor } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import classes from '../Sections/Sections.module.css'
import { FC } from 'react';

interface BigNumberProps {
  description: string
  value: string
  url : string
  main : MantineColor
  sec : MantineColor
}

export const BigNumber : FC<BigNumberProps> = ({description, value, url, main, sec}) => {
    const { hovered, ref } = useHover();
    return (
      <>
        <Paper 
          w={350}
          ref={ref} 
          onClick={() => window.open(url, '_blank')} 
          radius="lg" 
          style={hovered ? {backgroundColor : sec, opacity : .75} : {backgroundColor : sec}}
        >
          <Stack align="center">
            <Text className={classes.unselectable} style={{color : main}}>
              {description}
            </Text>
            <Text className={classes.unselectable} fw={700} style={{color : main}} size="xl">
              {value}
            </Text>
          </Stack>
        </Paper>
      </>
    )
  }