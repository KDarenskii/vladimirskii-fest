interface ITimeDifference {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

const getTimerDifference = (date: Date): ITimeDifference => {
    const dateMs = date.getTime();
    const currTimeMs = new Date().getTime();

    const timeDifferenceMs = dateMs - currTimeMs;

    if (timeDifferenceMs < 0) {
        return {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
        };
    }

    const days = Math.floor((timeDifferenceMs / (1000 * 60 * 60 * 24)) % 365);
    const hours = Math.floor((timeDifferenceMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifferenceMs / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifferenceMs / 1000) % 60);

    return {
        days: days < 10 ? `0${days}` : days.toString(),
        hours: hours < 10 ? `0${hours}` : hours.toString(),
        minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
        seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
    };
};

export default getTimerDifference;
