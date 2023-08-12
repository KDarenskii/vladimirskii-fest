import React, { PropsWithChildren } from "react";

import cn from "clsx";

import styles from "./container.module.scss";

interface Props {
    className?: string;
}

const Container: React.FC<PropsWithChildren<Props>> = ({
    children,
    className,
}) => {
    return <div className={cn(styles.container, className)}>{children}</div>;
};

export default Container;
