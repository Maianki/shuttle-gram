import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";

import { BiAbacus } from "assets";
import { useDispatch } from "react-redux";
import { sortBy } from "features/Post/postSlice";

export function Filters() {
  const dispatch = useDispatch();

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} p={2} rightIcon={<BiAbacus />}>
          Filters
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => dispatch(sortBy("trending"))}>
            Filter by trending
          </MenuItem>
          <MenuItem onClick={() => dispatch(sortBy("oldest"))}>
            Filter by oldest
          </MenuItem>
          <MenuItem onClick={() => dispatch(sortBy("recent"))}>
            Filter by recent
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
