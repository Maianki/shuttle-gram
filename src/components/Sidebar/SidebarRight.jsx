import {
  Flex,
  Input,
  InputLeftElement,
  InputGroup,
  HStack,
  StackDivider,
  Box,
  Divider,
  Heading,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { Search2Icon, SmallAddIcon } from "@chakra-ui/icons";
import React from "react";

export function SidebarRight() {
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
        <HStack spacing='24px' p={2}>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />

          <Heading as='h5' size='sm'>
            Ankit Kumain
          </Heading>
          <Box
            fontSize={12}
            display='flex'
            alignItems={"center"}
            color={useColorModeValue("primaryDark", "gray.400")}
          >
            Follow <SmallAddIcon />
          </Box>
        </HStack>
        <HStack spacing='24px' p={2}>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />

          <Heading as='h5' size='sm'>
            Ankit Kumain
          </Heading>
          <Box
            fontSize={12}
            display='flex'
            alignItems={"center"}
            color={useColorModeValue("primaryDark", "gray.400")}
          >
            Follow <SmallAddIcon />
          </Box>
        </HStack>
        <HStack spacing='24px' p={2}>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />

          <Heading as='h5' size='sm'>
            Ankit Kumain
          </Heading>
          <Box
            fontSize={12}
            display='flex'
            alignItems={"center"}
            color={useColorModeValue("primaryDark", "gray.400")}
          >
            Follow <SmallAddIcon />
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
}
