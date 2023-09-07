import React, { FC } from "react";

import Container from "components/Container";
import Paragraph from "components/Paragraph";
import SectionTitle from "components/SectionTitle";

import { ISchedule, concertParticipants, scheduleData } from "./schedule.data";
import styles from "./schedule.module.scss";

const Schedule: FC = () => {
    return (
        <section className={styles.section} id="schedule">
            <Container>
                <SectionTitle className={styles.title}>
                    Программа фестиваля
                </SectionTitle>
                <h4 className={styles.subtitle}>
                    Наиболее яркие и значимые события фестиваля 2023 года:
                </h4>
                {scheduleData.map((schedule) => (
                    <Events key={schedule.key} schedule={schedule} />
                ))}
                <ConcertSchedule />
                <Paragraph>
                    <a
                        className={styles.link}
                        href="https://vk.com/vladimokspb"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Полная программа доступна на официальных страницах
                        фестиваля
                    </a>
                </Paragraph>
            </Container>
        </section>
    );
};

export default Schedule;

function Events({ schedule }: { schedule: ISchedule }) {
    const { date, events } = schedule;
    return (
        <div className={styles.schedule}>
            <h5 className={styles.date}>{date}:</h5>
            <ul>
                {events.map(({ description, time, key }) => (
                    <li className={styles.event} key={key}>
                        <span>{time}</span>{" "}
                        <Paragraph>— {description}</Paragraph>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ConcertSchedule() {
    return (
        <div className={styles.schedule}>
            <h5 className={styles.date}>17 сентября, воскресенье</h5>
            <h6 className={styles.jazzTitle}>
                Гала-концерт фестиваля в Джазовом сквере:
            </h6>
            <ul className={styles.jazzList}>
                {concertParticipants.map(({ key, name }) => (
                    <li key={key} className={styles.event}>
                        <Paragraph>— {name}</Paragraph>
                    </li>
                ))}
            </ul>
        </div>
    );
}
