import {
  HStack,
  VStack,
  Avatar,
  Text,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FaRegCommentAlt, BiBookmarks, BiLike, BiDislike } from "assets";
import React from "react";

export function Post({
  post: { content, firstName, lastName, profilePic, username },
}) {
  return (
    <VStack shadow={"md"} py={2} px={4} my={4} alignItems={"stretch"}>
      <HStack px={4}>
        <Avatar name={`${firstName} ${lastName}`} src={profilePic} />
        <Heading as='h6' size='xs'>
          {`${firstName} ${lastName}`}
        </Heading>
        <Text fontSize='xs' color={"gray.500"}>
          @{username}
        </Text>
      </HStack>
      <Text px={2}>{content}</Text>
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
