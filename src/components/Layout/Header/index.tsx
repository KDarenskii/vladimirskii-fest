import React from "react";
import UserSrc from "../../../assets/img/icons/menu/user.svg";
import SettingsSrc from "../../../assets/img/icons/menu/settings.svg";
import InfoSrc from "../../../assets/img/icons/menu/info.svg";
import VolumeSrc from "../../../assets/img/icons/menu/volume.svg";
import IconSrc from "../../../assets/img/icons/menu/header-icon.svg";
import LanguageSrc from "../../../assets/img/icons/menu/language.svg";
import RussiaSrc from "../../../assets/img/icons/menu/russia.jpg";
import LoginSrc from "../../../assets/img/icons/menu/login-header.svg";
import logoSrc from "../../../assets/img/logo-bg.svg";

import styles from "./header.module.scss";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Menu />
        </header>
    );
};

export default Header;

function Logo() {
    return (
        <div className={styles.logo}>
            <img src={logoSrc} alt="Лого" />
            <span>Лого</span>
        </div>
    );
}

function Menu() {
    return (
        <div className={styles.menu}>
            <button className={styles.menuBtn} type="button">
                <img src={UserSrc} alt="Профиль" />
            </button>
            <button className={styles.menuBtn} type="button">
                <img src={SettingsSrc} alt="Профиль" />
            </button>
            <button className={styles.menuBtn} type="button">
                <img src={VolumeSrc} alt="Профиль" />
            </button>
            <button className={styles.menuBtn} type="button">
                <img src={InfoSrc} alt="Профиль" />
            </button>
            <button className={styles.menuBtn} type="button">
                <img src={IconSrc} alt="Профиль" />
            </button>
            <button
                className={[styles.menuBtn, styles.country].join(" ")}
                type="button"
            >
                <img src={LanguageSrc} alt="Страна" />
                <img
                    className={styles.countryImg}
                    src={RussiaSrc}
                    alt="Россия"
                />
            </button>
            <button className={styles.loginBtn} type="button">
                <div>Вход</div>
            </button>
        </div>
    );
}
