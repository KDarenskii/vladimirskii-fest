import placeholderSrc1 from "assets/img/gallery/photo-1-small.jpg";
import imageSrc1 from "assets/img/gallery/photo-1.jpg";
import placeholderSrc2 from "assets/img/gallery/photo-2-small.jpg";
import imageSrc2 from "assets/img/gallery/photo-2.jpg";
import placeholderSrc3 from "assets/img/gallery/photo-3-small.jpg";
import imageSrc3 from "assets/img/gallery/photo-3.jpg";
import placeholderSrc4 from "assets/img/gallery/photo-4-small.jpg";
import imageSrc4 from "assets/img/gallery/photo-4.jpg";

interface IImage {
    src: string;
    placeholderSrc: string;
}

export const images: IImage[] = [
    { src: imageSrc1, placeholderSrc: placeholderSrc1 },
    { src: imageSrc3, placeholderSrc: placeholderSrc3 },
    { src: imageSrc2, placeholderSrc: placeholderSrc2 },
    { src: imageSrc4, placeholderSrc: placeholderSrc4 },
];
