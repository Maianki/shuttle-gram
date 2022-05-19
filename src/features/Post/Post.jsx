import { HStack, VStack, Avatar, Text, Button, Flex } from "@chakra-ui/react";
import { FaRegCommentAlt, BiBookmarks, BiLike, BiDislike } from "assets";
import React from "react";

export function Post() {
  return (
    <VStack shadow={"md"} py={2} px={4} my={4}>
      <HStack>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <Text px={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt
          laborum facilis doloremque, dolor reiciendis quos voluptatum ducimus
          cum maiores repudiandae corporis deleniti quis, voluptates distinctio?
          Aliquam praesentium optio minus.
        </Text>
      </HStack>
      <Flex justifyContent={"space-around"} py={4} px={4} w={"full"}>
        <Button>
          <BiLike />
        </Button>
        <Button>
          <FaRegCommentAlt />
        </Button>
        <Button>
          <BiBookmarks />
        </Button>
      </Flex>
    </VStack>
  );
}
