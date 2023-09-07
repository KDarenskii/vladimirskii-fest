import React, { FC } from "react";

import cn from "clsx";

import TimerCount from "./TimerCount";
import { ITimerCounter } from "./TimerCount/timerCount.interface";
import styles from "./timer.module.scss";
import useTimer from "./useTimer";

interface Props {
    date: Date;
    label: string;
    className?: string;
    labelClassName?: string;
    countClassName?: string;
    labelCountClassName?: string;
}

const Timer: FC<Props> = ({
    date,
    label,
    className,
    labelClassName,
    countClassName,
    labelCountClassName,
}) => {
    const { days, hours, minutes, seconds } = useTimer(date);

    const counters: ITimerCounter[] = [
        { label: "Дней", number: days },
        { label: "Часов", number: hours },
        { label: "Минут", number: minutes },
        { label: "Секунд", number: seconds },
    ];

    return (
        <div className={className}>
            {label && (
                <p className={cn(styles.timerLabel, labelClassName)}>{label}</p>
            )}
            <div className={styles.timer}>
                {counters.map(({ label: countLabel, number }) => (
                    <TimerCount
                        countClassName={countClassName}
                        labelClassName={labelCountClassName}
                        label={countLabel}
                        count={number}
                        key={countLabel}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timer;
