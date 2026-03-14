import { FC, useState } from 'react';
import { Badge, Button, Card, Group, List, Modal, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import StyleProps from '@/types/StyleProps';
import { themeL } from '../../themeL';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import classes from './Sections.module.css';

interface CardProps {
  employer: string;
  shortEmp: string;
  role: string;
  time: string;
  location: string;
  learnPoints: string[];
  doPoints: string[];
}

const cardInfo: CardProps[] = [
  {
    employer: 'Canonical',
    shortEmp: 'Canonical',
    role: 'Software Engineer',
    time: 'Aug 2025-Present',
    location: 'Remote',
    learnPoints: [
      'Agile teams often have to readjust priorities according to customer needs',
      'Valuable software products are built to last, and require effort to maintain as they mature',
      'Sometimes you need to make yourself uncomfortable to learn something new and grow',
      'When deadlines are tight, it is better to be proactive and discuss solutions than to try and power through',
    ],
    doPoints: [
      `Carried out testing and fixed a bug ahead of our SaaS release supporting Ubuntu Pro for WSL`,
      `Added an option for client machines to dump their configuration options before connecting to a server`,
      `Created a CI pipeline that runs all of our tests before automatically deploying our software for beta releases`,
      `Owned the process of releasing landscape-client into the Ubuntu archive for LTS 26.04 Resolute Raccoon`,
    ],
  },
  {
    employer: 'The Cigna Group',
    shortEmp: 'Cigna',
    role: 'Actuarial Intern',
    time: 'Summer 2024',
    location: 'Philadelphia, PA',
    learnPoints: [
      'Keeping the big picture in mind is crucial',
      'An effective business leader must take accountability and be receptive to feedback',
    ],
    doPoints: [
      `Utilized k-means machine learning algorithm to "cluster" members
            and gain new insights into drug utilization and forecasted plan liability`,
      `Modified SAS code to reflect new Medicare legislation, resulting
            in a 99% reduction in claims adjudication error`,
    ],
  },
  {
    employer: 'Horizon BCBS NJ',
    shortEmp: 'Horizon',
    role: 'Risk Adjustment Intern',
    time: 'Summer 2023',
    location: 'Newark, NJ',
    learnPoints: [
      'The importance of being a "sponge" in a new environment',
      'Growth comes from being proactive and taking on new challenges',
    ],
    doPoints: [
      `Created a PowerShell script to automate copy-pasting between 
            Excel workbooks, saving my team about 30 minutes of manual work per month`,
      `Analyzed Big Data in SAS to conduct risk score studies and
            update monthly reports`,
    ],
  },
];

export const Experience: FC<StyleProps> = ({ main, sec, isFull }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [title, setTitle] = useState<string>();
  const [bulletPoints, setBulletPoints] = useState<string[]>();

  const openModal = (bulletPoints: string[], title: string) => {
    setBulletPoints(bulletPoints);
    setTitle(title);
    open();
  };

  const ExperienceCard: FC<CardProps> = ({
    employer,
    shortEmp,
    role,
    time,
    location,
    learnPoints,
    doPoints,
  }) => {
    const lessonButton = (
      <Button
        color={main}
        style={{ color: sec }}
        radius="lg"
        onClick={() => openModal(learnPoints, `${shortEmp}: Lessons Learned`)}
        className={main === themeL.colors!.lightBlue![4] ? '' : classes.lightBlackHover}
      >
        View Lessons Learned
      </Button>
    );

    const contributionButton = (
      <Button
        color={main}
        style={{ color: sec }}
        radius="lg"
        onClick={() => openModal(doPoints, `${shortEmp}: Contributions`)}
        className={main === themeL.colors!.lightBlue![4] ? '' : classes.lightBlackHover}
      >
        View Contributions
      </Button>
    );

    return (
      <Card w={350} radius="lg" style={{ backgroundColor: sec }}>
        <Text style={{ color: main }} size="lg" ta="center" fw={900}>
          {employer}
        </Text>
        <Text style={{ color: main }} size="sm" ta="center">
          {role}
        </Text>
        <Group justify="center" mb="xl">
          <Badge color={main} style={{ color: sec }}>
            {location}
          </Badge>
          <Badge color={main} style={{ color: sec }}>
            {time}
          </Badge>
        </Group>

        <Stack>
          {lessonButton}
          {contributionButton}
        </Stack>
      </Card>
    );
  };

  return (
    <>
      <SectionHeader name="Experience" desc="Companies That I Have Developed At" col={sec} />

      <Modal
        radius="lg"
        fullScreen={!isFull}
        transitionProps={{ transition: 'fade', duration: 200 }}
        style={{ color: sec }}
        opened={opened}
        onClose={close}
        title={title}
        classNames={main === themeL.colors!.lightBlue![4] ? { close: classes.lightBlueHover } : {}}
      >
        <List w={325}>
          {bulletPoints?.map((bp, i) => (
            <List.Item key={i}>
              <Text size="sm">{bp}</Text>
            </List.Item>
          ))}
        </List>
      </Modal>

      {isFull ? (
        <Stack align="center">
          {Array.from({ length: Math.floor((cardInfo.length + 1) / 2) }, (_, i) => i).map(
            (index) => {
              const ci1: CardProps = cardInfo[index * 2];

              // If there is an odd number of ExperienceCards, the last one will not have a pair
              if (index * 2 + 1 >= cardInfo.length) {
                return (
                  <Group key={index}>
                    <ExperienceCard {...ci1} />
                  </Group>
                );
              }

              const ci2: CardProps = cardInfo[index * 2 + 1];
              return (
                <Group key={index}>
                  <ExperienceCard {...ci1} />

                  <ExperienceCard {...ci2} />
                </Group>
              );
            }
          )}
        </Stack>
      ) : (
        <Stack>
          {cardInfo.map((ci, i) => (
            <ExperienceCard key={i} {...ci} />
          ))}
        </Stack>
      )}
    </>
  );
};
