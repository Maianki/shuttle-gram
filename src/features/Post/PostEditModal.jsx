import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { editUserPost } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";

export function PostEditModal({ onClose, postData, isOpen, postId }) {
  const [content, setContent] = useState(postData);
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const editPostHandler = async () => {
    dispatch(editUserPost({ token: userToken, postId, postData: content }));
    setContent("");
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Textarea
              value={content}
              onChange={handleInputChange}
              placeholder='Edit post..'
              size='sm'
            />
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={editPostHandler}
              w={24}
              bg={"primary"}
              color={"white"}
              _hover={{
                bg: useColorModeValue("gray.700", "gray.600"),
              }}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
