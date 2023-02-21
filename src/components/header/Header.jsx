import React from "react";
import {
  Box,
  Container,
  Link,
  Button,
  Image,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box className="header" color={"#000"} top={0} left={0}>
      {/* <Box className="header" color={"#000"} pos={"fixed"} w={"100%" }> */}
        <Container as={Stack} maxW={"6xl"} py={5}>
          <SimpleGrid
            templateColumns={{
              sm: "1fr 1fr",
              md: " 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            }}
            spacing={4}
            py={8}
            fontFamily="inherit"
            fontSize={"22px"}
          >
            <Stack align={"flex-start"}>
              <Link href="/#noCodeTools">
                <Image
                  w={"200px"}
                  marginRight={"10px"}
                  src={
                    "https://res.cloudinary.com/sendchamp/image/upload/v1647472661/Sendchamp%20Website/logos/NavLogo_nhyqah.svg"
                  }
                  display={{ md: "flex"}}
                />
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href="/#noCodeTools">Products</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href="/#noCodeTools">Developers</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href="/#noCodeTools">Company</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href="/#noCodeTools">Use Cases</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href="/#noCodeTools">Pricing</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href="/#noCodeTools">Login</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Button
                colorScheme={"green"}
                bg={"#197EEF"}
                rounded={"12px"}
                px={8}
                py={5}
                _hover={{
                  bg: "#3375B9",
                }}
              >
                Get Started
              </Button>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href="/#noCodeTools">NG</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Header;
