import { Stack, Group } from '@mantine/core'
import axios from 'axios';
import { useState, FC } from 'react';
import StyleProps from "@/types/StyleProps"
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { BigNumber } from '../BigNumber/BigNumber';
 
export const Stats : FC<StyleProps> = ({main, sec, isFull}) => {
  const chessPath : string = `https://api.chess.com/pub/player/joeypat11/stats`
  const leetPath : string = `${import.meta.env.VITE_PROXY_URL}/https://leetcode.com/graphql?query=query%20%7B%20userContestRanking
  (username%3A%20%22jmucc314%22)%20%7B%20rating%20%7D%20%7D`

  const [chessRating, setChessRating] = useState<number | string>("Loading..." )
  const [leetcodeRating, setLeetcodeRating] = useState<number | string>("Loading...")

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

  const Chess = () => {
    return (
      <BigNumber
        description="Live Chess.Com Rapid Rating"
        value={chessRating as string}
        url="https://www.chess.com/stats/live/rapid/joeypat11"
        main={main}
        sec={sec}
      />
    )
  }

  const Leetcode = () => {
    return (
      <BigNumber 
        description="Live Leetcode Contest Rating"
        value={leetcodeRating as string}
        url="https://leetcode.com/u/jmucc314/"
        main={main}
        sec={sec}
      />
    )
  }

  const HalfMile = () => {
    return (
      <BigNumber
        description="800m PR"
        value="1:54.50"
        url="https://www.tfrrs.org/athletes/7929457/New_Jersey_Institute_Technology/Joey_Mucci.html"
        main={main}
        sec={sec}
      />
    )
  }

  const Mile = () => {
    return (
      <BigNumber
        description="Mile PR"
        value="4:24.62"
        url="https://www.tfrrs.org/athletes/7929457/New_Jersey_Institute_Technolog/Joey_Mucci.html"
        main={main}
        sec={sec}
      />
    )
  }
    
  return (
    <>
      <SectionHeader
        name="Stats"
        desc="My Marks in Various Endeavors I Compete In For Fun"
        col={sec}
      />
      {isFull ? (
          <Group>
            <Stack align="center" gap="lg">
              <Chess />
              <HalfMile />
            </Stack>
            <Stack align="center" gap="lg">
              <Leetcode />
              <Mile />
            </Stack>
          </Group>
      ) : (
        <Stack>
          <Chess />
          <Leetcode />
          <HalfMile />
          <Mile />
        </Stack>
      )}
    </>
  )
}