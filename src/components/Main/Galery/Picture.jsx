import React from "react";

import { motion } from "framer-motion";

export const Picture = ({ imgSrc, imgMobile, imgDesktop, alt }) => {
    return (
        <motion.picture>
            <source media="(min-width: 767px)" srcet={imgMobile} />
            <source media="(min-width: 768px)" srcet={imgDesktop} />
            <motion.img
                className="w-full sm:bg-contain md:bg-contain lg:bg-cover bg-no-repeat  bg-center"
                src={imgSrc}
                alt={alt}
            />
        </motion.picture>
    );
};
