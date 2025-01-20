import React from "react";
import { motion } from "framer-motion";

import { ReviewSection } from "./ReviewSection/ReviewSection";
import { CardDescription } from "./CardDescription/CardDescription";

import { cardData } from "../../data/cardMain";

export const Main = () => {
    const commonClasses =
        "text-clamp-xs sm:flex sm:justify-center sm:items-center px-20 py-20 bg-cover bg-no-repeat bg-center";

    return (
        <motion.main>
            <section className="grid sm:grid-cols-1  lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-2">
                {cardData.map(({ title, description, bgImage }, index) => (
                    <motion.div
                        key={index}
                        className={`${commonClasses} ${bgImage || ""} ${
                            index >= cardData.length - 1 ? "" : ""
                        }`}
                    >
                        {title && description && (
                            <CardDescription
                                title={title}
                                description={description}
                            />
                        )}
                    </motion.div>
                ))}
            </section>

            <ReviewSection />
            <section className="gallery-section"></section>
        </motion.main>
    );
};
