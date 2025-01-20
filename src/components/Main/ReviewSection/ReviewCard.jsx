import React from "react";
import { motion } from "framer-motion";

import { reviews } from "../../../data/reviews.js";

export const ReviewCard = () => {
    const cardVar = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
            },
        },
        tap: {
            scale: 0.95,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <div className="flex gap-14 flex-wrap justify-center items-center">
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
                        className="flex flex-col  items-center justify-between w-72 gap-6 text-clamp-xs text-darkGrayishBlue"
                    >
                        <div
                            className="w-16 h-16 bg-no-repeat bg-cover rounded-full bg-center bg-red"
                            style={{ backgroundImage: `url(${avatar || ""})` }}
                        ></div>
                        <blockquote>{blockquote}</blockquote>
                        <div className="">
                            <h3 className="text-black font-bold  uppercase">
                                {name}
                            </h3>
                            <p>{position}</p>
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
