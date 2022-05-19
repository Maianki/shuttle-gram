import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { loginUser } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link as ReactRouterLink } from "react-router-dom";
import { toast } from "react-toastify";

export function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    isRememberMe: true,
  });

  const changeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (userDetails.email === "" || userDetails.password === "") {
      toast.error("Please enter both email and password", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch(loginUser(userDetails));
    }
  };

  const guestLoginHandler = (e) => {
    e.preventDefault();
    setUserDetails({
      ...userDetails,
      email: "johndoe@gmail.com",
      password: "johnDoe123",
    });
    dispatch(loginUser({ email: "johndoe@gmail.com", password: "johnDoe123" }));
    navigate("/home");
  };
  return (
    <Flex
      minH={"calc(100vh - 80px)"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to shuttleGram</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            New to shuttleGram?{" "}
            <Link as={ReactRouterLink} to='/sign-up' color={"blue.400"}>
              Sign up
            </Link>{" "}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id='email' isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                placeholder='johndoe@gmail.com'
                onChange={changeHandler}
                value={userDetails.email}
                name='email'
              />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                placeholder='*********'
                onChange={changeHandler}
                value={userDetails.password}
                name='password'
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox
                  onChange={() =>
                    setUserDetails({
                      ...userDetails,
                      isRememberMe: !userDetails.isRememberMe,
                    })
                  }
                  value={userDetails.isRememberMe}
                  isChecked={userDetails.isRememberMe}
                >
                  Remember me
                </Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={loginHandler}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
              <Button
                onClick={guestLoginHandler}
                bg={"gray.400"}
                color={"white"}
                _hover={{
                  bg: "gray.500",
                }}
              >
                Test Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
