import React from "react";

export const SocialLink = ({ socialUrl }) => {
    return (
        <a href="#">
            <img src={socialUrl} alt="" />
        </a>
    );
};
