import React, { FC, PropsWithChildren } from "react";
import cn from "clsx";

import styles from "./title.module.scss";

interface Props {
    className?: string;
    variant?: "light" | "dark";
}

const SectionTitle: FC<PropsWithChildren<Props>> = ({
    children,
    variant = "dark",
    className,
}) => {
    return (
        <h2 className={cn(styles.title, styles[variant], className)}>
            {children}
        </h2>
    );
};

export default SectionTitle;
