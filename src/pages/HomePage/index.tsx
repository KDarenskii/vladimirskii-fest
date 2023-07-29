import React from "react";

import Intro from "./Intro";
import About from "./About";
import ArtTypes from "./ArtTypes";
import GallerySlider from "./GallerySlider";
import Influence from "./Influence";
import Gallery from "./Gallery";

const HomePage: React.FC = () => {
    return (
        <>
            <Intro />
            <About />
            <ArtTypes />
            <GallerySlider />
            <Influence />
            <Gallery />
        </>
    );
};

export default HomePage;
