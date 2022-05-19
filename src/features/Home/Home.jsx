import { SidebarLeft, SidebarRight } from "components";
import { PostTextBox } from "features";
import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import "./home.css";

export function Home() {
  return (
    <Container maxW={1280} justifyContent={"space-between"} display={"flex"}>
      <SidebarLeft />
      <Flex grow={1}>
        <PostTextBox />
      </Flex>
      <SidebarRight />
    </Container>
  );
}
