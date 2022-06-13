import React from "react";
import {
  Flex,
  Avatar,
  HStack,
  Box,
  Heading,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaEllipsisV,
  AiOutlineHome,
  AiOutlineRocket,
  BiBookmarks,
  CgProfile,
} from "assets";
import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "features/Auth/authSlice";

export function SidebarLeft() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    auth: { user },
  } = useSelector((state) => state);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };
  return (
    <div>
      <Flex
        spacing={4}
        position='sticky'
        top='20'
        maxW={"20rem"}
        minW={"16rem"}
        fontSize={"xl"}
        height={"calc(100vh - 80px)"}
        flexDirection='column'
        justifyContent={"space-between"}
        py={6}
        px={2}
        pr={6}
      >
        <Box>
          <NavLink
            to='/home'
            className={({ isActive }) =>
              isActive
                ? `${styles.isNavLinkActive} ${styles.sidebarMenuNavLink}`
                : `${styles.isNavLinkInactive} ${styles.sidebarMenuNavLink}`
            }
          >
            <Flex alignItems={"center"} lineHeight={10}>
              <AiOutlineHome />
              <Box px={2}>Home</Box>
            </Flex>
          </NavLink>
          <NavLink
            to='/explore'
            className={({ isActive }) =>
              isActive
                ? `${styles.isNavLinkActive} ${styles.sidebarMenuNavLink}`
                : `${styles.isNavLinkInactive} ${styles.sidebarMenuNavLink}`
            }
          >
            <Flex alignItems={"center"} lineHeight={10}>
              <AiOutlineRocket />
              <Box px={2}>Explore</Box>
            </Flex>
          </NavLink>

          <NavLink
            to='/bookmarks'
            className={({ isActive }) =>
              isActive
                ? `${styles.isNavLinkActive} ${styles.sidebarMenuNavLink}`
                : `${styles.isNavLinkInactive} ${styles.sidebarMenuNavLink}`
            }
          >
            <Flex alignItems={"center"} lineHeight={10}>
              <BiBookmarks />
              <Box px={2}>Bookmarks</Box>
            </Flex>
          </NavLink>

          <NavLink
            to={`/profile/${user.username}`}
            className={({ isActive }) =>
              isActive
                ? `${styles.isNavLinkActive} ${styles.sidebarMenuNavLink}`
                : `${styles.isNavLinkInactive} ${styles.sidebarMenuNavLink}`
            }
          >
            <Flex alignItems={"center"} lineHeight={10}>
              <CgProfile />
              <Box px={2}>Profile</Box>
            </Flex>
          </NavLink>

          <Button
            onClick={handleLogout}
            mt={10}
            w={"full"}
            bg={"primary"}
            color={"white"}
            _hover={{
              bg: useColorModeValue("gray.700", "gray.600"),
            }}
          >
            Logout
          </Button>
        </Box>

        <HStack spacing='24px'>
          <Avatar name='Dan Abrahmov' src={user.profilePic} />

          <Heading as='h5' size='sm'>
            {`${user.firstName} ${user.lastName}`}
          </Heading>
          <Box></Box>
        </HStack>
      </Flex>
    </div>
  );
}
