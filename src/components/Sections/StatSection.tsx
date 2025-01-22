
import { Paper, Stack, Text, Group } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import axios from 'axios';
import { useState, FC } from 'react';
import ColorProps from "@/types/ColorProps"
import { SectionHeader } from '../SectionHeader/SectionHeader';
import classes from './Sections.module.css';
 
export const Stats : FC<ColorProps> = ({main, sec, isFull}) => {
  const chessPath : string = `https://api.chess.com/pub/player/joeypat11/stats`
  const leetPath : string = `${import.meta.env.VITE_PROXY_URL}/https://leetcode.com/graphql?query=query%20%7B%20userContestRanking
  (username%3A%20%22jmucc314%22)%20%7B%20rating%20%7D%20%7D`

  const [chessRating, setChessRating] = useState<number | string>("Loading..." )
  const [leetcodeRating, setLeetcodeRating] = useState<number | string>("Loading...")

  interface StatProps {
    description: string
    value: string
    url : string
  }

  const Stat : FC<StatProps> = ({description, value, url}) => {
    const { hovered, ref } = useHover();
    return (
      <>
        <Paper 
          ref={ref} 
          onClick={() => window.open(url, '_blank')} 
          radius="lg" 
          style={hovered ? {backgroundColor : sec, width : "100%", opacity : .75} : {backgroundColor : sec, width : "100%"}}
        >
          <Stack align="center">
            <Text className={classes.unselectable} style={{color : main, margin : "5px"}}>
              {description}
            </Text>
            <Text className={classes.unselectable} fw={700} style={{color : main}} size="xl">
              {value}
            </Text>
          </Stack>
        </Paper>
      </>
    )
  }

    axios.get(chessPath).then(
      (response) => {
          setChessRating(response.data.chess_rapid.last.rating)
      },
      (_) => {
        setChessRating('Unavailable')
      }
    )

    axios.get(leetPath).then(
      (response) => {
        setLeetcodeRating(Math.round(response.data.data.userContestRanking.rating))
      },
      (_) => {
        setLeetcodeRating('Unavailable')
      }
    )
    
    return (
      <>
        <SectionHeader
          name="Stats"
          desc="My Marks in Various Endeavors I Compete in For Fun"
          col={sec}
        />
        {isFull ? (
            <Group>
              <Stack align="center" gap="lg">
                <Stat
                  description="Live Chess.Com Rapid Rating"
                  value={chessRating as string}
                  url="https://www.chess.com/stats/live/rapid/joeypat11"
                />
                <Stat
                  description="800m PR"
                  value="1:55.96"
                  url="https://www.tfrrs.org/athletes/7929457/New_Jersey_Institute_Technolog/Joey_Mucci.html"
                />
              </Stack>
              <Stack align="center" gap="lg">
                <Stat
                  description="Live Leetcode Contest Rating"
                  value={leetcodeRating as string}
                url="https://leetcode.com/u/jmucc314/"
              />
                <Stat
                  description="Mile PR"
                  value="4:28.83"
                  url="https://www.tfrrs.org/athletes/7929457/New_Jersey_Institute_Technolog/Joey_Mucci.html"
                />
              </Stack>
            </Group>
        ) : (
          <Stack>
            <Stat
              description="Live Chess.Com Rapid Rating"
              value={chessRating as string}
              url="https://www.chess.com/stats/live/rapid/joeypat11"
            />
            <Stat
              description="Live Leetcode Contest Rating"
              value={leetcodeRating as string}
              url="https://leetcode.com/u/jmucc314/"
            />
            <Stat
              description="800m PR"
              value="1:55.96"
              url="https://www.tfrrs.org/athletes/7929457/New_Jersey_Institute_Technolog/Joey_Mucci.html"
            />
            <Stat
              description="Mile PR"
              value="4:28.83"
              url="https://www.tfrrs.org/athletes/7929457/New_Jersey_Institute_Technolog/Joey_Mucci.html"
            />
          </Stack>
        )}
      </>
    )
}