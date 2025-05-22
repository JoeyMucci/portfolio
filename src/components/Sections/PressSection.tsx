import { FC } from 'react';
import { Group, Paper, Stack, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import StyleProps from '@/types/StyleProps';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import classes from './Sections.module.css';

interface ArticleProps {
  title: string;
  url: string;
  date: Date;
}

const articleInfo: ArticleProps[] = [
  {
    title: 'America East Announces Man & Woman of the Year Nominees',
    url: 'https://americaeast.com/news/2025/5/19/2025_MOTY_WOTY_nominees.aspx',
    date: new Date('5/19/25'),
  },
  {
    title: 'Mucci Named to America East All-Academic Team',
    url: 'https://njithighlanders.com/news/2024/11/26/mens-cross-country-mucci-named-to-america-east-all-academic-team.aspx',
    date: new Date('11/26/24'),
  },
  {
    title: 'Gradient Boosting from Scratch in Python with JAX',
    url: 'https://medium.com/@jpm73/gradient-boosting-from-scratch-in-python-with-jax-685acfa740',
    date: new Date('11/24/22'),
  },
];

export const Press: FC<StyleProps> = ({ main, sec, isFull }) => {
  const Article: FC<ArticleProps> = ({ title, url, date }) => {
    const { hovered, ref } = useHover();
    return (
      <Paper
        w={350}
        h={350}
        radius="lg"
        ref={ref}
        style={hovered ? { backgroundColor: sec, opacity: 0.75 } : { backgroundColor: sec }}
        onClick={() => window.open(url, '_blank')}
      >
        <Stack h={350} justify="center">
          <Text
            ta="center"
            className={classes.unselectable}
            style={{ color: main }}
            size="lg"
            fw={700}
          >
            {title}
          </Text>

          <Text ta="center" className={classes.unselectable} style={{ color: main }} size="sm">
            {date.toDateString()}
          </Text>
        </Stack>
      </Paper>
    );
  };

  return (
    <>
      <SectionHeader
        name="Press"
        desc="Published Articles Authored By Or Pertaining To Me"
        col={sec}
      />

      {isFull ? (
        <Stack>
          {Array.from({ length: Math.floor((articleInfo.length + 1) / 2) }, (_, i) => i).map(
            (index) => {
              const ci1: ArticleProps = articleInfo[index * 2];

              // If there is an odd number of articles, the last one will not have a pair
              if (index * 2 + 1 >= articleInfo.length) {
                return (
                  <Group key={index}>
                    <Article {...ci1} />
                  </Group>
                );
              }

              const ci2: ArticleProps = articleInfo[index * 2 + 1];
              return (
                <Group key={index}>
                  <Article {...ci1} />

                  <Article {...ci2} />
                </Group>
              );
            }
          )}
        </Stack>
      ) : (
        <Stack>
          {articleInfo.map((ci, i) => (
            <Article key={i} {...ci} />
          ))}
        </Stack>
      )}
    </>
  );
};
