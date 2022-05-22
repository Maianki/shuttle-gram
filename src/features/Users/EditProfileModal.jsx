import React from "react";
import {
  Avatar,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./usersSlice";
import { cloudinaryAPIService } from "services";

export function EditProfileModal({
  isOpen,
  onClose,
  onOpen,
  profilePic,
  portfolio: portfolioLink,
  bio: bioData,
}) {
  const dispatch = useDispatch();
  const { userToken: token } = useSelector((state) => state.auth);
  const [portfolio, setPortfolio] = useState(portfolioLink);
  const [bio, setBio] = useState(bioData);
  const [url, setUrl] = useState();

  const changeBioHandler = (e) => {
    setBio(e.target.value);
  };

  const changePortfolioHandler = (e) => {
    setPortfolio(e.target.value);
  };

  const editUserDataHandler = () => {
    dispatch(
      editUser({ token, userData: { bio, portfolio, profilePic: url } })
    );
    onClose();
  };

  const handleImageSelect = async (e) => {
    try {
      let res = await cloudinaryAPIService(e.target.files[0]);
      let json = await res.json();
      setUrl(json.secure_url);
    } catch (err) {
      console.log(err);
    }
  };

  const inputFileRef = useRef();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack
              alignItems={"center"}
              pos={"relative"}
              onClick={() => inputFileRef.current.click()}
            >
              <Avatar
                size='md'
                name='Profile pic'
                src={profilePic}
                cursor={"pointer"}
              />
              <Box
                cursor={"pointer"}
                position={"absolute"}
                bottom={"-3"}
                right={"178"}
                fontSize={"xl"}
              >
                <AiFillCamera />
              </Box>
            </Stack>
            <Input
              type={"file"}
              onChange={handleImageSelect}
              ref={inputFileRef}
              hidden
            />
            <FormControl>
              <FormLabel>Bio</FormLabel>
              <Input
                placeholder='Bio'
                onChange={changeBioHandler}
                value={bio}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Portfolio</FormLabel>
              <Input
                placeholder='Portfolio'
                onChange={changePortfolioHandler}
                value={portfolio}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bg={"primary"}
              color={"white"}
              mr={4}
              _hover={{
                bg: useColorModeValue("gray.700", "gray.600"),
              }}
              onClick={editUserDataHandler}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
