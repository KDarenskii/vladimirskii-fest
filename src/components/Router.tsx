import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route element={<Layout />} />
        </Routes>
    );
};

export default Router;
