"use client";
import { Raleway } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const raleway = Raleway({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: raleway.style.fontFamily,
  },
  palette: {
    primary: {
      main: red[400],
    },
    secondary: {
      main: "#56d4cc",
    },
  },
});

export default theme;
