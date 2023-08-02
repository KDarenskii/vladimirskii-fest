import React, { FC } from "react";

import Container from "components/Container";
import { Slider } from "components/Slider";

import styles from "./gallerySlider.module.scss";
import { slides } from "./gallerySlides.data";

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
