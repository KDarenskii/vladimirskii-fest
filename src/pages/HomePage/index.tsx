import React from "react";

import About from "./About";
import ArtTypes from "./ArtTypes";
import Description from "./Description";
import GallerySlider from "./GallerySlider";
import Influence from "./Influence";
import Intro from "./Intro";
import Media from "./Media";
import Participants from "./Participants";
import Quote from "./Quote";
import Schedule from "./Schedule";

const HomePage: React.FC = () => {
    return (
        <>
            <Intro />
            <About />
            <Quote />
            <GallerySlider />
            <Influence />
            <ArtTypes />
            <Participants />
            <Description />
            <Schedule />
            <Media />
        </>
    );
};

export default HomePage;
