import React, { FC } from "react";

import styles from "./timerCount.module.scss";

interface Props {
    label: string;
    count: number | string;
}

const TimerCount: FC<Props> = ({ label, count }) => {
    return (
        <div className={styles.timerCount}>
            <div className={styles.count}>{count}</div>
            <div className={styles.label}>{label}</div>
        </div>
    );
};

export default TimerCount;
