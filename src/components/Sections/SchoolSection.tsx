import { SectionHeader } from '../SectionHeader/SectionHeader'
import ColorProps from "@/types/ColorProps"
import { FC } from 'react'

export const School : FC<ColorProps> = ({main, sec, isFull}) => {
    return (
        <>
            <SectionHeader 
              name="School"
              desc="Where I Learn and Engage with a Community"
              col={sec}
            />
        </>
    )
}