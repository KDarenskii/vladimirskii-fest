import React, { FC } from "react";

import { Outlet } from "react-router-dom";

import styles from "./layout.module.scss";

const Layout: FC = () => {
    return (
        <div>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
