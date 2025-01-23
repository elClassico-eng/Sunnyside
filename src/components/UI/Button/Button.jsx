import React from "react";

export const Button = ({ text }) => {
    return (
        <button
            type="button"
            class="uppercase flex items-center justify-center bg-white text-black rounded-[30px] py-5 px-7 cursor-pointer transition-[background-color,color] duration-300 ease-in-out hover:text-white hover:bg-btnHover"
        >
            {text}
        </button>
    );
};
