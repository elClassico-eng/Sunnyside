import React from "react";

import { NavLink } from "../../UI/NavLinks/NavLink";
import { Button } from "../../UI/Button/Button";

export const Navigation = ({ isButton }) => {
    return (
        <nav class="gap-20 flex items-center">
            <ul className="gap-7 flex items-center">
                <NavLink text="About" href="#" isHeader={true} />
                <NavLink text="Services" href="#" isHeader={true} />
                <NavLink text="Projects" href="#" isHeader={true} />
            </ul>
            {isButton && <Button text="Contacts" />}
        </nav>
    );
};
