import React from "react";

import About from "./About";
import ArtTypes from "./ArtTypes";
import Gallery from "./Gallery";
import GallerySlider from "./GallerySlider";
import Influence from "./Influence";
import Intro from "./Intro";
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
