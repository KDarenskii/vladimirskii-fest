import Container from "components/Container";
import React, { FC } from "react";

import imageSrc1 from "assets/img/gallery/photo-1.jpg";
import imageSrc2 from "assets/img/gallery/photo-2.jpg";
import imageSrc3 from "assets/img/gallery/photo-3.jpg";
import imageSrc4 from "assets/img/gallery/photo-4.jpg";

import styles from "./gallery.module.scss";
import "../../../assets/styles/common.scss";

const Gallery: FC = () => {
    return (
        <section className={styles.gallery}>
            <h6 className="visually-hidden">Галерея</h6>
            <Container>
                <div className={styles.wrapper}>
                    <img src={imageSrc1} alt="" />
                    <img src={imageSrc3} alt="" />
                    <img src={imageSrc2} alt="" />
                    <img src={imageSrc4} alt="" />
                </div>
            </Container>
        </section>
    );
};

export default Gallery;
