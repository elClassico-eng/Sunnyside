import React from "react";

import { reviews } from "../../../data/reviews.js";

export const ReviewCard = () => {
    return (
        <>
            {reviews.map(({ id, name, position, blockquote, avatar }) => (
                <article key={id}>
                    <div
                        className={`bg-${
                            avatar || ""
                        } w-20 h-20 bg-cover bg-center bg-no-repeat rounded-full`}
                    ></div>
                    <blockquote>{blockquote}</blockquote>
                    <div className="">
                        <h3>{name}</h3>
                        <p>{position}</p>
                    </div>
                </article>
            ))}
        </>
    );
};
