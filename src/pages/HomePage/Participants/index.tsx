import React, { FC } from "react";

import Container from "components/Container";
import Paragraph from "components/Paragraph";
import TextHighlight from "components/TextHighlight";

import styles from "./participants.module.scss";

const Participants: FC = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.wrapper}>
                    <Paragraph className={styles.participants}>
                        <TextHighlight variant="dark">
                            Участники фестиваля в 2022 году:
                        </TextHighlight>{" "}
                        Филармония джазовой музыки, Театр им. Ленсовета, театры
                        «Суббота», «Кукфо», «Karlsson Haus», «Сова»,
                        «Ерундопель», библиотеки Маяковского, «На Стремянной»,
                        «Лиговская» и Открытые мастерские, Музей Арктики и
                        Антарктики, Музей Достоевского, Литературный музей XX
                        век, Музей-квартира актеров Самойловых, Арт-центр
                        «Пушкинская-10», Благотворительный фонд «Подари мне
                        крылья», Институт кино и телевидения, Школа искусств
                        имени П.А. Серебрякова, группа «Ангел НеБес»,
                        «Ленинградский диксиленд» под управлением заслуженного
                        артиста РФ О. Кувайцева, группа «Стая ПОЛЕТЕЛИ» и
                        заслуженный артист РФ Артур Ваха, ВИА «Пролетарское
                        танго».
                    </Paragraph>
                </div>
                <div className={styles.wrapper}>
                    <Paragraph className={styles.participants}>
                        <TextHighlight variant="dark">
                            Участники фестиваля в 2023 году:
                        </TextHighlight>{" "}
                        Филармония джазовой музыки, Театр им. Ленсовета, театры
                        «Суббота», «Кукфо», «Karlsson Haus», «Сова»,
                        «Ерундопель», библиотеки Маяковского, «На Стремянной»,
                        «Лиговская» и Открытые мастерские, Музей Арктики и
                        Антарктики, Музей Достоевского, Литературный музей XX
                        век, Музей-квартира актеров Самойловых, Музей-квартира
                        Льва Гумилева, музей-квартира Римского-Корсакова,
                        Арт-центр «Пушкинская-10», Благотворительный фонд
                        «Подари мне крылья», Институт кино и телевидения, Школа
                        искусств имени П.А. Серебрякова, галерея Заренкова,
                        Центр Курехина, «Ленинградский диксиленд», группа
                        Торба-на-Круче, группа Markscheider Kunst
                    </Paragraph>
                </div>
            </Container>
        </section>
    );
};

export default Participants;
