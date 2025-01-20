import React from "react";

export const CardDescription = ({ title, description, isAbsolute, cardId }) => {
    const styleAbsolute = isAbsolute
        ? "absolute  bottom-0 text-center justify-center items-center"
        : "";
    const styleForLastCard = isAbsolute ? "w-1/2" : "";
    const styleForCard5 = cardId === 5 && "text-darkDesaturatedCyan";
    const styleForCard6 = cardId === 6 && "text-darkBlue";

    return (
        <div className={`${styleAbsolute} flex flex-col gap-6 `}>
            <h2
                className={`${
                    cardId === 5 && "text-darkDesaturatedCyan font-bold"
                } ${cardId === 6 && "text-darkBlue font-bold"}  text-clamp-sm`}
            >
                {title}
            </h2>
            <p
                className={`${styleForLastCard} ${styleForCard5} ${styleForCard6}`}
            >
                {description}
            </p>
        </div>
    );
};
