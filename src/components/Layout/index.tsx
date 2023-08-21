import React, { FC } from "react";

import { Outlet } from "react-router-dom";

import Header from "./Header";
import styles from "./layout.module.scss";

const Layout: FC = () => {
    return (
        <div className={styles.page}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
