import React, { FC } from "react";
import cn from "clsx";

import TimerCount from "./TimerCount";
import useTimer from "./useTimer";

import styles from "./timer.module.scss";

interface Props {
    className?: string;
    date: Date;
}

const Timer: FC<Props> = ({ date, className }) => {
    const time = useTimer(date);
    return (
        <div className={cn(styles.timer, className)}>
            <TimerCount label="Дней" count={time.days} />
            <TimerCount label="Часов" count={time.hours} />
            <TimerCount label="Минут" count={time.minutes} />
            <TimerCount label="Секунд" count={time.seconds} />
        </div>
    );
};

export default Timer;
