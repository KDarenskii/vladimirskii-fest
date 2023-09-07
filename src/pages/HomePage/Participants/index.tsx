import React, { FC } from "react";

import Container from "components/Container";
import Paragraph from "components/Paragraph";
import TextHighlight from "components/TextHighlight";

import styles from "./participants.module.scss";

const Participants: FC = () => {
    return (
        <section className={styles.section} id="participants">
            <Container>
                <div className={styles.wrapper}>
                    <Paragraph className={styles.participants}>
                        <TextHighlight variant="dark">
                            Основные участники фестиваля:
                        </TextHighlight>{" "}
                        Филармония джазовой музыки, Театр им. Ленсовета, театры
                        «Суббота», «Кукфо», «Karlsson Haus», «Ерундопель»,
                        библиотеки Маяковского, «На Стремянной», «Лиговская» и
                        Открытые мастерские, Музей Арктики и Антарктики, Музей
                        Достоевского, Литературный музей XX век, Музей-квартира
                        актеров Самойловых, Музей-квартира Льва Гумилева,
                        музей-квартира Римского-Корсакова, Арт-центр
                        «Пушкинская-10», Благотворительный фонд «Подари мне
                        крылья», Институт кино и телевидения, Школа искусств
                        имени П.А. Серебрякова, галерея Заренкова, Центр
                        Курехина, «Ленинградский диксиленд» и другие.
                    </Paragraph>
                </div>
            </Container>
        </section>
    );
};

export default Participants;
