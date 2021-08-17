import React, {ReactNode, useEffect, useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/Navbar';

interface Props {
    children: ReactNode;
}

const MainLayout = ({ children }: Props) => {

    return (
        <div className="flex flex-col h-screen bg-spacey-heavy text-spacey-white">
            <Header title='Spacey' />
            <NavBar mode="dark" />                
            <div className="pb-6 flex-1">
                 {children}
            </div>
            <Footer mode="dark" />
        </div>
   
    );
};

export default MainLayout;
