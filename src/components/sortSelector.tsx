import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const sortSelector = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Order by: Relevance
        </MenuButton>
        <MenuList>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Date added</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Release date</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Rating</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default sortSelector;
