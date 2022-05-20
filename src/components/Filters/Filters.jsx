import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import { BiAbacus } from "assets";

export function Filters() {
  return (
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
  );
}
