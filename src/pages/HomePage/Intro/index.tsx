import React, { FC } from "react";

import { SectionHeading } from "components/SectionHeading";
import Container from "components/Container";
import Timer from "components/Timer";

// import introSrc from "assets/img/intro.jpg";

import styles from "./intro.module.scss";

const FEST_DATE = new Date(2023, 8, 25, 15, 0, 0);

const Intro: FC = () => {
    return (
        <section className={styles.intro}>
            <Container>
                <div className={styles.wrapper}>
                    <div>
                        <SectionHeading
                            title="Фестиваль Владимирский Live"
                            subtitle="25 - 30 сентября 2023 года"
                            variant="light"
                        />
                        <Timer className={styles.timer} date={FEST_DATE} />
                    </div>
                    {/* <img src={introSrc} alt="Intro" /> */}
                </div>
            </Container>
        </section>
    );
};

export default Intro;
