import React from "react";
import { motion } from "framer-motion";

const aVar = {
    hover: {
        scale: 1.1,
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

export const NavLink = ({ text, href }) => {
    return (
        <motion.li className="font-medium text-white">
            <motion.a
                href={href}
                variants={aVar}
                whileTap="tap"
                whileHover="hover"
                className="block"
            >
                {text}
            </motion.a>
        </motion.li>
    );
};
