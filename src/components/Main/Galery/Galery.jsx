import React from "react";
import { motion } from "framer-motion";

import { Picture } from "./Picture";

import imgConeMobile from "../../../assets/images/mobile/image-gallery-cone.jpg";
import imgMilkBottlesMobile from "../../../assets/images/mobile/image-gallery-milkbottles.jpg";
import imgOrangeMobile from "../../../assets/images/mobile/image-gallery-orange.jpg";
import imgSugarCubesMobile from "../../../assets/images/mobile/image-gallery-sugar-cubes.jpg";

import imgConeDesktop from "../../../assets/images/desktop/image-gallery-cone.jpg";
import imgMilkBottlesDesktop from "../../../assets/images/desktop/image-gallery-milkbottles.jpg";
import imgOrangeDesktop from "../../../assets/images/desktop/image-gallery-orange.jpg";
import imgSugarCubesDesktop from "../../../assets/images/desktop/image-gallery-sugarcubes.jpg";

export const Galery = () => {
    return (
        <motion.section className="w-full h-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Picture
                imgSrc={imgMilkBottlesDesktop}
                alt="3 bottles on a background of clouds"
                imgMobile={imgMilkBottlesMobile}
                imgDesktop={imgMilkBottlesDesktop}
            />
            <Picture
                imgSrc={imgOrangeDesktop}
                alt="Orange on a plate on a yellow background"
                imgMobile={imgOrangeMobile}
                imgDesktop={imgOrangeDesktop}
            />
            <Picture
                imgSrc={imgConeDesktop}
                alt="Ice cream cone on blue background"
                imgMobile={imgConeMobile}
                imgDesktop={imgConeDesktop}
            />
            <Picture
                imgSrc={imgSugarCubesDesktop}
                alt="Sugar cubes on orange background"
                imgMobile={imgSugarCubesMobile}
                imgDesktop={imgSugarCubesDesktop}
            />
        </motion.section>
    );
};
