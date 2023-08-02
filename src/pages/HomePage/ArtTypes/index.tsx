import React, { FC } from "react";

import Container from "components/Container";
import SectionTitle from "components/SectionTtitle";

import styles from "./artTypes.module.scss";

const artTypesList = [
    "Театр",
    "Музыка",
    "Танцы",
    "Концерты",
    "Выставки",
    "Литература",
    "Изобразительное искусство",
    "Мастер-классы",
];

const ArtTypes: FC = () => {
    return (
        <section className={styles.section}>
            <Container>
                <SectionTitle className={styles.title} variant="light">
                    Фестиваль предлагает широкий спектр художественных форм и
                    развлечений:
                </SectionTitle>
                <ul className={styles.artList}>
                    {artTypesList.map((art) => (
                        <li key={art}>{art}</li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default ArtTypes;
