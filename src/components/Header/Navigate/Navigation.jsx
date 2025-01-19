import React from "react";

import { NavLink } from "./NavLink";
import { Button } from "../../UI/Button";

export const Navigation = () => {
    return (
        <nav class="gap-20 flex items-center">
            <ul className="gap-7 flex items-center">
                <NavLink text="About" href="#" />
                <NavLink text="Services" href="#" />
                <NavLink text="Projects" href="#" />
            </ul>
            <Button text="Contact" />
        </nav>
    );
};
