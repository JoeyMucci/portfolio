import { SectionHeader } from '../SectionHeader/SectionHeader'
import StyleProps from "@/types/StyleProps"
import { FC } from 'react'

export const WorkExp : FC<StyleProps> = ({main, sec, isFull}) => {

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