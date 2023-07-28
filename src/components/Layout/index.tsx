import React, { PropsWithChildren } from "react";
import Container from "../Container";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <main>
            <Container>{children}</Container>
        </main>
    );
};

export default Layout;
