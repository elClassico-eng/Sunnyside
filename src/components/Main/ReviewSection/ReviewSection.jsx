import React from "react";

import { ReviewCard } from "./ReviewCard";

export const ReviewSection = () => {
    return (
        <section className="flex flex-col justify-center items-center text-center my-36">
            <h3 className="font-fontMain text-clamp-extra-xs text-darkGrayishBlue font-bold tracking-[5px] uppercase mb-10">
                Client testimonials
            </h3>
            <ReviewCard />
        </section>
    );
};
