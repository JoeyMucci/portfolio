import { SectionHeader } from '../SectionHeader/SectionHeader'
import StyleProps from "@/types/StyleProps"
import { Badge, Card, Group, Image, Text, Button, Tooltip } from "@mantine/core"
import { theme } from '../../../src/theme'
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
    imgsrc : string
    feats : string[]
    techs : string[]
}


export const Projects : FC<StyleProps> = ({main, sec, isFull}) => {

    const ProjectCard : FC<CardProps> = ({name, description, link, code, type, imgsrc, feats, techs}) => {
        const highlights = feats.map((feat, i) => (
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
                    <Card.Section>
                        <Image src={imgsrc} alt={name} height={150} />
                    </Card.Section>

                    <Card.Section className={classes.section}>
                        <Group justify="center">
                            <Text style={{color : main}} size="md" fw={900}>
                                {name}
                            </Text>
                            <Badge color={main} style={{color: sec}}>
                                {type}
                            </Badge>
                        </Group>
                        <Text style={{color : main}} size="sm" mt="xs">
                            {description}
                        </Text>
                    </Card.Section>

                    <Card.Section className={classes.section}>
                        <Text style={{color : main}} ta="center" size="md">
                            Features
                        </Text>
                        <Group justify="center" align="center" gap={7} mt={5}>
                            {highlights}
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
                            <Button 
                            color={main} 
                            style={{color : sec, flex : 1}} 
                            radius="lg" 
                            onClick={() => window.open(link, '_blank')}
                            className={main===theme.colors!.lightBlue![4] ? "" : classes.lightBlackHover}
                            >
                                Check it out
                            </Button>
                        
                            <Tooltip 
                              label="Source Code"
                              color={sec}
                              style={{color : main}}
                              position="right"
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
            <ProjectCard
                name="Where to Play"
                description="A tool for entrepreneurs to assess startup viability"
                link="https://www.where2play.net"
                type="Project Manager"
                imgsrc="/src/imgs/wtp.png"
                code="https://github.com/orgs/kungfufighters/repositories"
                feats={["Real-time Collaboration", "Data Access Control", "Outlier Detection", "Opportunity Dashboard"]}
                techs={["NextJS", "Django Rest", "MySQL", "Redis", "Jira"]}
            />
        </>
    )
}