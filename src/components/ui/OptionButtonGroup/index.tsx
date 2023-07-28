import React from "react";

import styles from "./optionButtonGroup.module.scss";

interface Props {
    children: React.ReactNode;
}

const OptionButtonGroup: React.FC<Props> = ({ children }) => {
    return <div className={styles.group}>{children}</div>;
};

export default OptionButtonGroup;
