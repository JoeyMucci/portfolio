import { SectionHeader } from '../SectionHeader/SectionHeader'
import StyleProps from "@/types/StyleProps"
import { Paper, Text, Stack, Group } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import classes from './Sections.module.css'
import { FC } from 'react'

interface ArticleProps {
    title : string
    url : string
    date : Date
}

const articleInfo : ArticleProps[] = [
    {
        title : "Mucci Named to America East All-Academic Team",
        url : "https://njithighlanders.com/news/2024/11/26/mens-cross-country-mucci-named-to-america-east-all-academic-team.aspx",
        date : new Date("11/26/24")
    },
    // {
    //     title : "America East Indoors Ends With Major Women's Medal Haul, Men's Major Award",
    //     url : "https://njithighlanders.com/news/2024/2/20/womens-track-field-america-east-indoors-ends-with-major-womens-medal-haul-mens-major-award.aspx",
    //     date : new Date("2/20/24")
    // },
    {
        title : "Gradient Boosting from Scratch in Python with JAX",
        url: "https://medium.com/@jpm73/gradient-boosting-from-scratch-in-python-with-jax-685acfa740",
        date : new Date("11/24/22")
    },
]

export const Press : FC<StyleProps> = ({main, sec, isFull}) => {

    const Article : FC<ArticleProps> = ({title, url, date}) => {
        const { hovered, ref } = useHover();
        return (
            <Paper 
              w={350} 
              h={350}
              radius="lg" 
              ref={ref} 
              style={
                hovered ? 
                    {backgroundColor : sec, opacity : .75} : 
                    {backgroundColor : sec}
              }
              onClick={() => window.open(url, '_blank')} 
            >

                <Stack h={350} justify='center'>
                    <Text ta="center" className={classes.unselectable} style={{color : main}} size="lg" fw={700}>
                        {title}
                    </Text>

                    <Text ta="center" className={classes.unselectable} style={{color : main}} size="sm">
                        {date.toDateString()}
                    </Text>
                </Stack>
                
            </Paper>
        )
    }

    return (
        <>
            <SectionHeader 
              name="Press"
              desc="Published Articles Either Authored By Or Pertaining To Me"
              col={sec}
            />

            {isFull ? (
                <Stack>
                    {Array.from({length : articleInfo.length / 2}, (_, i) => i).map((index) => {
                        const ci1 : ArticleProps = articleInfo[index * 2];
                        const ci2 : ArticleProps = articleInfo[index * 2 + 1]
                        return(
                            <Group key={index}>
                                <Article
                                    {...ci1}
                                />

                                <Article
                                    {...ci2}
                                />
                            </Group>    
                        )  
                    })}
                </Stack>
            ) : (
                <Stack>
                    {articleInfo.map((ci, i) => (
                        <Article
                            key={i}
                            {...ci}
                        />
                    ))}
                </Stack>
            )} 
        </>
    )
}