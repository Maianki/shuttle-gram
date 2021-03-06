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
  HStack,
} from "@chakra-ui/react";
import { EditProfileModal } from "./EditProfileModal";
import { ThreeDots } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUser } from "./usersSlice";
import { useEffect } from "react";

export function ProfileCard({ username }) {
  const boxBg = useColorModeValue("white", "gray.900");
  const bioTextColor = useColorModeValue("gray.700", "gray.400");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const {
    users: { currentUser, currentUserStatus },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getSingleUser({ username }));
  }, [dispatch, username]);

  return (
    <Center py={6}>
      {currentUserStatus === "loading" && (
        <HStack justifyContent={"center"}>
          <ThreeDots color='#00BFFF' height={20} width={40} />
        </HStack>
      )}
      {currentUserStatus === "success" && (
        <>
          <EditProfileModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            bio={currentUser.bio}
            profilePic={currentUser.profilePic}
            portfolio={currentUser.portfolio}
          />
          <Box
            maxW={"320px"}
            w={"full"}
            bg={boxBg}
            boxShadow={"md"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <Avatar
              size={"xl"}
              src={currentUser.profilePic}
              alt={"Avatar Alt"}
              mb={4}
              pos={"relative"}
            />
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {`${currentUser.firstName} ${currentUser.lastName}`}
            </Heading>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              @{currentUser.username}
            </Text>
            <Text textAlign={"center"} color={bioTextColor} px={3}>
              {currentUser.bio}
            </Text>

            <Stack
              align={"center"}
              justify={"center"}
              direction={"column"}
              mt={6}
            >
              <Link href='#' color={"red"}>
                {currentUser.portfolio}
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
                {currentUser.following.length} Following
              </Heading>
              <Heading as='h6' size='xs'>
                0 Posts
              </Heading>
              <Heading as='h6' size='xs'>
                {currentUser.followers.length} Followers
              </Heading>
            </Stack>
          </Box>
        </>
      )}
    </Center>
  );
}
