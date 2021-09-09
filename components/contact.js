import { Stack, Box, Heading, Text, Divider, Flex, Button } from "@chakra-ui/react";

const ContactUs = () => {
    return (
        <Stack alignItems="center" justifyContent="center" p="10" h="400px" bg="red.100">
            <Box>
                <Heading as="h3">CONTACT US</Heading>
            </Box>
            <Divider/>
            <Box p="5">
                <Flex w={[300,400,550]} alignItems="center" justifyContent="center">
                    <Text>It's food lovers like you who inspire us to do what we do. Your comments, ideas and questions push us to go that extra mile, every time. So any suggestions, complaints, compliments, feel free to contact us!</Text>
                </Flex>
            </Box>
            <Box>
                <Button colorScheme="red" boxShadow="md red">CONTACT US</Button>
            </Box>
        </Stack>
    )
}

export default ContactUs;