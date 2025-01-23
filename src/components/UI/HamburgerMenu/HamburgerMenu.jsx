import React, { useState } from "react";

import { NavLink } from "../NavLinks/NavLink";

import iconHamburger from "../../../assets/images/icon-hamburger.svg";
import crossSvg from "../../../assets/images/cross.svg";

export const HamburgerMenu = () => {
    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <div>
            <img
                onClick={() => setActiveMenu(!activeMenu)}
                className="cursor-pointer"
                src={iconHamburger}
            />
            <div
                id="menu"
                className={`absolute top-0 left-0 w-full h-screen bg-blue z-10 flex flex-col items-center justify-center transition-transform duration-300 ${
                    activeMenu ? "flex" : "hidden"
                } md:hidden`}
            >
                <div
                    onClick={() => setActiveMenu(!activeMenu)}
                    className="cursor-pointer absolute top-2 right-2"
                >
                    <img src={crossSvg} />
                </div>
                <ul className="flex gap-5">
                    <NavLink
                        text="About"
                        href="#"
                        isHeader={false}
                        onClick={() => setActiveMenu(false)}
                    />
                    <NavLink
                        text="Service"
                        href="#"
                        isHeader={false}
                        onClick={() => setActiveMenu(false)}
                    />
                    <NavLink
                        text="Projects"
                        href="#"
                        isHeader={false}
                        onClick={() => setActiveMenu(false)}
                    />
                </ul>
            </div>
        </div>
    );
};
