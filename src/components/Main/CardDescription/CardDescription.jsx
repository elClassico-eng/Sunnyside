import React from "react";

export const CardDescription = ({ title, description }) => {
    return (
        <div className="flex flex-col gap-6 w-[90%]">
            <h2 className="text-clamp-sm">{title}</h2>
            <p className="description">{description}</p>
        </div>
    );
};
