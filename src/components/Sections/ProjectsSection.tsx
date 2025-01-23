import { SectionHeader } from '../SectionHeader/SectionHeader'
import ColorProps from "@/types/ColorProps"
import { FC } from 'react'

export const Projects : FC<ColorProps> = ({main, sec, isFull}) => {

    return (
        <>
            <SectionHeader 
              name="Projects"
              desc="Cool Things That I Have Built"
              col={sec}
            />
        </>
    )
}