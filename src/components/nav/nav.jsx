"use client";

import { React, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@mui/material";

const navLinks = [
  { title: "Головна", href: "/" },
  { title: "Послуги", href: "/service" },
  { title: "Про мене", href: "/about" },
  { title: "Контакти", href: "/contact" },
];
const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-8 lg:py-4 px-10">
        <div className="flex items-center gap-[1ch]">
          <div className="w-5 h-5 bg-gray-400 rounded-full" />
          <span className="text-sm font-semibold tracking-widest">MARIDOC</span>
        </div>
        <div className="lg:flex hidden gap-6 text-md text-red-500">
          <Link href="#" className="text-black font-medium"></Link>
          <Link href={"/projects"}></Link>
        </div>
        <div
          className="cursor-pointer lg:hidden text-md text-black"
          onClick={toggleMenu}
        >
          МЕНЮ
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-10 left-0 top-0 w-full h-screen origin-top bg-[#7eeee3] text-white p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold text-red-500">MARIDOC</h1>
                <p
                  className="cursor-pointer text-md text-red-600"
                  onClick={toggleMenu}
                >
                  МЕНЮ
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-[#ea4a4a]"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
