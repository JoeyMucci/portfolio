import { Center, Image, Text, Button, MantineColor, useMantineColorScheme } from '@mantine/core'
import { themeL } from '../themeL'
import PANIC from '../imgs/PANIC.gif'

const lightMain : MantineColor = themeL.colors!.lightBlue![4]
const lightSec : MantineColor = themeL.colors!.pink![4]
const darkMain : MantineColor = themeL.colors!.dark![7]
const darkSec : MantineColor = themeL.colors!.orange![6]

export const ErrorPage = () => {
    const { colorScheme } = useMantineColorScheme();

    return (
        <>
            <Center>
                <Image
                    mt="xl"
                    w={350}
                    h={350}
                    radius="lg"
                    src={PANIC}
                    style={colorScheme === 'light' ? 
                        {borderColor: lightSec, borderWidth: "5px", borderStyle: "solid"} :
                        {borderColor: darkSec, borderWidth: "5px", borderStyle: "solid"}
                    }
                />
            </Center>

            <Center>
                <Text style={colorScheme === 'light' ? {color : lightSec} : {color : darkSec}}>
                    This Page Does Not Exist!!!
                </Text>
            </Center>

            <Center>
                <Button component="a" radius="lg" style={colorScheme === 'light' ?
                    {color : lightMain, backgroundColor : lightSec} : 
                    {color : darkMain, backgroundColor : darkSec}}
                    href="/"
                >
                    Back to Website
                </Button>
            </Center>
        </>
    )
}