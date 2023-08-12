import React, { FC } from "react";

import Container from "components/Container";
import LazyImage from "components/LazyImage";
import Paragraph from "components/Paragraph";

import useMatchMedia from "hooks/useMatchMedia";

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
    const { isMobileSmall } = useMatchMedia();

    const text = isMobileSmall ? (
        <Paragraph variant="light" className={styles.text}>
            Фестиваль назвали добрососедским – гости и участники фестиваля
            объединены культурным Владимирским округом.
        </Paragraph>
    ) : (
        <Paragraph variant="light" className={styles.text}>
            Фестиваль назвали добрососедским – гости и участники фестиваля
            объединены культурным Владимирским округом. Гости фестиваля
            принимают участие в экскурсиях, квестах, спектаклях, лекциях,
            мастер-классах, кинопоказах в течение 3 дней бесплатно: в первые 2
            дня фестиваля мероприятия проходят по разным локациям участников –
            театрам, галереям, библиотекам, музеям, в заключительный день
            фестиваля проходит большой Гала-концерт в Джазовом сквере на
            Загородном проспекте.
        </Paragraph>
    );

    return (
        <>
            <div className={styles.textWrapper}>{text}</div>
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
    const { isMobileSmall } = useMatchMedia();

    const text = isMobileSmall ? (
        <Paragraph variant="light" className={styles.text}>
            Фестиваль основан на идее популяризации и поддержки местных талантов
            и развития культурного потенциала Владимирского округа.
        </Paragraph>
    ) : (
        <Paragraph variant="light" className={styles.text}>
            Фестиваль основан на идее популяризации и поддержки местных талантов
            и развития культурного потенциала Владимирского округа. Он собирает
            все творческие организации округа и позволяет зрителям получить
            доступ ко всем видам искусства – театру, музеям, мастер-классам,
            музыке - бесплатно. Фестиваль – это возможность для жителей округа
            напиться культурой, не выходя за пределы округа.
        </Paragraph>
    );
    return (
        <>
            <LazyImage
                src={imageSrc2}
                placeholderSrc={imagePlaceholderSrc2}
                width={630}
                height={470}
                alt=""
            />
            <div className={styles.textWrapper}>{text}</div>
        </>
    );
}
