import { SectionHeader } from '../SectionHeader/SectionHeader'
import ColorProps from "@/types/ColorProps"
import { FC } from 'react'

export const WorkExp : FC<ColorProps> = ({main, sec, isFull}) => {

    return (
        <>
            <SectionHeader 
              name="Work Experience"
              desc='"Nothing Will Work Unless You Do" - Maya Angelou'
              col={sec}
            />
        </>
    )
}