import React, { useEffect } from "react";
import { Container, Flex, Heading, HStack } from "@chakra-ui/react";
import { SidebarLeft, SidebarRight, Filters } from "components";
import { Post } from "features";
import { ProfileCard } from "./ProfileCard";
import { useParams } from "react-router-dom";
import { getUserAllPosts } from "features/Post/postSlice";
import { useSelector, useDispatch } from "react-redux";

export function Profile() {
  const { username } = useParams();
  const dispatch = useDispatch();

  const {
    posts: { allPosts },
  } = useSelector((state) => state);

  const userPosts = allPosts?.filter((post) => post.username === username);

  return (
    <Container
      maxW={1280}
      justifyContent={"space-between"}
      display={"flex"}
      mt={20}
    >
      <SidebarLeft w={"20%"} />
      <Flex grow={1} direction='column' w={"60%"}>
        <ProfileCard username={username} />
        <HStack justifyContent={"space-between"} px={2} py={4}>
          <Heading as='h4' size='md'>
            Latest Posts
          </Heading>
          <Filters />
        </HStack>
        {userPosts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </Flex>
      <SidebarRight w={"20%"} />
    </Container>
  );
}
