import Container from "components/Container";
import React, { FC } from "react";

import LazyImage from "components/LazyImage";

import { images } from "./galleryImages.data";

import styles from "./gallery.module.scss";

const Gallery: FC = () => {
    return (
        <section className={styles.gallery}>
            <h6 className="visually-hidden">Галерея</h6>
            <Container>
                <div className={styles.wrapper}>
                    {images.map(({ src, placeholderSrc }) => (
                        <LazyImage
                            src={src}
                            placeholderSrc={placeholderSrc}
                            width={630}
                            height={470}
                            alt=""
                            key={src}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Gallery;
