import { SidebarLeft, SidebarRight, Filters } from "components";
import { PostTextBox, Post } from "features";
import { Container, Flex, Heading, HStack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getUserAllPosts } from "features/Post/postSlice";
import React, { useEffect } from "react";
import { filteredFeedData, feedData } from "utils";

export function Home() {
  const posts = useSelector((state) => state.posts.allPosts);
  const {
    users: { followUsers },
    auth: { user },
    posts: { filterBy },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAllPosts());
  }, [dispatch]);

  const feedPosts = feedData(posts, followUsers, user.username);

  const filteredFeed = filteredFeedData(filterBy, feedPosts);

  return (
    <Container
      maxW={1280}
      justifyContent={"space-between"}
      display={"flex"}
      mt={20}
    >
      <SidebarLeft w={"20%"} />
      <Flex direction='column' w={"60%"}>
        <PostTextBox />
        <HStack justifyContent={"space-between"} px={2} py={4}>
          <Heading as='h4' size='md'>
            Latest Posts
          </Heading>
          <Filters />
        </HStack>
        {filteredFeed.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </Flex>
      <SidebarRight w={"20%"} />
    </Container>
  );
}
