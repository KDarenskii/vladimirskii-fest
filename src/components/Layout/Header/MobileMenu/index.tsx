import React, { FC, useState } from "react";

import cn from "clsx";

import Navigation from "components/Navigation";
import Social from "components/Social";
import MenuButton from "components/ui/MenuButton";

import styles from "./mobileMenu.module.scss";

const MobileMenu: FC = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggleMenu = () => {
        const body = document.querySelector("body");
        if (body?.classList.contains("hidden")) {
            body.classList.remove("hidden");
        } else {
            body?.classList.add("hidden");
        }

        setIsActive((prev) => !prev);
    };

    return (
        <>
            <MenuButton isActive={isActive} onClick={handleToggleMenu} />
            <div className={cn(styles.menu, isActive && styles.active)}>
                <Navigation
                    onClick={handleToggleMenu}
                    listClassName={styles.navList}
                    itemClassName={styles.navItem}
                    linkClassName={styles.navLink}
                />
                <Social className={styles.mobileSocial} />
            </div>
        </>
    );
};

export default MobileMenu;
