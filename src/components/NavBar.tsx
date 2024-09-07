import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { Input } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>

      <Input placeholder="Search" />
      <Switch colorScheme="teal" size="lg" />
    </HStack>
  );
};
export default NavBar;
