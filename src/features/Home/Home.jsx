import { SidebarLeft, SidebarRight, Filters } from "components";
import { PostTextBox, Post } from "features";
import { Container, Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import "./home.css";

export function Home() {
  return (
    <Container maxW={1280} justifyContent={"space-between"} display={"flex"}>
      <SidebarLeft />
      <Flex grow={1} direction='column'>
        <PostTextBox />
        <HStack justifyContent={"space-between"} px={2} py={4}>
          <Heading as='h4' size='md'>
            Latest Posts
          </Heading>
          <Filters />
        </HStack>
        <Post />
        <Post />
      </Flex>
      <SidebarRight />
    </Container>
  );
}
