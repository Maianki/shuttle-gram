import { SidebarLeft, SidebarRight, Filters } from "components";
import { PostTextBox, Post } from "features";
import { Container, Flex, Heading, HStack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getUserAllPosts } from "features/Post/postSlice";
import React, { useEffect } from "react";

export function Home() {
  const posts = useSelector((state) => state.posts.allPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAllPosts());
  }, [dispatch]);

  return (
    <Container
      maxW={1280}
      justifyContent={"space-between"}
      display={"flex"}
      mt={20}
    >
      <SidebarLeft />
      <Flex grow={1} direction='column'>
        <PostTextBox />
        <HStack justifyContent={"space-between"} px={2} py={4}>
          <Heading as='h4' size='md'>
            Latest Posts
          </Heading>
          <Filters />
        </HStack>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </Flex>
      <SidebarRight />
    </Container>
  );
}
