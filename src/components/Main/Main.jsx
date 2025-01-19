import React from "react";
import { motion } from "framer-motion";
import { CardDescription } from "./CardDescription/CardDescription";

import { cardData } from "../../data/cardMain";

export const Main = () => {
    const commonClasses =
        "text-clamp-xs px-20 py-20 bg-cover bg-no-repeat bg-center";

    return (
        <motion.main>
            <section className="grid grid-cols-2 grid-rows-3">
                {cardData.map(({ title, description, bgImage }, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        key={index}
                        className={`${commonClasses} ${bgImage || ""}`}
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

            <section className="reviews-section"></section>
            <section className="gallery-section"></section>
        </motion.main>
    );
};
