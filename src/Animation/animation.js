export const aVar = {
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

export const cardVar = {
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

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
        opacity: 1,
        scale: 0.9,
        transition: { duration: 0.2, ease: "easeOut" },
    },
    hover: {
        scale: 1,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};
