import React, { FC, useState } from "react";

import Container from "components/Container";
import { MediaList } from "components/MediaList";
import SectionTitle from "components/SectionTitle";
import Button from "components/ui/Button";

import useMatchMedia from "hooks/useMatchMedia";

import { mediaData } from "./media.data";
import styles from "./media.module.scss";

const DEFAULT_LIST_LENGTH = 8;

const Media: FC = () => {
    const [isExtended, setIsExtended] = useState(false);

    const mediaList = isExtended
        ? mediaData
        : mediaData.slice(0, DEFAULT_LIST_LENGTH);

    return (
        <section className={styles.section}>
            <Container>
                <SectionTitle className={styles.title}>
                    СМИ о фестивале
                </SectionTitle>
                <MediaList
                    mediasList={mediaList}
                    className={styles.mediaList}
                />
                <MoreButton
                    isExtended={isExtended}
                    onClick={() => setIsExtended(true)}
                    contentLength={mediaList.length}
                />
            </Container>
        </section>
    );
};

export default Media;

function MoreButton({
    isExtended,
    onClick,
    contentLength,
}: {
    isExtended: boolean;
    onClick: () => void;
    contentLength: number;
}) {
    const { isMobile, isMobileMiddle, isMobileSmall } = useMatchMedia();

    const isSmallButton = isMobile || isMobileMiddle || isMobileSmall;

    if (isExtended || contentLength < DEFAULT_LIST_LENGTH) return null;

    return (
        <Button
            className={styles.moreBtn}
            onClick={onClick}
            size={isSmallButton ? "small" : "default"}
        >
            Показать больше
        </Button>
    );
}
