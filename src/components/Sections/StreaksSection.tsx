import { SectionHeader } from '../SectionHeader/SectionHeader'
import ColorProps from "@/types/ColorProps"
import { FC } from 'react'

export const Streaks : FC<ColorProps> = ({main, sec, isFull}) => {

    return (
        <>
            <SectionHeader 
              name="Streaks"
              desc="Attempts Since Failing for Some Daily Challenges"
              col={sec}
            />
        </>
    )
}