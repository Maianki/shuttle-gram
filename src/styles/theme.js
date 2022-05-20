import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config });

export const myNewTheme = extendTheme({
  colors: {
    primary: "#4b4453",
    primaryDark: "#443d4b",
    secondary: "#9a94a1",
  },
});
