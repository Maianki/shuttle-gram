import React from "react";

import { Container, Flex, Heading, HStack } from "@chakra-ui/react";
import { SidebarLeft, SidebarRight, Filters } from "components";
import { Post } from "features";
import { ProfileCard } from "./ProfileCard";

export function Profile() {
  return (
    <Container
      maxW={1280}
      justifyContent={"space-between"}
      display={"flex"}
      mt={20}
    >
      <SidebarLeft />
      <Flex grow={1} direction='column'>
        <ProfileCard />
        <HStack justifyContent={"space-between"} px={2} py={4}>
          <Heading as='h4' size='md'>
            Latest Posts
          </Heading>
          <Filters />
        </HStack>
        {/* {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))} */}
      </Flex>
      <SidebarRight />
    </Container>
  );
}
