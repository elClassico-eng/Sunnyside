import React from "react";
import { motion } from "framer-motion";

import { reviews } from "../../../data/reviews.js";
import { cardVar } from "../../../Animation/animation.js";

export const ReviewCard = () => {
    return (
        <div className="flex gap-20 flex-wrap justify-center items-center">
            {reviews.length > 0 ? (
                reviews.map(({ id, name, position, blockquote, avatar }) => (
                    <motion.article
                        key={id}
                        initial={{
                            opacity: 0,
                            y: 20,
                            scale: 0.7,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        animate={{
                            scale: 1,
                        }}
                        transition={{
                            duration: 2,
                        }}
                        variants={cardVar}
                        whileTap="tap"
                        whileHover="hover"
                        className="flex flex-col  items-center justify-between w-72 gap-12 text-clamp-xs text-darkGrayishBlue"
                    >
                        <div
                            className="w-20 h-20 bg-cover bg-center rounded-full"
                            style={{
                                backgroundImage: `url(${avatar})`,
                            }}
                        ></div>
                        <blockquote>{blockquote}</blockquote>
                        <div>
                            <h3 className="text-black font-extrabold font-fontMain uppercase">
                                {name}
                            </h3>
                            <p className="text-16">{position}</p>
                        </div>
                    </motion.article>
                ))
            ) : (
                <h1 className="text-clamp-sm">
                    An error has occurred. Try again later👨‍💻
                </h1>
            )}
        </div>
    );
};
