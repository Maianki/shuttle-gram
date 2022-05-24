import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";

import { BiAbacus } from "assets";
import { useSelector } from "react-redux";

export function Filters() {
  const { posts: allPosts } = useSelector((state) => state);

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} p={2} rightIcon={<BiAbacus />}>
          Filters
        </MenuButton>
        <MenuList>
          <MenuItem>Filter by trending</MenuItem>
          <MenuItem>Filter by oldest</MenuItem>
          <MenuItem>Filter by recent</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
