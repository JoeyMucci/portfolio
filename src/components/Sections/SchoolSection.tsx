import { SectionHeader } from '../SectionHeader/SectionHeader'
import StyleProps from '@/types/StyleProps'
import { Text, Tooltip, MantineColor, Stack, Center, Paper } from '@mantine/core'
import classes from '../Sections/Sections.module.css' 
import { useState, FC } from 'react'
import {
    IconArrowBackUp
} from '@tabler/icons-react';

interface LinkProps {
  destination : number
  text : string
}

interface BackProps {
    destination : number
    main : MantineColor
    sec : MantineColor
    title : string
}

export const School : FC<StyleProps> = ({main, sec}) => {
    const Link : FC<LinkProps> = ({destination, text}) => {
        return (
            <Text 
              mx="2" 
              className={classes.link} 
              style={{opacity : .5}} 
              td="underline" 
              component="span" 
              onClick={() => {setCardIndex(destination)}}>
                {text}
            </Text>
        )  
    }

    const BackArrow : FC<BackProps> = ({destination, main, sec, title}) => {
        return (
            <>
                <Center inline style={{position : "relative"}}>
                    <Tooltip 
                      label="Back"
                      color={sec}
                      style={{color : main}}
                      position="left"
                      transitionProps={{ duration : 0 }}
                      offset={20}
                    >
                            <IconArrowBackUp 
                              size={35} 
                              stroke={1.5}
                              color={main}
                              className={classes.leftLink}
                              onClick={() => {setCardIndex(destination)}}
                            />
                    </Tooltip>
                        <Text ta="center" style={{ color : main }}>
                            {title}
                        </Text>
                    </Center>
            </>
        )
    }

    const Home : FC<StyleProps> = ({main}) => {
        return (
            <>
                <Text ta="center" mx="2" className={classes.unselectable} style={{color : main}}>
                    I attend the New Jersey Institute of Technology where I{" "}
                    <Link destination={1} text="lead" />{", "}
                    <Link destination={1} text="study" />{", and "}
                    <Link destination={1} text="give back" />
                </Text>
            </>
        )
    }

    const Lead : FC<StyleProps> = ({main, sec}) => {
        return (
            <>
                <BackArrow destination={0} main={main} sec={sec} title="Leadership" />
                <Text ta="center" mx="2" className={classes.unselectable} style={{color : main}}>
                    Some campus activities in which I help teams succeed are{" "}
                    <Link destination={1} text="Cross Country/Track & Field" />{" and "}
                    <Link destination={1} text="Finance & Actuarial Society" />
                </Text>
            </>
        )
    }

    const [cardIndex, setCardIndex] = useState<number>(0);

    return (
        <>
            <SectionHeader 
              name="School"
              desc="Where I Learn and Engage with a Community"
              col={sec}
            />

            <Paper style={{backgroundColor : sec}} radius="lg">
                <Stack 
                  w={350}
                  h={250}
                  justify="center"
                >
                    {cardIndex === 0 && <Home main={main} sec={sec} />}
                    {cardIndex === 1 && <Lead main={main} sec={sec} />}
                </Stack>
            </Paper>
        </>
    )
}