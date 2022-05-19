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
        align='stretch'
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
            Home
          </Flex>
          <Flex alignItems={"center"} lineHeight={10}>
            <AiOutlineRocket /> Explore
          </Flex>
          <Flex alignItems={"center"} lineHeight={10}>
            <BiBookmarks />
            Bookmarks
          </Flex>
          <Flex alignItems={"center"} lineHeight={10}>
            <CgProfile />
            Profile
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
