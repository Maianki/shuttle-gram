import React from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { SidebarLeft, SidebarRight } from "components";
import { useSelector } from "react-redux";
import { Post } from "features";

export function Bookmarks() {
  const {
    users: { allBookmarks },
    posts: { allPosts },
  } = useSelector((state) => state);

  const bookMarkedPosts = allPosts.filter((post) =>
    allBookmarks.includes(post._id)
  );
  return (
    <Container
      maxW={1280}
      justifyContent={"space-between"}
      display={"flex"}
      mt={20}
    >
      <SidebarLeft w={"20%"} />
      <Flex grow={1} direction='column' w={"60%"}>
        {bookMarkedPosts.length > 0 ? (
          bookMarkedPosts.map((post) => <Post key={post._id} post={post} />)
        ) : (
          <Heading as='h4' size='md' px={2} py={4}>
            No Bookmarks added yet
          </Heading>
        )}
      </Flex>
      <SidebarRight w={"20%"} />
    </Container>
  );
}
