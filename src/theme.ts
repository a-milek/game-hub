// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f3eefa",
      100: "#d8cee3",
      200: "#bdaece",
      300: "#a28fbb",
      400: "#886ea7",
      500: "#6f558e",
      600: "#56426e",
      700: "#3e2f4f",
      800: "#251c31",
      900: "#0d0814",
    },
  },
});

export default theme;
