import React, {ReactNode, useEffect, useState } from 'react';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/Navbar';

interface Props {
    children: ReactNode;
}

const MainLayout = ({ children }: Props) => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (
                localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-spacey-heavy">
            <NavBar />                
            <div className="pb-6 flex-1">
                 {children}
            </div>
            <Footer mode="dark" />
        </div>
   
    );
};

export default MainLayout;
