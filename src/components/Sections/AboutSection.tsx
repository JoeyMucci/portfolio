import { Image, Button, Collapse, Accordion, Text, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import StyleProps from "@/types/StyleProps"
import { FC } from 'react'
import { theme } from '../../../src/theme'
import classes from './Sections.module.css'

interface DropdownProps {
    name : string
    bullets : BulletProps[]
}

interface BulletProps {
    name : string
    desc : string
    icon : string
}

const pointToDesc = {
    "Software Development" : `I love coding and building things so this is
    a career path I know I'd find fulfilling. I am slightly more interested in low-level
    programming but I am open to trying new things since I am very young in my career`,

    "Actuarial Science" : `Math has always been something I enjoyed, so any career path that
    relied upon passing math exams was fine by me. I have grown and learned a lot through
    my internships in this field, particular how to share technical expertise within a business context`,

    "Running" : `I train to become a better runner pretty much every day. At this point it is more
    of a lifestyle than a hobby, but I enjoy it (sometimes)`,

    "Games" : `I like all kinds of games. In terms of board games I prefer social deduction games
    such as Mafia and Werewolf. For video games I stick to Nintendo mostly`,

    "Tennis" : `I do not actually play tennis, I just enjoy following the professional scene. My
    favorite players right now are Casper Ruud on the men's tour and Jessica Pegula on the 
    women's tour`,

    "Birthday" : `I was born on pi day (March 14). Perhaps I was destined to become a math enthusiast.
    Also my favorite type of pie would have to be apple pie`,

    "Stuffed Animals" : `I have a collection of 100 stuffed animals and figures. I have been collecting
    since I was little, and have built up a strong contingent of sea dwellers, food items, and toads`,
}

export const About : FC<StyleProps> = ({main, sec}) => {
    const AboutSubsection : FC<DropdownProps> = ({name, bullets}) => {
        const [opened, { toggle }] = useDisclosure(false);


        return (
            <>
                <Button color={sec} style={{color : main}} onClick={toggle} radius="lg">
                    {name}
                </Button>
                <Collapse in={opened}>
                    <Accordion style={{color : sec}}>
                    {bullets.map((bullet, i) => {
                        return (
                                <Accordion.Item key={i} value={i.toString()}>
                                    <Accordion.Control 
                                      className={main===theme.colors!.lightBlue![4] ? classes.lightBlueHover : ""}
                                      style={{color : sec}}
                                      icon={bullet.icon}
                                      mx="5px">
                                        {bullet.name}
                                    </Accordion.Control>
                                    <Accordion.Panel><Text size="sm">{bullet.desc}</Text></Accordion.Panel>
                                </Accordion.Item> 
                        )
                    })}
                    </Accordion>
                </Collapse>
            </>
        )
    }
    
    return (
        <>
            <SectionHeader
                name="About"
                desc="A Brief Overview of Who I Am"
                col={sec}
            />
            <Image
                radius="md"
                w={300}
                src="/src/imgs/headshot.png"
                style={{borderColor: sec, borderWidth: "5px", borderStyle: "solid"}}
            />
            <Stack w={350}>
                <AboutSubsection 
                  name="Professional Interests"
                  bullets={[
                      {name : "Software Development", desc : pointToDesc["Software Development"], icon : "👨‍💻"},
                      {name : "Actuarial Science", desc : pointToDesc["Actuarial Science"], icon : "🧮"},
                  ]}
                />

                <AboutSubsection 
                  name="Personal Interests"
                  bullets={[
                      {name : "Running", desc : pointToDesc.Running, icon : "🏃‍♂️"},
                      {name : "Games", desc : pointToDesc.Games, icon : "👾"},
                      {name : "Tennis", desc : pointToDesc.Tennis, icon : "🎾"},
                  ]}
                />

                <AboutSubsection
                  name="Fun Facts"
                  bullets={[
                    {name : "Birthday", desc : pointToDesc.Birthday, icon : "🎈"},
                    {name : "Stuffed Animals", desc : pointToDesc["Stuffed Animals"], icon : "🧸"},
                  ]}
                /> 
            </Stack>
        </>
    )
}