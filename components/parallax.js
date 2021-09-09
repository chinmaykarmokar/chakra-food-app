import { Box, Flex, Heading, Text, Button, Stack, Divider } from "@chakra-ui/react";
import { Parallax } from 'react-parallax';

const ParallaxDiv = () => {
    return (
        <Parallax blur={0} bgImage="https://www.besthealthmag.ca/wp-content/uploads/2019/07/junk-food-1.gif" bgImageAlt="the cat" strength={200}>
            <Box>
                <Stack alignItems="center" justifyContent="center" p="10" h="400px" color="#000">
                    <Box>
                        <Heading as="h3">CAREERS</Heading>
                    </Box>
                    <Divider/>
                    <Box p="5">
                        <Flex w={[300,400,550]} bg="red" p="5" opacity="0.95" borderRadius="10px" color="#fff" alignItems="center" justifyContent="center">
                            <Text>Hungry to make a difference? There's always room at our table. Pull up a seat.</Text>
                        </Flex>
                    </Box>
                    <Box>
                        <Button colorScheme="red" boxShadow="md red">LEARN MORE</Button>
                    </Box>
                </Stack>
            </Box>
        </Parallax>
    )
}

export default ParallaxDiv;