import React, { FC } from "react";

import cn from "clsx";
import SlickSlider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { ISlide } from "./slide.interface";
import styles from "./slider.module.scss";

const SLIDER_DEFAULT_SETTINGS: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
};

interface Props {
    slides: ISlide[];
    slideClassName: string;
    settings?: Settings;
}

const Slider: FC<Props> = ({ slides, slideClassName, settings = {} }) => {
    const sliderSettings: Settings = {
        ...SLIDER_DEFAULT_SETTINGS,
        ...settings,
        dotsClass: `slick-dots ${cn(styles.dots, settings.dotsClass)}`,
    };
    return (
        <SlickSlider {...sliderSettings}>
            {slides.map(({ key, slide }) => (
                <div className={slideClassName} key={key}>
                    {slide}
                </div>
            ))}
        </SlickSlider>
    );
};

export default Slider;
