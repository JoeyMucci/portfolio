import { SectionHeader } from '../SectionHeader/SectionHeader'
import { BigNumber } from '../BigNumber/BigNumber'
import StyleProps from "@/types/StyleProps"
import { useState, FC } from 'react'
import { Group, Stack } from '@mantine/core'
import axios from 'axios';

export const Streaks : FC<StyleProps> = ({main, sec, isFull}) => {
    const [ currentWordle, setCurrentWordle ] = useState<number | string>("Loading...");
    const [ maxWordle, setMaxWordle ] = useState<number | string>("Loading...");
    const [ currentConnections, setCurrentConnections ] = useState<number | string>("Loading...");
    const [ maxConnections, setMaxConnections ] = useState<number | string>("Loading...");
    
    const streaksPath = `${import.meta.env.VITE_STREAKS_URL}/streaks`
    axios.get(streaksPath).then(
        (response) => {
            setCurrentWordle(response.data.currentWordle)
            setMaxWordle(response.data.maxWordle)
            setCurrentConnections(response.data.currentConnections)
            setMaxConnections(response.data.maxConnections)
        },
        (_) => {
            setCurrentWordle("Unavailable")
            setMaxWordle("Unavailable")
            setCurrentConnections("Unavailable")
            setMaxConnections("Unavailable")
        }
      )
    
    const CurrentWordle = () => {
        return (
            <BigNumber  
              description="Current Wordle Streak"
              value={currentWordle.toString()}
              url="https://www.nytimes.com/games/wordle/index.html"
              main={main}
              sec={sec}
            />
        )  
    }

    const MaxWordle = () => {
        return (
            <BigNumber  
              description="Max Wordle Streak"
              value={maxWordle.toString()}
              url="https://www.nytimes.com/games/wordle/index.html"
              main={main}
              sec={sec}
            />
        )  
    }

    const CurrentConnections = () => {
        return (
            <BigNumber 
              description="Current Connections Streak"
              value={currentConnections.toString()}
              url="https://www.nytimes.com/games/connections"
              main={main}
              sec={sec}
            />
        )
    }

    const MaxConnections = () => {
        return (
            <BigNumber 
              description="Max Connections Streak"
              value={maxConnections.toString()}
              url="https://www.nytimes.com/games/connections"
              main={main}
              sec={sec}
            />
        )
    }

    return (
        <>
            <SectionHeader 
              name="Streaks"
              desc="Attempts Since Failing for Some Daily Challenges"
              col={sec}
            />
            {isFull ? (
                <Group>
                    <Stack>
                        <CurrentWordle />
                        <MaxWordle />
                    </Stack>
                    <Stack>
                        <CurrentConnections />
                        <MaxConnections />
                    </Stack>
                </Group>
            ) : (
                <Stack>
                    <CurrentWordle />
                    <MaxWordle />
                    <CurrentConnections />
                    <MaxConnections />
                </Stack>
            )}
        </>
    )
}