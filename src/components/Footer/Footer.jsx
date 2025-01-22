import React from "react";

import logoSvg from "../../assets/images/logo2.svg";
import { Navigation } from "../Header/Navigate/Navigation";

export const Footer = () => {
    return (
        <footer className="bg-darkModerateCyan flex flex-col justify-center items-center w-full h-64">
            <img src={logoSvg} alt="Logo Sunnyside" />
            <ul>
                <Navigation isFooter={true} />
            </ul>
        </footer>
    );
};
