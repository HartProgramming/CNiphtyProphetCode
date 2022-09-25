import { Outlet } from 'react-router-dom';
import React from 'react'
import MainBar from '../MainBar/MainBar';

const AppLayout = () => {
    return (
        <>
            <MainBar />
            <Outlet />
        </>
    )
}

export default AppLayout;