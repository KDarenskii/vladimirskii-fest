import { useEffect, useState } from "react";

import getTimerDifference from "helpers/getTimeDifference";

const useTimer = (date: Date) => {
    const [time, setTime] = useState(() => getTimerDifference(date));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimerDifference(date));
        }, 1000);

        return () => clearInterval(interval);
    }, [date]);

    return time;
};

export default useTimer;
