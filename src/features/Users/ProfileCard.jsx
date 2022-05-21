import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { EditProfileModal } from "./EditProfileModal";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUser } from "./usersSlice";
import { useEffect } from "react";

export function ProfileCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const {
    auth: { user },
    users: { currentUser },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getSingleUser({ username: user.username }));
  }, [dispatch, user.username]);

  const {
    firstName = "",
    lastName = "",
    portfolio = "",
    profilePic = "",
    followers = "",
    following = "",
    bio = "",
    username = "",
  } = currentUser || user;

  console.log(currentUser);
  return (
    <Center py={6}>
      <EditProfileModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        bio={bio}
        portfolio={portfolio}
      />
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"md"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={profilePic}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {`${firstName} ${lastName}`}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @{username}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {bio}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"column"} mt={6}>
          <Link href='#' color={"red"}>
            {portfolio}
          </Link>

          <Button onClick={onOpen}>Edit</Button>
        </Stack>

        <Stack
          mt={8}
          direction={"row"}
          justifyContent={"space-between"}
          spacing={4}
        >
          <Heading as='h6' size='xs'>
            {following.length} Following
          </Heading>
          <Heading as='h6' size='xs'>
            0 Posts
          </Heading>
          <Heading as='h6' size='xs'>
            {followers.length} Followers
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
