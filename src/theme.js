import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    primary: '"DM Sans", sans-serif',
  },
  textStyles: {
    h1: {
      fontSize: ["1.8rem", "1.8rem", "1.8rem", "2rem"],
      fontFamily: "primary",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h2: {
      fontSize: ["1.5rem", "1.5rem", "1.8rem", "2rem"],
      fontFamily: "primary",
      textTransform: "uppercase",
    },
    h3: {
      fontSize: "1.2rem",
      fontFamily: "primary",
      fontWeight: 500,
    },
    h4: {
      fontSize: ["0.9rem", "0.9rem", "1rem", "1rem"],
      fontFamily: "primary",
      fontWeight: 500,
      textTransform: "uppercase",
    },
    heading: {
      fontSize: ["2rem", "2rem", "3rem", "3rem"],
      fontFamily: "primary",
      textTransform: "uppercase",
    },
    "body-700": {
      fontSize: ["0.9rem", "0.9rem", "1rem", "1rem"],
      fontFamily: "primary",
    },
    "body-600": {
      fontFamily: "primary",
      fontSize: ["0.9rem", "0.9rem", "0.8rem", "1rem"],
      fontWeight: 700,
      textTransform: "uppercase",
    },
    "body-500": {
      fontFamily: "primary",
      fontSize: ["0.8rem", "0.8rem", "1rem"]
    },
    "number": {
      fontFamily: "primary",
      fontSize: "0.65rem",
      fontWeight: 500,
    },
  },
  colors: {
    darkRed: "#c22929",
    blackish: "#212121",
    cream: "#e5cda6",
    gray: "#999999",
    lighter: "#f2e5cf",
    white: "#ffffff",
    gray100: "#EDF2F7",
  },
});
