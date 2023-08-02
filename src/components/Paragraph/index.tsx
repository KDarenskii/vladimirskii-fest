import React, { FC, PropsWithChildren } from "react";

import cn from "clsx";

import styles from "./paragraph.module.scss";

interface Props {
    className?: string;
    variant?: "dark" | "light";
}

const Paragraph: FC<PropsWithChildren<Props>> = ({
    children,
    className,
    variant = "dark",
}) => {
    return (
        <p className={cn(styles.paragraph, styles[variant], className)}>
            {children}
        </p>
    );
};

export default Paragraph;
