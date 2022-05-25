import {
  HStack,
  VStack,
  Avatar,
  Text,
  IconButton,
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import {
  FaRegCommentAlt,
  BiBookmarks,
  BsFillBookmarksFill,
  AiOutlineLike,
  AiFillLike,
  FaEllipsisV,
  BsDot,
} from "assets";
import { Comment } from "./Comment";
import { deleteUserPost, likePost, dislikePost } from "./postSlice";
import { addToBookmarks, removeFromBookmarks } from "features/Users/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import { getPostTime } from "utils";
import { PostEditModal } from "./PostEditModal";
import { Link } from "react-router-dom";

export function Post({
  post,
  post: {
    likes,
    content,
    firstName,
    lastName,
    profilePic,
    username,
    _id: postId,
    comments,
    createdAt,
  },
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    auth: { user: currentUser, userToken: token },
    users: { allBookmarks },
  } = useSelector((state) => state);

  let timeElapsed = getPostTime(createdAt);

  const dispatch = useDispatch();

  const handleBookmarks = () => {
    if (allBookmarks.some((id) => id === postId)) {
      console.log("removed");
      dispatch(removeFromBookmarks({ token, postId }));
    } else {
      dispatch(addToBookmarks({ token, postId }));
    }
  };

  const deletePostHandler = () => {
    dispatch(deleteUserPost({ token, postId }));
  };

  const postLikesHandler = () => {
    if (likes.likedBy.some((user) => user.username === currentUser.username)) {
      dispatch(dislikePost({ token, postId }));
    } else {
      dispatch(likePost({ token, postId }));
    }
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
          <Text
            fontSize='xs'
            display={"flex"}
            alignItems={"center"}
            color={"gray.500"}
          >
            <BsDot />
            {timeElapsed}
          </Text>
        </Box>
        {currentUser.username === username && (
          <Box>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<FaEllipsisV />}
                variant='ghost'
                borderRadius={"full"}
                border={"none"}
              />
              <MenuList>
                <MenuItem onClick={onOpen}>Edit</MenuItem>
                <MenuItem onClick={deletePostHandler}>Delete</MenuItem>
              </MenuList>
            </Menu>
          </Box>
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
      <Divider />
      <Flex justifyContent={"space-around"} px={4} w={"full"}>
        <IconButton
          variant='ghost'
          aria-label='like'
          icon={
            likes?.likedBy?.some(
              (user) => user.username === currentUser.username
            ) ? (
              <>
                <AiFillLike /> {likes.likeCount}
              </>
            ) : (
              <AiOutlineLike />
            )
          }
          onClick={postLikesHandler}
        ></IconButton>

        <Link to={`/post/${postId}`}>
          <IconButton
            variant='ghost'
            aria-label='comment'
            icon={<FaRegCommentAlt />}
          />
        </Link>

        <IconButton
          onClick={handleBookmarks}
          variant='ghost'
          aria-label='bookmarks'
          icon={
            allBookmarks.some((id) => id === postId) ? (
              <BsFillBookmarksFill />
            ) : (
              <BiBookmarks />
            )
          }
        ></IconButton>
      </Flex>
      <Divider />
      <Comment postId={postId} comments={comments} />
    </VStack>
  );
}
