import React from "react";

import About from "./About";
import ArtTypes from "./ArtTypes";
import Gallery from "./Description";
import GallerySlider from "./GallerySlider";
import Influence from "./Influence";
import Intro from "./Intro";
import Media from "./Media";
import Participants from "./Participants";
import Quote from "./Quote";

const HomePage: React.FC = () => {
    return (
        <>
            <Intro />
            <About />
            <ArtTypes />
            <GallerySlider />
            <Influence />
            <Quote />
            <Gallery />
            <Participants />
            <Media />
        </>
    );
};

export default HomePage;