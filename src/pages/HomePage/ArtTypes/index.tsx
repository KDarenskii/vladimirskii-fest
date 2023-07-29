import React, { FC } from "react";

import { SectionTitle } from "components/SectionHeading";

import styles from "./artTypes.module.scss";

const ArtTypes: FC = () => {
    return (
        <section className={styles.section} style={{ marginBottom: "50px" }}>
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
        </section>
    );
};

export default ArtTypes;
