import { SectionHeader } from '../SectionHeader/SectionHeader'
import ColorProps from "@/types/ColorProps"
import { FC } from 'react'

export const Skills : FC<ColorProps> = ({main, sec, isFull}) => {

    return (
        <>
            <SectionHeader 
              name="Skills"
              desc="The Tools I Have in my Toolbox"
              col={sec}
            />
        </>
    )
}