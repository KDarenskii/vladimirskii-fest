import React, { FC } from "react";

import Container from "components/Container";
import Paragraph from "components/Paragraph";
import SectionTitle from "components/SectionTitle";

import styles from "./influence.module.scss";

const Influence: FC = () => {
    return (
        <section className={styles.section}>
            <Container>
                <SectionTitle className={styles.title}>
                    Фестиваль не имеет аналогов – это первый опыт объединения
                    театров, музеев, библиотек, которые находятся на территории
                    муниципального округа.
                </SectionTitle>
                <div className={styles.description}>
                    <Paragraph className={styles.text}>
                        Фестиваль дает возможность прочувствовать креативное
                        пространство, вдохновленное архитектурой и жителями этих
                        мест, проникнуться особым духом петербургского
                        свободного творчества и осознать себя причастным к
                        уникальной культуре округа и города через местное
                        культурное наследие.
                    </Paragraph>
                </div>
            </Container>
        </section>
    );
};

export default Influence;
