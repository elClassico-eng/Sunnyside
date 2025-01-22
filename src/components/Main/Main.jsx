import React from "react";
import { motion } from "framer-motion";

import { CardSection } from "./CardDescription/CardSection";
import { ReviewSection } from "./ReviewSection/ReviewSection";
import { Galery } from "./Galery/Galery";

export const Main = () => {
    return (
        <motion.main>
            <CardSection />
            <ReviewSection />
            <Galery />
        </motion.main>
    );
};
