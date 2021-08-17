import React, { useState, useRef } from 'react';
import logo from '../../public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'


interface Props {
    mode: string
}

const NavBar = ({mode}:Props) => {
    
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

    const backgroundMode = mode === 'dark' ? "bg-spacey-heavy" : ""

    return (
        <section>
            <nav className={"flex items-center justify-between px-5 py-2 fixed top-0 left-0  w-full  z-50 text-spacey-white " + backgroundMode}>
               <div className="container mx-auto">
               <div className="flex-1 flex items-center font-robo uppercase text-base font-semibold ">
                   <div className="flex-initial mr-4">
                    <Link href="/">
                      <a>
                        <Image src={logo} quality="100" width="200" height="50"/>
                      </a>
                    </Link>
                   </div>
                    <div className="hidden md:flex flex-1 flex-grow">
                        <ul className="flex flex-row space-x-4">
                        {navLinks.map(({ title, link }, id) => (
                            <li key={id} >
                                <Link href={link}>
                                <a className="">
                                 <span>{title}</span>
                                 </a>
                                </Link>
                           
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="flex-initial space-x-4">
                      <Link href="#">
                       <a>Join Our Discord</a>
                        </Link>
                        <Link href="#">
                        <a className="border-b-2 border-spacey-orange-border pb-1">Get Started</a>
                       </Link>
                    </div>
                </div>
              </div>
            </nav>

        </section>
    );
};

export default NavBar;
