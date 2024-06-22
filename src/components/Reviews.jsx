"use client";
import { Box, Container, Paper, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { wrap } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Reviews() {
  return (
    <div>
      <Typography
        variant="h4"
        component="h4"
        align="center"
        sx={{ color: "#FF6C6C", fontWeight: 500 }}
      >
        Відгуки моїх клієнтів
      </Typography>
      <Paper
        elevation={8}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
          mt: 2,
          p: 2,
          borderRadius: 4,
          mb: 2,
        }}
      >
        <Box sx={{ width: 300 }}>
          <Image src="/review.jpg" width={300} height={150} />
        </Box>
        <div
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <Typography variant="h6">
            Раджу всім. Людина з якою приємно працювати, після відвідин занять
            отримав багато специфічного досвіду, став впевненішим у собі.
            Заняття проводяться у доволі легкій, ненав'язливій формі. З часом
            все глибше пізнаю себе та оточуючих.
          </Typography>
          <Typography variant="h6" color="#FF6C6C">
            Ігор П.
          </Typography>
          <Typography variant="body1">Київ, 16 років.</Typography>
        </div>
      </Paper>
    </div>
  );
}
