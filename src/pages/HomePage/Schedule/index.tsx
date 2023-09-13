import React, { FC, Fragment } from "react";

import Container from "components/Container";
import Paragraph from "components/Paragraph";
import SectionTitle from "components/SectionTitle";

import {
    ISchedule,
    concertParticipants,
    scheduleData,
    tents,
} from "./schedule.data";
import styles from "./schedule.module.scss";

const Schedule: FC = () => {
    return (
        <section className={styles.section} id="schedule">
            <Container>
                <SectionTitle className={styles.title}>
                    Программа фестиваля
                </SectionTitle>
                {scheduleData.map((schedule) => (
                    <Events key={schedule.key} schedule={schedule} />
                ))}
                <Tents />
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

function Tents() {
    return (
        <ul className={styles.tents}>
            {tents.map(({ name, events: tentEvents, key }) => (
                <li className={styles.tent} key={key}>
                    <h6>{name}</h6>
                    {tentEvents.map(
                        ({ description, time, key: eventKey, subEvents }) => (
                            <div className={styles.event} key={eventKey}>
                                <span>{time} — </span>
                                {description && (
                                    <Paragraph>{description}</Paragraph>
                                )}
                                {subEvents?.map((subEvent) => (
                                    <Fragment key={subEvent}>
                                        <Paragraph className={styles.subEvent}>
                                            {subEvent}
                                        </Paragraph>
                                        <br />
                                        <br />
                                    </Fragment>
                                ))}
                            </div>
                        ),
                    )}
                </li>
            ))}
        </ul>
    );
}

function ConcertSchedule() {
    return (
        <div className={styles.schedule}>
            <div className={styles.event}>
                <span>16:00</span>{" "}
                <Paragraph>— Гала-концерт в джазовом сквере</Paragraph>
            </div>
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
