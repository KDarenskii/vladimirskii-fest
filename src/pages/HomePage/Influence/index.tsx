import React, { FC } from "react";

import Container from "components/Container";
import SectionTitle from "components/SectionTtitle";
import Paragraph from "components/Paragraph";
import TextHighlight from "components/TextHighlight";

import styles from "./influence.module.scss";

const Influence: FC = () => {
    return (
        <section className={styles.section}>
            <Container>
                <SectionTitle className={styles.title}>
                    Фестиваль - мощный форум для обмена опытом между артистами.
                </SectionTitle>
                <div className={styles.description}>
                    <Paragraph className={styles.text}>
                        <TextHighlight>&quot;Владимирский</TextHighlight>{" "}
                        <TextHighlight variant="danger">Live</TextHighlight>
                        &quot;{" "}
                        <TextHighlight>
                            играет значительную роль
                        </TextHighlight>{" "}
                        в развитии культурной сферы города Владимир и
                        привлечении внимания к творческому потенциалу региона.
                    </Paragraph>
                    <Paragraph className={styles.text}>
                        Фестиваль{" "}
                        <TextHighlight>
                            продолжает развиваться и привлекать все больше
                            талантов и поклонников
                        </TextHighlight>{" "}
                        искусства из года в год.
                    </Paragraph>
                    <Paragraph className={styles.text}>
                        Организаторы фестиваля{" "}
                        <TextHighlight>
                            стремятся укрепить сотрудничество
                        </TextHighlight>{" "}
                        с другими культурными событиями и фестивалями в России и
                        за ее пределами.
                    </Paragraph>
                </div>
            </Container>
        </section>
    );
};

export default Influence;
