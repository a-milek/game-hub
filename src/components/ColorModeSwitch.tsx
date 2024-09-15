import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="purple"
        size="lg"
      />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};
