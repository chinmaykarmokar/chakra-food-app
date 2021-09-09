import { Stack, Box, Heading, Text, Divider, Flex, Button } from "@chakra-ui/react";

const About = () => {
    return (
        <Stack alignItems="center" justifyContent="center" p="10" h="400px">
            <Box>
                <Heading as="h3">ABOUT US</Heading>
            </Box>
            <Divider/>
            <Box p="5">
                <Flex w={[300,400,550]}>
                    <Text>We are a food app from where you can order food items from a number of restaurants as per your choice and get them delivered as per your convenience.</Text>
                </Flex>
            </Box>
            <Box>
                <Button colorScheme="red" boxShadow="md red">LEARN MORE</Button>
            </Box>
        </Stack>
    )
}

export default About;