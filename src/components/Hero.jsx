"use client";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <Container maxWidth="xl">
      <div className="max-h-screen flex px-5 py-6 md:flex-row flex-col justify-around items-center">
        <div className="md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <Typography
            variant=""
            gutterBottom
            className="title-font sm:text-5xl text-3xl mb-4 font-medium text-[#56D4CC]"
          >
            Тобі потрібна <b className="text-[#FF6C6C]">допомога ?</b>
          </Typography>
          <Typography gutterBottom variant="h6" className="text-2xl">
            Запишись на консультацію онлайн безкоштовно*
          </Typography>
          <div className="flex justify-center mt-4">
            <Button
              color="primary"
              variant="contained"
              className="flex justify-center w-72 h-12"
            >
              Записатись
            </Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            width={400}
            height={400}
            className="mx-auto object-cover object-center rounded"
            alt="hero"
            src="/hero.jpg"
          />
        </div>
      </div>
    </Container>
  );
}
