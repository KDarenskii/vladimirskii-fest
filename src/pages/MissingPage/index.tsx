import React, { FC } from "react";

import { Link } from "react-router-dom";

import Paragraph from "components/Paragraph";
import { HOME_ROUTE } from "components/Router";

import notesSrc from "assets/img/notes.png";

import styles from "./missingPage.module.scss";

const MissingPage: FC = () => {
    return (
        <main className={styles.page}>
            <header className={styles.header}>
                <h1>404</h1>
                <p>страница не найдена</p>
            </header>
            <Paragraph className={styles.text}>
                Страница, на которую вы пытаетесь попасть, не существует.
            </Paragraph>
            <Paragraph className={styles.text}>
                Перейдите на{" "}
                <Link to={HOME_ROUTE}>
                    <span>Главную страницу</span>
                </Link>
                .
            </Paragraph>
            <img className={styles.image} src={notesSrc} alt="" />
        </main>
    );
};

export default MissingPage;
