import React, { useState, useRef } from 'react';
import Link from 'next/link'
import {FaCaretDown, FaCaretUp} from "react-icons/fa"
import { useOnClickOutSide } from '../../hooks/useOnClickOutside';
import LoginModal from '../../components/common/Login';
import { Transition } from '@headlessui/react'

interface Props {
    mode: string
}

const NavBar = ({mode}:Props) => {
    
    const navLinks = [
        {
            title: 'Marketplace', 
            link: 'https://market.spacey2025.com', 
            link_type: 'external'
        },
        {
            title: 'Info', 
            link: '/info',
            link_type: ''
        },
        // {   
        //     title: 'News', 
        //     link: '/news',
        //     link_type: ''
        // },
        {
            title: 'Get Spay', 
            link: '/getspay',
            link_type: ''
        },
        {
            title: 'Community',
            link: '/community',
            link_type: ''
        },
        {
            title: 'Free Ticket',
            link: '/freeticket',
            link_type: ''
        },
        {
            title: 'Get Started',
            link: 'https://docs.spacey2025.com',
            link_type: 'external'
        },
        
    ]

    const [isOpen, setIsOpen] = useState(false)
    const [isLoginOpen, setLoginOpen] = useState(false)
    const backgroundMode = mode === 'dark' ? "bg-spacey-heavy" : ""
    const menuNode = useRef<HTMLDivElement>(null);
    useOnClickOutSide(menuNode, () => setIsOpen(false));

    return (
        <section>
            <div ref={menuNode}>
            <Transition
                show={isOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
             >
               <div className="flex  bg-spacey-navbar  flex-col  justify-center md:hidden fixed px-16px top-0 left-0 w-full z-50  ">
                         <div className="mt-3px">
                            <div className="flex flex-row items-center">
                                <div className="">
                                <Link  href="/">
                                 <a className="spacey_logo_bg">
                                     <i className="spacey_logo">

                                     </i>
                                 </a>
                                </Link>
                                </div>
                                <div className="text-spacey-mobile-grey flex items-center">
                                <FaCaretUp className="cursor-pointer text-2xl" onClick={() => setIsOpen(false) } > open</FaCaretUp>
                                </div>
                            </div>
                          <ul className="flex flex-col  font-segoe text-nav uppercase text-base font-normal text-nav">
                          {navLinks.map(({ title, link, link_type }, id) => (
                            <li key={id} className="py-3 hover:bg-spacey-mobile-background active:bg-spacey-mobile-background">
                                
                                <Link href={link} >
                                <a className="" target={link_type}>
                                 <span className="py-19px px-65px text-13px ">{title}</span>
                                 </a>
                                </Link>
                            </li>
                          ))}
                       </ul>
                       </div>
              </div>
              </Transition>
        </div>
            <nav className={"flex items-center justify-between px-16px  md:px-5 fixed top-0 left-0 w-full  z-40 text-spacey-white " + backgroundMode}>
               <div className="container mx-auto mt-3px">
               <div className="flex-1 flex items-center font-robo uppercase md:text-sm lg:text-base font-normal md:max-w-1064 container mx-auto">
                   <div className="flex-initial lg:mr-8">
                   <Link  href="/">
                   <a className="spacey_logo_bg block pt-3px">
                        <i className="spacey_logo">

                        </i>
                     </a>
                   </Link>
                   </div>
                   <div className="md:hidden">
                       {!isOpen ? (
                        <div onClick={() => setIsOpen(true) }>
                            <FaCaretDown className="cursor-pointer text-2xl"
                        />
                        </div>
                       ) : (
                        <div  onClick={() => setIsOpen(false) }>
                        <FaCaretUp className="cursor-pointer text-2xl" />
                        </div>
                      
                       )}
                     </div>
            
                    <div className="hidden md:flex flex-1 flex-grow">
                        <ul className="flex flex-row space-x-7 font-segoe text-nav text-13px mt-5px">
                        {navLinks.map(({ title, link, link_type }, id) => (
                            <li key={id} >
                                <Link href={link}>
                                <a className="hover:text-spacey-mobile-background-hover" target={link_type}>
                                 <span>{title}</span>
                                 </a>
                                </Link>
                           
                            </li>
                        ))}
                        </ul>
                    </div>
                    {/* <div className="space-x-4 flex-1 md:flex-none">
                       <ul className="flex flex-row float-right space-x-4  font-segoe text-nav " >
                           <li className="hidden lg:block">
                           <Link href="https://discord.com/invite/cUeNS8UzGW" >
                             <a target="_blank">Join Our Discord</a>
                             </Link>
                           </li>
                           <li>
                              <a className="border-b-2 border-spacey-orange-border pb-1 cursor-pointer font-segoe text-nav "  onClick={(event) => {setLoginOpen(true); console.log(isLoginOpen)}}>
                                Login
                                </a>
                        
                           </li>
                       </ul>
                     
                       
                    </div> */}
                </div>
              </div>
            </nav>
            <LoginModal open={isLoginOpen} handleOpen={setLoginOpen} />
        </section>
    );
};

export default NavBar;
