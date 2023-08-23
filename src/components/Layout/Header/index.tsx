import React, { FC } from "react";

import { Link } from "react-scroll";

import Container from "components/Container";
import Navigation from "components/Navigation";
import Social from "components/Social";

import useMatchMedia from "hooks/useMatchMedia";

import logoSrc from "assets/img/logo.jpg";

import MobileMenu from "./MobileMenu";
import styles from "./header.module.scss";

const Header: FC = () => {
    const { maxMobile } = useMatchMedia();

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <Link
                        className={styles.logoLink}
                        to="main"
                        smooth
                        offset={-70}
                    >
                        <img src={logoSrc} alt="Логотип" />
                    </Link>
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
