import { SideNavBar } from '@/components/SideNavBar/SideNavBar';
import { Stack, Paper, Text, MantineColor, useMantineColorScheme } from '@mantine/core';
import { theme } from '../theme';
import { useState, FC } from 'react';
import axios from 'axios';

const lightMain : MantineColor = theme.colors!.lightBlue![4]
const lightSec : MantineColor = theme.colors!.pink![4]
const darkMain : MantineColor = theme.colors!.dark![7]
const darkSec : MantineColor = theme.colors!.orange![6]

interface ColorProps {
  main : MantineColor
  sec : MantineColor
}

const Stats : FC<ColorProps> = ({main, sec}) => {
    // const pathold : string = `https://leetcode.com/graphql?query=query%20%7B%20userContestRanking
    // // (username%3A%20%22jmucc314%22)%20%7B%20rating%20%7D%20%7D`

    const path : string = `https://api.chess.com/pub/player/joeypat11/stats`

    const [chessRating, setChessRating] = useState<number | string>("Loading..." )
    const [leetcodeRating, setLeetcodeRating] = useState<number | string>("Loading..." )

    interface StatProps {
      description: string
      value: string
    }

    const Stat : FC<StatProps> = ({description, value}) => {
      return (
        <>
          <Paper radius="lg" style={{backgroundColor : sec, width: "100%"}}>
            <Stack align="center">
              <Text style={{color : main, margin : "5px"}}>
                {description}
              </Text>
              <Text fw={700} style={{color : main}} size="xl">
                {value}
              </Text>
            </Stack>
          </Paper>
        </>
      )
    }

    axios.get(path).then(
      (response) => {
          setChessRating(response.data.chess_rapid.last.rating)
          setLeetcodeRating(1848);
      },
      (_) => {
        setChessRating('Unavailable')
      }
    )
    

    return (
      <Stack align="center" gap="lg">
        <Stat
          description="Live Chess.Com Rapid Rating"
          value={chessRating as string}
        />
        <Stat
          description="800m PR"
          value="1:55.96"
        />
        <Stat
          description="Mile PR"
          value="4:28.83"
        />
        <Stat
          description="Live Leetcode Contest Rating"
          value={leetcodeRating as string}
        />
      </Stack>
      
    )
}

export function HomePage() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <SideNavBar />     
      <Stack align="center">
        <Stats
          main={colorScheme === 'light' ? lightMain : darkMain}
          sec={colorScheme === 'light' ? lightSec : darkSec}
        />
      </Stack>
    </>
  )
}
