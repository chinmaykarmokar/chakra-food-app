import { Flex, Image, Stack, Heading, Button } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselDiv = () => {
    return (
        <Carousel>
          <Flex>
              <Image src="https://rs.projects-abroad.net/v1/hero/indian-cuisine-south-africa-food-tours-product-5e146c7a97eb2.[1600].jpeg" />
              <Stack color="#fff" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                <Heading as="h2" textShadow="1px 1px #000" opacity="0.9">Satisfy your cravings</Heading>
                <Button colorScheme="red" boxShadow="md red">ORDER NOW</Button>
              </Stack>    
          </Flex>
          <Flex>
              <Image src="https://rs.projects-abroad.net/v1/hero/indian-cuisine-south-africa-food-tours-product-5e146c7a97eb2.[1600].jpeg" />
              <Stack color="#fff" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                <Heading as="h2" textShadow="1px 1px #000" opacity="0.9">See Career Options</Heading>
                <Button colorScheme="red" boxShadow="md red">CAREER</Button>
              </Stack>
          </Flex>
        </Carousel>
    )
}

export default CarouselDiv;