import { SectionHeader } from '../SectionHeader/SectionHeader'
import StyleProps from "@/types/StyleProps"
import { FC } from 'react'

export const Press : FC<StyleProps> = ({main, sec, isFull}) => {

    return (
        <>
            <SectionHeader 
              name="Press"
              desc="Published Articles Either Authored By Or Pertaining To Me"
              col={sec}
            />
        </>
    )
}