import React, { ButtonHTMLAttributes, FC } from "react";

import cn from "clsx";

import closeIconSrc from "assets/img/close-icon.svg";
import menuIconSrc from "assets/img/menu-icon.svg";

import styles from "./menuButton.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive: boolean;
    iconClassName?: string;
}

const MenuButton: FC<Props> = ({
    isActive,
    className,
    iconClassName,
    ...rest
}) => {
    return (
        <button
            className={cn(styles.button, className)}
            type="button"
            {...rest}
        >
            {isActive ? (
                <img className={iconClassName} src={closeIconSrc} alt="Меню" />
            ) : (
                <img className={iconClassName} src={menuIconSrc} alt="Меню" />
            )}
        </button>
    );
};

export default MenuButton;
