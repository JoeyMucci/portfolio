import { SideNavBar } from '@/components/SideNavBar/SideNavBar';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Stack } from '@mantine/core';
import { useState } from 'react';
import axios from 'axios';

function Stats() {
    const pathold : string = `https://leetcode.com/graphql?query=query%20%7B%20userContestRanking
    // (username%3A%20%22jmucc314%22)%20%7B%20rating%20%7D%20%7D`

    const path : string = `https://api.chess.com/pub/player/joeypat11/stats`

    const [chessRating, setChessRating] = useState<number | string>("Loading..." )

    axios.get(path).then(
      (response) => {
          setChessRating(response.data.chess_rapid.last.rating)
      },
      (_) => {
        setChessRating('Unavailable')
      }
    )
    

    return (
      <p>{chessRating}</p>
    )

    /*
    https://leetcode.com/graphql?query=query%20%7B%20userContestRanking(username%3A%20%22jmucc314%22)%20%7B%20rating%20%7D%20%7D
    */
}

export function HomePage() {
  // const { colorScheme } = useMantineColorScheme();
  // return (
  //   <Group>
  //     <SideNavBar />
  //     <ColorSchemeToggle />

  //     <Center>
  //       <Button color={colorScheme === 'light' ? 'pink' : 'orange'}  >
  //         Responsive Button
  //       </Button>    

  //       <Text>
  //         Blah Blah Blah 
  //       </Text>
  //     </Center>
  //   </Group>
  // );

  return (
    <>
      <SideNavBar />     
      <Stack align="center">
        <Stats />
      </Stack>
    </>
  )
}
