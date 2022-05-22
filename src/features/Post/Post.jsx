import {
  HStack,
  VStack,
  Avatar,
  Text,
  Button,
  IconButton,
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaRegCommentAlt,
  BiBookmarks,
  BsFillBookmarksFill,
  BiLike,
  BiDislike,
  FaEllipsisV,
} from "assets";
import { deleteUserPost } from "./postSlice";
import { addToBookmarks, removeFromBookmarks } from "features/Users/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import { PostEditModal } from "./PostEditModal";
import React from "react";

export function Post({
  post,
  post: { content, firstName, lastName, profilePic, username, _id: postId },
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user: currentUser } = useSelector((state) => state.auth);
  const { userToken: token } = useSelector((state) => state.auth);
  const { allBookmarks } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const handleBookmarks = () => {
    if (allBookmarks.some((post) => post._id === postId)) {
      console.log("removed");
      dispatch(removeFromBookmarks({ token, postId }));
    } else {
      dispatch(addToBookmarks({ token, postId }));
    }
  };

  const deletePostHandler = () => {
    dispatch(deleteUserPost({ token, postId }));
  };

  return (
    <VStack shadow={"md"} py={2} px={4} my={4} alignItems={"flex-start"}>
      <HStack
        px={4}
        justifyContent='space-between'
        alignItems={"center"}
        w={"full"}
      >
        <Box display={"flex"} alignItems='center'>
          <Avatar name={`${firstName} ${lastName}`} src={profilePic} />
          <Heading as='h6' size='xs' px={2}>
            {`${firstName} ${lastName}`}
          </Heading>
          <Text fontSize='xs' color={"gray.500"}>
            @{username}
          </Text>
        </Box>
        {currentUser.username === username && (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<FaEllipsisV />}
              variant='outline'
              borderRadius={"full"}
              border={"none"}
            />
            <MenuList>
              <MenuItem onClick={onOpen}>Edit</MenuItem>
              <MenuItem onClick={deletePostHandler}>Delete</MenuItem>
            </MenuList>
          </Menu>
        )}
      </HStack>

      <PostEditModal
        onClose={onClose}
        onOpen={onOpen}
        postData={content}
        isOpen={isOpen}
        postId={postId}
      />

      <Text px={6} pt={1}>
        {content}
      </Text>
      <Flex justifyContent={"space-around"} py={4} px={4} w={"full"}>
        <Button>
          <BiLike />
        </Button>
        <Button>
          <FaRegCommentAlt />
        </Button>
        <Button onClick={handleBookmarks}>
          {allBookmarks.some((post) => post._id === postId) ? (
            <BsFillBookmarksFill />
          ) : (
            <BiBookmarks />
          )}
        </Button>
      </Flex>
    </VStack>
  );
}
