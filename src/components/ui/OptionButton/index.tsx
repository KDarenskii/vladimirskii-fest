import React from "react";

import styles from "./optionButton.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "dark" | "red";
}

const OptionButton: React.FC<Props> = ({ children, variant = "dark" }) => {
    return (
        <button
            className={[styles.button, styles[variant]].join(" ")}
            type="button"
        >
            {children}
        </button>
    );
};

export default OptionButton;
