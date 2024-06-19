"use client";

import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="text-gray-600 body-font max-w-screen-2xl  mx-auto">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/logo.svg" width={200} height={200} alt="logo" />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-[#FF4C4C] text-[#56D4CC] font-medium text-lg">
              Головна
            </a>
            <a className="mr-5 hover:text-[#FF4C4C] text-[#56D4CC] font-medium text-lg">
              Послуги
            </a>
            <a className="mr-5 hover:text-[#FF4C4C] text-[#56D4CC] font-medium text-lg">
              Про мене
            </a>
            <a className="mr-5 hover:text-[#FF4C4C] text-[#56D4CC] font-medium text-lg">
              Контакти
            </a>
          </nav>
          <button className="inline-flex items-center bg-gray-100  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-[#FF4C4C] mt-4 md:mt-0">
            38 (093) 379-76-09
          </button>
        </div>
      </header>
    </>
  );
}
