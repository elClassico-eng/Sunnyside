import React from "react";
import { motion } from "framer-motion";

import { aVar } from "../../../Animation/animation";

export const NavLink = ({ text, href, isHeader }) => {
    return (
        <motion.li
            href={href}
            variants={aVar}
            whileTap="tap"
            whileHover="hover"
            className={`${
                isHeader ? "text-white" : "text-darkDesaturatedCyan"
            } font-medium`}
        >
            <motion.a>{text}</motion.a>
        </motion.li>
    );
};
