"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import CardList from "./CardList";

export default function Services() {
  return (
    <div className="flex flex-col justify-around p-4 w-full">

      <div className="flex">
        <Image src="/hero.jpg" width={300} height={200} className="" />
      </div>

      <div className="relative py-3 sm:max-w-xl mt-20 w-max">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6C6C] to-[#FF3838] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-[#56D4CC] shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-8">
            <h1 className="text-4xl">Запишись!</h1>

            <p className="text-white text-xl">
              на консультацію ONLINE безкоштовно*
            </p>
          </div>

          <form>
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Ваше ім’я"
              name="name"
            />

            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="+380 (..) ... .. .."
              name="email"
            />

            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Послуга"
              name="_subject"
            />

            <div className="flex justify-between">
              <input
                className="shadow bg-[#FF6C6C] hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Записатись ➤"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
