import {
  Flex,
  Input,
  InputLeftElement,
  InputGroup,
  HStack,
  StackDivider,
  Divider,
  Heading,
  Avatar,
  useColorModeValue,
  Text,
  Button,
} from "@chakra-ui/react";
import { Search2Icon, SmallAddIcon } from "@chakra-ui/icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addUserToFollow,
  removeUserFromFollow,
} from "features/Users/usersSlice";

export function SidebarRight() {
  const dispatch = useDispatch();
  const {
    users: { currentUser, allUsers, followUsers },
    auth: { userToken },
  } = useSelector((state) => state);

  const followBoxColor = useColorModeValue("primaryDark", "gray.400");

  const usersSuggestion = allUsers.reduce((suggestedUsers, user) => {
    return user._id === currentUser?._id ||
      currentUser?.following?.find(
        (suggestedUser) => suggestedUser._id === user._id
      )
      ? suggestedUsers
      : [...suggestedUsers, user];
  }, []);

  const btnFollowHandler = (followUserId) => {
    if (followUsers.some((followUser) => followUser._id === followUserId)) {
      dispatch(removeUserFromFollow({ token: userToken, followUserId }));
    } else {
      dispatch(addUserToFollow({ token: userToken, followUserId }));
    }
  };

  console.log(followUsers);

  return (
    <Flex
      spacing={4}
      position='sticky'
      top='20'
      w={"20rem"}
      fontSize={"xl"}
      height={"calc(100vh - 80px)"}
      flexDirection='column'
      py={6}
      px={2}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<Search2Icon color='gray.300' />}
        />
        <Input type='text' placeholder='Search user' />
      </InputGroup>
      <Divider />
      <Flex
        divider={<StackDivider borderColor='gray.200' />}
        align='stretch'
        mt={4}
        p={2}
        direction={"column"}
        boxShadow='base'
      >
        <Heading as='h5' size='sm' p={2}>
          Who to follow?
        </Heading>
        <Divider />
        {usersSuggestion.map((user) => {
          return (
            <HStack
              spacing='24px'
              p={2}
              key={user._id}
              justifyContent={"space-between"}
            >
              <HStack>
                <Avatar
                  name={`${user.firstName} ${user.lastName}`}
                  src={user.profilePic}
                />
                <Text
                  size='sm'
                  fontSize={14}
                >{`${user.firstName} ${user.lastName}`}</Text>
              </HStack>

              <Button
                size={"sm"}
                color={followBoxColor}
                variant={"ghost"}
                onClick={() => btnFollowHandler(user._id)}
              >
                {followUsers.some(
                  (followUser) => followUser._id === user._id
                ) ? (
                  <>
                    <span>following</span>
                  </>
                ) : (
                  <>
                    <span>follow</span>
                    <SmallAddIcon />
                  </>
                )}
              </Button>
            </HStack>
          );
        })}
      </Flex>
    </Flex>
  );
}
