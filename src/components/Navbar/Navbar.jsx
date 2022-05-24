import {
  Box,
  Flex,
  Image,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { siteLogo } from "assets";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { pathname } = useLocation();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position={pathname === "/" || pathname === "/sign-up" ? "" : "fixed"}
        top='0'
        left='0'
        right={0}
        zIndex={
          pathname === "/login" || pathname === "/sign-up" ? "auto" : "1200"
        }
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              boxSize='100px'
              objectFit='cover'
              src={siteLogo}
              alt='Dan Abramov'
            />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
