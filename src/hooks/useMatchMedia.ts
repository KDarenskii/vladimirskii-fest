import { useLayoutEffect, useState } from "react";

interface MatchMedia {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
    isMobileMiddle: boolean;
    isMobileSmall: boolean;
    maxMobile: boolean;
}

const initialMatchMedia: MatchMedia = {
    isDesktop: false,
    isTablet: false,
    isMobile: false,
    isMobileMiddle: false,
    isMobileSmall: false,
    maxMobile: false,
};

const queries = [
    "(max-width: 479.98px)",
    "(min-width: 479.99px) and (max-width: 676.99px)",
    "(min-width: 677px) and (max-width: 767.96px)",
    "(min-width: 767.97px) and (max-width: 991.98px)",
    "(min-width: 991.99px)",
];

const screens = [
    "isMobileSmall",
    "isMobileMiddle",
    "isMobile",
    "isTablet",
    "isDesktop",
];

const useMatchMedia = (): MatchMedia => {
    const queryList = queries.map((query) => matchMedia(query));
    const getValues = () => queryList.map((query) => query.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);
        queryList.forEach((query) => query.addEventListener("change", handler));

        return () =>
            queryList.forEach((query) =>
                query.removeEventListener("change", handler),
            );
    });

    const result = screens.reduce<MatchMedia>(
        (acc, screen, index) => ({
            ...acc,
            [screen]: values[index],
        }),
        initialMatchMedia,
    );

    if (
        result.isMobile ||
        result.isMobileMiddle ||
        result.isMobileSmall ||
        result.isTablet
    ) {
        result.maxMobile = true;
    }

    return result;
};

export default useMatchMedia;
