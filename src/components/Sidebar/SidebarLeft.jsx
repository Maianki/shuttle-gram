import React from "react";
import {
  Flex,
  Avatar,
  HStack,
  Box,
  Heading,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaEllipsisV,
  AiOutlineHome,
  AiOutlineRocket,
  BiBookmarks,
  CgProfile,
} from "assets";

export function SidebarLeft() {
  const createHandler = () => {};
  return (
    <div>
      <Flex
        spacing={4}
        position='sticky'
        top='20'
        maxW={"16rem"}
        fontSize={"xl"}
        height={"calc(100vh - 80px)"}
        flexDirection='column'
        justifyContent={"space-between"}
        py={6}
        px={2}
      >
        <Box>
          <Flex alignItems={"center"} lineHeight={10}>
            <AiOutlineHome />
            <Box px={2}>Home</Box>
          </Flex>
          <Flex alignItems={"center"} lineHeight={10}>
            <AiOutlineRocket />
            <Box px={2}>Profile</Box>
          </Flex>
          <Flex alignItems={"center"} lineHeight={10}>
            <BiBookmarks />
            <Box px={2}>Bookmarks</Box>
          </Flex>
          <Flex alignItems={"center"} lineHeight={10}>
            <CgProfile />
            <Box px={2}>Profile</Box>
          </Flex>
          <Button
            onClick={createHandler}
            mt={10}
            w={"full"}
            bg={"primary"}
            color={"white"}
            _hover={{
              bg: useColorModeValue("gray.700", "gray.600"),
            }}
          >
            Create New Post
          </Button>
        </Box>

        <HStack spacing='24px'>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />

          <Heading as='h5' size='sm'>
            Ankit Kumain
          </Heading>
          <Box>
            <FaEllipsisV />
          </Box>
        </HStack>
      </Flex>
    </div>
  );
}
