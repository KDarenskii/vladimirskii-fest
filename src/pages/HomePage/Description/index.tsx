import React, { FC } from "react";

import Container from "components/Container";
import LazyImage from "components/LazyImage";
import Paragraph from "components/Paragraph";

import imagePlaceholderSrc1 from "assets/img/description/photo-1-small.jpg";
import imageSrc1 from "assets/img/description/photo-1.jpg";
import imagePlaceholderSrc2 from "assets/img/description/photo-2-small.jpg";
import imageSrc2 from "assets/img/description/photo-2.jpg";

import styles from "./description.module.scss";

const Description: FC = () => {
    return (
        <section className={styles.section}>
            <h6 className="visually-hidden">Описание</h6>
            <Container className={styles.container}>
                <div className={styles.wrapper}>
                    <FirstBlock />
                    <SecondBlock />
                </div>
            </Container>
        </section>
    );
};

export default Description;

function FirstBlock() {
    return (
        <>
            <div className={styles.textWrapper}>
                <Paragraph variant="light" className={styles.text}>
                    Первые 2 дня – 15 и 16 сентября – мероприятия (экскурсии,
                    квесты, спектакли, лекции, мастер-классы, концерты,
                    творческие встречи) проходят в локациях участников на
                    территории округа. 17 сентября - в заключительный день на
                    территории округа состоится Гала-концерт участников
                    фестиваля и приглашенных петербургских музыкантов.
                </Paragraph>
            </div>
            <LazyImage
                src={imageSrc1}
                placeholderSrc={imagePlaceholderSrc1}
                width={630}
                height={470}
                alt=""
            />
        </>
    );
}

function SecondBlock() {
    return (
        <>
            <LazyImage
                src={imageSrc2}
                placeholderSrc={imagePlaceholderSrc2}
                width={630}
                height={470}
                alt=""
            />
            <div className={styles.textWrapper}>
                <Paragraph variant="light" className={styles.text}>
                    Специально для фестивальной программы участники готовят
                    особые мероприятия. Зрители увидят уникальные творческие
                    проекты, постановки, экскурсии и концерты, которые
                    невозможно увидеть в другой день.
                </Paragraph>
            </div>
        </>
    );
}
