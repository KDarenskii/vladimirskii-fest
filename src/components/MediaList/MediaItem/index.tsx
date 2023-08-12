import React, { FC } from "react";

import cn from "clsx";

import arrowSrc from "assets/img/diagonal-arrow-right.svg";

import { IMedia } from "./media.interface";
import styles from "./mediaItem.module.scss";

interface Props {
    className?: string;
    media: IMedia;
}

const MediaItem: FC<Props> = ({ media, className }) => {
    const { date, link, title } = media;

    return (
        <li className={cn(styles.mediaItem, className)}>
            <a href={link} target="_blank" rel="noreferrer">
                <h6>{title}</h6>
                <div className={styles.wrapper}>
                    {date && <p>{date}</p>}
                    <div className={styles.iconContainer}>
                        <img src={arrowSrc} alt="Стрелка" />
                    </div>
                </div>
            </a>
        </li>
    );
};

export default MediaItem;
