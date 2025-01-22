import React from "react";

import { motion } from "framer-motion";

export const Picture = ({ imgSrc, imgMobile, imgDesktop, alt }) => {
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.5, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
        hover: {
            scale: 1.1,
            transition: { duration: 0.3, ease: "easeInOut" },
        },
    };
    return (
        <motion.picture>
            <source media="(min-width: 767px)" srcet={imgMobile} />
            <source media="(min-width: 768px)" srcet={imgDesktop} />
            <motion.img
                variants={itemVariants}
                className="w-full sm:bg-contain md:bg-contain lg:bg-cover bg-no-repeat  bg-center"
                src={imgSrc}
                alt={alt}
            />
        </motion.picture>
    );
};
