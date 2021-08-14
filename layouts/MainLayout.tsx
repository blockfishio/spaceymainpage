import React, {ReactNode, useEffect, useState } from 'react';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/Navbar';

interface Props {
    children: ReactNode;
}

const MainLayout = ({ children }: Props) => {

    return (
        <div className="flex flex-col min-h-screen bg-spacey-heavy text-spacey-white">
            <NavBar />                
            <div className="pb-6 flex-1">
                 {children}
            </div>
            <Footer mode="dark" />
        </div>
   
    );
};

export default MainLayout;
