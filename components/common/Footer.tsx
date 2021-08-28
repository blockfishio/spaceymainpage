import React from 'react';
import { FaFacebookF } from "react-icons/fa"

import Link from 'next/link'
interface Props {
    mode: string
}


const Footer = ({mode}:Props) => {
    const navLinks = [
        {
            title: 'Home', 
            link: '/'
        },
        {
            title: 'Privacy Policy', 
            link: '/privacy'
        },
        {
            title: 'Term of Use', 
            link: '/'
        },
        {
            title: 'Content Policy', 
            link: '/'
        },
        {
            title: 'Code of Ethics',
            link: '/'
        },
      
    ]
    
    
    return (
        <footer className="bg-gray-200 dark:bg-gray-1200 w-full flex-shrink-0 pt-6 pb-2 text-spacey-black">
          <div className="flex flex-col md:flex-row container m-auto align-items gap-y-5 md:gap-y-0">
            <div className={'flex-initial md:mr-4 text-center ' +  (mode === 'dark' ? 'text-spacey-white' : '')} >
                <a className="font-medium" href="">English</a>
            </div>
            <div className={"hidden md:flex flex-1 flex-grow " + (mode === 'dark' ? 'text-spacey-light-grey': '')}>
                <ul className="flex flex-row space-x-4">
                {navLinks.map(({ title, link }, id) => (
                     <li  key={id}>
                        <Link href={link}>
                        <a className="">
                            <span>{title}</span>
                        </a>
                        </Link>
                       </li>
                 ))}
                </ul>
            </div>
            <div className={"w-9/12 mx-auto md:hidden" + (mode === 'dark' ? 'text-spacey-light-grey': '')}>
                <ul className="flex flex-row gap-x-3 flex-wrap justify-center">
                {navLinks.map(({ title, link }, id) => (
                     <li  key={id}>
                        <Link href={link}>
                        <a className="">
                            <span>{title}</span>
                        </a>
                        </Link>
                       </li>
                 ))}
                </ul>
            </div>
            <div className={"flex-initial flex items-center space-x-4 mx-auto" + (mode === 'dark' ? 'text-spacey-light-grey': '')}>
                <div className="height-2"><FaFacebookF /></div>
                <div className=" height-2 align-text-top"><span>@2021 space2025.com</span></div>
            </div>
          </div>
        </footer>
    );
};

export default Footer;
