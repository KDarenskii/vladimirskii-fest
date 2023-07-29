import Container from "components/Container";
import { SectionSubtitle, SectionTitle } from "components/SectionHeading";
import React, { FC } from "react";

import styles from "./influence.module.scss";

const Influence: FC = () => {
    return (
        <section style={{ marginTop: "70px" }}>
            <Container>
                <SectionTitle className={styles.title}>
                    Фестиваль - мощный форум для обмена опытом между артистами.
                </SectionTitle>
                <div className={styles.info}>
                    <SectionSubtitle className={styles.subtitle}>
                        &quot;Владимирский Live&quot; играет значительную роль в
                        развитии культурной сферы города Владимир и привлечении
                        внимания к творческому потенциалу региона.
                    </SectionSubtitle>
                    <SectionSubtitle className={styles.subtitle}>
                        Фестиваль продолжает развиваться и привлекать все больше
                        талантов и поклонников искусства из года в год.
                    </SectionSubtitle>
                    <SectionSubtitle>
                        Организаторы фестиваля стремятся укрепить сотрудничество
                        с другими культурными событиями и фестивалями в России и
                        за ее пределами.
                    </SectionSubtitle>
                </div>
            </Container>
        </section>
    );
};

export default Influence;
