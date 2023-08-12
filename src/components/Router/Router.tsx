import React, { FC } from "react";

import { Route, Routes } from "react-router-dom";

import HomePage from "pages/HomePage";
import MissingPage from "pages/MissingPage";

import Layout from "components/Layout";

import { HOME_ROUTE, MISSING_ROUTE } from "./routesPathnames";

const Router: FC = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={HOME_ROUTE} element={<HomePage />} />
            </Route>
            <Route path={MISSING_ROUTE} element={<MissingPage />} />
        </Routes>
    );
};

export default Router;
