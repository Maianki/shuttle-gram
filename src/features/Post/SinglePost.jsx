import { SidebarLeft, SidebarRight } from "components";
import { Container, Flex, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Post } from "./Post";

export function SinglePost() {
  const {
    posts: { allPosts },
  } = useSelector((state) => state);

  const { postId } = useParams();

  const currentSinglePost = allPosts?.find((post) => post._id === postId);

  return (
    <Container
      maxW={1280}
      justifyContent={"space-between"}
      display={"flex"}
      mt={20}
    >
      <SidebarLeft w={"20%"} />
      <Flex direction='column' flexBasis={"100%"}>
        <HStack justifyContent={"space-between"} px={2} py={4}>
          {currentSinglePost ? (
            <Post post={currentSinglePost} />
          ) : (
            <Navigate to='/home' replace />
          )}
        </HStack>
      </Flex>
      <SidebarRight w={"20%"} />
    </Container>
  );
}
