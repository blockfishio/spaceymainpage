import React, { useState, useRef } from 'react';

const NavBar = () => {
    
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
        <section>
            <nav className="flex items-center justify-between px-5 py-2 fixed top-0 left-0  w-full  z-50  bg-spacey-heavy text-spacey-white">
               <div className="container mx-auto">
               <div className="flex-1 flex items-center font-robo uppercase font-medium text-base font-semibold">
                   <div className="flex-initial mr-4">
                      <a href="">LOGO</a>
                   </div>
                    <div className="hidden md:flex flex-1 flex-grow">
                        <ul className="flex flex-row space-x-4">
                        {navLinks.map(({ title, link }, id) => (
                            <li>
                                <a href={link} key={id} className="">
                                <span>{title}</span>
                            </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="flex-initial space-x-4">
                      <a>Join Our Discord</a>
                      <a>Login</a>
                    </div>
                </div>
              </div>
            </nav>

        </section>
    );
};

export default NavBar;
