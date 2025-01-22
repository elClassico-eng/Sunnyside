import imgTransformMobile from "../assets/images/mobile/image-transform.jpg";
import imgStandOutMobile from "../assets/images/mobile/image-stand-out.jpg";
import imgGraphicDesignMobile from "../assets/images/mobile/image-graphic-design.jpg";
import imgPhotographyMobile from "../assets/images/mobile/image-photography.jpg";

import imgTransformDesktop from "../assets/images/desktop/image-transform.jpg";
import imgStandOutDesctop from "../assets/images/desktop/image-stand-out.jpg";
import imgGraphicDesignDesktop from "../assets/images/desktop/image-graphic-design.jpg";
import imgPhotographyDesktop from "../assets/images/desktop/image-photography.jpg";

export const cardData = [
    {
        title: "Transform your brand",
        description:
            "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
        hasImg: false,
        imgSrcDesctop: null,
        imgSrcMobile: null,
    },
    {
        hasImg: true,
        imgSrcDesctop: imgTransformDesktop,
        imgSrcMobile: imgTransformMobile,
    },
    {
        hasImg: true,
        imgSrcDesctop: imgStandOutDesctop,
        imgSrcMobile: imgStandOutMobile,
    },
    {
        title: "Stand out to the right audience",
        description:
            "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
        hasImg: false,
        imgSrcDesctop: null,
        imgSrcMobile: null,
    },
    {
        title: "Graphic design",
        description:
            "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
        hasImg: true,
        imgSrcDesctop: imgGraphicDesignDesktop,
        imgSrcMobile: imgGraphicDesignMobile,
    },
    {
        title: "Photography",
        description:
            "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
        hasImg: false,
        imgSrcDesctop: imgPhotographyDesktop,
        imgSrcMobile: imgPhotographyMobile,
    },
];
