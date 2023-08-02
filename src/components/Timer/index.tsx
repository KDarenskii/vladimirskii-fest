import React, { FC } from "react";

import cn from "clsx";

import TimerCount from "./TimerCount";
import styles from "./timer.module.scss";
import useTimer from "./useTimer";

interface Props {
    className?: string;
    countClassName?: string;
    labelClassName?: string;
    date: Date;
}

const Timer: FC<Props> = ({
    date,
    className,
    countClassName,
    labelClassName,
}) => {
    const time = useTimer(date);
    return (
        <div className={cn(styles.timer, className)}>
            <TimerCount
                countClassName={countClassName}
                labelClassName={labelClassName}
                label="Дней"
                count={time.days}
            />
            <TimerCount
                countClassName={countClassName}
                labelClassName={labelClassName}
                label="Часов"
                count={time.hours}
            />
            <TimerCount
                countClassName={countClassName}
                labelClassName={labelClassName}
                label="Минут"
                count={time.minutes}
            />
            <TimerCount
                countClassName={countClassName}
                labelClassName={labelClassName}
                label="Секунд"
                count={time.seconds}
            />
        </div>
    );
};

export default Timer;
