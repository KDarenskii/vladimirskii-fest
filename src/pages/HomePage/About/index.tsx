import React, { FC } from "react";

import { SectionSubtitle, SectionTitle } from "components/SectionHeading";
import Container from "components/Container";
import TextHighlight from "components/TextHighlight";

import artLeftSrc from "assets/img/art-left.jpg";
import artRightSrc from "assets/img/art-right.jpg";

import styles from "./about.module.scss";

const About: FC = () => {
    return (
        <section style={{ marginBottom: "100px" }}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <SectionTitle className={styles.title}>
                            О Фестивале
                        </SectionTitle>
                        <SectionSubtitle className={styles.subtitle}>
                            Владимирский <TextHighlight>Live</TextHighlight> -
                            это городской фестиваль и культурное событие,
                            проводимое ежегодно в городе Владимир, Россия.
                        </SectionSubtitle>
                        <SectionSubtitle className={styles.subtitle}>
                            Фестиваль основан на идее популяризации и поддержки
                            местных талантов и развития культурного потенциала
                            города Владимир. Он собирает местных талантов и
                            приглашает известных артистов из разных регионов
                            страны и позволяет зрителям получить доступ к
                            разнообразному искусству и культурным проявлениям,
                            которые обогащают их опыт и позволяют познакомиться
                            с новыми творческими направлениями и идеями.
                        </SectionSubtitle>
                        <SectionSubtitle>
                            Впервые фестиваль был организован в 2010 году и с
                            тех пор стал одним из самых значимых культурных
                            событий в регионе.
                        </SectionSubtitle>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img
                            className={styles.imgLeft}
                            src={artLeftSrc}
                            alt="Art"
                        />
                        <img
                            className={styles.imgRight}
                            src={artRightSrc}
                            alt="Art"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
