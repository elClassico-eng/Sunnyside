import React from "react";
import { motion } from "framer-motion";

export const CardDescription = ({
    title,
    description,
    imgMobile,
    imgDesktop,
    hasImg,
}) => {
    return (
        <motion.div
            className="relative flex justify-center items-center w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            {hasImg && (
                <picture>
                    <source media="(min-width: 767px)" srcSet={imgMobile} />
                    <source media="(min-width: 768px)" srcSet={imgDesktop} />
                    <img className="w-full object-fill" src={imgDesktop} />
                </picture>
            )}
            <div className="absolute flex flex-col gap-7 font-fontMain w-2/3 h-auto">
                <h2 className=" font-bold text-clamp-sm">{title}</h2>
                <p className="font-fontAdditional">{description}</p>
                {!hasImg && (
                    <a
                        className="hover:underline hover:decoration-red  decoration-2 uppercase w-max"
                        href="#"
                    >
                        Learn more
                    </a>
                )}
            </div>
        </motion.div>
    );
};
