import React, { FC, PropsWithChildren } from "react";

import styles from "./textHighlight.module.scss";

const TextHighlight: FC<PropsWithChildren> = ({ children }) => {
    return <span className={styles.text}>{children}</span>;
};

export default TextHighlight;
