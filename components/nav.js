import { Box, Flex, Heading, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const Nav = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            zIndex="500"
            pos="fixed"
            width="100%"
            bg="#f0f0f0"
            color="black"
            boxShadow="lg"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    Food App
                </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }}>
                <HamburgerIcon onClick={handleToggle} fontSize="25px"/>
            </Box>

            <Stack 
                direction={{ base: "column", md: "row" }} spacing="24px" alignItems="center"
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }} mt={{ base: 4, md: 0 }}
            >
                <Text>About</Text>
                <Text>Careers</Text>
                <Text>Order</Text>
            </Stack>
      </Flex>
    )
}

export default Nav;