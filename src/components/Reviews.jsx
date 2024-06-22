"use client";
import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Reviews() {
  return (
    <div className="pt-10">
      <Typography
        variant="h4"
        component="h4"
        align="center"
        sx={{ color: "#FF6C6C", fontWeight: 500 }}
      >
        Відгуки моїх клієнтів
      </Typography>
      <div
        elevation={8}
        className="pt-4 flex flex-col justify-evenly items-center md:max-w-screen-xl md:gap-16 text-lg md:flex-row mx-auto shadow-2xl rounded-r-2xl"
      >
        <div className="flex md:h-fit">
          <Image
            className="max-w-screen-lg md:max-w-max md:p-4"
            src="/review.jpg"
            width={300}
            height={300}
          />
        </div>
        <div className="p-4 flex flex-col justify-center items-start">
          <div className="md:text-lg text-base p-2 text-justify whitespace-break-spaces">
            Раджу всім. Людина з якою приємно працювати, після відвідин занять
            отримав багато специфічного досвіду, став впевненішим у собі.
            Заняття проводяться у доволі легкій, ненав'язливій формі. З часом
            все глибше пізнаю себе та оточуючих.
          </div>
          <span className="text-[#FF6C6C] text-xl px-2">Ігор П.</span>
          <span className="text-lg px-2">Київ, 16 років.</span>
        </div>
      </div>
    </div>
  );
}
