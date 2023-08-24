import React from "react";

import LazyImage from "components/LazyImage";
import { ISlide } from "components/Slider";

import placeholder1 from "assets/img/gallerySlider/slide-1-small.jpg";
import slide1 from "assets/img/gallerySlider/slide-1.jpg";
import placeholder2 from "assets/img/gallerySlider/slide-2-small.jpg";
import slide2 from "assets/img/gallerySlider/slide-2.jpg";
import placeholder3 from "assets/img/gallerySlider/slide-3-small.jpg";
import slide3 from "assets/img/gallerySlider/slide-3.jpg";
import placeholder4 from "assets/img/gallerySlider/slide-4-small.jpg";
import slide4 from "assets/img/gallerySlider/slide-4.jpg";
import placeholder5 from "assets/img/gallerySlider/slide-5-small.jpg";
import slide5 from "assets/img/gallerySlider/slide-5.jpg";
import placeholder6 from "assets/img/gallerySlider/slide-6-small.jpg";
import slide6 from "assets/img/gallerySlider/slide-6.jpg";
import placeholder7 from "assets/img/gallerySlider/slide-7-small.jpg";
import slide7 from "assets/img/gallerySlider/slide-7.jpg";
import placeholder8 from "assets/img/gallerySlider/slide-8-small.jpg";
import slide8 from "assets/img/gallerySlider/slide-8.jpg";
import placeholder9 from "assets/img/gallerySlider/slide-9-small.jpg";
import slide9 from "assets/img/gallerySlider/slide-9.jpg";
import placeholder10 from "assets/img/gallerySlider/slide-10-small.jpg";
import slide10 from "assets/img/gallerySlider/slide-10.jpg";

export const slides: ISlide[] = [
    { slide: <LazyImage src={slide1} placeholderSrc={placeholder1} />, key: 1 },
    { slide: <LazyImage src={slide2} placeholderSrc={placeholder2} />, key: 2 },
    { slide: <LazyImage src={slide3} placeholderSrc={placeholder3} />, key: 3 },
    { slide: <LazyImage src={slide4} placeholderSrc={placeholder4} />, key: 4 },
    { slide: <LazyImage src={slide5} placeholderSrc={placeholder5} />, key: 5 },
    { slide: <LazyImage src={slide6} placeholderSrc={placeholder6} />, key: 6 },
    { slide: <LazyImage src={slide7} placeholderSrc={placeholder7} />, key: 7 },
    { slide: <LazyImage src={slide8} placeholderSrc={placeholder8} />, key: 8 },
    { slide: <LazyImage src={slide9} placeholderSrc={placeholder9} />, key: 9 },
    {
        slide: <LazyImage src={slide10} placeholderSrc={placeholder10} />,
        key: 10,
    },
];
