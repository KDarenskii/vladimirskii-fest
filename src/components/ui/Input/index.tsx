import React from "react";

import styles from "./input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<Props> = ({ className = "", label, ...rest }) => {
    if (label) {
        return (
            <label>
                <p className={styles.label}>{label}</p>
                <input
                    className={[styles.input, className].join(" ")}
                    {...rest}
                />
            </label>
        );
    }
    return <input className={[styles.input, className].join(" ")} {...rest} />;
};

export default Input;
