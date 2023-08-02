import React, { FC } from "react";

import cn from "clsx";

import styles from "./timerCount.module.scss";

interface Props {
    label: string;
    count: number | string;
    countClassName?: string;
    labelClassName?: string;
}

const TimerCount: FC<Props> = ({
    label,
    count,
    countClassName,
    labelClassName,
}) => {
    return (
        <div className={styles.timerCount}>
            <div className={cn(styles.count, countClassName)}>{count}</div>
            <div className={cn(styles.label, labelClassName)}>{label}</div>
        </div>
    );
};

export default TimerCount;
