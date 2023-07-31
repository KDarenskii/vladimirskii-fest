import React, { FC } from "react";

import Container from "components/Container";
import TextHighlight from "components/TextHighlight";
import SectionTitle from "components/SectionTtitle";
import Paragraph from "components/Paragraph";

import styles from "./about.module.scss";

const About: FC = () => {
    return (
        <section className={styles.section}>
            <Container>
                <SectionTitle className={styles.title}>
                    О Фестивале
                </SectionTitle>
                <div className={styles.wrapper}>
                    <Description />
                    <Video />
                </div>
            </Container>
        </section>
    );
};

export default About;

function Description() {
    return (
        <div className={styles.description}>
            <Paragraph className={styles.text}>
                <TextHighlight>Владимирский</TextHighlight>{" "}
                <TextHighlight variant="danger">Live</TextHighlight> - это
                городской фестиваль и культурное событие, проводимое ежегодно в
                городе Владимир, Россия.
            </Paragraph>
            <Paragraph className={styles.text}>
                Фестиваль основан на идее популяризации и поддержки местных
                талантов и развития культурного потенциала города Владимир. Он
                собирает местных талантов и приглашает известных артистов из
                разных регионов страны и позволяет зрителям получить доступ к
                разнообразному искусству и культурным проявлениям, которые
                обогащают их опыт и позволяют познакомиться с новыми творческими
                направлениями и идеями.
            </Paragraph>
            <Paragraph className={styles.text}>
                Впервые фестиваль был организован{" "}
                <TextHighlight>в 2010 году</TextHighlight> и с тех пор{" "}
                <TextHighlight>стал одним из самых значимых</TextHighlight>{" "}
                культурных событий в регионе.
            </Paragraph>
        </div>
    );
}

function Video() {
    return (
        <div className={styles.videoContainer}>
            <div>
                <iframe
                    title="Introduction video"
                    src="https://vk.com/video_ext.php?oid=-34825534&id=456239233&hd=1&autoplay=1"
                    width="640"
                    height="360"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
