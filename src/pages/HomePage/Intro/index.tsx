import React, { FC } from "react";

import Container from "components/Container";
import Timer from "components/Timer";

import useMatchMedia from "hooks/useMatchMedia";

import coverSrc from "assets/img/fest-cover.png";

import styles from "./intro.module.scss";

const FEST_DATE = new Date(2023, 8, 15, 10, 0, 0);

const Intro: FC = () => {
    const { maxMobile } = useMatchMedia();

    return (
        <section id="main">
            <Container className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img
                        src={coverSrc}
                        alt="Фестиваль"
                        width={1280}
                        height={500}
                    />
                    {!maxMobile && (
                        <Timer
                            date={FEST_DATE}
                            label="До начала:"
                            className={styles.timer}
                            labelClassName={styles.timerLabel}
                            countClassName={styles.timerCount}
                            labelCountClassName={styles.timerCountLabel}
                        />
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Intro;
