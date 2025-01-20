import React from "react";

import { ReviewCard } from "./ReviewCard";

export const ReviewSection = () => {
    return (
        <section className="flex flex-col text-center">
            <h3 className="font-fontAdditional text-clamp-extra-xs font-bold tracking-[5px] uppercase">
                Client testimonials
            </h3>
            <ReviewCard />
        </section>
    );
};
