import React, { FC } from "react";

import SectionTitle from "components/SectionTtitle";
import Container from "components/Container";

import styles from "./artTypes.module.scss";

const ArtTypes: FC = () => {
    return (
        <section className={styles.section}>
            <Container>
                <SectionTitle className={styles.title} variant="light">
                    Фестиваль предлагает широкий спектр художественных форм и
                    развлечений:
                </SectionTitle>
                <ul className={styles.artList}>
                    <li>Театр</li>
                    <li>Музыка</li>
                    <li>Танцы</li>
                    <li>Концерты</li>
                    <li>Выставки</li>
                    <li>Литература</li>
                    <li>Изобразительное искусство</li>
                    <li>Мастер-классы</li>
                </ul>
            </Container>
        </section>
    );
};

export default ArtTypes;
