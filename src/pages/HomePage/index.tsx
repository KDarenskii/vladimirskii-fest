import React from "react";

import Intro from "./Intro";
import About from "./About";
import ArtTypes from "./ArtTypes";
import GallerySlider from "./GallerySlider";
import Influence from "./Influence";
import Gallery from "./Gallery";

import styles from "./homePage.module.scss";

const HomePage: React.FC = () => {
    return (
        <main className={styles.page}>
            <Intro />
            <About />
            <ArtTypes />
            <GallerySlider />
            <Influence />
            <Gallery />
        </main>
    );
};

export default HomePage;
