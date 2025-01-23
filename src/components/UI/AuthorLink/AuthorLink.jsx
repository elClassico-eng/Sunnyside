import React from "react";

export const AuthorLink = () => {
    return (
        <div className="fixed bottom-2 left-1/2 transform translate-x-[-50%] font-fontMain text-12">
            <span>
                Challenge by{" "}
                <a
                    className="underline font-bold"
                    href="https://www.frontendmentor.io/challenges/agency-landing-page-7yVs3B6ef"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Frontend Mentor{" | "}
                </a>
            </span>
            <span>
                Coded by{" "}
                <a
                    className="underline font-bold"
                    href="https://www.frontendmentor.io/profile/elClassico-eng"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Danya
                </a>
            </span>
        </div>
    );
};
