import React from 'react';
import {FaCalculator, FaFacebookF} from "react-icons/fa"

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
        <footer className="bg-gray-200 dark:bg-gray-1200 w-full flex-shrink-0 pt-6 pb-2">
          <div className="flex container m-auto">
            <div className={'flex-initial mr-4 ' +  (mode === 'dark' ? 'text-spacey-white' : '')} >
                <a className="" href="">English</a>
            </div>
            <div className={"hidden md:flex flex-1 flex-grow " + (mode === 'dark' ? 'text-spacey-light-grey': '')}>
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
            <div className={"flex-initial flex items-center space-x-4 " + (mode === 'dark' ? 'text-spacey-light-grey': '')}>
                <div className="height-2"><FaFacebookF /></div>
                <div className=" height-2 align-text-top"><span>@2021 space2025.com</span></div>
            </div>
          </div>
        </footer>
    );
};

export default Footer;
