import React from 'react'
import Footer from './Footer';
import Header from './Header';

import "../styles/global.scss";
import "../styles/queries.scss";

interface ILayoutProps {
    children: React.ReactNode | React.ReactNode[]
}

const Layout = ({children}: ILayoutProps) => {
    return (
        <div className="layout">
            <Header />

            <main className="main-content">
                { children }
            </main>

            <Footer />
        </div>
    )
}

export default Layout;