import React from "react";
import { motion } from "framer-motion";

import { ReviewSection } from "./ReviewSection/ReviewSection";
import { CardDescription } from "./CardDescription/CardDescription";

export const Main = () => {
    const commonClasses =
        "text-clamp-xs px-20 py-20 bg-cover bg-no-repeat bg-center";

    return (
        <motion.main>
            <section className="grid sm:grid-cols-1  lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-2">
                <div id="1" class={`${commonClasses}`}>
                    <CardDescription
                        title="Transform your brand"
                        description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                    />
                </div>
                <div id="2" class={`${commonClasses} bg-mainCardImage1`}></div>
                <div id="3" class={`${commonClasses} bg-mainCardImage2`}></div>
                <div id="4" class={`${commonClasses}`}>
                    <CardDescription
                        title="Stand out to the right audience"
                        description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
                    />
                </div>
                <div
                    id="5"
                    class={`${commonClasses} bg-mainCardImage3 relative overflow-hidden`}
                >
                    <CardDescription
                        cardId={5}
                        isAbsolute={true}
                        title="Graphic design"
                        description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention"
                    />
                </div>
                <div
                    id="6"
                    class={`${commonClasses} bg-mainCardImage4 relative overflow-hidden`}
                >
                    <CardDescription
                        cardId={6}
                        isAbsolute={true}
                        title="Photography"
                        description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                    />
                </div>
            </section>

            <ReviewSection />
            <section className="gallery-section"></section>
        </motion.main>
    );
};
