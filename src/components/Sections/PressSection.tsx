import { SectionHeader } from '../SectionHeader/SectionHeader'
import StyleProps from "@/types/StyleProps"
import { FC } from 'react'

export const Press : FC<StyleProps> = ({main, sec, isFull}) => {

    return (
        <>
            <SectionHeader 
              name="Press"
              desc='"Fame Is a Beast That You Can&#39;t Control or Be Prepared For" - Tom Holland'
              col={sec}
            />
        </>
    )
}