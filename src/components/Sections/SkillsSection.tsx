import { SectionHeader } from '../SectionHeader/SectionHeader'
import StyleProps from "@/types/StyleProps"
import { FC } from 'react'

export const Skills : FC<StyleProps> = ({main, sec, isFull}) => {

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