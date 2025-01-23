import React from "react";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { AuthorLink } from "./components/UI/AuthorLink/AuthorLink";

export const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
            <AuthorLink />
        </>
    );
};
