import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import cn from "clsx";

import styles from "./button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "small" | "default";
}

const Button: FC<PropsWithChildren<Props>> = ({
    children,
    size = "default",
    className,
    ...rest
}) => {
    return (
        <button
            className={cn(styles.button, styles[size], className)}
            type="button"
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
