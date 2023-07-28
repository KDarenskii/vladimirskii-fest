import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

import styles from "./layout.module.scss";
import PageBorder from "./PageBorder";

const Layout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <PageBorder side="left" />
            <main className={styles.main}>
                <Outlet />
            </main>
            <PageBorder side="right" />
            <PageBorder side="bottom" />
        </div>
    );
};

export default Layout;
