import { Carousel } from '@mantine/carousel'
import { Card, Text } from '@mantine/core'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import StyleProps from "@/types/StyleProps"
import { FC } from 'react'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import classes from './Sections.module.css'

interface LinkProps {
    label : string
    url : string
}

interface CardProps {
    skill : string
    description : string
    links? : LinkProps[]
}

const cardInfo : CardProps[] = [
    {
        skill : 'C/C++/C#',
        description : `I have used the C languages throughout a variety of my classes at NJIT. Some of the
        most memorable exercises were making a grammar parser/lexer and creating a tetris program. I am currently 
        keeping my C skills sharp by doing all my leetcode submissions in C++`
    },
    {
        skill : 'Python',
        description : `I programmed in Python extensively to develop the Django backend for my CS senior capstone
        project. I've also done a couple of data science projects in Python (i.e. feature classification of 
        satellite images). This semester I am using some Python in my math capstone to determine how a structure's
        topology determines how a liquid flows through it`,
        links : [
            {
                label : 'Semantic Segmentation of Satellite Images',
                url : "https://github.com/JoeyMucci/SemanticSegmentationSatelliteImagery/tree/main",
            }
        ]
    },
    {
        skill : 'JavaScript/TypeScript',
        description : `For one of my CS classes I needed to learn web development pretty quickly without much
        formal instruction, which was a challenging but ultimately rewarding experience. Overall, my progression
        in this area has been very much "learn by doing." Over time, I decided to move towards TypeScript just because
        it keeps me a little more organized, but I can program in both`
    },
    {
        skill : 'React',
        description : `I do not think I have ever done frontend development without React. It is pretty useful
        for making an interactive user interface. As I did more webdev, I've started to use more frontend frameworks
        on top of React (NextJS, UI libraries, etc.)`
    },
    {
        skill : 'REST API',
        description : `In building a backend with the Django REST framework, I got to see how to both use and
        create a REST API. I appreciate its simplicity and the ability to reach the backend via HTTP with GET,
        POST, etc. Chess.com has a public REST API which I call to display my current ranking on this website`
    },
    {
        skill : 'GraphQL',
        description : `GraphQL is a component of the RedwoodJS full-stack framework that I have used for a couple of
        my projects. It was useful in facilitating communication between frontend and backend. I actually used a GraphQL query
        in the development of this website (live leetcode contest ranking)`
    },
    {
        skill : 'SQL',
        description : `I have worked with SQL in some of my classes and most of my web projects. Also, I used SQL
        extensively throughout my actuarial internships, which required pulling from from large datasets according to
        specific criteria to draw conclusions`
    },
    {
        skill : 'Shell Scripting',
        description : `I learned shell scripting in my linux programming course and have found some uses for it
        since then. I applied the principles I learned to solve an automation problem during an internship, and even
        made wrote a script to update the streaks information for this website`
    },
    {
        skill : 'Spreadsheets',
        description : `Working as an actuary certainly tests your Excel skills. I've become proficient in spreadsheets
        and am able to use them to display data effectively. I generally enjoy working with numbers in
        that location-based format and often find myself creating fun little sheets to accomplish some simple
        tasks involving data flow`,
        links : [
            {
                label : "RSA Public Key Cryptosystem",
                url : `https://docs.google.com/spreadsheets/d/1dRDypEpvBEknFUBKwRpbPnDb_Wj6bS03wJycBnblkZQ/edit?usp=sharing`
            }
        ]
    },
    {
        skill : 'MATLAB',
        description : `As a math and CS double major MATLAB is like the perfect intersection of my areas of
        expertise. Throughout my coursework I have used MATLAB a lot to graph and understand problems in
        applied mathematics. Mostly I have solved differential equations numerically or coded some well-known
        root approximators (Bisection, Newton's Method, etc.)`
    },
]

export const Skills : FC<StyleProps> = ({main, sec, isFull}) => {
    const Link : FC<LinkProps> = ({label, url}) => {
        return (
            <Text  
              ta="center"
              size="xs"
              className={classes.link} 
              style={{color: main, opacity : .5}} 
              td="underline" 
              component="span" 
              onClick={() => window.open(url, "_blank")}
            >
                {label}
            </Text>
        )  
    }

    const SkillCard : FC<CardProps> = ({skill, description, links}) => (
        <Card w={350} h={350} radius="lg" style={{backgroundColor : sec, justifyContent : "center"}}>
            <Text ta="center" style={{color : main}} size="md" fw={900}>
                {skill}
            </Text>

            {links?.map((link, i) => (
                <Link key={i} {...link}/>
            ))}

            <Text h={300} ta="center" style={{color : main, alignContent : "center"}} size="sm">
                {description}
            </Text>
        </Card>
    )

    const slides = cardInfo.map((ci, i) => (
            <Carousel.Slide key={i}>
                <SkillCard {...ci} />
            </Carousel.Slide>
        )
    )

    return (
        <>
            <SectionHeader 
              name="Skills"
              desc="Technologies I Use And How I Use Them"
              col={sec}
            />
            <Carousel
              w={isFull ? 716 : 350}
              slideSize={350}
              slideGap="md"
              align="start"
              slidesToScroll={isFull ? 2 : 1}
              loop
              nextControlIcon={<IconArrowRight color={sec} size={16} />}
              previousControlIcon={<IconArrowLeft color={sec} size={16} />}
              classNames={{
                root: classes.carousel,
                controls: classes.carouselControls,
              }}
            >
                {slides}
            </Carousel>
        </>
    )
}