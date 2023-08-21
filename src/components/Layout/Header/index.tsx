import React, { FC } from "react";

import { Link } from "react-scroll";

import Container from "components/Container";

import useMatchMedia from "hooks/useMatchMedia";

import logoSrc from "assets/img/logo.jpg";

import Navigation from "../../Navigation";
import Social from "../../Social";
import MobileMenu from "./MobileMenu";
import styles from "./header.module.scss";

const Header: FC = () => {
    const { maxMobile } = useMatchMedia();

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <Logo />
                    {maxMobile ? (
                        <MobileMenu />
                    ) : (
                        <>
                            <Navigation />
                            <Social />
                        </>
                    )}
                </div>
            </Container>
        </header>
    );
};

export default Header;

function Logo() {
    return (
        <Link className={styles.logoLink} to="main" smooth offset={-70}>
            <img className={styles.logo} src={logoSrc} alt="Логотип" />
        </Link>
    );
}
