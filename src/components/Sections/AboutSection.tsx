import { Image } from '@mantine/core'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import ColorProps from "@/types/ColorProps"
import { FC } from 'react'

export const About : FC<ColorProps> = ({main, sec, isFull}) => {

    return (
        <>
            <SectionHeader
                name="About"
                desc="A Brief Overview of Who I Am"
                col={sec}
            />
            <Image
                radius="md"
                w={300}
                src="/src/headshot.png"
                style={{borderColor: sec, borderWidth: "5px", borderStyle: "solid"}}
            />
        </>
    )
}