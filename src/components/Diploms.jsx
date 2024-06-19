import { Typography } from "@mui/material";
import React from "react";
import Gallery from "./Gallery/Gallery";

export default function Diploms() {
  return (
    <div>
      <Typography
        gutterBottom
        align="right"
        sx={{ color: "#56D4CC", fontWeight: 600, mt: 6 }}
        variant="body1"
      >
        Кваліфікація та курси
      </Typography>
      <Typography
        gutterBottom
        align="right"
        sx={{ color: "#FF6C6C", fontWeight: 500 }}
        variant="h5"
      >
        Моя освіта та дипломи
      </Typography>
      <Gallery />
    </div>
  );
}
