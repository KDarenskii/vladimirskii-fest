const getTimerDifference = (date: Date) => {
    const dateMs = date.getTime();
    // console.log(`Fest date: ${dateMs}`);
    const currTimeMs = new Date().getTime();
    // console.log(`Now: ${currTimeMs}`);

    const timeDifferenceMs = dateMs - currTimeMs;
    // console.log(`Time difference: ${timeDifferenceMs}`);

    // console.log("");

    const days = Math.floor((timeDifferenceMs / (1000 * 60 * 60 * 24)) % 365);
    const hours = Math.floor((timeDifferenceMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifferenceMs / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifferenceMs / 1000) % 60);

    // console.log(`Days: ${days}`);
    // console.log(`Hours: ${hours}`);
    // console.log(`Minutes: ${minutes}`);
    // console.log(`Seconds: ${seconds}`);

    return {
        days: days < 10 ? `0${days}` : days.toString(),
        hours: hours < 10 ? `0${hours}` : hours.toString(),
        minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
        seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
    };
};

export default getTimerDifference;
