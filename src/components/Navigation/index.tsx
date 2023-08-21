import React, { FC } from "react";

import cn from "clsx";
import { Link } from "react-scroll";

import { navLinks } from "./navigation.data";
import styles from "./navigation.module.scss";

interface Props {
    listClassName?: string;
    itemClassName?: string;
    linkClassName?: string;
}

const Navigation: FC<Props> = ({
    listClassName,
    itemClassName,
    linkClassName,
}) => {
    return (
        <nav>
            <ul className={cn(styles.navList, listClassName)}>
                {navLinks.map(({ id, title, sectionHref }) => (
                    <li className={itemClassName} key={id}>
                        <Link
                            className={cn(styles.navLink, linkClassName)}
                            to={sectionHref}
                            smooth
                            offset={-70}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
