import { SectionHeader } from '../SectionHeader/SectionHeader'
import StyleProps from "@/types/StyleProps"
import { FC } from 'react'

export const Projects : FC<StyleProps> = ({main, sec, isFull}) => {

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