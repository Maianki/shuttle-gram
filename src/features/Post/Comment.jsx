import React, { useState } from "react";
import {
  Box,
  HStack,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useColorModeValue,
  Divider,
  Avatar,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { addComment, deleteComment } from "./postSlice";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export function Comment({ postId, comments }) {
  const dispatch = useDispatch();
  const commentsBgColors = useColorModeValue("gray.100", "gray.600");
  const [commentData, setCommentData] = useState("");

  const {
    users: { allUsers },
    posts: { postStatus },
    auth: { userToken, user },
  } = useSelector((state) => state);

  const commentDataChangeHandler = (e) => {
    setCommentData(e.target.value);
  };

  const commentHandler = () => {
    if (commentData === "") {
      toast.warn("Comment cannot be empty!");
    } else {
      dispatch(
        addComment({
          token: userToken,
          postId,
          commentData: { text: commentData },
        })
      );
    }
    setCommentData("");
  };

  const deleteCommentHandler = (postId, commentId) => {
    dispatch(deleteComment({ token: userToken, postId, commentId }));
  };

  return (
    <>
      <HStack w={"full"}>
        <InputGroup size='md'>
          <Input
            pr='4.5rem'
            type={"text"}
            value={commentData}
            placeholder='Send your reply'
            onChange={commentDataChangeHandler}
          />
          <InputRightElement width='24'>
            <Button
              onClick={commentHandler}
              variant='unstyled'
              w={24}
              h={"80%"}
              mr={1}
              bg={"primary"}
              color={"white"}
              _hover={{
                bg: useColorModeValue("gray.700", "gray.600"),
              }}
            >
              Comment
            </Button>
          </InputRightElement>
        </InputGroup>
      </HStack>
      {postStatus === "success" &&
        comments?.map(({ username, text, _id }) => {
          const profileImg = allUsers.find(
            (currUser) => currUser.username === username
          )?.profilePic;

          return (
            <Box
              key={_id}
              w={"full"}
              px={2}
              pb={1}
              bgColor={commentsBgColors}
              borderRadius={"md"}
            >
              <Divider />
              <HStack>
                <Avatar size='sm' name={username} src={profileImg} />
                <Box flexGrow={1} alignContent={"center"} px={1}>
                  <Text color={"gray.500"} fontSize='xs' w='full' pt={1}>
                    @{username}
                  </Text>
                  <Text w={"full"} my={0}>
                    {text}
                  </Text>
                </Box>
                {user.username === username && (
                  <IconButton
                    variant={"ghost"}
                    aria-label={"delete"}
                    icon={<DeleteIcon />}
                    onClick={() => deleteCommentHandler(postId, _id)}
                  />
                )}
              </HStack>
            </Box>
          );
        })}
    </>
  );
}
