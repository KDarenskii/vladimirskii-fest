import React, { FC } from "react";

import SectionTitle from "./SectionTtitle";
import SectionSubtitle from "./SectionSubtitle";

import styles from "./sectionHeading.module.scss";

interface Props {
    title: string;
    subtitle: string;
    variant?: "dark" | "light";
}

const SectionHeading: FC<Props> = ({ subtitle, title, variant = "dark" }) => {
    return (
        <header>
            <SectionTitle className={styles.title} variant={variant}>
                {title}
            </SectionTitle>
            <SectionSubtitle variant={variant}>{subtitle}</SectionSubtitle>
        </header>
    );
};

export default SectionHeading;
