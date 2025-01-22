import { Title, MantineColor } from '@mantine/core';
import { FC } from 'react';

interface shProps {
    name : string
    desc : string
    col : MantineColor
}

export const SectionHeader : FC<shProps> = ( {name, desc, col} ) => {
    return (
        <>
            <Title order={1} style={{color: col}}>
                <u>{name}</u>
            </Title>
            <Title order={4} style={{color : col, opacity : 0.5}}>
                {desc}
            </Title>
        </>
    )
}
