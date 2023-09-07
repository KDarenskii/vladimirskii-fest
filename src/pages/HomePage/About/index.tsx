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
                города.
            </Paragraph>
            <Paragraph className={styles.text}>
                Идея фестиваля - показать разнообразие культуры и искусства
                Владимирского округа, при этом сделать мероприятия интересными и
                значимыми для всех петербуржцев. С улиц Владимирского округа
                начиналась история города, здесь жили и работали известные
                писатели, композиторы, актеры (Радищев, Достоевский,
                Римский-Корсаков, Довлатов, Рубинштейн, музыканты ленинградского
                рок-клуба, творческие объединения художников - “Митьки”,
                “Свободная культура” и мн. др.), на этой территории и в наши дни
                сосредоточено более 30 культурных организаций.
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
