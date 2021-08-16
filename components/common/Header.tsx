import React from 'react';
import Head from 'next/head'

interface Props {
    title: string
}

const Header = ({ title } : Props) => {

    return (
       <Head>
           <title>{title}</title>
           <link rel="shortcut icon" href="/favicon.ico" />
           <meta name="viewport" content="initial-scale=1.0, width=device-width" />  
       </Head>
    );
};

export default Header;
