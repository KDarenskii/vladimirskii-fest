import React, { FC } from "react";

import cn from "clsx";
import { Link } from "react-scroll";

import { navLinks } from "./navigation.data";
import styles from "./navigation.module.scss";

interface Props {
    onClick?: () => void;
    listClassName?: string;
    itemClassName?: string;
    linkClassName?: string;
}

const Navigation: FC<Props> = ({
    onClick,
    listClassName,
    itemClassName,
    linkClassName,
}) => {
    return (
        <nav>
            <ul className={cn(styles.navList, listClassName)}>
                {navLinks.map(({ id, title, href, sectionHref }) => (
                    <li className={itemClassName} key={id}>
                        {sectionHref && (
                            <Link
                                className={cn(styles.navLink, linkClassName)}
                                to={sectionHref}
                                smooth
                                offset={-70}
                                onClick={onClick}
                            >
                                {title}
                            </Link>
                        )}
                        {href && (
                            <a
                                className={cn(styles.navLink, linkClassName)}
                                href={href}
                                onClick={onClick}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {title}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
