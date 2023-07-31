import React, { FC } from "react";

import Slider from "components/Slider";
import Container from "components/Container";

import slideSrc1 from "assets/img/gallerySlider/slide-1.jpg";
import slideSrc2 from "assets/img/gallerySlider/slide-2.jpg";
import slideSrc3 from "assets/img/gallerySlider/slide-3.jpg";
import slideSrc4 from "assets/img/gallerySlider/slide-4.jpg";
import slideSrc5 from "assets/img/gallerySlider/slide-5.jpg";
import slideSrc6 from "assets/img/gallerySlider/slide-6.jpg";

import styles from "./gallerySlider.module.scss";

const slides = [
    { slide: <img src={slideSrc1} alt="" />, key: 1 },
    { slide: <img src={slideSrc2} alt="" />, key: 2 },
    { slide: <img src={slideSrc3} alt="" />, key: 3 },
    { slide: <img src={slideSrc4} alt="" />, key: 4 },
    { slide: <img src={slideSrc5} alt="" />, key: 5 },
    { slide: <img src={slideSrc6} alt="" />, key: 6 },
];

const GallerySlider: FC = () => {
    return (
        <section className={styles.section}>
            <h6 className="visually-hidden">Галерея</h6>
            <Container>
                <Slider
                    slideClassName={styles.slide}
                    settings={{ dotsClass: styles.dots }}
                    slides={slides}
                />
            </Container>
        </section>
    );
};

export default GallerySlider;
