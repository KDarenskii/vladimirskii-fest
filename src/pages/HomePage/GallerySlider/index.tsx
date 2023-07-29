import React, { FC } from "react";
import Slider, { Settings } from "react-slick";

import Container from "components/Container";

import slideSrc1 from "assets/img/gallerySlider/slide-1.jpg";
import slideSrc2 from "assets/img/gallerySlider/slide-2.jpg";
import slideSrc3 from "assets/img/gallerySlider/slide-3.jpg";
import slideSrc4 from "assets/img/gallerySlider/slide-4.jpg";
import slideSrc5 from "assets/img/gallerySlider/slide-5.jpg";
import slideSrc6 from "assets/img/gallerySlider/slide-6.jpg";

import styles from "./gallerySlider.module.scss";

const SLIDER_SETTINGS: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: `slick-dots ${styles.dots}`,
};

const GallerySlider: FC = () => {
    return (
        <section className={styles.section}>
            <h6 className="visually-hidden">Галерея</h6>
            <Container>
                <Slider {...SLIDER_SETTINGS}>
                    <div className={styles.slide}>
                        <img src={slideSrc1} alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={slideSrc2} alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={slideSrc3} alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={slideSrc4} alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={slideSrc5} alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={slideSrc6} alt="" />
                    </div>
                </Slider>
            </Container>
        </section>
    );
};

export default GallerySlider;
