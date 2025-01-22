import React from "react";
import { motion } from "framer-motion";

import { CardDescription } from "./CardDescription";
import { cardData } from "../../../data/cardMain";

export const CardSection = () => {
    return (
        <section className="grid sm:grid-cols-1 sm:grid-rows-6 md:grid-cols-2 md:grid-rows-3 items-stretch">
            {cardData.map(
                (
                    { title, description, hasImg, imgSrcDesctop, imgSrcMobile },
                    index
                ) => {
                    if (
                        index === cardData.length - 2 ||
                        index === cardData.length - 1
                    ) {
                        return (
                            <motion.div
                                key={index}
                                className="relative text-center flex flex-col items-center justify-end bg-cover bg-center h-auto"
                                style={{
                                    backgroundImage: `url(${imgSrcDesctop})`,
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="mb-24">
                                    <h2
                                        className={`${
                                            index === cardData.length - 2
                                                ? "text-darkDesaturatedCyan"
                                                : "text-darkBlue"
                                        } font-fontAdditional font-bold text-clamp-sm mb-4`}
                                    >
                                        {title}
                                    </h2>
                                    <p
                                        className={`${
                                            index === cardData.length - 2
                                                ? "text-darkDesaturatedCyan"
                                                : "text-darkBlue"
                                        } font-medium text-lg`}
                                    >
                                        {description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    }
                    return (
                        <CardDescription
                            key={index}
                            title={title}
                            description={description}
                            hasImg={hasImg}
                            imgMobile={imgSrcMobile}
                            imgDesktop={imgSrcDesctop}
                        />
                    );
                }
            )}
        </section>
    );
};
