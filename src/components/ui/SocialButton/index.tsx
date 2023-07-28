import React from "react";
import { Link } from "react-router-dom";

import styles from "./socialButton.module.scss";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    iconSrc: string;
    iconSide: "left" | "right";
}

const SocialButton: React.FC<Props> = ({
    children,
    iconSrc,
    iconSide,
    className = "",
    ...rest
}) => {
    return (
        <Link className={[styles.button, className].join(" ")} to="/" {...rest}>
            <img
                className={[styles.icon, styles[iconSide]].join(" ")}
                src={iconSrc}
                alt="Вход"
            />
            {children}
        </Link>
    );
};

export default SocialButton;
