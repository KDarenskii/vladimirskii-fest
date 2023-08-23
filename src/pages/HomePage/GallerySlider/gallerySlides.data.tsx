import React from "react";

import { ISlide } from "components/Slider";

import slideSrc1 from "assets/img/gallerySlider/slide-1.jpg";
import slideSrc2 from "assets/img/gallerySlider/slide-2.jpg";
import slideSrc3 from "assets/img/gallerySlider/slide-3.jpg";
import slideSrc4 from "assets/img/gallerySlider/slide-4.jpg";
import slideSrc5 from "assets/img/gallerySlider/slide-5.jpg";
import slideSrc6 from "assets/img/gallerySlider/slide-6.jpg";
import slideSrc7 from "assets/img/gallerySlider/slide-7.jpg";
import slideSrc8 from "assets/img/gallerySlider/slide-8.jpg";
import slideSrc9 from "assets/img/gallerySlider/slide-9.jpg";
import slideSrc10 from "assets/img/gallerySlider/slide-10.jpg";

export const slides: ISlide[] = [
    { slide: <img src={slideSrc1} alt="" />, key: 1 },
    { slide: <img src={slideSrc2} alt="" />, key: 2 },
    { slide: <img src={slideSrc3} alt="" />, key: 3 },
    { slide: <img src={slideSrc4} alt="" />, key: 4 },
    { slide: <img src={slideSrc5} alt="" />, key: 5 },
    { slide: <img src={slideSrc6} alt="" />, key: 6 },
    { slide: <img src={slideSrc7} alt="" />, key: 7 },
    { slide: <img src={slideSrc8} alt="" />, key: 8 },
    { slide: <img src={slideSrc9} alt="" />, key: 9 },
    { slide: <img src={slideSrc10} alt="" />, key: 10 },
];
