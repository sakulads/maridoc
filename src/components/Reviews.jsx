"use client";
import { Box, Container, Paper, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { wrap } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Reviews() {
  return (
    <div>
      <div>
        <Typography
          gutterBottom
          align="left"
          sx={{ color: "#56D4CC", fontWeight: 600, mt: 4 }}
          variant="body1"
        >
          Блог
        </Typography>
        <Typography
          gutterBottom
          align="left"
          sx={{ color: "#FF6C6C", fontWeight: 500, mb: 4 }}
          variant="h5"
        >
          Відгуки моїх клієнтів
        </Typography>
      </div>
      <Paper
        elevation={6}
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
        <Box sx={{ maxWidth: 300 }}>
          <Image src="/review.jpg" width={300} height={150} />
        </Box>
        <Container
          sx={{
            maxWidth: "100%",
            width: 800,
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <p className="text-lg sm:text-2xl text-justify">
            Раджу всім. Людина з якою приємно працювати, після відвідин занять
            отримав багато специфічного досвіду, став впевненішим у собі.
            Заняття проводяться у доволі легкій, ненав'язливій формі. З часом
            все глибше пізнаю себе та оточуючих.
          </p>
          <Typography variant="h6" color="#FF6C6C" gutterBottom>
            Ігор П.
          </Typography>
          <Typography variant="body1">Київ, 16 років.</Typography>
        </Container>
      </Paper>
    </div>
  );
}
