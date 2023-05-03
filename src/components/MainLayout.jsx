/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;