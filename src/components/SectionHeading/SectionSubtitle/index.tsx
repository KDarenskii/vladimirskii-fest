import React, { FC, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./sectionSubtitle.module.scss";

interface Props {
    className?: string;
    variant?: "dark" | "light";
}

const SectionSubtitle: FC<PropsWithChildren<Props>> = ({
    children,
    variant = "dark",
    className,
}) => {
    return (
        <p className={cn(styles.subtitle, styles[variant], className)}>
            {children}
        </p>
    );
};

export default SectionSubtitle;
