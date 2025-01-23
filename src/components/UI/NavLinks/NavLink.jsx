import React from "react";
import { motion } from "framer-motion";

import { aVar } from "../../../Animation/animation";

export const NavLink = ({ text, href, isHeader }) => {
    return (
        <motion.li
            variants={aVar}
            whileTap="tap"
            whileHover="hover"
            className={`${
                isHeader ? "text-white" : "text-darkDesaturatedCyan"
            } font-medium`}
        >
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer cursor-pointer"
            >
                {text}
            </a>
        </motion.li>
    );
};
