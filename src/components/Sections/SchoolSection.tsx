import { SectionHeader } from '../SectionHeader/SectionHeader'
import StyleProps from '@/types/StyleProps'
import { Text, Tooltip, Stack, Center, Paper } from '@mantine/core'
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
    title : string
}

export const School : FC<StyleProps> = ({main, sec}) => {
    const labels = Object.freeze({
        HOME : 0,
        LEADERSHIP : 1,
        STUDIES : 2,
        GIVING : 3,
        CROSS : 4, 
        FINACT : 5,
        MATH : 6, 
        CS: 7,
        TA : 8,
        VOLUNTEER : 9,
        OL : 10
    })

    const Link : FC<LinkProps> = ({destination, text}) => {
        return (
            <Text 
              mx="2" 
              className={classes.link} 
              style={{opacity : .5}} 
              td="underline" 
              component="span" 
              onClick={() => {setCardIndex(destination)}}
            >
                {text}
            </Text>
        )  
    }

    const BackArrow : FC<BackProps> = ({destination, title}) => {
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

    const Home = () => {
        return (
            <>
                <Text ta="center" mx="2" className={classes.unselectable} style={{color : main}}>
                    I attend the Albert Dorman Honors College at New Jersey Institute of Technology where I{" "}
                    <Link destination={labels.LEADERSHIP} text="lead" />{", "}
                    <Link destination={labels.STUDIES} text="study" />{", and "}
                    <Link destination={labels.GIVING} text="give back" />
                </Text>
            </>
        )
    }

    const Leadership = ()  => {
        return (
            <>
                <BackArrow destination={labels.HOME} title="Leadership" />
                <Text ta="center" mx="2" className={classes.unselectable} style={{color : main}}>
                    Some campus activities in which I help teams succeed are{" "}
                    <Link destination={labels.CROSS} text="Cross Country/Track & Field" />{" and "}
                    <Link destination={labels.FINACT} text="Finance & Actuarial Society" />
                </Text>
            </>
        )
    }

    const Studies = ()  => {
        return (
            <>
                <BackArrow destination={labels.HOME} title="Studies" />
                <Text ta="center" mx="2" className={classes.unselectable} style={{color : main}}>
                    I am majoring in{" "}
                    <Link destination={labels.MATH} text="Applied Mathematics" />{" and "}
                    <Link destination={labels.CS} text="Computer Science" />{" with a 4.0 GPA"}
                </Text>
            </>
        )
    }

    const Giving = ()  => {
        return (
            <>
                <BackArrow destination={labels.HOME} title="Giving Back" />
                <Text ta="center" mx="2" className={classes.unselectable} style={{color : main}}>
                    Some roles I play in NJIT/Newark are{" "}
                    <Link destination={labels.TA} text="Teacher Assistant" />{", "}
                    <Link destination={labels.VOLUNTEER} text="Volunteer" />{", and "}
                    <Link destination={labels.OL} text="Orientation Leader" />
                </Text>
            </>
        )
    }

    const Cross = ()  => {
        return (
            <>
                <BackArrow destination={labels.LEADERSHIP} title="XC/TF Captain" />
                <Text ta="center" mx="2" className={classes.unselectable} style={{color : main}}>
                    As captain of NJIT's Cross Country team I served as a role model and kept the team on task during competition
                </Text>
            </>
        )
    }

    const FinAct = ()  => {
        return (
            <>
                <BackArrow destination={labels.LEADERSHIP} title="Actuarial Club President" />
                <Text ta="center" mx="2" className={classes.unselectable} style={{color : main}}>
                    As president, I organize club meetings and work with the rest of the executive board on budgeting and publicity
                </Text>
            </>
        )
    }

    const Math = ()  => {
        return (
            <>
                <BackArrow destination={labels.STUDIES} title="Math Major" />
                <Text ta="center" mx="2" className={classes.unselectable} style={{color : main}}>
                    Some of the most engaging courses I've taken are differential equations, analysis, and linear algebra
                </Text>
            </>
        )
    }

    const CS = ()  => {
        return (
            <>
                <BackArrow destination={labels.STUDIES} title="CS Major" />
                <Text ta="center" mx="2" className={classes.unselectable} style={{color : main}}>
                    I've enjoyed linux programming, data structures, and the capstone course, where I built a project with a team
                </Text>
            </>
        )
    }

    const TA = ()  => {
        return (
            <>
                <BackArrow destination={labels.GIVING} title="First Year Seminar TA" />
                <Text ta="center" mx="2" className={classes.unselectable} style={{color : main}}>
                    As a three-time TA, I guided a cohort of first year students in a research project to improve NJIT's biodiversity
                </Text>
            </>
        )
    }

    const Volunteer = ()  => {
        return (
            <>
                <BackArrow destination={labels.GIVING} title="Volunteering" />
                <Text ta="center" mx="2" className={classes.unselectable} style={{color : main}}>
                    My most impactful and rewarding service opportunity have been teaching scratch coding at a local middle school
                </Text>
            </>
        )
    }

    const OL = ()  => {
        return (
            <>
                <BackArrow destination={labels.GIVING} title="Orientation Leader" />
                <Text ta="center" mx="2" className={classes.unselectable} style={{color : main}}>
                    As an OL, I introduced NJIT to incoming students and learned how to deal with difficult people and stressful situations
                </Text>
            </>
        )
    }

    const [cardIndex, setCardIndex] = useState<number>(0);

    return (
        <>
            <SectionHeader 
              name="School"
              desc="Where I Learn And Engage With A Community"
              col={sec}
            />

            <Paper style={{backgroundColor : sec}} radius="lg">
                <Stack 
                  w={350}
                  h={250}
                  justify="center"
                >
                    {cardIndex === labels.HOME && <Home />}
                    {cardIndex === labels.LEADERSHIP && <Leadership />}
                    {cardIndex === labels.STUDIES && <Studies />}
                    {cardIndex === labels.GIVING && <Giving />}
                    {cardIndex === labels.CROSS && <Cross />}
                    {cardIndex === labels.FINACT && <FinAct />}
                    {cardIndex === labels.MATH && <Math />}
                    {cardIndex === labels.CS && <CS />}
                    {cardIndex === labels.TA && <TA />}
                    {cardIndex === labels.VOLUNTEER && <Volunteer />}
                    {cardIndex === labels.OL && <OL />}
                </Stack>
            </Paper>
        </>
    )
}