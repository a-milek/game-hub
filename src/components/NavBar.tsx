import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { Input } from "@chakra-ui/react";

import { ColorModeSwitch } from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <Input placeholder="Search" width="70%" />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
export default NavBar;
