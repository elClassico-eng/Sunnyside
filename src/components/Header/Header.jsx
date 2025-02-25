import React from "react";
import { motion } from "framer-motion";

import { Navigation } from "./Navigate/Navigation.jsx";
import { HamburgerMenu } from "../UI/HamburgerMenu/HamburgerMenu.jsx";

import headerImg from "../../assets/images/desktop/image-header.jpg";
import logoSvg from "../../assets/images/logo.svg";
import arrowDownSvg from "../../assets/images/icon-arrow-down.svg";

export const Header = () => {
    return (
        <header className="relative font-fontMain p-8 min-h-screen ">
            <img
                className="absolute top-0 left-0 -z-10 w-full h-full object-cover object-center"
                src={headerImg}
                alt=""
            />
            <div class="flex justify-between mb-20 items-center">
                <div class="flex items-center">
                    <img src={logoSvg} alt="Logo Sunnyside" />
                </div>
                <div className="md:hidden">
                    <HamburgerMenu />
                </div>
                <div className="hidden md:flex">
                    <Navigation isButton={true} />
                </div>
            </div>
            <div class="flex justify-center items-center flex-col">
                <motion.h1
                    initial={{
                        x: -1000,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1.5,
                    }}
                    class="text-clamp-lg uppercase text-white"
                >
                    We are creatives
                </motion.h1>
                <motion.img
                    initial={{
                        translateY: 0,
                    }}
                    animate={{
                        translateY: 150,
                    }}
                    transition={{
                        delay: 1.5,
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "yoyo",
                    }}
                    src={arrowDownSvg}
                    class="arrow-down"
                    alt=""
                />
            </div>
        </header>
    );
};
