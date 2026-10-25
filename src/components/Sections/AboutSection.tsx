import { FC } from 'react';
import { Accordion, Button, Collapse, Image, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import StyleProps from '@/types/StyleProps';
import headshot from '../../imgs/headshot.png';
import { themeL } from '../../themeL';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import classes from './Sections.module.css';

interface DropdownProps {
  name: string;
  bullets: BulletProps[];
}

interface BulletProps {
  name: string;
  desc: string;
  icon: string;
}

const pointToDesc = {
  'Applied Mathematics' : `I really enjoyed my coursework in Applied Mathematics at NJIT. Unfortunately,
  between my commitments to collegiate track & field and a Computer Science double major, I did not take as many
  advanced courses or do as much research as I would have liked. I am interested revisiting applied math through a
  PhD program. I am mostly interested in studying probability & statistics and differential equations & numerical methods.`,

  'Software Development': `I love coding and building things so this is
    a career path I figured I could find fulfilling. After college I worked remotely as a software
    engineer on a systems management software. During this time I improved my skills
    with Python, learned how to code in Golang, and became much more knowledgeable about SQL.`,

  'Actuarial Science': `Math has always been something I enjoyed, so any career path that
    relies upon passing math exams (so far I have passed the probability and financial mathematics exams)
    is fine by me. I have grown and learned a lot through my internships in this field, but still have
    not become familiar with all aspects of the profession`,

  'Running': `I train to become a better runner pretty much every day. At this point it is more
    of a lifestyle than a hobby, but I enjoy it (sometimes)`,

  'Games': `I like all kinds of games. In terms of board games I prefer social deduction games
    such as Mafia and Werewolf. For video games I stick to Nintendo mostly`,

  'Tennis': `I do not actually play tennis, I just enjoy following the professional scene. My
    favorite players right now are Taylor Fritz on the men's tour and Jessica Pegula on the 
    women's tour`,

  'Birthday': `I was born on pi day (March 14). Perhaps I was destined to become a math enthusiast.
    Also my favorite type of pie would have to be apple pie`,

  'Appendectomy': `I do not have my appendix anymore! Funnily enough, I spent my entire 22nd birthday
    in the hospital getting treated for appendicitis. I recovered quickly from my laparoscopic surgery
    and ran my fastest ever 800m 5 weeks later.`,

  'Stuffed Animals': `I have a collection of 100 stuffed animals and figures. I have been collecting
    since I was little, and have built up a strong contingent of sea dwellers, food items, and toads`,
};

export const About: FC<StyleProps> = ({ main, sec }) => {
  const AboutSubsection: FC<DropdownProps> = ({ name, bullets }) => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
      <>
        <Button color={sec} style={{ color: main }} onClick={toggle} radius="lg">
          {name}
        </Button>
        <Collapse in={opened}>
          <Accordion style={{ color: sec }}>
            {bullets.map((bullet, i) => {
              return (
                <Accordion.Item key={i} value={i.toString()}>
                  <Accordion.Control
                    className={main === themeL.colors!.lightBlue![4] ? classes.lightBlueHover : ''}
                    style={{ color: sec }}
                    icon={bullet.icon}
                    mx="5px"
                  >
                    {bullet.name}
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text size="sm">{bullet.desc}</Text>
                  </Accordion.Panel>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Collapse>
      </>
    );
  };

  return (
    <>
      <SectionHeader name="About" desc="A Brief Overview Of Who I Am" col={sec} />
      <Image
        radius="lg"
        w={300}
        src={headshot}
        style={{ borderColor: sec, borderWidth: '5px', borderStyle: 'solid' }}
      />
      <Stack w={350}>
        <AboutSubsection
          name="Professional Interests"
          bullets={[
	    { name: 'Applied Mathematics', desc: pointToDesc['Applied Mathematics'], icon: '👨‍🏫' },
	    { name: 'Software Development', desc: pointToDesc['Software Development'], icon: '👨‍💻' },
            { name: 'Actuarial Science', desc: pointToDesc['Actuarial Science'], icon: '🧮' },
          ]}
        />

        <AboutSubsection
          name="Personal Interests"
          bullets={[
            { name: 'Running', desc: pointToDesc['Running'], icon: '🏃‍♂️' },
            { name: 'Games', desc: pointToDesc['Games'], icon: '👾' },
            { name: 'Tennis', desc: pointToDesc['Tennis'], icon: '🎾' },
          ]}
        />

        <AboutSubsection
          name="Fun Facts"
          bullets={[
            { name: 'Birthday', desc: pointToDesc['Birthday'], icon: '🎈' },
            { name: 'Appendectomy', desc: pointToDesc['Appendectomy'], icon: '🧑‍⚕️' },
            { name: 'Stuffed Animals', desc: pointToDesc['Stuffed Animals'], icon: '🧸' },
          ]}
        />
      </Stack>
    </>
  );
};
