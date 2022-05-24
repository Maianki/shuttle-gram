import React, { useEffect } from "react";
import { SidebarLeft, SidebarRight } from "components";
import { Container, Flex, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Post } from "./Post";

export function SinglePost() {
  const {
    posts: { allPosts, postStatus },
  } = useSelector((state) => state);

  const { postId } = useParams();
  const currentPost = allPosts.find((post) => post._id === postId);
  console.log(currentPost);
  console.log(postStatus);
  return (
    <Container
      maxW={1280}
      justifyContent={"space-between"}
      display={"flex"}
      mt={20}
    >
      <SidebarLeft />
      <Flex grow={1} direction='column'>
        <HStack justifyContent={"space-between"} px={2} py={4}>
          <Post post={currentPost} />
        </HStack>
      </Flex>
      <SidebarRight />
    </Container>
  );
}
