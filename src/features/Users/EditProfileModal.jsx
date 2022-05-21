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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./usersSlice";

export function EditProfileModal({
  isOpen,
  onClose,
  onOpen,
  portfolio: portfolioLink,
  bio: bioData,
}) {
  const dispatch = useDispatch();
  const { userToken: token } = useSelector((state) => state.auth);
  const [portfolio, setPortfolio] = useState(portfolioLink);
  const [bio, setBio] = useState(bioData);

  const changeBioHandler = (e) => {
    setBio(e.target.value);
  };

  const changePortfolioHandler = (e) => {
    setPortfolio(e.target.value);
  };

  const editUserDataHandler = () => {
    dispatch(editUser({ token, userData: { bio, portfolio } }));
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack alignItems={"center"} pos={"relative"}>
              <Avatar
                size='md'
                name='Kent Dodds'
                src='https://bit.ly/kent-c-dodds'
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
