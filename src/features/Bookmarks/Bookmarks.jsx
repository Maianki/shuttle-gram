import React from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { SidebarLeft, SidebarRight } from "components";
import { useSelector } from "react-redux";
import { Post } from "features";

export function Bookmarks() {
  const { allBookmarks } = useSelector((state) => state.users);
  return (
    <Container
      maxW={1280}
      justifyContent={"space-between"}
      display={"flex"}
      mt={20}
    >
      <SidebarLeft />
      <Flex grow={1} direction='column'>
        {allBookmarks.length > 0 ? (
          allBookmarks.map((post) => <Post key={post._id} post={post} />)
        ) : (
          <Heading as='h4' size='md' px={2} py={4}>
            No Bookmarks added yet
          </Heading>
        )}
      </Flex>
      <SidebarRight />
    </Container>
  );
}
