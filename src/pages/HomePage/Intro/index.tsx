import React, { FC } from "react";

import Container from "components/Container";
import Paragraph from "components/Paragraph";
import SectionTitle from "components/SectionTtitle";
import TextHighlight from "components/TextHighlight";
import Timer from "components/Timer";

import styles from "./intro.module.scss";

const FEST_DATE = new Date(2023, 8, 15, 10, 0, 0);

const Intro: FC = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.wrapper}>
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
                        17 - 19 сентября 2023 года
                    </Paragraph>
                    <div className={styles.timerWrapper}>
                        <p>До начала:</p>
                        <Timer
                            className={styles.timer}
                            countClassName={styles.timeCounter}
                            labelClassName={styles.timeLabel}
                            date={FEST_DATE}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Intro;
