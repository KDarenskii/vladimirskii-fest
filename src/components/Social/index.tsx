import React, { FC } from "react";

import cn from "clsx";

import { socialLinks } from "./social.data";
import styles from "./social.module.scss";

interface Props {
    className?: string;
}

const Social: FC<Props> = ({ className }) => {
    return (
        <ul className={cn(styles.socialList, className)}>
            {socialLinks.map(({ icon, id, link }) => (
                <li key={id}>
                    <a href={link} target="_blank" rel="noreferrer">
                        {icon}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Social;
