import React from "react";

import logoSvg from "./assets/images/logo.svg";
import arrowDownSvg from "./assets/images/icon-arrow-down.svg";

export const App = () => {
    return (
        <>
            <header>
                <div class="head">
                    <div class="logo-container">
                        <img class="logo" src={logoSvg} alt="Logo Sunnyside" />
                    </div>
                    <nav class="nav-container">
                        <ul>
                            <li class="nav-item">
                                <a href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">Projects</a>
                            </li>
                        </ul>
                        <button type="button" class="contacts-btn">
                            Contact
                        </button>
                    </nav>
                </div>
                <div class="header-title">
                    <h1 class="title">We are creatives</h1>
                    <img src={arrowDownSvg} class="arrow-down" alt="" />
                </div>
            </header>

            {/* Main */}
            <main>
                <section class="card-section">
                    <div class="card card-1">
                        <div class="card-description">
                            <h2 class="card-title">Transform your brand</h2>
                            <p class="description">
                                We are a full-service creative agency
                                specializing in helping brands grow fast. Engage
                                your clients through compelling visuals that do
                                most of the marketing for you.
                            </p>
                        </div>
                    </div>
                    <div class="card card-2"></div>
                    <div class="card card-3"></div>
                    <div class="card card-4">
                        <div class="card-description">
                            <h2 class="card-title">
                                Stand out to the right audience
                            </h2>
                            <p class="description">
                                Using a collaborative formula of designers,
                                researchers, photographers, videographers, and
                                copywriters, we’ll build and extend your brand
                                in digital places.
                            </p>
                        </div>
                    </div>
                    <div class="card card-5">
                        <div class="card-description">
                            <h2 class="card-title">Graphic design</h2>
                            <p class="description">
                                Great design makes you memorable. We deliver
                                artwork that underscores your brand message and
                                captures potential clients’ attention.
                            </p>
                        </div>
                    </div>
                    <div class="card card-6">
                        <div class="card-description">
                            <h2 class="card-title">Photography</h2>
                            <p class="description">
                                Increase your credibility by getting the most
                                stunning, high-quality photos that improve your
                                business image.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="rewievs-section"></section>
                <section class="gallery-section"></section>
            </main>

            {/* Footer */}
            <footer></footer>
        </>
    );
};
