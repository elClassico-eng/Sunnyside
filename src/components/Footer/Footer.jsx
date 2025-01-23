import React from "react";

import { NavLink } from "../UI/NavLinks/NavLink";
import { SocialLink } from "../UI/SocialLinks/SocialLink";

import logoSvg from "../../assets/images/logo2.svg";

import svgFacebook from "../../assets/images/icon-facebook.svg";
import svgInstagram from "../../assets/images/icon-instagram.svg";
import svgTwitter from "../../assets/images/icon-twitter.svg";
import svgPinterest from "../../assets/images/icon-pinterest.svg";

export const Footer = () => {
    return (
        <footer className="bg-footerBg flex flex-col gap-10 justify-center items-center w-full h-64">
            <img src={logoSvg} alt="Logo Sunnyside" />
            <ul className="flex gap-12 items-center">
                <NavLink text="About" isHeader={false} href="#" />
                <NavLink text="Services" isHeader={false} href="#" />
                <NavLink text="Projects" isHeader={false} href="#" />
            </ul>
            <div className="flex gap-4 justify-center">
                <SocialLink socialUrl={svgFacebook} />
                <SocialLink socialUrl={svgInstagram} />
                <SocialLink socialUrl={svgTwitter} />
                <SocialLink socialUrl={svgPinterest} />
            </div>
        </footer>
    );
};
