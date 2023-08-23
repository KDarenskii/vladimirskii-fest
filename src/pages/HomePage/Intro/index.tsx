import React, { FC } from "react";

import Container from "components/Container";
import Paragraph from "components/Paragraph";
import SectionTitle from "components/SectionTitle";
import TextHighlight from "components/TextHighlight";
import Timer from "components/Timer";

import coverSrc from "assets/img/edited-newcover.png";

import styles from "./intro.module.scss";

const FEST_DATE = new Date(2023, 8, 15, 10, 0, 0);

const Intro: FC = () => {
    return (
        <section className={styles.section} id="main">
            <Container className={styles.container}>
                <CoverImage />
                {/* <div className={styles.wrapper}>
                    <SectionTitle className={styles.title} variant="light">
                        Фестиваль{" "}
                        <span className={styles.noWrapText}>
                            Владимирский{" "}
                            <TextHighlight variant="danger">Live</TextHighlight>
                        </span>{" "}
                    </SectionTitle>
                    <Paragraph className={styles.text} variant="light">
                        Территория культуры
                    </Paragraph>
                    <Paragraph className={styles.text} variant="light">
                        15 - 17 сентября 2023 года
                    </Paragraph>
                    <TimerBlock />
                </div> */}
            </Container>
        </section>
    );
};

export default Intro;

function CoverImage() {
    return (
        <div className={styles.imageWrapper}>
            <img src={coverSrc} alt="Фестиваль" />
        </div>
    );
}

function TimerBlock() {
    return (
        <div className={styles.timerWrapper}>
            <p>До начала:</p>
            <Timer
                className={styles.timer}
                countClassName={styles.timeCounter}
                labelClassName={styles.timeLabel}
                date={FEST_DATE}
            />
        </div>
    );
}
