import React, { FC, ImgHTMLAttributes, useState } from "react";

import cn from "clsx";

import styles from "./lazeImage.module.scss";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    placeholderSrc: string;
    className?: string;
    imageClassName?: string;
}

const LazyImage: FC<Props> = ({
    src,
    placeholderSrc,
    imageClassName,
    className,
    ...rest
}) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return (
        <div
            className={cn(
                styles.imageWrapper,
                isLoaded && styles.loaded,
                className,
            )}
            style={{
                backgroundImage: `url(${placeholderSrc})`,
            }}
        >
            <img
                className={cn(imageClassName)}
                src={src}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                alt=""
                {...rest}
            />
        </div>
    );
};

export default LazyImage;
