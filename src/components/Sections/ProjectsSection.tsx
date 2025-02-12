import { SectionHeader } from '../SectionHeader/SectionHeader'
import StyleProps from "@/types/StyleProps"
import { Badge, Card, Group, Stack, Text, Button, Tooltip } from "@mantine/core"
import { themeL } from '../../themeL'
import { FC } from 'react'
import {
    IconBrandGithub
} from '@tabler/icons-react';
import classes from './Sections.module.css'

interface CardProps {
    name : string
    description : string
    link : string
    code : string
    type : string
    featsOne : string[]
    featsTwo : string[]
    techs : string[]
    left : boolean
}

const cardInfo : CardProps[] = [
    {
        name : "Red-Black Tree Lesson",
        description : "A sandbox to learn and practice the red-black tree data structure",
        link : "https://redblacktreelesson.netlify.app",
        type : "Solo",
        code : "https://github.com/JoeyMucci/redblacktree",
        featsOne : ["Build your own tree", "Learn the rules"],
        featsTwo : ["Live Explanation", "Unit Testing", "CI/CD Pipeline"],
        techs : ["NextJS", "Typescript", "Jest", "Mantine"],
        left : true,
    },
    
    {
        name : "Rosetta Code",
        description: "A place where you can translate code between programming languages via GPT-3",
        link : "https://rosettacode.netlify.app",
        type : "Project Manager",
        code : "https://github.com/JoeyMucci/CodeTranslator",
        featsOne : ["OpenAI API", "Two Factor Authentication"],
        featsTwo : ["Translation History", "Unit Testing", "4 Sprint SDLC"],
        techs : ["React", "GraphQL", "Prisma", "Jest", "Jira"],
        left : false,
    },
    {
        name : "Where to Play",
        description: "A tool for entrepreneurs to assess the viability of their startup ideas",
        link : "https://www.where2play.net",
        type : "Project Manager",
        code : "https://github.com/orgs/kungfufighters/repositories",
        featsOne : ["Real-time Collaboration", "Data Access Control"],
        featsTwo : ["Outlier Detection", "Idea Dashboard", "5 Sprint SDLC"],
        techs : ["NextJS", "Django Rest", "MySQL", "Redis", "Jira"],
        left : true,
    },
    {
        name : "Sushi Go Clone",
        description : "A web adaption of the fast-paced and wildly fun card game Sushi Go Party",
        link : "https://sushigo.netlify.app",
        type : "Solo",
        code : "https://github.com/JoeyMucci/SushiGo",
        featsOne : ["Computer Difficulty", "Leaderboard"],
        featsTwo : ["Achievements", "Scoring Notifications"],
        techs : ["React", "GraphQL", "Prisma", "TailwindCSS"],
        left : false,
    },
]


export const Projects : FC<StyleProps> = ({main, sec, isFull}) => {

    const ProjectCard : FC<CardProps> = ({name, description, link, code, type, featsOne, featsTwo, techs, left}) => {
        const highlightsOne = featsOne.map((feat, i) => (
            <Badge color={main} style={{color: sec}} key={i}>
                {feat}
            </Badge>
        ))

        const highlightsTwo = featsTwo.map((feat, i) => (
            <Badge color={main} style={{color: sec}} key={i}>
                {feat}
            </Badge>
        ))

        const stack = techs.map((tech, i) => (
            <Badge color={main} style={{color: sec}} key={i}>
                {tech}
            </Badge>
        ))

        return (
            <>
                <Card w={350} radius="lg" style={{backgroundColor : sec}}>
                    <Card.Section className={classes.section}>
                        <Group justify="center">
                            <Text style={{color : main}} size="md" fw={900}>
                                {name}
                            </Text>
                            <Badge color={main} style={{color: sec}}>
                                {type}
                            </Badge>
                        </Group>
                        <Text style={{color : main}} ta="center" size="sm" mt="xs">
                            {description}
                        </Text>
                    </Card.Section>

                    <Card.Section className={classes.section}>
                        <Text style={{color : main}} ta="center" size="md">
                            Features
                        </Text>
                        <Group justify="center" align="center" gap={7} mt={5}>
                            {highlightsOne}
                        </Group>
                        <Group justify="center" align="center" gap={7} mt={5}>
                            {highlightsTwo}
                        </Group>
                    </Card.Section>

                    <Card.Section className={classes.section}>
                        <Text style={{color : main}} ta="center" size="md">
                            Tech Stack
                        </Text>
                        <Group justify="center" align="center" gap={7} mt={5}>
                            {stack}
                        </Group>
                    </Card.Section>

                    <Card.Section className={classes.section}>
                        <Group mt="sm">
                            {/* Display button first if the card is not on the left */}
                            {left ||
                                <Button 
                                color={main} 
                                style={{color : sec, flex : 1}} 
                                radius="lg" 
                                onClick={() => window.open(link, '_blank')}
                                className={main===themeL.colors!.lightBlue![4] ? "" : classes.lightBlackHover}
                                >
                                    Check it out
                                </Button>
                            }
                        
                            <Tooltip 
                              label="Source Code"
                              color={sec}
                              style={{color : main}}
                              position={left ? "left" : "right"}
                              className={classes.rightLink}
                              transitionProps={{ duration : 0 }}
                              offset={20}
                            >
                                <IconBrandGithub 
                                  size={35} 
                                  stroke={1.5}
                                  color={main}
                                  className={classes.link}
                                  onClick={() => {window.open(code, '_blank')}}
                                />
                            </Tooltip>

                            {/* Display button second if the card is on the left */}
                            {left &&
                                <Button 
                                color={main} 
                                style={{color : sec, flex : 1}} 
                                radius="lg" 
                                onClick={() => window.open(link, '_blank')}
                                className={main===themeL.colors!.lightBlue![4] ? "" : classes.lightBlackHover}
                                >
                                    Check it out
                                </Button>
                            }
                        </Group>
                    </Card.Section>
                </Card>
            </>
        )
    }

    return (
        <>
            <SectionHeader 
              name="Projects"
              desc="Cool Things That I Have Built"
              col={sec}
            />
            {isFull ? (
                <Stack>
                    {Array.from({length : cardInfo.length / 2}, (_, i) => i).map((index) => {
                        const ci1 : CardProps = cardInfo[index * 2];
                        const ci2 : CardProps = cardInfo[index * 2 + 1]
                        return(
                            <Group key={index}>
                                <ProjectCard
                                  {...ci1}
                                />

                                <ProjectCard
                                  {...ci2}
                                />
                            </Group>    
                        )  
                    })}
                </Stack>
            ) : (
                <Stack>
                    {cardInfo.map((ci, i) => (
                        <ProjectCard
                            key={i}
                            {...ci}
                            left={false}
                        />
                    ))}
                </Stack>
            )} 
        </>
    )
}