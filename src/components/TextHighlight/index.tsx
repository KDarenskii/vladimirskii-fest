import React, { FC, PropsWithChildren } from "react";

import cn from "clsx";

import styles from "./textHighlight.module.scss";

interface Props {
    variant?: "danger" | "dark" | "info";
}

const TextHighlight: FC<PropsWithChildren<Props>> = ({
    children,
    variant = "dark",
}) => {
    return <span className={cn(styles.text, styles[variant])}>{children}</span>;
};

export default TextHighlight;
