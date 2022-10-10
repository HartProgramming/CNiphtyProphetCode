import { Outlet } from 'react-router-dom';
import React from 'react'
import MainBar from '../MainBar/MainBar';
import './AppLayout.css';

const AppLayout = () => {
    return (
        <>
            <section className='outlet'>

                <MainBar></MainBar>
                <Outlet></Outlet>

            </section>
        </>
    )
}

export default AppLayout;