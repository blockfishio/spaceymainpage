import React from 'react';

interface Props {
    title: string
}

const Header = ({ title } : Props) => {

    const navLinks = [
        {
            title: 'Market', 
            link: '/market'
        },
        {
            title: 'Info', 
            link: '/info'
        },
        {
            title: 'Dao', 
            link: '/dao'
        },
        {
            title: 'Get Spay', 
            link: '/getspay'
        },
        {
            title: 'Community',
            link: '/community'
        },
        {
            title: 'Free Ticket',
            link: '/freeticket'
        }
    ]
    
    return (
        <h2 className="text-3xl text-center pb-5 md:pb-10  md:text-4xl xl:text-5xl tracking-tight font-bold leading-tight dark:text-white">
            {title}
        </h2>
    );
};

export default Header;
