import React from "react";

import styles from "./pageBorder.module.scss";

interface Props {
    side: "left" | "right" | "bottom";
}

const PageBorder: React.FC<Props> = ({ side }) => {
    return <div className={[styles.border, styles[side]].join(" ")} />;
};

export default PageBorder;
