import { Flex, SimpleGrid, Box, Heading } from "@chakra-ui/react";
import { FaAppStoreIos } from "react-icons/fa";
import { MdAndroid } from "react-icons/md";

const Footer = () => {
    return (
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        overflow="hidden" 
        width="100%"
        bg="#f0f0f0"
        color="black"
        boxShadow="dark-lg"
      >
        <SimpleGrid columns={[1, null, 2]}spacing="8">
          <Box>
            <Heading as="h6" fontSize="20px">Food App</Heading>
          </Box>
          <Box>
            <Heading as="h6" fontSize="20px">Download the App</Heading>
            <br/>
            <Flex flexWrap="wrap" fontSize="40px" color="red.500"><MdAndroid /> &nbsp; <FaAppStoreIos /></Flex>
          </Box>
        </SimpleGrid>
      </Flex>
    )
}

export default Footer;