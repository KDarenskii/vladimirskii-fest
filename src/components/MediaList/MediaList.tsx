import React, { FC } from "react";

import cn from "clsx";

import MediaItem from "./MediaItem";
import { IMedia } from "./MediaItem/media.interface";
import styles from "./mediaList.module.scss";

interface Props {
    mediasList: IMedia[];
    className?: string;
}

const MediaList: FC<Props> = ({ mediasList, className }) => {
    return (
        <ul className={cn(styles.list, className)}>
            {mediasList.map((media) => (
                <MediaItem media={media} key={media.title} />
            ))}
        </ul>
    );
};

export default MediaList;
