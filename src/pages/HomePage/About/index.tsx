import React, { FC } from "react";

import Container from "components/Container";
import Paragraph from "components/Paragraph";
import SectionTitle from "components/SectionTitle";
import TextHighlight from "components/TextHighlight";

import styles from "./about.module.scss";

const About: FC = () => {
    return (
        <section className={styles.section} id="about">
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
                <TextHighlight variant="danger">Live</TextHighlight> - ежегодный
                масштабный фестиваль для жителей Владимирского округа и всего
                города, в котором участвуют все культурные организаций,
                расположенные на территории Владимирского округа Центрального
                района Санкт-Петербурга. Впервые фестиваль прошел в 2022 году.
            </Paragraph>
            <Paragraph className={styles.text}>
                Идея создания фестиваля родилась в муниципальном образовании
                Владимирский округ и реализуется его силами. На территории
                округа находится более 30 культурных организаций, с улицами
                округа связана жизнь многих писателей, композиторов, актеров –
                Достоевского, Римского-Корсакова, Довлатова, Рубинштейна и
                многих других.
            </Paragraph>
            <Paragraph className={styles.text}>
                <TextHighlight>Организатор фестиваля</TextHighlight> -{" "}
                <a
                    href="https://владимирскийокруг.рф/"
                    target="_blank"
                    rel="noreferrer"
                >
                    муниципальное образование Владимирский округ
                </a>
                .
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
