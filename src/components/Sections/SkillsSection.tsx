import { FC } from 'react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { Card, Text } from '@mantine/core';
import StyleProps from '@/types/StyleProps';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import classes from './Sections.module.css';

interface LinkProps {
  label: string;
  url: string;
}

interface CardProps {
  skill: string;
  description: string;
  links?: LinkProps[];
}

const cardInfo: CardProps[] = [
  {
    skill: 'Python',
    description: `I primarily program in Python at my current job, where we are maintaining and modernizing the server
        and client applications for a systems administration software. In school, I used Django for my CS senior capstone,
        and also used tensorflow for my math senior capstone, where my group and I predicted the permeasbility of simulated
        structures with neural networks`,
    links: [
      {
        label: 'Semantic Segmentation of Satellite Images',
        url: 'https://github.com/JoeyMucci/SemanticSegmentationSatelliteImagery/tree/main',
      },
    ],
  },
  {
    skill: 'REST API',
    description: `The server application I work in at my job exposes a REST API, and I have learned how to
        develop a scalable application by keeping the API thin. We've also been making strides to have a more 
        uniform interface by using a consistent data validation system. I've worked with the Django REST framework
        for my personal projects. Chess.com has a public REST API which I call to display my current ranking on this website`,
  },
  {
    skill: 'SQL',
    description: `My SQL skills have levelled up since starting at my new job. I've had to adapt and figure out how
        to write complicated queries for our expansive database. At the same time, I've also become more adept
        at tracing logs and debugging performance issues. I've also used SQL in my education and in my actuarial
        internships, which required dealing with lots of data`,
  },
  {
    skill: 'Golang',
    description: `I am dabbling here. I continue to dedicate time to learning Go and completed my world cup prediction side project using it
        for a backend API. I definitely like Go, it requires rigor but is also very flexible. Another
        thing I really like is the built in support for concurrency, and I think it's a great choice for building scalabale systems`,
  },
  {
    skill: 'C/C++/C#',
    description: `I have used the C languages throughout a variety of my classes at NJIT. Some of the
        most memorable exercises were making a grammar parser/lexer and creating a tetris program. Back when I
        was grinding leetcode all my submissions were in C++`,
  },
  {
    skill: 'Shell Scripting',
    description: `I learned shell scripting in my linux programming course and have found some uses for it
        since then. It's become quite useful working at Canonical, publisher of Ubuntu, where I run all my day to
        day tasks through the terminal. I use shell scripting to automate problems at work, and I even wrote a script
        to update the streaks information for this website`,
  },
  {
    skill: 'JavaScript/TypeScript',
    description: `For one of my CS classes I needed to learn web development pretty quickly without much
        formal instruction, which was a challenging but ultimately rewarding experience. Overall, my progression
        in this area has been very much "learn by doing." Over time, I decided to move towards TypeScript just because
        it keeps me a little more organized, but I can program in both`,
  },
  {
    skill: 'React',
    description: `I do not think I have ever done frontend development without React. It is pretty useful
        for making an interactive user interface. As I did more webdev, I've started to use more frontend frameworks
        on top of React (NextJS, UI libraries, etc.)`,
  },
  {
    skill: 'Spreadsheets',
    description: `Working as an actuary certainly tests your Excel skills. I've become proficient in spreadsheets
        and am able to use them to display data effectively. I generally enjoy working with numbers in
        that location-based format and often find myself creating fun little sheets to accomplish some simple
        tasks involving data flow`,
    links: [
      {
        label: 'RSA Public Key Cryptosystem',
        url: `https://docs.google.com/spreadsheets/d/1dRDypEpvBEknFUBKwRpbPnDb_Wj6bS03wJycBnblkZQ/edit?usp=sharing`,
      },
    ],
  },
  {
    skill: 'MATLAB',
    description: `As a math and CS double major MATLAB is like the perfect intersection of my areas of
        expertise. Throughout my coursework I have used MATLAB a lot to graph and understand problems in
        applied mathematics. Mostly I have solved differential equations numerically or coded some well-known
        root approximators (Bisection, Newton's Method, etc.)`,
  },
];

export const Skills: FC<StyleProps> = ({ main, sec, isFull }) => {
  const Link: FC<LinkProps> = ({ label, url }) => {
    return (
      <Text
        ta="center"
        size="xs"
        className={classes.link}
        style={{ color: main, opacity: 0.5 }}
        td="underline"
        component="span"
        onClick={() => window.open(url, '_blank')}
      >
        {label}
      </Text>
    );
  };

  const SkillCard: FC<CardProps> = ({ skill, description, links }) => (
    <Card w={350} h={350} radius="lg" style={{ backgroundColor: sec, justifyContent: 'center' }}>
      <Text ta="center" style={{ color: main }} size="md" fw={900}>
        {skill}
      </Text>

      {links?.map((link, i) => (
        <Link key={i} {...link} />
      ))}

      <Text h={300} ta="center" style={{ color: main, alignContent: 'center' }} size="sm">
        {description}
      </Text>
    </Card>
  );

  const slides = cardInfo.map((ci, i) => (
    <Carousel.Slide key={i}>
      <SkillCard {...ci} />
    </Carousel.Slide>
  ));

  return (
    <>
      <SectionHeader name="Skills" desc="Technologies I Use And How I Use Them" col={sec} />
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
  );
};
